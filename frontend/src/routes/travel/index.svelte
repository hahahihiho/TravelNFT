<script>
	import successkid from 'images/successkid.jpg';
</script>

<style>
	h1, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2rem;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5rem 0;
	}

	img {
		width: 100%;
		max-width: 30rem;
		margin: 1rem 0 1rem 0;
	}
	div{
		text-align: center;

	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4rem;
		}
	}
</style>

<svelte:head>
	<title>Index page</title>
</svelte:head>

<div>
	<img src={successkid} alt="successkid">
	<h1>Travel NFT</h1>
	<p>Let's feel free to go travel</p>
	<a href="about" class="btn">About</a>
</div>