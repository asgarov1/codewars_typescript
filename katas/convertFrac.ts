export const convertFrac = (lst: [number, number][]): string => {
    const gcd = (a: number, b: number) : number => a ? gcd(b % a, a) : b;
    let denominator = lst.map(x => x[1]).reduce((a, b) => a * b / gcd(a, b));
    return lst.map(x => '(' + x[0] * (denominator/x[1]) + ',' + denominator + ')').join('')
}

console.log(convertFrac([[1, 2], [1, 3], [1, 4]]) === "(6,12)(4,12)(3,12)");
console.log(convertFrac([[69, 130], [87, 1310], [3, 4]]) === "(18078,34060)(2262,34060)(25545,34060)");
console.log(convertFrac([[1, 2], [4, 5], [3, 4], [6, 9], [7, 10]]) === "(30,60)(48,60)(45,60)(40,60)(42,60)");