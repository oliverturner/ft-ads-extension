browser.devtools.panels.create(
  "FT Ads",
  "icon/48.png",
  "devtools-panel.html",
  () => {
    console.log("☎️ DevTools panel: created");
  }
);

browser.devtools?.network.onRequestFinished.addListener(async ({ request }) => {
  try {
    if (
      request.url.startsWith(URLS.SPOOR_SLOT_REQUESTED) ||
      request.url.startsWith(URLS.SPOOR_SLOT_RENDERED)
    ) {
      const spoorPayload = JSON.parse(request.postData?.text || "{}");
      const { pos } = spoorPayload.context.creative;

      const spoorData = await spoorStorage.getValue();
      spoorData[pos] = spoorPayload;
      await spoorStorage.setValue(spoorData);
    }

    if (request.url.startsWith(URLS.GAM)) {
      console.log("request.url", request.url);

      const paramsEntries = new URL(request.url).searchParams.entries();
      const { cust_params, ...params } = Object.fromEntries(paramsEntries);

      const custParamsEntries = new URLSearchParams(
        cust_params ?? ""
      ).entries();
      const custParams = Object.fromEntries(custParamsEntries);

      await gamStorage.setValue({ params, custParams });

      console.log(
        "☎️ DevTools panel: onRequestFinished: GAM",
        await gamStorage.getValue()
      );
    }
  } catch (error) {
    console.error("☎️ DevTools panel: onRequestFinished", error);
  }
});

browser.devtools?.network.onNavigated.addListener(async () => {
  await Promise.all([
    pageStorage.setValue({}),
    slotsStorage.setValue([]),
    spoorStorage.setValue({}),
    gamStorage.setValue({
      params: {},
      custParams: {},
    }),
  ]);
});
