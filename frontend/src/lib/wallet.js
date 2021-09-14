
const ethereum = window.ethereum

function isMetamask(){
    if (typeof ethereum !== 'undefined') {
        return true;
    } else {
        return false;
    }
}

export default {isMetamask}