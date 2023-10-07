chrome.runtime.onInstalled.addListener(() => {
	chome.action.setBadgeText({
		text: "OFF",
	});
});

chrome.action.onClicked.addListener(async (tab) => {
	console.log("clicked!!!");
	const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
	const nextState = prevState === "ON" ? "OFF" : "ON";

	console.log(prevState, nextState);

	await chrome.action.setBadgeText({
		tabId: tab.id,
		text: nextState,
	});

	await chrome.action.setBadgeBackgroundColor({
		color: nextState === "ON" ? "#00FF00" : "red",
	});
});
