<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1rem;
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

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
	a.current{
		width: calc(100% - 1em);
		height: 2px;
		border-top:2px rgb(255,62,0) solid; ;
		display: block;
		bottom: -1px;
	}
</style>

<nav>
    <ul>
        <li><a class:current={segment===undefined} href="/my">collections</a></li>
        <li><a class:current={segment==="registerUser"} href="/my/registerUser">registerUser</a></li>
        <li><a class:current={segment==="registerAsset"} href="/my/registerAsset">registerAsset</a></li>
    </ul>
</nav>
