const repeatString = function(string, number) {
    let stringToRepeat = ""
    for (let index = 0; index < number; index++) {
        stringToRepeat += string        
    }
    return stringToRepeat
};

// Do not edit below this line
module.exports = repeatString;
