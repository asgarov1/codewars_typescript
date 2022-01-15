const msg = ['Player 1 won!', 'Player 2 won!', 'Draw!'];

let SCISSORS = 'scissors';
let PAPER = 'paper';
let ROCK = 'rock';

export function rps(p1: string, p2: string): string {
    let winner = findWinner([p1, p2]);
    return calculateMessage(winner, [p1, p2]);
}

function calculateMessage(winner: string, inputs: string[]): string {
    if(inputs[0] == winner) {
        return msg[0];
    } else if(inputs[1] == winner) {
        return msg[1];
    } else {
        return msg[2];
    }
}

function findWinner(inputs: string[]) {
    if (inputs.includes(SCISSORS) && inputs.includes(PAPER)) {
        return SCISSORS;
    } else if (inputs.includes(PAPER) && inputs.includes(ROCK)) {
        return PAPER;
    } else if (inputs.includes(ROCK) && inputs.includes(SCISSORS)) {
        return ROCK;
    } else {
        return msg[2];
    }
}

console.log(rps('scissors', 'paper') == msg[0]);
console.log(rps('scissors', 'rock') == msg[1]);
console.log(rps('paper', 'paper') == msg[2]);
