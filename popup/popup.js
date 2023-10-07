// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
	// // Get the button element by ID
	// var exitButton = document.getElementById("exitButton");
	// // Attach a click event listener to the button
	// exitButton.addEventListener("click", function () {
	// 	// Implement your closing functionality here
	// 	console.log("Close button clicked!");
	// 	alert("close!");
	// });
});

document.addEventListener("DOMContentLoaded", function () {
	const tabs = document.querySelectorAll(".tab");
	const content = document.querySelectorAll(".tab-content");

	tabs.forEach((tab) => {
		console.log(tab);
		tab.addEventListener("click", (e) => {
			e.preventDefault();

			const activeClasses = ["border-indigo-500", "text-indigo-600"];
			const defaultClasses = [
				"border-transparent",
				"text-gray-500",
				"hover:border-gray-300",
				"hover:text-gray-700",
			];

			// remove active state
			tabs.forEach((t) => {
				t.classList.remove(...activeClasses);
				t.classList.add(...defaultClasses);
				// add default classes?
			});

			tab.classList.remove(...defaultClasses);
			tab.classList.add(...activeClasses);

			// Hide all content divs
			content.forEach((content) => content.classList.add("hidden"));

			// Show content div associated with clicked tab
			document
				.querySelector(`[data-content=${tab.getAttribute("data-tab")}]`)
				.classList.remove("hidden");
		});
	});
});
