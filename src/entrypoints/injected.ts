import type { FTAdsSlotData } from "@/types/data.d.ts";

import debounce from "debounce-fn";

function getPageTargeting(): Record<string, string> {
  const keys = googletag.pubads().getTargetingKeys();
  return Object.fromEntries(
    keys.map((key) => [key, googletag.pubads().getTargeting(key).join(",")])
  );
}

function getSlotData(slot: googletag.Slot): FTAdsSlotData {
  const elementId = slot.getSlotElementId();
  const targetingMap = Object.fromEntries(
    slot.getTargetingKeys().map((key) => [key, slot.getTargeting(key)])
  );

  const slotEl = document.getElementById(elementId);
  const displayed = slotEl?.style.getPropertyValue("display") !== "none";
  const size = slotEl?.getAttribute("size") ?? null;
  const configKey = slotEl?.dataset.configKey;

  return {
    adUnitPath: slot.getAdUnitPath(),
    attributeKeys: slot.getAttributeKeys(),
    responseInformation: slot.getResponseInformation(),
    sizes: slot.getSizes(),

    displayed,
    configKey,
    elementId,
    size,
    targetingMap,
  };
}

function getSlotsData() {
  return googletag.pubads().getSlots().map(getSlotData);
}

function sendSlotsData() {
  document.dispatchEvent(
    new CustomEvent("ftAds:slotRenderEnded", {
      detail: {
        slotsData: getSlotsData(),
        pageTargeting: getPageTargeting(),
      },
    })
  );
}

const sendSlotsDataDebounced = debounce(sendSlotsData, { wait: 250 });

export default defineUnlistedScript(() => {
  window.googletag = window.googletag ?? { cmd: [] };

  googletag.cmd.push(() => {
    googletag.pubads().addEventListener("slotRenderEnded", () => {
      sendSlotsDataDebounced();
    });
  });
});
