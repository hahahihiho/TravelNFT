<script>
    export let src;
    export let item;
    import tx from '../lib/tx_module'
    import InnerModal from '../modals/market_buy/InnerModal.svelte';
    import Modal from '../components/Modal2.svelte';

</script>

<div class="frame">
    <img {src} alt="">
    <div class="button">
        <Modal>
            <InnerModal item = {item}>
                <span>Buy</span>
            </InnerModal>
        </Modal>
    </div>
</div>

<style>
    div.frame{
        position: relative;
        flex: 1 1 15%;
    }
    img{
        position: absolute;
        width: 14rem;
        height: 20rem;
        border-radius: 10px;
    }
    .button {
        cursor: pointer;
        margin-top: 15.5rem;
        margin-left: 35rem;
        position: absolute;
        background-color: deeppink;
        color: white;
        border-radius: 10px;
        border: none;
    }
</style>