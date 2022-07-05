const multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - return a new array where the numbers have been multiplied

    numbers: [1, 2, 3],
    multiplyBy: 3,
    multiply(multiplyBy) {
        return this.numbers.map(number => number * multiplyBy);
    },
};

console.log(multiplier.multiply(2));