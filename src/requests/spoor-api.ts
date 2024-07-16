import type { Payload } from "typings/spoor";

import { listify } from "../utils/html";

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

export class SpoorRequestTracker {
  readonly #els: Record<string, HTMLElement>;
  readonly #events: Record<string, Payload> = {};

  constructor() {
    this.#els = {
      sharedData: document.querySelector("#shared-data")!,
      eventsParsed: document.querySelector("#events-parsed")!,
      eventsRaw: document.querySelector("#events-raw")!,
    };
  }

  // @ts-expect-error chrome-types is wrong
  onRequestFinished({ url, postData }: chrome.devtools.network.Request) {
    if (
      url.startsWith(SPOOR_URL_AD_REQUESTED) ||
      url.startsWith(SPOOR_URL_AD_RENDERED)
    ) {
      const data = JSON.parse(postData.text);
      const { pos } = data.context.creative;

      if (this.#els.sharedData?.innerText === "") {
        this.#els.sharedData.innerHTML = renderSharedData(data);
      }

      this.#events[pos] = data;
      this.#els.eventsParsed.innerHTML = renderParsedEvents(this.#events);
      this.#els.eventsRaw.innerText = JSON.stringify(this.#events, null, 2);
    }
  }
}
