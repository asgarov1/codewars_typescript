export function chooseBestSum(t: number, k: number, ls: number[]): number | null {
    if(k > ls.length) {
        return null;
    }

    const sums = [];
    for (let i = 0; i < ls.length - 2; i++) {
        for (let j = i + 1; j < ls.length - 1; j++) {
            for (let k = j + 1; k < ls.length; k++) {
                sums.push(ls[i] + ls[j] + ls[k]);
            }
        }
    }

    return sums.filter(x => x <= t).reduce((a: number, b: number) => Math.max(a, b));
}

console.log(chooseBestSum(163, 3, [50, 55, 56, 57, 58]) === 163);
console.log(chooseBestSum(163, 3, [50]) === null);
console.log(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]) === 228);
console.log(chooseBestSum(180, 3, [91, 74, 73, 85, 73, 81, 87]) === 178);