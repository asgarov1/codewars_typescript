export function sumTriangularNumbers(n:number):number {
    if(n < 0) {
        return 0;
    }
    
    var numbers = [];
    for (var i = 1; i <= n; i++) {
        numbers.push(i);
    }
    numbers.push(0)

    let result = 0;
    for (let i = 0; numbers.length; i+=numbers.shift() || 0) {
        result += i;
    }

    return result;
}

console.log(sumTriangularNumbers(4))
console.log(sumTriangularNumbers(4) === 20);
// console.log(sumTriangularNumbers(6) === 56);
// console.log(sumTriangularNumbers(34) === 7140);
// console.log(sumTriangularNumbers(-291) === 0);
// console.log(sumTriangularNumbers(943) === 140205240);
// console.log(sumTriangularNumbers(-971) === 0);