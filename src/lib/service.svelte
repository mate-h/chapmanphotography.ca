<script lang="ts">
	export let image: string;
	export let title: string;
</script>

<div class="lg:w-1/3 pr-4 pl-4 md:w-1/3 pr-4 pl-4 sm:w-1/3 pr-4 pl-4 block">
	<img class="mx-auto" alt={title} src={image} />
	<div class="caption mt-4">{title}</div>
</div>

<style>
	.block {
		text-align: center;
		padding-top: 80px;
	}
	.block .caption {
		font-size: 14px;
		font-weight: 500;
		color: #fff;
		text-transform: uppercase;
		letter-spacing: 3px;
		line-height: normal;
		padding-left: 30px;
		padding-right: 30px;
	}
</style>
