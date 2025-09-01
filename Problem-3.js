const generateOddSeriesCustom = (a) => {
    let result = [];
    let count = (a % 2 === 0) ? a - 1 : a;

    for (let i = 1; i <= count; i++) {
        result.push(2 * i - 1);
    }
    return result.join(', ')
}

console.log(generateOddSeriesCustom(7))
console.log(generateOddSeriesCustom(12))