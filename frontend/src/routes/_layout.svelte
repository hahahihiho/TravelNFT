<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte'
	export let segment;
</script>

<style>
	main {
		position: relative;
		background-color: white;
		padding-left: 1rem;
		margin: 0 auto;
		box-sizing: border-box;
		text-align: center;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<Footer/>