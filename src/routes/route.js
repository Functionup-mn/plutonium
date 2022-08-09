const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})
// Problem 1 => solution:
router.get('/movies', function (req, res) {
    let movies = ['3Idiots','Dangal','Tare zameen per','pk','Lal singh chaddha','Ghajini']
    res.send(movies)
})
// Problem 2 => solution:
// router.get('/movies/:indexNumber', function (req, res) {
//     let movies = ['3Idiots','Dangal','Tare zameen per','pk','Lal singh chaddha','Ghajini']
//     let requestParams = req.params
//     //console.log("This is the request "+ JSON.stringify(requestParams))
//     let movieindexNumber  = requestParams.indexNumber
//     console.log('Name of the movie is ', movies[movieindexNumber])
//     // console.log(requestParams)
//     res.send(movies[movieindexNumber])
//})
//Problem 3 => solution:
router.get('/movies/:indexNumber', function (req, res) {
    let movies = ['3Idiots','Dangal','Tare zameen per','pk','Lal singh chaddha','Ghajini']
    let requestParams = req.params
    let movieindexNumber  = requestParams.indexNumber
    let index = 0;
    if(index < movies.length) {   
        console.log('Name of the movie is ', movies[movieindexNumber])    
    }else{
        console.log('Invalid input')
    }
    res.send(movies[movieindexNumber])
})
//Problem 4 => solution:
router.get('/films', function (req, res) {
   let films =[{
      id: 1,
      name: 'Lagan'
   }, {
      id: 2,
      name: 'Mohenjo Daro'
   }, {
      id: 3,
      name: 'Shamshera'
   }, {
      id: 4,
      name: 'KGF'
   }]
   res.send(films)
  
   //Problem 5 => solution:
   router.get('/films/:filmid', function (req, res) {
    let films =[{
        id: 1,
        name: 'Lagan'
     }, {
        id: 2,
        name: 'Mohenjo Daro'
     }, {
        id: 3,
        name: 'Shamshera'
     }, {
        id: 4,
        name: 'KGF'
     }]
     let requestParams = req.params
     let myfims = requestParams.films.length
     console.log(myfims)
     res.sen(myfilms)
   })
})
module.exports = router;