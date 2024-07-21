export type SpoorPayload = {
  category: string;
  action: string;
  user: User;
  device: Device;
  system: {
    version: string;
    source: string;
    transport: "sendBeacon";
    is_live: boolean;
  };
  context: {
    id: string;
    root_id: string;
    app: string;
    product: string;
    edition: string;
    appVersion: string;
    isProduction: boolean;
    isUserLoggedIn: boolean;
    pageKitVersion: string;
  };
};

export interface SpoorPayloadAds extends SpoorPayload {
  action: "slot-requested" | "slot-rendered";
  category: "ads";
  context: {
    id: string;
    root_id: string;
    app: string;
    product: string;
    edition: "uk" | "international";
    appVersion: string;
    isProduction: boolean;
    isUserLoggedIn: boolean;
    pageKitVersion: string;
    advert: ContextAdvert;
    creative: ContextCreative;
  };
}

export interface User {
  ft_session_s: string;
  layout: "XL" | string;
  orientation: "portrait" | "landscape";
}

export interface Device {
  spoor_session: string;
  spoor_session_is_new: boolean;
  spoor_id: string;
}

export interface ContextAdvert {
  correlator: string;
  adtech: "pg" | undefined;
  consents: {
    behavioral: boolean;
    demographic: boolean;
    programmatic: boolean;
    permutiveadsOnsite: boolean;
    personalisedmarketingOnsite: boolean;
    recommendedcontentOnsite: boolean;
    usprivacy: string;
  };
}

export interface ContextCreative {
  name: string;
  pos: string;

  // Only available in rendered events
  creativeId?: number;
  size?: string;
}
