import data from '../../data/countryRegionTable2';


export function get(req,res,next){
    res.end(JSON.stringify(data));
}
