import type { SpoorPayloadAds } from "typings/spoor";

import { listify } from "../utils/html";
import * as constants from "../lib/constants";
import { Panel } from "./_panel";

function renderSharedData({ context, user }: SpoorPayloadAds) {
  const { advert, creative, ...contextRest } = context;

  return `
    <ul>
      <li>Adtech: ${advert.adtech ?? "OAds"}</li>
      <li>Consents: <ul>${listify(advert.consents)}</ul></li>
      <li>User: <ul>${listify(user)}</ul></li>
      <li>Context: <ul>${listify(contextRest)}</ul></li>
    </ul>
  `;
}

function renderParsedEvents(events: Record<string, SpoorPayloadAds> = {}) {
  const eventList = [];
  for (const [k, v] of Object.entries(events)) {
    eventList.push(`
      <tr>
        <td>${k}</td>
        <td>${listify(v.context.creative)}</td>
      </tr>
    `);
  }

  return `
    <table>
      ${eventList.join("")}
    </table>
  `;
}

type ElKeys = keyof typeof SpoorAdsPanel.elMap;

export class SpoorAdsPanel extends Panel {
  #spoorEvents: Record<string, SpoorPayloadAds> = {};
  #isInitialRequest = true;

  static elMap = {
    sharedData: "shared-data",
    eventsParsed: "events-parsed",
    eventsRaw: "events-raw",
  } as const;

  els: Record<ElKeys, HTMLElement>;

  constructor() {
    super("panel-spoor-ads");
    this.els = this.initEls<ElKeys>(SpoorAdsPanel.elMap);
  }

  // @ts-expect-error chrome-types is wrong
  onRequestFinished({ url, postData }: chrome.devtools.network.Request) {
    try {
      if (
        url.startsWith(constants.SPOOR_URL_AD_REQUESTED) ||
        url.startsWith(constants.SPOOR_URL_AD_RENDERED)
      ) {
        const data = JSON.parse(postData.text);
        const { pos } = data.context.creative;

        if (this.#isInitialRequest) {
          this.#isInitialRequest = false;
          this.els.sharedData.innerHTML = renderSharedData(data);
        }

        this.#spoorEvents[pos] = data;
        this.els.eventsParsed.innerHTML = renderParsedEvents(this.#spoorEvents);
        this.els.eventsRaw.innerText = JSON.stringify(this.#spoorEvents, null, 2);
      }
    } catch (error) {
      console.error("SpoorPanel.onRequestFinished", error);
    }
  }

  refresh() {
    this.#spoorEvents = {};
    this.#isInitialRequest = true;
    this.clearEls();
  }
}
