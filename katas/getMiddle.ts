export function getMiddle(s: string): string {
    // if(s.length < 3) {
    //     return s;
    // }

    let extraCharacterIndex = s.length%2 ? 0 : 1;
    let startIndex = s.length/2 - extraCharacterIndex;
    return s.substring(startIndex, s.length/2 + 1);
}

console.log(getMiddle("test") == "es");
console.log(getMiddle("testing") == "t");
console.log(getMiddle("middle") == "dd");
console.log(getMiddle("A") == "A");