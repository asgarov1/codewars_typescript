export function duplicateEncode(word: string): string{
    const duplicateChars = [];
    for (let i = 0; i < word.length; i++) {
        for (let j = i+1; j < word.length - 1; j++) {
            if(word[i].toLowerCase() === word[j].toLowerCase()) {
                duplicateChars.push(word[i].toLowerCase());
                break;
            }
        }
    }

    let result = '';
    for (let i = 0; i < word.length; i++) {
        if(duplicateChars.includes(word[i].toLowerCase())) {
            result += ')';
        } else {
            result += '(';
        }
    }
    return result;
}

console.log(duplicateEncode("din") === "(((");
console.log(duplicateEncode("recede") === "()()()");
console.log(duplicateEncode("Success") === ")())())");
console.log(duplicateEncode("(( @") === "))((");