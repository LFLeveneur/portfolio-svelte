<script>
import Hero from "$lib/components/Hero.svelte";
import About from "$lib/components/section/About.svelte";
import Projects from "$lib/components/section/Projects.svelte";
import Services from "$lib/components/section/Services.svelte";
import Contact from "$lib/components/section/Contact.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Hero />
	<About />
	<Services />
	<Projects />
	<Contact />
</section>

<style>

</style>
