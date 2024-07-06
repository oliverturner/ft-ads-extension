import { custParamsKeys } from "../panel/ads-requests";

type CustParamKey = (typeof custParamsKeys)[number];
type CustParams = Record<CustParamKey, string>;
type PrevScp = { pos: string };

type RawParams = Record<string, any>;
type AdParams = RawParams & {
  cust_params: CustParams;
  iu_parts: string;
  prev_scp: PrevScp;
  prev_iu_szs: string[];
  us_privacy: string;
};


