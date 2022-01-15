interface WordScore {
    word: string,
    score: number
}

export const high = (str: string): string => {
  return str.split(' ')
    .map(word => countScore(word))
    .reduce((a,b) => a.score >= b.score ? a : b)
    .word;
}

const countScore = (word: string): WordScore => {
    const score = word.split('').map(letter => letter.charCodeAt(0)-96).reduce((a,b) => a+b);
    return { word, score };
}

console.log(high('man i need a taxi up to ubud') === 'taxi');
console.log(high('what time are we climbing up the volcano') === 'volcano');
console.log(high('take me to semynak') === 'semynak');
console.log(high('massage yes massage yes massage') === 'massage');
console.log(high('take two bintang and a dance please') === 'bintang');
console.log(high('aa b') === 'aa');
console.log(high('b aa') === 'b');
console.log(high('bb d') === 'bb');
console.log(high('d bb') === 'd');
console.log(high('aaa b') === 'aaa');