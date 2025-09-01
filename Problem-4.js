const countMultiples = (arr) => {
    let result = {};

    for (let d = 1; d <= 9; d++) {
        result[d] = arr.filter(num => num % d === 0).length;
    }
    return result
}

console.log(countMultiples([1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30]))
console.log(countMultiples([88, 99, 55, 666, 22, 16, 1, 83, 16]))