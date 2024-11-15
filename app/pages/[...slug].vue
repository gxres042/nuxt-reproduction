<template>
	<section class="p-6 prose">
		<ContentDoc />
	</section>
</template>

<style>
.prose {
	h1 {
		--apply: "text-2xl";
	}
	h2 {
		--apply: "text-2xl my-3 font-semibold";
	}
	h3 {
		--apply: "text-xl my-3 font-semibold";
	}
	h4 {
		--apply: "text-lg my-3 font-semibold";
	}
	h5 {
		--apply: "text-base my-3 font-semibold";
	}
	h6 {
		--apply: "text-sm my-3 font-semibold";
	}
	p {
		--apply: "text-base my-3";
		a {
			--apply: "hover:underline text-link";
		}
	}

	ol {
		--apply: "my-3 ml-6 list-decimal";
	}
	ul {
		--apply: "my-3 ml-3 list-disc";
		li {
			--apply: "my-3";
		}
	}
	hr {
		--apply: "border-gray-500 my-3";
	}
	img,
	video {
		--apply: "max-w-full rounded-md";
	}
}
code {
	--apply: "bg-gray-100 dark:bg-gray-700 rounded-md";
	font-family:
		ui-monospace,
		JetBrains Mono,
		SFMono-Regular,
		Menlo,
		Monaco,
		Consolas,
		Andale Mono,
		Liberation Mono,
		Ubuntu Mono,
		Courier New,
		monospace;
}
blockquote {
	--apply: "p-1 my-3 bg-gray-100 dark:bg-gray-700 border-l-6 border-blue-500 rounded-md shadow-md";
	p {
		--apply: "m-3";
	}
}
</style>
