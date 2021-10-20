const fs = require('fs');
const data = require('./data.json')

const result = {};

function fillZero(width, num){
    str = String(num)
    return str.length >= width ? str:new Array(width-str.length+1).join('0')+str;//남는 길이만큼 0으로 채움
}


let countryN = 1;
Object.keys(data).forEach((k,i) => {
    let countryCode = fillZero(3,i+1)
    let regions = {};
    data[k].forEach((e,i)=>{regions[fillZero(4,i+1)] = e})
    result[countryCode] = {
        country : k,
        region : regions
    }
})

let table = 'const data = ' + JSON.stringify(result) + '; \n\n export default data;'
fs.writeFile("./countryRegionTable2.js",table,(e)=>console.log(e));

