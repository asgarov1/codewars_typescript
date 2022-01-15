export function sumPairs(ints: number[], s: number): [number, number] | void {
    let options = []

    for (let i = 0; i < ints.length; i++) {
        for (let j = i; j < ints.length; j++) {
            if (i === j) continue;
            if (ints[i] + ints[j] === s) {
                options.push([i, j]);
            }
        }
    }

    const result = options?.reduce((a, b) => Math.max(a[0], a[1]) < Math.max(b[0], b[1]) ? a : b, []);
    if (result.length) {
        return [ints[result[0]], ints[result[1]]];
    }
    return undefined;
}

// Better solution:
export function sumPairs(ints: number[], s: number): [number, number] | void {  
    const seen = new Set();
    for (const n of ints) {
      if (seen.has(s - n)) return [s - n, n];
      seen.add(n);
    }
}