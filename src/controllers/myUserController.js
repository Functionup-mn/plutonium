const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');
const myUserModel = require("../models/myUserModel")

const createNewUser = async function(req, res){
    let data = req.body;
    let savedData = await myUserModel.create(data);
    console.log(req.newAttribute);
    res.send({msg: savedData});
};

const loginNewUser = async function(req, res){
    let userName = req.body.emailId
    let password = req.body.password
    let newUser = await myUserModel.findOne({emailId: userName , password: password})
    if(!newUser){
        return res.send({msg: 'userName or password is not correct', status: false})
    }

    let token = jwt.sign(
        {
            userId: newUser._id.toString(),
            batch: "Plutonium",
            organization: "FunctionUp",
            day: "Sunday",
            month: "August",
            year: "2022"
        },
        "functionup-plutonium-very-very-secret-my-key"
    ); 
    res.setHeader("x-auth-token", token)
    res.send({status:true, token: token})
}

const getNewUserData = async function(req, res){
    let token = req.headers["x-Auth-token"]
    if(!token) token = req.headers["x-auth-token"];

    if(!token) return res.send({status: false, msg: "token must be present"})

    console.log(token)

    let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-my-key")
    if(!decodedToken)  return res.send({status: false, msg: "token is invalid"})

    let newUser = req.params.userId
    let newUserDetail = await myUserModel.findById(newUser)

    if(!newUserDetail)
    return res.send({ststus: false, msg:"No such user exist"})

    res.send({status: true, msg: newUserDetail})
};

const updateNewUser = async function(req, res){
    let userId = req.params.userId;
    let newUser = await myUserModel.findById(userId);

    if (!newUser) {
      return res.send("No such user exists");
    }
  
    let newUserData = req.body;
    let updatedNewUser = await myUserModel.findOneAndUpdate({ _id: userId }, newUserData);
    res.send({ status: true , data: updatedNewUser });
  };


module.exports.createNewUser = createNewUser
module.exports.loginNewUser = loginNewUser
module.exports.getNewUserData = getNewUserData
module.exports.updateNewUser = updateNewUser