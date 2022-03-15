<script>
	import Button from './button.svelte';
	import Icon from './icon.svelte';
	import Socials from './socials.svelte';
</script>

<footer class="parallax-1">
	<!-- Social Media Starts -->
	<Socials />
	<!-- Social Media Ends -->
	<!-- Contact Info Starts -->
	<div class="contact-info">
		<div class="container mx-auto">
			<div class="flex flex-wrap justify-between">
				<!-- Address Starts -->
				<div
					class="lg:w-1/4 pr-4 pl-4 md:w-1/4 pr-4 pl-4 sm:w-1/4 pr-4 pl-4 border-b sm:border-none pb-12 sm:pb-0.5 flex-grow overflow-hidden min-w-0"
				>
					<div class="footer-logo max-w-64">
						<img src="/images/logo.jpg" class="img-responsive rounded-lg" alt="" />
					</div>
					<address>
						<div class="flex pb-6">
							<Icon name="location-pin" />
							<strong class="not-italic pl-2"> 304 Kicking Horse Ave, V0A 1G0, Field, BC </strong>
						</div>
						<div class="flex items-center">
							<Icon name="phone" />
							<div class="not-italic pl-2"><a href="tel:+12503448291">250 344 8291</a></div>
						</div>
						<div class="flex items-center">
							<Icon name="envelope" />
							<div class="not-italic pl-2 truncate">
								<a href="mailto:info@chapmanphotography.ca">info@chapmanphotography.ca</a>
							</div>
						</div>
					</address>
					<div class="about">
						Feel free to get in touch with me for any inquiries or just to say hello.
					</div>
				</div>
				<!-- Address Ends -->
				<!-- Get in Touch Starts -->
				<div
					class="lg:w-2/5 pr-4 pl-4 md:w-2/5 pr-4 pl-4 sm:w-2/5 pr-4 pl-4 get-in-touch flex-grow max-w-xl"
				>
					<h1>Get in Touch</h1>
					<form action="process.php" method="post" name="ContactForm" id="ContactForm">
						<div class="mb-4">
							<input
								type="email"
								class="block appearance-none w-full py-1 outline-none focus:border-gray-700 px-2 mb-1 text-base leading-normal bg-white text-gray-700 border border-gray-300 rounded-2xl"
								name="email"
								placeholder="Email *"
							/>
						</div>
						<textarea
							rows="5"
							class="block appearance-none w-full py-1 outline-none focus:border-gray-700 px-2 mb-1 text-base leading-normal bg-white text-gray-700 border border-gray-300 rounded-2xl"
							name="comment"
							placeholder="Your Message *"
						/>
						<div id="message_post" />
						<Button color="fill">Submit</Button>
					</form>
				</div>
				<!-- Get in Touch Ends -->
			</div>
		</div>
	</div>
	<!-- Contact Info Ends -->
	<!-- Copyright Starts -->
	<div class="copyright bg-gray-200 border-t border-gray-300">
		<div class="container mx-auto">
			<div class="flex flex-wrap">
				<div class="lg:w-2/3 pr-4 pl-4 md:w-2/3 pr-4 pl-4 sm:w-2/3 pr-4 pl-4">
					© 2022 Craig Chapman Photography
				</div>
			</div>
		</div>
	</div>
	<!-- Copyright Starts -->
</footer>

<style>
	footer .contact-info {
		padding-top: 120px;
		padding-bottom: 120px;
	}
	footer .contact-info .footer-logo {
		padding-bottom: 50px;
	}
	footer .contact-info address strong {
		font-size: 16px;
		color: #b2b2b2;
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 3px;
	}
	footer .contact-info address a {
		font-size: 12px;
		color: #666666;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 3px;
		padding-top: 4px;
		padding-bottom: 4px;
	}
	footer .contact-info address a:hover {
		color: #b39500;
	}
	footer .contact-info address .phone {
		padding-top: 18px;
	}
	footer .contact-info .about {
		font-size: 14px;
		color: #808080;
		padding-top: 20px;
	}
	footer .get-in-touch h1 {
		padding: 0px;
		margin: 0px;
		font-size: 16px;
		color: #999999;
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 3px;
		padding-bottom: 50px;
	}
	footer .get-in-touch form {
		padding-top: 0px;
	}
	footer .get-in-touch form .form-control {
		display: block;
		width: 100%;
		height: 50px;
		padding: 22px;
		font-size: 14px;
		line-height: 1.42857143;
		color: #999;
		background-color: transparent;
		background-image: none;
		border: 1px solid #808080;
		border-radius: 26px;
		-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
		-webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
		-o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
		transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
		letter-spacing: 3px;
		text-transform: uppercase;
	}
	footer .get-in-touch form .form-control {
		width: 100%;
	}
	footer .get-in-touch form textarea {
		min-height: 100px;
	}
	footer .get-in-touch form .btn-default {
		color: #808080;
		background-color: transparent;
		border-color: #808080;
	}
	footer .get-in-touch form .btn-default:hover {
		color: #fff;
		background-color: #b39500;
		border-color: #b39500;
	}
	footer .get-in-touch form .btn {
		margin-top: 20px;
		display: inline-block;
		padding: 14px 30px;
		margin-bottom: 0;
		font-size: 14px;
		font-weight: 400;
		line-height: 1.42857143;
		text-align: center;
		white-space: nowrap;
		vertical-align: middle;
		-ms-touch-action: manipulation;
		touch-action: manipulation;
		cursor: pointer;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		background-image: none;
		border: 1px solid #808080;
		border-radius: 26px;
		letter-spacing: 3px;
	}
	footer .copyright {
		padding-top: 60px;
		padding-bottom: 60px;
	}
	footer .copyright {
		font-size: 12px;
		color: #808080;
		text-transform: uppercase;
		letter-spacing: 3px;
		line-height: normal;
	}
	footer .copyright .created-by {
		text-align: right;
	}
	footer .copyright .created-by a {
		color: #808080;
	}
	footer .copyright .created-by a:hover {
		color: #b39500;
	}
</style>
