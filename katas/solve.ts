const regex = /[aeiou]+/;

export function solve(s: string): number {
    return s.split(regex)
        .filter(value => value !== '')
        .map(word => countScore(word))
        .reduce((a, b) => a > b ? a : b);
}

const countScore = (word: string): number => {
    return word.split('')
        .map(letter => letter.charCodeAt(0) - 96)
        .reduce((a, b) => a + b);
}

console.log(solve("zodiac") === 26);
console.log(solve("chruschtschov") === 80);
console.log(solve("khrushchev") === 38);
console.log(solve("strength") === 57);
console.log(solve("catchphrase") === 73);
console.log(solve("twelfthstreet") === 103);
console.log(solve("mischtschenkoana") === 80);
