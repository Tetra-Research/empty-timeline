document.addEventListener("DOMContentLoaded", function () {
	var exitButton = document.getElementById("exit");

	exitButton.addEventListener("click", function () {
		alert("close!");
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const tabs = document.querySelectorAll(".tab");
	const content = document.querySelectorAll(".tab-content");

	tabs.forEach((tab) => {
		tab.addEventListener("click", (e) => {
			e.preventDefault();

			const activeClasses = ["border-indigo-500", "text-indigo-600"];
			const defaultClasses = [
				"border-transparent",
				"text-gray-500",
				"hover:border-gray-300",
				"hover:text-gray-700",
			];

			tabs.forEach((t) => {
				t.classList.remove(...activeClasses);
				t.classList.add(...defaultClasses);
			});

			tab.classList.remove(...defaultClasses);
			tab.classList.add(...activeClasses);

			content.forEach((content) => content.classList.add("hidden"));

			document
				.querySelector(`[data-content=${tab.getAttribute("data-tab")}]`)
				.classList.remove("hidden");
		});
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const settings = {
		twitter: [
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
		linkedin: [
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
	};

	Object.keys(settings).forEach((website) => {
		const container = document.querySelector(`[data-content=${website}]`);
		const options = settings[website];

		options.forEach((option, i) => {
			const toggleHtml = `
				<div class="flex items-center justify-between mt-2">
					<span class="flex flex-grow flex-col">
						<span
							class="text-sm font-medium leading-6 text-gray-900"
							id="toggle-title-${i}"
						>
							${option.title}
						</span>
						<span class="text-sm text-gray-500" id="toggle-desc-${i}">
							${option.description}
						</span>
					</span>

					<button
						type="button"
						class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
						role="switch"
						aria-checked="false"
						aria-labelledby="toggle-title-${i}"
						aria-describedby="toggle-desc-${i}"
						data-website="${website}"
						data-option-id="${option.id}"
					>
						<span
							aria-hidden="true"
							class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
							data-website="${website}"
							data-option-id="${option.id}"
						></span>
					</button>
				</div>
        	`;

			container.insertAdjacentHTML("beforeend", toggleHtml);

			const button = container.querySelectorAll(
				`button[type="button"][data-website="${website}"][data-option-id="${option.id}"]`
			)[0];

			const span = container.querySelectorAll(
				`span[data-website="${website}"][data-option-id="${option.id}"]`
			)[0];

			button.addEventListener("click", () => {
				button.classList.toggle("bg-indigo-600");
				button.classList.toggle("bg-gray-200");
				span.classList.toggle("translate-x-5");
				span.classList.toggle("translate-x-0");

				// add cloud logic
			});

			console.log("test", button, span);
		});
	});
});
