chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "setMilje") {
        document.body.style.background = `url(${message.milje})`;
    }
});