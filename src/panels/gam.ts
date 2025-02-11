import type { AdParams, CustParams, PrevScp } from "typings/gpt";

import { parseNestedParams } from "../utils/url";
import { Panel } from "./_panel";

type ElKeys = keyof typeof GAMPanel.elMap;

export const custParamsKeys = [
  "auuid",
  "ca",
  "cc",
  "ct",
  "device_spoor_id",
  "gender",
  "guid",
  "loggedIn",
  "mvt",
  "pt",
  "res",
] as const;

export class GAMPanel extends Panel {
  static elMap = {
    pageLevel: "page-level-data",
    slotLevel: "slot-level-data",
    requestsRaw: "requests-raw",
  } as const;

  els: Record<ElKeys, HTMLElement>;

  #processedParams = {} as Record<string, AdParams>;

  constructor() {
    super("panel-gam");

    this.els = this.initEls<ElKeys>(GAMPanel.elMap);
  }

  processSraParams(rawParams: URLSearchParams) {
    const iu_parts = rawParams.get("iu_parts")!;
    const us_privacy = rawParams.get("us_privacy")!;
    const cust_params = parseNestedParams<CustParams>(
      rawParams.get("cust_params")!,
      // @ts-expect-error custParamsKeys is readonly
      custParamsKeys
    );
    const prevScps = rawParams
      .get("prev_scp")!
      .split("|")
      .map((val) => parseNestedParams<PrevScp>(val));
    const prevIuSzs = rawParams
      .get("prev_iu_szs")!
      .split(",")
      .map((v) => v.split("|"));

    const params = {} as Record<string, AdParams>;
    for (let index = 0; index < prevScps.length; index++) {
      const prev_scp = prevScps[index];
      const prev_iu_szs = prevIuSzs[index];

      params[prev_scp.pos] = {
        prev_scp,
        cust_params,
        prev_iu_szs,
        iu_parts,
        us_privacy,
      };
    }

    return params;
  }

  processMraParams(rawParams: URLSearchParams) {
    const params = {} as AdParams;
    for (const [key, val] of rawParams.entries()) {
      switch (key) {
        case "cust_params":
          // @ts-expect-error custParamsKeys is readonly
          params[key] = parseNestedParams<CustParams>(val, custParamsKeys);
          break;

        case "prev_scp":
          params[key] = parseNestedParams<PrevScp>(val);
          break;

        case "prev_iu_szs":
          params[key] = val.split("|");
          break;

        default:
          params[key] = val;
          break;
      }
    }

    return params;
  }

  parseParams(params: Record<string, AdParams>) {
    let pageLevelHtml = "";
    let slotLevelHtml = "";

    // Extract shared values from the first record
    const [shared] = Object.values(params);
    const { iu_parts, us_privacy, cust_params } = shared;

    pageLevelHtml += `
      <ul>
        <li>iu_parts: ${iu_parts}</li>
        <li>us_privacy: ${us_privacy}</li>
        <li>cust_params:
          <ul>
            ${Object.entries(cust_params ?? {})
              .map(([k, v]) => `<li>${k}: ${v}</li>`)
              .join("")}
          </ul>
        </li>
      </ul>
    `;

    slotLevelHtml += `<table>`;
    for (const [pos, props] of Object.entries(params)) {
      slotLevelHtml += `
        <tr>
          <td><strong>${pos}</strong></td>
          <td>prev_iu_szs: ${props.prev_iu_szs?.join(", ")}</td>
        </tr>
      `;
    }
    slotLevelHtml += `</table>`;

    return {
      pageLevelHtml,
      slotLevelHtml,
    };
  }

  // @ts-expect-error chrome-types is wrong
  onRequestFinished({ url: rawUrl }: chrome.devtools.network.Request) {
    try {
      if (rawUrl.includes("/gampad/ads")) {
        const url = new URL(rawUrl);
        const isSra = url.searchParams.get("prev_scp")?.includes("|");

        if (isSra) {
          this.#processedParams = this.processSraParams(url.searchParams);
        } else {
          const params = this.processMraParams(url.searchParams);
          const { pos } = params.prev_scp ?? { pos: "unknown" };
          this.#processedParams[pos] = params;
        }

        const { pageLevelHtml, slotLevelHtml } = this.parseParams(this.#processedParams);

        this.els.pageLevel.innerHTML = pageLevelHtml;
        this.els.slotLevel.innerHTML = slotLevelHtml;
        this.els.requestsRaw.innerText = JSON.stringify(this.#processedParams, null, 2);
      }
    } catch (error) {
      console.error("GAMPanel.onRequestFinished", error);
    }
  }
}
