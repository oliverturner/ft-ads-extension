import type { FTAdsSlotRenderedEvent } from "@/types/events.d.ts";

export default defineContentScript({
  matches: [FT_DOMAINS],
  async main(ctx) {
    try {
      setDevFlags();

      ctx.addEventListener(document, "ftAds:slotRenderEnded", async (event) => {
        const { detail } = event as FTAdsSlotRenderedEvent;

        await Promise.all([
          pageStorage.setValue(detail.pageTargeting),
          slotsStorage.setValue(detail.slotsData),
        ]);
      });

      await injectScript("/injected.js", {
        keepInDom: true,
      });

      return true;
    } catch (error) {
      console.error("Error in content script:", error);
    }
  },
});
