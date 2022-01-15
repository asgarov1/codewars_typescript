export const towerBuilder = (nFloors: number): string[] => {
    const result = [];
    for (let i = 1; i <= nFloors; i++) {
        const sideSection = " ".repeat(nFloors - i);
        const starsSection = "*".repeat(2*i - 1);
        
        result.push(sideSection + starsSection + sideSection);
    }
    return result;
}

console.log(JSON.stringify(towerBuilder(1)) === JSON.stringify(["*"]));
console.log(JSON.stringify(towerBuilder(2)) === JSON.stringify([" * ","***"]));
console.log(JSON.stringify(towerBuilder(3)) === JSON.stringify(["  *  "," *** ","*****"]));