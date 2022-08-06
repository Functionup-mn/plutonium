const express = require('express');
const abc = require('../introduction/intro')
const problem1 = require('../logger/logger')
const problem2 = require('../util/helper')
const problem3 = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    console.log()
    problem1.welcome()
    console.log()
    problem2.currntDate()
    problem2.currntMonth()
    problem2.getBatchInfo()
    console.log()
    problem3.func_trim()
    problem3.toLowerCase()
    problem3.toUpperCase()
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason