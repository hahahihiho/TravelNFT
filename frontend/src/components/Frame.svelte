<script>
    export let src;
</script>

<div class="frame">
    <img {src} alt="">
</div>

<style>
    div.frame{
        flex: 1 1 15%;
    }
    img{
        width: 15rem;
        height: 20rem;
    }
</style>