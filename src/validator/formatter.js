const { text } = require("body-parser")

const myBootcamp = "FunctionUp"

function func_trim() {
    let text = "     My bootcamp is     "
    let trimmedtext = text.trim()
    console.log(trimmedtext , myBootcamp)   
}
function toLowerCase() {
    text1 = "FunctionUp"
    let lower = text1.toLowerCase()
    console.log(lower)
}
function toUpperCase() {
     text2 = "functionup"
    let upper = text2.toUpperCase()
    console.log(upper)
}

module.exports.name = myBootcamp
module.exports.func_trim = func_trim
module.exports.toLowerCase = toLowerCase
module.exports.toUpperCase = toUpperCase