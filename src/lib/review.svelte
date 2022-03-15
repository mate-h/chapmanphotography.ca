<script lang="ts">
	export let name: string;
	export let image: string;
</script>

<div class="block flex">
	<div>
		<img src={image} class="img-responsive w-xs" alt="" />
	</div>
	<div class="detail px-6 flex-grow">
		<div class="icon">
			<img src="/images/our-team/icon.png" class="img-responsive" alt="" />
		</div>
		<div class="description">
			<slot />
		</div>
		<div class="name">{name}</div>
	</div>
</div>

<style>
	.block .icon {
		padding-top: 12px;
		padding-bottom: 20px;
	}
	.block .description {
		font-size: 24px;
		font-weight: 300;
		line-height: 34px;
		color: #262626;
	}
	.block .name {
		font-size: 12px;
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 3px;
		color: #666666;
		padding-top: 40px;
	}
	:global(.owl-theme .owl-controls) {
		text-align: center;
		position: absolute;
		bottom: 60px;
		right: 60px;
	}
	:global(.owl-theme .owl-controls .owl-nav .owl-next) {
		position: absolute;
		z-index: 10;
		left: 0px;
	}
	:global(.owl-theme .owl-controls .owl-nav .owl-prev) {
		position: absolute;
		z-index: 10;
		left: 50px;
	}
</style>
