<script lang="ts">
	import { classes } from './classes';
	export let color: 'fill' | 'outline' | 'default' = 'default';
</script>

<button {...$$props} class={classes('button', $$props.class)}>
	<a
		class={classes(
			color === 'fill' && 'fill-black',
			color === 'outline' && 'no-fill-grey',
			color === 'default' && 'btn-default'
		)}
		href={$$props.href}
	>
		<slot />
	</a>
</button>

<style>
	.button {
		margin-top: 20px;
		margin-bottom: 20px;
		outline: none;
		font-family: 'Open Sans', system-ui, sans-serif;
		@apply uppercase;
	}
	.button a.fill-black {
		text-decoration: none;
		color: #fff;
		text-align: center;
		width: 100%;
		padding-top: 14px;
		padding-right: 30px;
		padding-bottom: 14px;
		padding-left: 30px;
		font-size: 14px;
		font-weight: 400;
		border: 1px solid #262626;
		border-radius: 30px;
		letter-spacing: 3px;
		background-color: #262626;
		-webkit-transition: all 0.3s;
		-moz-transition: all 0.3s;
		transition: all 0.3s;
	}
	.button a.fill-black:hover {
		color: #fff;
		border: 1px solid #b39500;
		background-color: #b39500;
		-webkit-transition: all 0.3s;
		-moz-transition: all 0.3s;
		transition: all 0.3s;
	}
	.btn-default {
		-webkit-transition: all 0.3s;
		-moz-transition: all 0.3s;
		transition: all 0.3s;
		text-transform: uppercase;
	}
	.button a.no-fill-grey {
		text-decoration: none;
		color: rgba(255, 255, 255, 0.8);
		text-align: center;
		width: 100%;
		padding-top: 14px;
		padding-right: 30px;
		padding-bottom: 14px;
		padding-left: 30px;
		font-size: 14px;
		font-weight: 400;
		text-transform: uppercase;
		border: 1px solid rgba(255, 255, 255, 0.8);
		border-radius: 30px;
		letter-spacing: 3px;
		background-color: transparent;
		-webkit-transition: all 0.3s;
		-moz-transition: all 0.3s;
		transition: all 0.3s;
	}
	.button a.no-fill-grey:hover {
		color: #fff;
		border: 1px solid #b39500;
		background-color: #b39500;
		-webkit-transition: all 0.3s;
		-moz-transition: all 0.3s;
		transition: all 0.3s;
	}
</style>
