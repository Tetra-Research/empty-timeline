const settings = [
	{
		name: "Twitter",
		id: "twitter",
		options: [
			{
				title: "Example 1",
				id: "example-1",
				description: "description",
			},
			{
				title: "Example 2",
				id: "example-2",
				description: "description",
			},
		],
	},
	{
		name: "LinkedIn",
		id: "linkedin",
		options: [
			{
				title: "Example 1",
				id: "example-1",
				description: "description",
			},
			{
				title: "Example 2",
				id: "example-2",
				description: "description",
			},
		],
	},
];

function onClose() {
	console.log("close");
}

const activeTabClasses = ["border-indigo-500", "text-indigo-600"];
const defaultTabClasses = [
	"border-transparent",
	"text-gray-500",
	"hover:border-gray-300",
	"hover:text-gray-700",
];

function onTabClick(e) {
	e.preventDefault();

	const targetTab = e.target;
	const tabs = document.querySelectorAll(".tab");
	const contents = document.querySelectorAll(".tab-content");

	tabs.forEach((t) => {
		t.classList.remove(...activeTabClasses);
		t.classList.add(...defaultTabClasses);
	});

	targetTab.classList.remove(...defaultTabClasses);
	targetTab.classList.add(...activeTabClasses);

	contents.forEach((content) => content.classList.add("hidden"));

	document
		.querySelector(`[data-content=${targetTab.getAttribute("data-tab")}]`)
		.classList.remove("hidden");
}

function createTabs() {
	const template = document.getElementById("tab-template");

	return settings.map((website, i) => {
		const { name, id } = website;
		const classes = i === 0 ? activeTabClasses : defaultTabClasses;

		const tab = template.content.cloneNode(true).querySelector("a");
		tab.addEventListener("click", onTabClick);
		tab.setAttribute("data-tab", id);

		tab.classList.add(...classes);
		tab.textContent = name;

		return tab;
	});
}

function setupTabs() {
	const container = document.querySelector(`nav[id="tab-container"]`);
	createTabs().forEach((t) => container.appendChild(t));
}

function onToggleClick(e) {
	e.preventDefault();
}

function createToggles(id) {
	const template = document.getElementById("toggle-template");

	const website = settings.find((s) => s.id === id);

	return website.options.map((option, i) => {
		const toggle = template.content.cloneNode(true).querySelector("div");
		const title = toggle.querySelector(`span[id="toggle-title"]`);
		const desc = toggle.querySelector(`span[id="toggle-desc"]`);
		const button = toggle.querySelector("button");
	});
}
function createSections() {
	const template = document.getElementById("section-template");

	return settings.map((website, i) => {
		const { id } = website;

		const section = template.content.cloneNode(true).querySelector("div");
		section.setAttribute("data-content", id);
		if (i !== 0) section.classList.add("hidden");

		createToggles(id);

		return section;
	});
}

function setupSections() {
	const container = document.getElementById("section-container");
	createSections().forEach((t) => container.appendChild(t));
}

document.addEventListener("DOMContentLoaded", () => {
	// Load from storage
	// Load last tab
	// Load current website
	// Create tabs and navigate to correct one
	setupTabs();
	setupSections();
	// Create toggles and initialize them
});

// document.addEventListener("DOMContentLoaded", function () {
// 	const tabs = document.querySelectorAll(".tab");
// 	const content = document.querySelectorAll(".tab-content");

// 	tabs.forEach((tab) => {
// 		tab.addEventListener("click", (e) => {
// 			e.preventDefault();

// 			const activeClasses = ["border-indigo-500", "text-indigo-600"];
// const defaultClasses = [
// 	"border-transparent",
// 	"text-gray-500",
// 	"hover:border-gray-300",
// 	"hover:text-gray-700",
// ];

// tabs.forEach((t) => {
// 	t.classList.remove(...activeClasses);
// 	t.classList.add(...defaultClasses);
// });

// tab.classList.remove(...defaultClasses);
// tab.classList.add(...activeClasses);

// content.forEach((content) => content.classList.add("hidden"));

// document
// 	.querySelector(`[data-content=${tab.getAttribute("data-tab")}]`)
// 	.classList.remove("hidden");
// 		});
// 	});
// });

// document.addEventListener("DOMContentLoaded", function () {
// 	Object.keys(settings).forEach((website) => {
// 		const { id, options } = website;

// 		// const tabContainer = document.querySelector(`nav[id="tab-container"]`);
// 		// console.log("tc", tabContainer);

// 		// const tabHTML = `
// 		// 	<a
// 		// 		data-tab="twitter"
// 		// 		href="#"
// 		// 		class="tab border-indigo-500 text-indigo-600 w-1/2 border-b-2 py-4 px-1 text-center text-sm font-medium"
// 		// 	>
// 		// 		${name}
// 		// 	</a>
// 		// `;

// 		// tabContainer.insertAdjacentHTML("beforeend", toggleHtml);

// 		// Generate Tabs

// 		const container = document.querySelector(`[data-content=${id}]`);
// 		options.forEach((option, i) => {
// 			const toggleHtml = `
// <div class="flex items-center justify-between mt-2">
// 	<span class="flex flex-grow flex-col">
// 		<span
// 			class="text-sm font-medium leading-6 text-gray-900"
// 			id="toggle-title-${i}"
// 		>
// 			${option.title}
// 		</span>
// 		<span class="text-sm text-gray-500" id="toggle-desc-${i}">
// 			${option.description}
// 		</span>
// 	</span>

// 	<button
// 		type="button"
// 		class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
// 		role="switch"
// 		aria-checked="false"
// 		aria-labelledby="toggle-title-${i}"
// 		aria-describedby="toggle-desc-${i}"
// 		data-website="${website}"
// 		data-option-id="${option.id}"
// 	>
// 		<span
// 			aria-hidden="true"
// 			class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
// 			data-website="${website}"
// 			data-option-id="${option.id}"
// 		></span>
// 	</button>
// </div>
//         	`;

// 			container.insertAdjacentHTML("beforeend", toggleHtml);

// 			const button = container.querySelectorAll(
// 				`button[type="button"][data-website="${website}"][data-option-id="${option.id}"]`
// 			)[0];

// 			const span = container.querySelectorAll(
// 				`span[data-website="${website}"][data-option-id="${option.id}"]`
// 			)[0];

// 			button.addEventListener("click", () => {
// 				button.classList.toggle("bg-indigo-600");
// 				button.classList.toggle("bg-gray-200");
// 				span.classList.toggle("translate-x-5");
// 				span.classList.toggle("translate-x-0");

// 				// add cloud logic
// 			});

// 			console.log("test", button, span);
// 		});
// 	});
// });
