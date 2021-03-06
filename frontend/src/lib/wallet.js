
const ethereum = window.ethereum;

function isMetamask(){
    if (typeof ethereum !== 'undefined') {
        return true;
    } else {
        return false;
    }
}

function connect(){
    return ethereum.request({ method: 'eth_requestAccounts' });
}

function isConnected() {
    if(isMetamask()){
        return ethereum.isConnected()
    }else {
        return false;
    }
}

const getSelectedAddress = () => ethereum.selectedAddress;

async function sendTx(){
    const TxParams = {
        nonce: '0x00', // ignored by MetaMask
        gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
        gas: '0x2710', // customizable by user during MetaMask confirmation.
        to: '0x0000000000000000000000000000000000000000', // Required except during contract publications.
        from: ethereum.selectedAddress, // must match user's active address.
        value: '0x00', // Only required to send ether to the recipient from the initiating external account.
        data:
        '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
        chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
    };
    const txParams = {
        nonce: TxParams.nonce,
        from : TxParams.from,
    }
    // txHash is a hex string
    // As with any RPC call, it may throw an error
    const txHash = await ethereum.request({
        method: 'eth_sendTransaction',
        params: [txParams],
    });
    return txHash;
}

export default {ethereum, getSelectedAddress, isMetamask, connect, isConnected, sendTx}