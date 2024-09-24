const sumAll = function(...numbersToSum) {
    let sum = 0;
    // only allow positive and integer numbers
    if (numbersToSum.some(num => num < 0 || !Number.isInteger(num))) {
        return 'ERROR';
    }
    for (let i = Math.min(...numbersToSum); i <= Math.max(...numbersToSum); i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
