function sum(...values) { 
    // take pairs of values out of the arrat and add them
    // together ubtil the end is reached, startung at index zero
    return values.reduce((a, b) => a + b, 0)
}

function subtract(...values) { //defaulting the value. remember the reducer function??
    return values.slice(1).reduce((a, b) => a - b, values[0] || 0)
}

function multiply(...values) {
    return values.reduce((a, b) => a * b, 1)
}

function divide(...values) {
    if (values.slice(1).indexOf(0) > -1) {
        throw new Error("Undefined")
    }
    return values.slice(1).reduce((a, b) => a / b, values[0] || 0) 
}

function parse(data) {
    const result = {}

    if(Array.isArray(data.sum)) {
        // using the spread operator takes the array value and 
        //spreads it if out as parameters, like calling sum(data.sum[0]), etc
        result.sum = sum(...data.sum)
    }
    
    if(Array.isArray(data.subtract)) {
        result.subtract = subtract(...data.subtract)
    }

    if(Array.isArray(data.divide)) {
        result.divide = divide(...data.divide)
    }

    if(Array.isArray(data.multiply)) {
        result.multiply = multiply(...data.multiply)
    }


    return result
}


module.exports = {
    sum,
    subtract,
    multiply,
    divide,
    parse
}