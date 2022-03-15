<script lang="ts">
	import { onMount } from 'svelte';
	export let count: number;
	let node: HTMLElement;
	onMount(() => {
		//@ts-ignore
		const $ = window.$;
		$(node).counterUp({
			delay: 10,
			time: 1000
		});
	});
</script>

<svelte:head>
	<script src="http://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js"></script>
	<script src="/js/counterup/jquery.counterup.min.js"></script>
</svelte:head>

<div class="lg:w-1/5 pr-4 pl-4 md:w-1/5 pr-4 pl-4 sm:w-1/3 pr-4 pl-4">
	<div class="block">
		<span bind:this={node} class="count">{count}</span>
		<div class="caption"><slot /></div>
	</div>
</div>
