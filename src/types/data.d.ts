export interface FTAdsSlotData {
  adUnitPath: string;
  attributeKeys: string[];
  configKey: string | undefined;
  elementId: string;
  displayed: boolean;
  responseInformation: googletag.ResponseInformation | null;
  size: string | null;
  sizes: googletag.SingleSize[];
  targetingMap: Record<string, string[]>;
}

interface DeviceDimension {
  height: number;
  width: number;
}

interface Consents {
  behavioral: boolean;
  demographic: boolean;
  permutiveadsOnsite: boolean;
  personalisedmarketingOnsite: boolean;
  programmatic: boolean;
  recommendedcontentOnsite: boolean;
  usprivacy: string;
}

export interface FTAdsSpoorData {
  action: "slot-requested" | "slot-rendered";
  category: "ads";
  context: {
    active_ammit_flags: Record<string, unknown>;
    adunit: {
      site: string;
      zone: string[];
    };
    advert: {
      adtech: "pg" | "o-ads";
      consents: Consents;
      correlator: number;
      ias: boolean;
    };
    app: string;
    appVersion: string;
    creative: {
      creativeId: number;
      name: string;
      pos: string;
      size: string;
    };
    deviceDimensions: {
      screen: DeviceDimension;
      window: DeviceDimension;
    };
    edition: "uk" | "international";
    id: string;
    isProduction: boolean;
    isUserLoggedIn: boolean;
    pageKitVersion: string;
    product: string;
    root_id: string;
  };
  device: {
    spoor_id: string;
    spoor_session: string;
    spoor_session_is_new: boolean;
    spoor_session_timestamp: number;
  };
  system: {
    is_live: boolean;
    source: string;
    transport: string;
    version: string;
  };
  user: {
    ft_session: string | null;
    ft_session_s: string | null;
    layout: "S";
    orientation: "portrait" | "landscape";
  };
}
