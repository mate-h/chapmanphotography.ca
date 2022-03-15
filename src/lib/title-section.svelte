<script lang="ts">
	import { onMount } from 'svelte';

	let node: HTMLElement;
	onMount(() => {
		// @ts-ignore
		const tpj = jQuery;
		if (tpj(node).revolution == undefined) {
			console.error('revslider.js not found!');
		} else {
			tpj(node)
				.show()
				.revolution({
					sliderType: 'standard',
					jsFileLocation: '/revolution/js/',
					sliderLayout: 'fullwidth',
					dottedOverlay: 'none',
					delay: 6000,
					navigation: {
						keyboardNavigation: 'off',
						keyboard_direction: 'horizontal',
						mouseScrollNavigation: 'off',
						onHoverStop: 'off',
						touch: {
							touchenabled: 'on',
							swipe_threshold: 75,
							swipe_min_touches: 1,
							swipe_direction: 'horizontal',
							drag_block_vertical: false
						},
						arrows: {
							style: 'zeus',
							enable: true,
							hide_onmobile: false,
							hide_under: 600,
							hide_onleave: true,
							hide_delay: 200,
							hide_delay_mobile: 1200,
							tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
							left: {
								h_align: 'left',
								v_align: 'center',
								h_offset: 30,
								v_offset: 0
							},
							right: {
								h_align: 'right',
								v_align: 'center',
								h_offset: 30,
								v_offset: 0
							}
						},
						bullets: {
							enable: true,
							hide_onmobile: false,
							style: 'hermes',
							hide_onleave: false,
							hide_delay: 200,
							hide_delay_mobile: 1200,
							direction: 'horizontal',
							h_align: 'center',
							v_align: 'bottom',
							h_offset: 0,
							v_offset: 50,
							space: 20,
							tmp: ''
						}
					},
					viewPort: {
						enable: true,
						outof: 'pause',
						visible_area: '80%'
					},
					responsiveLevels: [1240, 1024, 778, 480],
					gridwidth: [1240, 1024, 778, 480],
					gridheight: [700, 600, 500, 400],
					lazyType: 'none',
					parallax: {
						type: 'mouse',
						origo: 'slidercenter',
						speed: 2000,
						levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50]
					},
					shadow: 0,
					spinner: 'off',
					stopLoop: 'off',
					stopAfterLoops: -1,
					stopAtSlide: -1,
					shuffle: 'off',
					autoHeight: 'off',
					hideThumbsOnMobile: 'off',
					hideSliderAtLimit: 0,
					hideCaptionAtLimit: 0,
					hideAllCaptionAtLilmit: 0,
					debugMode: false,
					fallbacks: {
						simplifyAll: 'off',
						nextSlideOnWindowFocus: 'off',
						disableFocusListener: false
					}
				});
		}
	});
</script>

<svelte:head>
	<script type="text/javascript" src="/revolution/js/jquery.themepunch.tools.min.js"></script>
	<script type="text/javascript" src="/revolution/js/jquery.themepunch.revolution.min.js"></script>
</svelte:head>

<div class="slider">
	<div
		class="rev_slider_wrapper fullwidthbanner-container"
		data-alias="fullscreen-button44"
		style="
			margin: 0px auto;
			background-color: transparent;
			padding: 0px;
			margin-top: 0px;
			margin-bottom: 0px;
		"
	>
		<!-- START REVOLUTION SLIDER 5.1.1RC auto mode -->
		<div
			bind:this={node}
			class="rev_slider fullwidthabanner"
			style="display: none"
			data-version="5.1.1RC"
		>
			<ul>
				<!-- SLIDE  -->
				<slot />
			</ul>
			<div
				class="tp-bannertimer tp-bottom"
				style="height: 3px; background-color: rgba(179, 149, 0, 1)"
			/>
		</div>
	</div>
</div>
