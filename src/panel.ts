import { AdsRequestTracker } from "./requests/ad-server";
import { SpoorRequestTracker } from "./requests/spoor-api";

const adsRequestTracker = new AdsRequestTracker(
  document.getElementById("ad-reqs")
);
const spoorRequestTracker = new SpoorRequestTracker(
  document.getElementById("spoor-reqs")
);

// @ts-expect-error chrome-types is wrong
chrome.devtools.network.onRequestFinished.addListener(function ({ request }) {
  adsRequestTracker.onRequestFinished(request);
  spoorRequestTracker.onRequestFinished(request);
});
