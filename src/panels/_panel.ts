export class Panel {
  readonly panelEl: Element;

  els: Record<string, HTMLElement> = {};

  constructor(public readonly panelName: string) {
    this.panelEl = document.querySelector<Element>(`sl-tab-panel[name='${panelName}']`)!;

    if (!this.panelEl) {
      throw new Error(`Panel "${this.panelName}" not found`);
    }
  }

  initEls<T extends string>(elMap: Record<string, string>) {
    const els = {} as Record<T, HTMLElement>;
    for (const [elKey, elName] of Object.entries(elMap)) {
      const elSelector = `[data-component="${elName}"]`;
      const elEl = this.panelEl.querySelector<HTMLElement>(elSelector);

      if (!elEl) {
        throw new Error(`el "${this.panelName} > ${elKey}" not found`);
      }

      els[elKey as T] = elEl;
    }

    return els;
  }

  refresh() {
    this.clearEls();
  }

  clearEls() {
    for (const el of Object.values(this.els)) {
      if (el) el.innerHTML = "";
    }
  }
}
