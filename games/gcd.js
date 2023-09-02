import readlineSync from 'readline-sync';
import { readlineSy } from '../src/cli.js';
import { randomNumber } from '../src/random-number.js';
import { gcdFucn } from '../src/gcd-func.js';

const result = readlineSy();
console.log(`Find the greatest common divisor of given numbers.`);

export const gcd = () => {
    let writeAnswers = 0;
    let num1 = 0;
    let num2 = 0;

    while (writeAnswers < 3) {
        num1 = randomNumber();
        num2 = randomNumber();
        
        let input = readlineSync.questionInt(`Question: ${num1} ${num2}\nYour answer: `);
        let realgcd = gcdFucn(num1, num2);
        
        if (input == realgcd) {
            console.log("Correct!");
            writeAnswers += 1;
        } else {
            console.log(`'${input}' is wrong answer ;(. Correct answer was '${realgcd}'.`);
            writeAnswers += Infinity;
        }
    }

    if (writeAnswers === 3) {
        console.log(`Congratulations, ${result.username}!`)
    } else {
        console.log(`Let's try again, ${result.username}!`)
    }
};
