const authenticate = function(req, req, next) {
    //check the token in request header
    //validate this token
    let isTokenPresent = req.headers.x-auth-token
    if(!isTokenPresent){
        return res.send({status: false, msg: "token is mandatory in req header"})
    }
    next()
}


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    next()
}


module.exports.authenticate = authenticate