export function adjacentElementsProduct(arr: number[]): number {
    let max = arr[0] * arr[1];
    for (let i = 1; i < arr.length -1; i++) {
        max = Math.max(max, arr[i] * arr[i+1]);
    }
    return max;
}

// console.log(adjacentElementsProduct([1, 5, 10, 9]) === 90);
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]));
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]) === -14);