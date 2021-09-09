<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1rem;
	}

	nav>div{
		display: flex;
		gap:1rem;
	}

	.title{
		flex-shrink: 0;
		width: 30%;
	}
	.search{
		width: 50%;
		flex-shrink: 1
	}
	.nav{
		width:30%;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<div>
		<h1 class="title"><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Kang d'Arc</a></h1>
		<div class="search">
			search
		</div>
		<ul class="nav">
			<li><a aria-current="{segment === 'market' ? 'page' : undefined}" href="market">market</a></li>
			<li><a aria-current="{segment === 'community' ? 'page' : undefined}" href="community">community</a></li>
			<li><a rel=prefetch aria-current="{segment === 'my' ? 'page' : undefined}" href="my">my</a></li>
			<li><a aria-current="{segment === 'wallet' ? 'page' : undefined}" href="wallet">wallet</a></li>
		</ul>
	</div>
</nav>
