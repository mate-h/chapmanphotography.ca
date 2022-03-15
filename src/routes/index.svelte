<script>
	import Navigation from '$lib/navigation.svelte';
	import TitleSection from '$lib/title-section.svelte';
	import TitleSlide from '$lib/title-slide.svelte';
	import ContentSection from '$lib/content-section.svelte';
	import Icon from '$lib/icon.svelte';
	import ServicesSection from '$lib/services-section.svelte';
	import PhotoSection from '$lib/photo-section.svelte';
	import ProgressBar from '$lib/progress-bar.svelte';
	import PortfolioSection from '$lib/portfolio-section.svelte';
	import PhotoTitle from '$lib/photo-title.svelte';
	import Service from '$lib/service.svelte';
	import Review from '$lib/review.svelte';
	import ReviewsSection from '$lib/reviews-section.svelte';
	import StatsSection from '$lib/stats-section.svelte';
	import StatItem from '$lib/stat-item.svelte';
	import Footer from '$lib/footer.svelte';
</script>

<svelte:head>
	<title>Craig Chapman Photography - Home</title>
</svelte:head>

<Navigation />
<TitleSection>
	<TitleSlide index={0} image="/images/cathedral-mountain.jpeg">
		<h1 slot="title">Craig Chapman photography</h1>
		<p slot="description">Quality and Creativity</p>
		<span slot="button">Contact me</span>
	</TitleSlide>
	<TitleSlide index={1} image="/images/cathedral-mountain.jpeg">
		<h1 slot="title">Slide 2</h1>
		<p slot="description">Slide 2 description</p>
		<span slot="button">Button 2</span>
	</TitleSlide>
</TitleSection>
<ContentSection>
	<Icon slot="icon" name="camera" />
	<h1 slot="title">
		My <span class="text-primary-default">story</span>
	</h1>
	<div slot="description">
		I always loved the camera. At age 14 I started shooting with my trusty Yashica, a camera I still
		use, and never looked back. I love the process of capturing a moment in time and preserving it
		for future generations. I strive for quality and creativity in my photography. I want my images
		to tell a story and evoke an emotion in the viewer. I specialize in portrait, landscape and
		commercial photography, but I also enjoy shooting videos.
	</div>
</ContentSection>

<ServicesSection>
	<h1 slot="title"><span class="text-white text-opacity-60">Photography</span> Services</h1>
	<p slot="description">
		I offer portrait, wedding, landscape, and commercial photography services. I strive for quality
		and creativity in my work, and I want my images to tell a story and evoke an emotion in the
		viewer.
	</p>
	<span slot="button"> Hire me! </span>
	<svelte:fragment slot="services">
		<Service image="/images/jordy-looking-down.jpeg" title="Portrait Photography" />
		<Service image="/images/sunrise-at-the-pond.jpeg" title="Landscape Photography" />
		<Service image="/images/stars-with-paramedic.jpeg" title="Commercial Photography" />
	</svelte:fragment>
</ServicesSection>

<PhotoSection image="/images/cathedral-mountain.jpeg">
	<h1 slot="title"><span class="text-black text-opacity-30">What I</span> Do</h1>
	<p slot="description">
		Photography is my passion and I love nothing more than capturing a beautiful image. I strive to
		create images that are not only technically perfect, but also evoke a feeling in the viewer. I
		believe that photography is an art form and should be treated as such. I take great care in the
		composition of my images, and strive for technical perfection. I also believe that photography
		should be fun, and that the best pictures are often the ones that are taken spontaneously.
	</p>
	<div class="pt-6">
		<ProgressBar progress={100}>Creative</ProgressBar>
		<ProgressBar progress={80}>Imagination</ProgressBar>
		<ProgressBar progress={90}>Success</ProgressBar>
	</div>
</PhotoSection>

<ReviewsSection>
	<h1 slot="title"><span class="text-black text-opacity-30">Amazing</span> Feedback</h1>
	<p slot="description">
		Overall, customers are happy with the quality of my photography and the fact that I am able to
		capture the feeling they are looking for in an image.
	</p>
	<span slot="button">Visit store</span>

	<Review name="Ian T. / Director of Communications at APBC" image="/images/slider/thumbs/1.jpg">
		Wow, these pictures are amazing! You have a real talent for capturing the feeling of a moment.
	</Review>
	<Review name="Eva G. / Wedding Client" image="/images/slider/thumbs/1.jpg">
		Thank you so much for the beautiful photos you took of our wedding. We will cherish them
		forever.
	</Review>
</ReviewsSection>

<PortfolioSection>
	<PhotoTitle
		image="/images/jordy-looking-down.jpeg"
		title="Jordy Looking Down"
		description="Portrait Photography"
	/>
	<PhotoTitle
		image="/images/sunrise-at-the-pond.jpeg"
		title="Sunrise at the Pond"
		description="Landscape Photography"
	/>
	<PhotoTitle
		image="/images/cathedral-mountain.jpeg"
		title="Cathedral Mountain"
		description="Landscape Photography"
	/>
	<PhotoTitle
		image="/images/stars-with-paramedic.jpeg"
		title="Stars with Paramedic"
		description="Commercial Photography"
	/>
</PortfolioSection>

<StatsSection>
	<StatItem count={355944}>Photos</StatItem>
	<StatItem count={395}>Coffees</StatItem>
	<StatItem count={132}>Clients</StatItem>
	<StatItem count={25}>Years</StatItem>
</StatsSection>

<Footer />
