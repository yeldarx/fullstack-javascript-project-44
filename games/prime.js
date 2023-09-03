import readlineSync from 'readline-sync';
import { readlineSy } from '../src/cli.js';
import { isPrime } from '../src/isPrime.js';

let number  = 0; // рандом сан
let writeAnswers = 0; // дұрыс жауаптар
const randomNumber = () => {
    return Math.floor(Math.random() * (9 + 1));
} 

const result = readlineSy();
console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`);

export const prime = () => {
    while (writeAnswers < 3) {
        number = randomNumber();
        let input = readlineSync.question(`Question: ${number}\nYour answer: `);

        if (isPrime(number) === true && input === 'yes' || isPrime(number) === false && input === 'no') {
            console.log('Correct!');
            writeAnswers += 1;
        } else {
            console.log(`'${input}' is wrong answer ;(. Correct answer was 'no'.`);
            writeAnswers += Infinity;
        }
    }
    if (writeAnswers === 3) {
        console.log(`Congratulations, ${result.username}!`)
    } else {
        console.log(`Let's try again, ${result.username}!`)
    }
}
