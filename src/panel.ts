import "@shoelace-style/shoelace/dist/components/card/card";
import "@shoelace-style/shoelace/dist/components/copy-button/copy-button";
import "@shoelace-style/shoelace/dist/components/details/details";
import "@shoelace-style/shoelace/dist/components/tab/tab";
import "@shoelace-style/shoelace/dist/components/tab-group/tab-group";
import "@shoelace-style/shoelace/dist/components/tab-panel/tab-panel";
import "@shoelace-style/shoelace/dist/themes/light.css";

import { GAMPanel } from "./panels/gam";
import { SpoorAdsPanel } from "./panels/spoor-ads";
import { SpoorPagePanel } from "./panels/spoor-page";

const gamPanel = new GAMPanel();
const spoorAdsPanel = new SpoorAdsPanel();
const spoorPagePanel = new SpoorPagePanel();

// try {
//   // @ts-expect-error chrome-types is wrong
//   const port = chrome.runtime?.connect({
//     name: `${chrome.devtools.inspectedWindow.tabId}`,
//   });

//   port?.onMessage.addListener(function onPanelMessageReceived(msg) {
//     // Prints in devtools-on-devtools
//     console.log("onDevMessageReceived:", msg);
//   });
// } catch (error) {
//   console.log("Error connecting to background script", error);
// }

// Works from here forwards
// ------------------------------
function refreshPanels() {
  gamPanel.refresh();
  spoorAdsPanel.refresh();
  spoorPagePanel.refresh();
}

// @ts-expect-error chrome-types is wrong
chrome.devtools?.network.onRequestFinished.addListener(({ request }) => {
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
