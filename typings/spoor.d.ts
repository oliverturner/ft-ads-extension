export type Payload = {
  action: "slot-requested" | "slot-rendered";
  category: "ads";
  system: {
    version: string;
    source: string;
    transport: "sendBeacon";
    is_live: boolean;
  };
  user: User;
  device: Device;
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
};

export type User = {
  ft_session_s: string;
  layout: "XL" | string;
  orientation: "portrait" | "landscape";
};

export type Device = {
  spoor_session: string;
  spoor_session_is_new: boolean;
  spoor_id: string;
};

export type ContextAdvert = {
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
};

export type ContextCreative = {
  name: string;
  pos: string;

  // Only available in rendered events
  creativeId?: number;
  size?: string;
};
