import type { SpoorPayload } from "typings/spoor";

import { Panel } from "./_panel";
import { SPOOR_URL } from "../lib/constants";

type ElKeys = keyof typeof SpoorPagePanel.elMap;

export class SpoorPagePanel extends Panel {
  #spoorEventMap: Map<string, SpoorPayload> = new Map();
  #isInitialRequest = true;

  static elMap = {
    events: "events",
    eventData: "event-data",
  } as const;

  constructor() {
    super("panel-spoor-page");

    this.els = this.initEls<ElKeys>(SpoorPagePanel.elMap);
    this.els.events.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.target as HTMLElement;
      const spoorId = target.dataset.spoorId;
      if (!spoorId) return;

      const data = this.#spoorEventMap.get(spoorId);
      this.els.eventData.innerHTML = JSON.stringify(data, null, 2);
    });
  }

  // @ts-expect-error chrome-types is wrong
  onRequestFinished({ url, postData }: chrome.devtools.network.Request) {
    try {
      if (url.startsWith(SPOOR_URL)) {
        if (this.#isInitialRequest) {
          this.#isInitialRequest = false;
          this.els.events.innerHTML = "";
        }

        // const currentTime = Math.floor(performance.now()) / 100;
        const data = JSON.parse(postData.text) as SpoorPayload;
        this.#spoorEventMap.set(data.context.id, data);
        this.els.events.appendChild(this.createEventElement(data));
      }
    } catch (error) {
      console.error("PagePanel.onRequestFinished", error);
    }
  }

  createEventElement(data: SpoorPayload): any {
    const { id } = data.context;

    const link = document.createElement("a");
    link.href = `#${id}`;
    link.dataset.spoorId = id;
    link.textContent = `${data.category}: ${data.action}`;

    const el = document.createElement("li");
    el.id = id;
    el.appendChild(link);
    return el;
  }
}
