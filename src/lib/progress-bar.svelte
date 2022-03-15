<script lang="ts">
	export let progress: number = 0;
</script>

<div class="block progress-bars">
	<div class="progress-label">
		<span class="caption"><slot /></span>
	</div>
	<div class="progress">
		<div
			class="progress-bar h-full"
			role="progressbar"
			aria-valuenow={progress}
			aria-valuemin={0}
			aria-valuemax={100}
			style="width: {progress}%;"
		/>
	</div>
</div>

<style>
	.progress-bars .progress {
		height: 3px;
		margin-bottom: 20px;
		overflow: hidden;
		background-color: #cccccc;
		border-radius: 0px;
		-webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
		box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
	}
	.progress-bars .progress-bar {
		background-color: #b39500;
		position: relative;
	}
	.progress-bars .progress-label {
		margin-bottom: 12px;
	}
	.progress-bars .progress-label .caption {
		font-size: 12px;
		color: #808080;
		letter-spacing: 3px;
		font-weight: 400;
		text-transform: uppercase;
	}
</style>
