function highAndLow(numbers: string): string {
    let nums = numbers.split(' ').map(Number);
    return Math.max(...nums) + ' ' + Math.min(...nums);
}


console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4") == "42 -9")