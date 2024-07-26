let portDev, portTab;

const onDevMessage = (msg) => {
  portTab.postMessage(msg);
  return true;
};
const onTabMessage = (msg) => {
  portDev.postMessage(msg);
  return true;
};

function onDevConnect(port) {
  console.log("onDevConnect", port);

  try {
    const { tabId } = chrome.devtools?.inspectedWindow ?? {};

    console.log("tabId", tabId);

    if (+port.name !== tabId) return;

    portDev = port;
    portDev.onMessage.addListener(onDevMessage);

    portTab = chrome.tabs.connect(tabId, { name: "dev" });
    portTab.onMessage.addListener(onTabMessage);

    return true;
  } catch (error) {
    console.error(error);
  }
}

// chrome.runtime.onConnect.addListener(onDevConnect);

chrome.devtools.panels.create("FT Ads", "icons/icon-16.png", "index.html");
