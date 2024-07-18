export class PageEventsPanel {
  #els: { events: Element };

  constructor() {
    this.#els = {
      events: document.querySelector("#events-raw")!,
    };
  }

  refresh() {
    this.#els.events.innerHTML = "";
  }
}
