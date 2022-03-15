<script lang="ts">
	import Button from './button.svelte';

	export let index: number;
	export let image: string;
</script>

<li
	data-index={`"rs-68${index}"`}
	data-transition="zoomin"
	data-slotamount="default"
	data-easein="Power4.easeInOut"
	data-easeout="Power4.easeInOut"
	data-masterspeed="2000"
	data-thumb={image}
	data-rotate="0"
	data-fstransition="fade"
	data-fsmasterspeed="1500"
	data-fsslotamount="7"
	data-saveperformance="off"
	data-title="Fashion"
	data-description=""
>
	<!-- MAIN IMAGE -->
	<img
		src={image}
		alt=""
		data-bgposition="center center"
		data-bgfit="cover"
		data-bgrepeat="no-repeat"
		data-bgparallax="10"
		class="rev-slidebg"
		data-no-retina
	/>
	<!-- LAYER NR. 1 -->
	<div
		class="font-opensans font-light tp-caption NotGeneric-Title tp-resizeme rs-parallaxlevel-0 !text-4xl !text-white uppercase"
		id="slide-681-layer-1"
		data-x="['left','left','center','center']"
		data-hoffset="['50','50','0','0']"
		data-y="['middle','middle','middle','middle']"
		data-voffset="['-90','-90','-90','-70']"
		data-fontsize="['64','64','64','48']"
		data-lineheight="['120','120','120','85']"
		data-height="none"
		data-letter-spacing="normal"
		data-whitespace="nowrap"
		data-transform_in="y:[-100%];z:0;rX:20deg;rY:0deg;rZ:-70deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;opacity:1"
		data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
		data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
		data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
		data-start="500"
		data-splitin="chars"
		data-splitout="none"
		data-elementdelay="0.05"
		data-responsive_offset="on"
		style="z-index: 2; white-space: nowrap; letter-spacing: 10px;opacity:0;"
	>
		<slot name="title">Page title</slot>
	</div>
	<!-- LAYER NR. 2 -->
	<div
		class="font-poppins text-white tp-caption NotGeneric-SubTitle tp-resizeme rs-parallaxlevel-0"
		id="slide-681-layer-2"
		data-x="['left','left','center','center']"
		data-hoffset="['50','50','0','0']"
		data-y="['middle','middle','middle','middle']"
		data-voffset="['0','0','0','0']"
		data-fontsize="['24','24','24','24']"
		data-lineheight="['30','30','30','30']"
		data-width="none"
		data-height="none"
		data-whitespace="nowrap"
		data-transform_idle="o:1;"
		data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;"
		data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
		data-mask_out="x:inherit;y:inherit;"
		data-start="800"
		data-splitin="none"
		data-splitout="none"
		data-responsive_offset="on"
		style="
							z-index: 3;
							padding: 0;
							white-space: nowrap;
							text-transform: uppercase;
							letter-spacing: 3px;
							font-weight: 300;
						"
	>
		<slot name="description">Page description</slot>
	</div>
	<!-- LAYER NR. 3 -->
	<div
		class="tp-caption rev-btn rs-parallaxlevel-0"
		id="slide-681-layer-3"
		data-x="['left','left','center','center']"
		data-hoffset="['50','50','0','0']"
		data-y="['middle','middle','middle','middle']"
		data-voffset="['110','110','110','90']"
		data-width="none"
		data-height="none"
		data-whitespace="nowrap"
		data-transform_idle="o:1;"
		data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Linear.easeNone;"
		data-transform_in="x:-50px;opacity:0;s:1000;e:Power2.easeOut;"
		data-transform_out="opacity:0;s:1500;e:Power4.easeIn;s:1500;e:Power4.easeIn;"
		data-start="1750"
		data-splitin="none"
		data-splitout="none"
		data-actions={JSON.stringify([{ event: 'click', action: 'scrollbelow', offset: 'px' }])}
		data-responsive_offset="on"
		data-responsive="off"
		style="z-index: 14; white-space: nowrap"
	>
		<Button color="fill">
			<span class="uppercase">
				<slot name="button">Button</slot>
			</span>
		</Button>
	</div>
</li>

<style>
	.font-poppins {
		font-family: 'Poppins', system-ui, sans-serif;
	}
	.font-opensans {
		font-family: 'Open Sans', system-ui, sans-serif;
	}
</style>
