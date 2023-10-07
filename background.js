chrome.runtime.onInstalled.addListener(async () => {
	chrome.storage.local.set({ isEnabled: false }, () => {
		console.log("Initial state set to: false");
	});
});

// chrome.action.onClicked.addListener(async (tab) => {
// 	console.log("clicked");
// 	chrome.storage.local.get(["isEnabled"], (result) => {
// 		const { isEnabled } = result;
// 		console.log("isEnabled", isEnabled);
// 	});
// 	// console.log("clicked");
// 	// const { isEnabled } = await chrome.storage.local.get(["isEnabled"]);
// 	// console.log("isEnabled", isEnabled);
// });

chrome.action.onClicked.addListener((tab) => {
	console.log("Icon clicked");

	chrome.storage.local.get(["isEnabled"], (result) => {
		const { isEnabled } = result;

		chrome.storage.local.set({ isEnabled: !isEnabled }, () => {
			console.log("Initial state set to:", !isEnabled);
		});
	});
});

// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// chrome.runtime.onInstalled.addListener(() => {
// 	chrome.action.setBadgeText({
// 		text: "OFF",
// 	});

// 	chrome.storage.local.set({ isEnabled: false }, () => {
// 		console.log("Initial state set to: false");
// 	});
// });

// // When the user clicks on the extension action
// chrome.action.onClicked.addListener(async (tab) => {
// 	// We retrieve the action badge to check if the extension is 'ON' or 'OFF'
// 	const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
// 	// Next state will always be the opposite
// 	const nextState = prevState === "ON" ? "OFF" : "ON";

// 	// Set the action badge to the next state
// 	await chrome.action.setBadgeText({
// 		tabId: tab.id,
// 		text: nextState,
// 	});

// 	// if (nextState === "ON") {
// 	// 	// Insert the CSS file when the user turns the extension on
// 	// 	await chrome.scripting.insertCSS({
// 	// 		files: ["focus-mode.css"],
// 	// 		target: { tabId: tab.id },
// 	// 	});
// 	// } else if (nextState === "OFF") {
// 	// 	// Remove the CSS file when the user turns the extension off
// 	// 	await chrome.scripting.removeCSS({
// 	// 		files: ["focus-mode.css"],
// 	// 		target: { tabId: tab.id },
// 	// 	});
// 	// }
// });
