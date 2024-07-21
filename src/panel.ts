import "@shoelace-style/shoelace";
import "@shoelace-style/shoelace/dist/themes/light.css";

import { GAMPanel } from "./panels/gam";
import { SpoorAdsPanel } from "./panels/spoor-ads";
import { SpoorPagePanel } from "./panels/spoor-page";

const gamPanel = new GAMPanel();
const spoorAdsPanel = new SpoorAdsPanel();
const spoorPagePanel = new SpoorPagePanel();

function refreshPanels() {
  gamPanel.refresh();
  spoorAdsPanel.refresh();
  spoorPagePanel.refresh();
}

const port = chrome.runtime?.connect(undefined, {
  name: `${chrome.devtools.inspectedWindow.tabId}`,
});

port?.onMessage.addListener(function onPanelMessageReceived(msg) {
  // Prints in devtools-on-devtools
  console.log("onDevMessageReceived:", msg);
});

// @ts-expect-error chrome-types is wrong
chrome.devtools?.network.onRequestFinished.addListener(function onPanelRequestFinished({ request }) {
  gamPanel.onRequestFinished(request);
  spoorAdsPanel.onRequestFinished(request);
  spoorPagePanel.onRequestFinished(request);
});

chrome.devtools?.network.onNavigated.addListener(refreshPanels);

// Load fixture data in development mode
if (import.meta.env.MODE === "development") {
  const requests = await import("./__fixtures__/requests/pg/home");
  gamPanel.onRequestFinished({ url: requests.ads } as any);

  for (const request of requests.spoor) {
    spoorAdsPanel.onRequestFinished({
      url: request.url,
      postData: { text: JSON.stringify(request.postData) },
    } as any);
    spoorPagePanel.onRequestFinished({
      url: request.url,
      postData: { text: JSON.stringify(request.postData) },
    } as any);
  }
}
