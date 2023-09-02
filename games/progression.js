import readlineSync from 'readline-sync';
import { readlineSy } from '../src/cli.js';
import { progFunc } from '../src/progFunc.js';
import { randomNumber } from '../src/random-number.js';

const result = readlineSy();
let writeAnswers = 0;
let startnum = 0;
let step = 0;
let prognum = 0;
let splicestart = 0;
let writeNum = 0;
let proglength = 0;

console.log(`What number is missing in the progression?`);

export const progression = () => {
    while (writeAnswers < 3) {
        startnum = randomNumber();
        step = randomNumber();

        splicestart = Math.floor(Math.random() * (9));

        proglength = Math.floor(Math.random() * 10) + (5);
        
        prognum = progFunc(startnum, step, proglength);
        
        writeNum = prognum[splicestart];
        
        prognum.splice(splicestart, 1, '..');

        let input = readlineSync.questionInt(`Question: ${prognum.join(" ")}\nYour answer: `);
        
        if (input === writeNum) {
            console.log("Correct!");
            writeAnswers += 1;
        } else {
            console.log(`'${input}' is wrong answer ;(. Correct answer was '${writeNum}'.`);
            writeAnswers += Infinity;
        }
    }

    if (writeAnswers === 3) {
        console.log(`Congratulations, ${result.username}!`)
    } else {
        console.log(`Let's try again, ${result.username}!`)
    }
};
