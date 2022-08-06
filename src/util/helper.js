const todaysTopic = "Nodejs module system"

let currntDate = function() {
   console.log("current date is 05") 
}

let currntMonth = function() {
    console.log("current month is August")
}

let getBatchInfo = function() {
    console.log("Plutonium, week03, Day05, the topic being taught today is ", todaysTopic)
}


module.exports.name = todaysTopic
module.exports.currntDate = currntDate
module.exports.currntMonth = currntMonth
module.exports.getBatchInfo = getBatchInfo