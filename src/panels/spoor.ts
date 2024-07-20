import type { Payload } from "typings/spoor";

import { listify } from "../utils/html";
import { Panel } from "./_panel";

const SPOOR_URL = "https://spoor-api.ft.com/ingest";
const SPOOR_URL_AD_REQUESTED = `${SPOOR_URL}?type=ads:slot-requested`;
const SPOOR_URL_AD_RENDERED = `${SPOOR_URL}?type=ads:slot-rendered`;

function renderSharedData({ context, user }: Payload) {
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

function renderParsedEvents(events: Record<string, Payload> = {}) {
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

type ElKeys = keyof typeof SpoorPanel.elMap;

export class SpoorPanel extends Panel {
  #events: Record<string, Payload> = {};
  #isInitialRequest = true;

  static elMap = {
    sharedData: "shared-data",
    eventsParsed: "events-parsed",
    eventsRaw: "events-raw",
  } as const;

  els: Record<ElKeys, HTMLElement>;

  constructor() {
    super("panel-spoor");
    this.els = this.initEls<ElKeys>(SpoorPanel.elMap);
  }

  // @ts-expect-error chrome-types is wrong
  onRequestFinished({ url, postData }: chrome.devtools.network.Request) {
    try {
      if (url.startsWith(SPOOR_URL_AD_REQUESTED) || url.startsWith(SPOOR_URL_AD_RENDERED)) {
        const data = JSON.parse(postData.text);
        const { pos } = data.context.creative;

        if (this.#isInitialRequest) {
          this.#isInitialRequest = false;
          this.els.sharedData.innerHTML = renderSharedData(data);
        }

        this.#events[pos] = data;
        this.els.eventsParsed.innerHTML = renderParsedEvents(this.#events);
        this.els.eventsRaw.innerText = JSON.stringify(this.#events, null, 2);
      }
    } catch (error) {
      console.error("SpoorPanel.onRequestFinished", error);
    }
  }

  refresh() {
    this.#events = {};
    this.#isInitialRequest = true;
    this.clearEls();
  }
}
