const generateOddSeries = (a) => {
    let result = [];

    for (let i = 1; i <= a; i++) {
        result.push(2 * i - 1);
    }
    return result.join(', ');
}

console.log(generateOddSeries(5))
console.log(generateOddSeries(10))