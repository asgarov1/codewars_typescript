export function greet(name: string, owner: string): string{
    return 'Hello ' + (name == owner ? 'boss' : 'guest');
}

console.log(greet('Daniel', 'Daniel') == 'Hello boss');
console.log(greet('Greg', 'Daniel') == 'Hello guest');