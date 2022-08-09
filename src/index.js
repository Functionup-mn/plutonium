const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
// AssignmentD21
app.get("/sol1", function (req, res) {
    let arr= [1,2,3,5,6,7]
     
    let total = 0;
    for (let i=0; i<arr.length;i++){
        total = total + arr[i]
    }
    let lastDigit= arr.pop()
    let consecutiveSum= (lastDigit * (lastDigit+1)) / 2
    let missingNumber= consecutiveSum - total
    
    res.send(  { data: missingNumber  }  );
    });
