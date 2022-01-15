export const digitize = (n: number): number[] => {
    return ('' + n).split('').reverse().map(x => +x);
};

console.log(digitize(35231) == [1,3,2,5,3]);
console.log(digitize(0) == [0]);