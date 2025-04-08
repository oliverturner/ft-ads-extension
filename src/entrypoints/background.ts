export default defineBackground(() => {
  try {
    console.log("Hello background!", {
      id: browser.runtime.id,
    });

    browser.runtime.onMessage.addListener((message, sender) => {
      console.log("Background: Received message", { message, sender });
    });

    browser.storage.session.setAccessLevel?.({
      accessLevel: "TRUSTED_AND_UNTRUSTED_CONTEXTS",
    });
  } catch (error) {
    console.error("Error in background script:", error);
  }
});
