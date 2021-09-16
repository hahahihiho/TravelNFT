
const ethereum = window.ethereum

function isMetamask(){
    if (typeof ethereum !== 'undefined') {
        return true;
    } else {
        return false;
    }
}

function isConnected() {
    if(isMetamask()){
        return ethereum.isConnected()
    }else {
        return false;
    }
}

export default {isMetamask, isConnected}