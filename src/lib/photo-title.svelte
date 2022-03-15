<script lang="ts">
	import { onMount } from 'svelte';

	import './photo-title.css';

	export let image: string;
	export let title: string;
	export let description: string;

	onMount(() => {
		// @ts-ignore
		const $ = window.$;
		$('.image-popup-vertical-fit').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			mainClass: 'mfp-img-mobile',
			image: {
				verticalFit: true
			}
		});
	});
</script>

<svelte:head>
	<script type="text/javascript" src="/js/magnific-popup/jquery.magnific-popup.js"></script>
</svelte:head>

<div class="lg:w-1/4 pr-4 pl-4 md:w-1/4 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 mt-4">
	<div class="picture relative">
		<img src={image} class="block object-cover mx-auto" alt="" />

		<!-- Picture Overlay Starts -->
		<div class="text-overlay absolute inset-0">
			<h1>
				<a class="image-popup-vertical-fit" href={image} title={`${title} — ${description}`}>
					{title}
				</a>
			</h1>
			<div class="author">{description}</div>
		</div>
		<!-- Picture Overlay Ends -->
	</div>
</div>

<style>
	.picture img {
		/*background-color: rgba(0,0,0,0.7);*/

		-webkit-transition: all 0.3s;
		-moz-transition: all 0.3s;
		transition: all 0.3s;
	}
	.picture .text-overlay {
		position: absolute;
		border: 20px solid rgba(255, 255, 255, 0.7);
		background-color: rgba(0, 0, 0, 0.5);
		height: auto;
		width: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 10;
		opacity: 0;
		-webkit-transition: all 0.3s ease-in-out 0s;
		-moz-transition: all 0.3s ease-in-out 0s;
		-ms-transition: all 0.3s ease-in-out 0s;
		-o-transition: all 0.3s ease-in-out 0s;
		transition: all 0.3s ease-in-out 0s;
	}
	.picture:hover .text-overlay {
		opacity: 1;
	}
	.picture .text-overlay h1 {
		position: absolute;
		font-size: 24px;
		color: #fff;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 3px;
		text-align: left;
		margin: 0px;
		padding: 0px;
		top: 40px;
		left: 30px;
	}
	.picture .text-overlay h1 a {
		color: #fff;
	}
	.picture .text-overlay h1 a:hover {
		color: #b39500;
	}
	.picture .text-overlay .author {
		position: absolute;
		font-size: 14px;
		color: #cccccc;
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 2px;
		text-align: left;
		bottom: 30px;
		left: 30px;
	}
</style>
