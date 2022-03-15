<script>
	import { onMount } from 'svelte';

	onMount(() => {
		//@ts-ignore
		const $ = window.$;
		$(window).scroll(function () {
			if ($(this).scrollTop() > 1) {
				$('.navigation').addClass('sticky');
				$('.navigation').removeClass('normal');
			} else {
				$('.navigation').removeClass('sticky');
				$('.navigation').addClass('normal');
			}
		});

		//  run on mount
		var triggerBttn = document.getElementById('trigger-overlay'),
			overlay = document.querySelector('div.overlay'),
			closeBttn = overlay.getElementsByClassName('overlay-close-btn');
		let transEndEventNames = {
				WebkitTransition: 'webkitTransitionEnd',
				MozTransition: 'transitionend',
				OTransition: 'oTransitionEnd',
				msTransition: 'MSTransitionEnd',
				transition: 'transitionend'
			},
			// @ts-ignore
			transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
			// @ts-ignore
			support = { transitions: Modernizr.csstransitions };
		// @ts-ignore
		let s = Snap(overlay.querySelector('svg')),
			path = s.select('path'),
			steps = overlay.getAttribute('data-steps').split(';'),
			stepsTotal = steps.length;

		function toggleOverlay() {
			// @ts-ignore
			const classie = window.classie;
			// @ts-ignore
			const mina = window.mina;
			if (classie.has(overlay, 'open')) {
				var pos = stepsTotal - 1;
				classie.remove(overlay, 'open');
				classie.add(overlay, 'close');

				var onEndTransitionFn = function (ev) {
						classie.remove(overlay, 'close');
					},
					nextStep = function (pos) {
						pos--;
						if (pos < 0) return;
						path.animate({ path: steps[pos] }, 60, mina.linear, function () {
							if (pos === 0) {
								onEndTransitionFn();
							}
							nextStep(pos);
						});
					};

				nextStep(pos);
			} else if (!classie.has(overlay, 'close')) {
				var pos = 0;
				classie.add(overlay, 'open');

				var nextStep = function (pos) {
					pos++;
					if (pos > stepsTotal - 1) return;
					path.animate({ path: steps[pos] }, 60, mina.linear, function () {
						nextStep(pos);
					});
				};

				nextStep(pos);
			}
		}

		triggerBttn.addEventListener('click', toggleOverlay);
		for (let i = 0; i < closeBttn.length; i++) {
			// Cycle through them
			closeBttn[i].addEventListener('click', toggleOverlay);
		}
	});
</script>

<svelte:head>
	<script src="/js/overlay-menu/js/snap.svg-min.js"></script>
	<script src="/js/overlay-menu/js/modernizr.custom.js"></script>
	<script src="/js/overlay-menu/js/classie.js"></script>
</svelte:head>

<div class="flex flex-wrap list-reset pl-0 mb-0 navigation fill-black normal inner">
	<div class="container mx-auto">
		<div class="flex flex-wrap">
			<div class="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
				<div class="logo">
					<a href="/">
						<img
							src="/images/logo.jpg"
							class="filter h-16 -my-4 invert img-responsive rounded-lg opacity-60 hover:opacity-100"
							alt=""
						/>
					</a>
				</div>
			</div>
			<div class="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
				<ul class="links">
					<li>
						<a id="trigger-overlay"><i class="icon-menu icons" /></a>
					</li>
					<li class="shop_cart">
						<a href="/cart"><i class="icon-bag icons" /><span>2</span></a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<div
	class="overlay overlay-genie"
	data-steps="m 701.56545,809.01175 35.16718,0 0,19.68384 -35.16718,0 z;m 698.9986,728.03569 41.23353,0 -3.41953,77.8735 -34.98557,0 z;m 687.08153,513.78234 53.1506,0 C 738.0505,683.9161 737.86917,503.34193 737.27015,806 l -35.90067,0 c -7.82727,-276.34892 -2.06916,-72.79261 -14.28795,-292.21766 z;m 403.87105,257.94772 566.31246,2.93091 C 923.38284,513.78233 738.73561,372.23931 737.27015,806 l -35.90067,0 C 701.32034,404.49318 455.17312,480.07689 403.87105,257.94772 z;M 51.871052,165.94772 1362.1835,168.87863 C 1171.3828,653.78233 738.73561,372.23931 737.27015,806 l -35.90067,0 C 701.32034,404.49318 31.173122,513.78234 51.871052,165.94772 z;m 52,26 1364,4 c -12.8007,666.9037 -273.2644,483.78234 -322.7299,776 l -633.90062,0 C 359.32034,432.49318 -6.6979288,733.83462 52,26 z;m 0,0 1439.999975,0 0,805.99999 -1439.999975,0 z"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="100%"
		viewBox="0 0 1440 806"
		preserveAspectRatio="none"
	>
		<path class="overlay-path" d="m 701.56545,809.01175 35.16718,0 0,19.68384 -35.16718,0 z" />
	</svg>
	<button type="button" class="overlay-close overlay-close-btn">Close</button>
	<nav>
		<ul>
			<li><a href="/" class="overlay-close-btn">Home</a></li>
			<li><a href="/portfolio" class="overlay-close-btn">Portfolio</a></li>
			<li><a href="/store" class="overlay-close-btn">Store</a></li>
			<li><a href="/contact" class="overlay-close-btn">Contact me</a></li>
		</ul>
	</nav>
</div>

<style>
	.navigation {
		/*position:absolute;
	z-index:999999;	
	left:0;
	right:0;*/

		border-bottom: 1px solid #dedede;
	}
	.navigation ul.links {
		padding: 0px;
		margin: 0px;
		text-align: right;
	}
	.navigation ul.links li {
		display: inline-block;
	}
	.navigation ul.links li a {
		font-size: 18px;
		color: #808080;
		padding-left: 20px;
	}
	.shop_cart a {
		position: relative;
	}
	.shop_cart a span {
		display: block;
		position: absolute;
		top: -2px;
		right: -12px;
		font-size: 12px;
		color: #fff;
		width: 18px;
		height: 18px;
		line-height: 18px;
		text-align: center;
		background-color: #b39500;
		border-radius: 50%;
	}
	/* .shop_cart a i.icon-bag {
	} */
	.normal {
		padding-top: 40px;
		padding-bottom: 40px;
		background: rgba(255, 255, 255, 0);
		position: fixed;
		top: 0px;
		width: 100%;
		z-index: 999999;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		-webkit-transition: all 0.3s ease;
		transition: all 0.3s ease;
	}
	.normal.inner {
		background: rgba(242, 242, 242, 1);
		position: static !important;
	}
	:global(.sticky) {
		padding-top: 20px;
		padding-bottom: 20px;
		position: fixed;
		top: 0px;
		background: rgba(242, 242, 242, 1);
		width: 100%;
		z-index: 999999;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		-webkit-transition: all 0.3s ease;
		transition: all 0.3s ease;
	}
</style>
