import type { OTrackingEvent, FTAdsSlotRenderedEvent } from "./events.d.ts";

import { EVENTS } from "@/utils/constants.ts";

declare global {
  interface DocumentEventMap {
    "oTracking.event": OTrackingEvent;
    "ftAds:slotRenderEnded": FTAdsSlotRenderedEvent;
  }
}
