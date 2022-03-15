<svelte:head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;1,400&family=Poppins:wght@300;500&display=swap"
		rel="stylesheet"
	/>
	<link href="/css/all-stylesheets.css" rel="stylesheet" />
</svelte:head>

<slot />

<style windi:preflights:global windi:safelist:global>
	:root {
		font-family: 'Open Sans', sans-serif;
		font-size: 14px;
		font-weight: 400;
		color: rgba(0, 0, 0, 0.8);
		line-height: 24px;
		background-color: #f2f2f2;
	}
</style>
