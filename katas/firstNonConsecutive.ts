export function firstNonConsecutive (arr: number[]) : null | number {
    for (let i = 1; i < arr.length; i++) {
        // console.log(arr[i] + ' ' + arr[i-1] + ' ' + i)
        if(arr[i] !== arr[i-1] + 1) {
            return arr[i];
        }        
    }
    return null;
}

console.log(firstNonConsecutive([1,2,3,4,6,7,8]) == 6);
console.log(firstNonConsecutive([4,5,6,7,8,9,11]) == 11);
console.log(firstNonConsecutive([8,9,10,11,12,13,14,15,16,17]) == null);
console.log(firstNonConsecutive([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8]) == null);
console.log(firstNonConsecutive([-5, -4, -3, -2, -1, 0, 2, 3, 4]) == 2);
console.log(firstNonConsecutive([-5, -4, -3, -2, 0, 2, 3, 4]) == 0);
console.log(firstNonConsecutive([1, 2, 3, 4,  5, 6, 7, 8, 9, 10]) == null);