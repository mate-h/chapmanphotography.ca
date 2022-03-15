<script lang="ts">
	import Button from './button.svelte';
</script>

<div class="parallax-1 amazing-features">
	<div class="container relative mx-auto">
		<div class="flex flex-wrap">
			<div
				class="lg:w-2/5 pr-4 pl-4 md:w-2/5 pr-4 pl-4 sm:w-2/5 pr-4 pl-4 flex flex-col justify-center"
			>
				<h1><slot name="title" /></h1>
				<div class="description">
					<slot name="description" />
				</div>
				<div class="pt-6">
					<Button color="outline" href="/contact"><slot name="button" /></Button>
				</div>
			</div>
			<div class="lg:w-3/5 pr-4 pl-4 md:w-3/5 pr-4 pl-4 sm:w-3/5 pr-4 pl-4">
				<div class="flex flex-wrap items-center justify-center">
					<slot name="services" />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.parallax-1 {
		background-attachment: fixed;
		background-image: url(../images/cathedral-mountain.jpeg);
		background-repeat: no-repeat;
		background-position: 50% 0;
		background-size: cover;
		background-color: #262626;
		position: relative;
	}
	.parallax-1::before {
		content: '';
		z-index: 0;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #000000;
		opacity: 0.5;
	}

	.amazing-features {
		padding-top: 120px;
		padding-bottom: 120px;
	}
	.amazing-features h1 {
		font-size: 24px;
		font-weight: 400;
		color: rgba(255, 255, 255, 0.9);
		text-transform: uppercase;
		letter-spacing: 5px;
	}
	.amazing-features h1 span {
		color: rgba(255, 255, 255, 0.5);
	}
	.amazing-features .description {
		font-size: 14px;
		color: rgba(255, 255, 255, 0.8);
		padding-top: 20px;
		line-height: 30px;
	}
</style>
