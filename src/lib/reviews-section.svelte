<script lang="ts">
	import { onMount } from 'svelte';
	import Button from './button.svelte';
	let node: HTMLElement;
	onMount(() => {
		// @ts-ignore
		const $ = window.$;
		var owl = $(node);
		owl.owlCarousel({
			autoplay: false,
			autoplayHoverPause: true,
			nav: true,
			dots: false,
			mouseDrag: true,
			smartSpeed: 500,
			margin: 0,
			loop: true,
			singleItem: true,
			navText: ["<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});
	});
</script>

<svelte:head>
	<script type="text/javascript" src="/js/owl-carousel/owl.carousel.js"></script>
</svelte:head>

<div class="container mx-auto our-team">
	<div class="flex flex-wrap">
		<div class="lg:w-1/3 pr-4 pl-4 md:w-1/3 pr-4 pl-4">
			<h1>
				<slot name="title" />
			</h1>
			<div class="description">
				<slot name="description" />
			</div>
			<Button color="fill" href="/store">
				<span class="uppercase">
					<slot name="button" />
				</span>
			</Button>
		</div>
		<div class="lg:w-2/3 pr-4 pl-4 md:w-2/3 pr-4 pl-4">
			<div bind:this={node} class="testimonial-carousel">
				<slot />
			</div>
		</div>
	</div>
</div>

<style>
	.our-team {
		padding-top: 120px;
		padding-bottom: 120px;
	}
	.our-team h1 {
		font-size: 24px;
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 5px;
	}
	.our-team h1 span {
		color: #666666;
	}
	.our-team .description {
		font-size: 14px;
		color: rgba(0, 0, 0, 0.6);
		padding-top: 20px;
		line-height: 30px;
	}
	.our-team .button {
		padding-top: 26px;
	}

	.team .block {
		padding-bottom: 50px;
	}
	.team .block .name {
		font-size: 20px;
		font-weight: 400;
		color: rgba(0, 0, 0, 0.6);
		text-transform: uppercase;
		letter-spacing: 5px;
		line-height: 28px;
		margin-top: 30px;
		padding: 0px;
	}
	.team .block .name a {
		color: rgba(0, 0, 0, 0.6);
	}
	.team .block .name a:hover {
		color: #b39500;
	}
	.team .block .designation {
		font-size: 12px;
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 3px;
		color: rgba(0, 0, 0, 0.6);
		padding-top: 0px;
	}
	.team .team-details {
		padding-bottom: 50px;
	}
	.team h1 {
		font-size: 24px;
		font-weight: 400;
		color: #999999;
		text-transform: uppercase;
		letter-spacing: 5px;
		padding-bottom: 40px;
	}
	.team h1 span {
		color: #666666;
	}
	.team .team-details .description {
		font-size: 14px;
		color: #808080;
		padding-top: 0px;
		line-height: 30px;
	}
	.team .team-details .progress-bars {
		padding-top: 30px;
	}
	.team .team-details .progress-bars .block {
		padding-bottom: 12px;
	}
	.team .team-details .progress-bars .block .progress {
		height: 3px;
		margin-bottom: 20px;
		overflow: hidden;
		background-color: #cccccc;
		border-radius: 0px;
		-webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
		box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
	}
	.team .team-details .progress-bars .block .progress-bar {
		background-color: #b39500;
		position: relative;
	}
	.team .team-details .progress-bars .block .progress-label {
		margin-bottom: 12px;
	}
	.team .team-details .progress-bars .block .progress-label .caption {
		font-size: 12px;
		color: #808080;
		letter-spacing: 3px;
		font-weight: 400;
		text-transform: uppercase;
	}
	.team .team-details ul.social-links {
		padding: 0px;
		margin: 0px;
		margin-top: 20px;
	}
	.team .team-details ul.social-links li {
		list-style: none;
		display: inline-block;
		font-size: 12px;
		text-transform: uppercase;
		color: #999999;
		letter-spacing: 3px;
		font-weight: 500;
	}
	.team .team-details ul.social-links li a {
		font-weight: 500;
		color: #999999;
	}
	.team .team-details ul.social-links li a.facebook {
		color: #3b5998;
	}
	.team .team-details ul.social-links li a.twitter {
		color: #55acee;
	}
	.team .team-details ul.social-links > li + li:before {
		padding: 0 10px;
		display: inline-block;
		text-rendering: auto;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		content: '/';
	}
</style>
