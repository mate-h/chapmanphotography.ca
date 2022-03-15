<script lang="ts">
	export let image: string;
</script>

<div class="container mx-auto what-we-do">
	<div class="md:flex">
		<div class="r-4 pl-4 pr-4 pic flex-grow">
			<img src={image} class="img-responsive" alt="" />
		</div>
		<div class="contents flex-grow">
			<div class="pr-4 pl-4 pr-4 flex flex-col justify-center">
				<h1>
					<slot name="title" />
				</h1>
				<div class="description">
					<slot name="description" />
				</div>
				<slot />
			</div>
		</div>
	</div>
</div>

<style>
	.what-we-do {
		padding-top: 60px;
		padding-bottom: 60px;
	}
	.what-we-do .pic {
		padding-top: 60px;
		padding-bottom: 60px;
	}
	.what-we-do .contents {
		padding-top: 60px;
		padding-bottom: 60px;
	}
	.what-we-do h1 {
		font-size: 24px;
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 5px;
	}
	.what-we-do .description {
		font-size: 14px;
		color: rgba(0, 0, 0, 0.6);
		padding-top: 20px;
		line-height: 30px;
	}
</style>
