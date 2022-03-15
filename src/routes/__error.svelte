<script>
	import Socials from '$lib/socials.svelte';
	import Navigation from '$lib/navigation.svelte';
	import Button from '$lib/button.svelte';
</script>

<div class="error h-screen">
	<div>
		<Navigation />
		<div class="caption flex flex-col justify-center items-center mb-12">
			<div class="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
				<h1>
					404
					<p class="mt-12">Page <span>Not Found</span></p>
				</h1>
			</div>
			<div class="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
				<Button href="/" color="fill">Homepage</Button>
			</div>
		</div>
		<Socials />
	</div>
</div>

<style>
	.error {
		background-attachment: fixed;
		background-image: url(/images/cathedral-mountain.jpeg);
		background-repeat: repeat-y;
		background-position: center center;
		background-size: cover;
	}
	.error .caption {
		padding-top: 25%;
	}
	.error .caption h1,
	.error .caption p,
	.error .caption span {
		display: inline-block;
	}
	.error .caption h1 {
		font-size: 90px;
		font-weight: 400;
		color: white;
		text-transform: uppercase;
		letter-spacing: 7px;
		padding-bottom: 40px;
	}
	.error .caption h1 p {
		font-size: 18px;
		font-weight: 400;
		color: rgba(255, 255, 255, 0.6);
		text-transform: uppercase;
		letter-spacing: 7px;
		padding-bottom: 40px;
		vertical-align: middle;
	}
	.error .caption h1 p span {
		color: #b39500;
	}
	.error .button {
		text-align: right;
		margin-top: 60px;
	}
	.error .button a {
		text-transform: uppercase;
	}

	.error .social-media {
		padding-top: 300px;
	}
	.error .social-media .caption {
		padding-top: 20px;
		padding-bottom: 20px;
		text-align: center;
	}
	.error .social-media .caption a {
		font-size: 18px;
		color: #808080;
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 3px;
	}
	.error .social-media .caption a:hover {
		text-decoration: line-through;
		color: #b39500;
	}
</style>
