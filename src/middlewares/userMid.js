const isFreeMid = function(req, res, next){
   let isfree = req.headers.isfreeappuser
   
     if(!isfree){
    
    return res.send({msg: "isFreeAppUser is mandatory in the hearders"})
}
    isfree=req.body["isFreeAppUser"]
    next()
}

module.exports.isFreeMid = isFreeMid

