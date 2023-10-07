// check if we are supposed to turn on for this page.
// then hide the specific element

console.log("Content script is running!");
console.log(document.body.style.backgroundColor);
document.body.style.backgroundColor = "lightblue";
console.log(document.body.style.backgroundColor);

// const hideReactRoot = () => {
// 	let reactRoot = document.getElementById("react-root");
// 	if (reactRoot) {
// 		reactRoot.style.display = "none";
// 	}
// };

/*
    build a list of what is enabled or disabled on this page
    those features have an associated function
    if they're turned on, build an array of that funciton
    build observers for that
*/

const hidePrimaryColumn = () => {
	primaryColumn = document.querySelector('div[data-testid="primaryColumn"]');
	if (primaryColumn) {
		console.log("found column");
		primaryColumn.style.display = "none";
	}
};

hidePrimaryColumn();
let observer = new MutationObserver(hidePrimaryColumn);
observer.observe(document.body, { childList: true, subtree: true });

const hideMain = () => {
	return;
	let main = document.querySelector('main[role="main"]');

	if (!main) return;

	console.log("Found main");
	// main.style.display = "none";

	// Find the first child div of <main> and hide it
	let firstChildDiv = main.querySelector("div:first-child");
	// console.log("firstchilddiv", firstChildDiv);
	if (firstChildDiv) {
		console.log("Found first child div of <main>");
		firstChildDiv.style.display = "none";
	}
};

// hideMain();
// let observer = new MutationObserver(hideMain);
// observer.observe(document.body, { childList: true, subtree: true });

// hideMain();

// let observer = new MutationObserver(hideReactRoot);
// observer.observe(document.body, { childList: true, subtree: true });
