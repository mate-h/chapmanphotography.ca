<script lang="ts">
	import type symbols from './symbols';
	type IconType = keyof typeof symbols;
	export let name: IconType;
</script>

<div class="icon"><i class="icon-{name} icons mb-4" /></div>
