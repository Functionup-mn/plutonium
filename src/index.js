const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

// AssignmentD21
	   //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array

app.get("/sol1", function (req, res) {
    let arr = [1, 2, 3, 5, 6, 7]

    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i]
    }
    let lastDigit = arr.pop()
    let consecutiveSum = (lastDigit * (lastDigit + 1)) / 2
    let missingNumber = consecutiveSum - total

    res.send({ data: missingNumber });
});

// AssignmentD22
//logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..  so get sum of all numbers in array. now take sum 
 // -of n consecutive numbers.. n would be length+1 as 1 number is missing

app.get("/sol2", function (req, res) {
    let arr = [33, 34, 35, 37, 38]
    let len = arr.length

    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i]
    }
    let firstDigit = arr.shift()
    let lastDigit = arr.pop()
    let consecutiveSum = (len + 1) * (firstDigit + lastDigit)/2
    let missingNumber = consecutiveSum - total

    res.send({ data: missingNumber });
});
app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

