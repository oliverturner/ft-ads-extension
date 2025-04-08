import type { FTAdsSlotData } from "./data";

export interface OTrackingEventDetail {
  category: "ads";
  advert: {
    correlator: string;
    adtech: "pg" | "o-ads";
    consents: Record<string, boolean>;
    ias: boolean;
  };
  adunit: {
    site: "ft.com";
    zone: string[];
  };
  deviceDimensions: {
    screen: {
      width: number;
      height: number;
    };
    window: {
      width: number;
      height: number;
    };
  };
  action: "slot-requested" | "slot-rendered";
  creative: {
    name: string;
    pos: string;
  };
}

export interface FTAdsSlotRenderedEventDetail {
  slotsData: FTAdsSlotData[];
  pageTargeting: Record<string, string>;
}

export type OTrackingEvent = CustomEvent<OTrackingEventDetail>;
export type FTAdsSlotRenderedEvent = CustomEvent<FTAdsSlotRenderedEventDetail>;
