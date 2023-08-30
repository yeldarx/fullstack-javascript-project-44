import readlineSync from 'readline-sync';
import { readlineSy } from '../src/cli.js';

const result = readlineSy();
console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

export const even = () => {

    const randomNumber = () => {
        return Math.floor(Math.random() * (100 + 1));
    } 

    let number  = 0; // рандом сан
    let writeAnswers = 0; // дұрыс жауаптар

    while (writeAnswers < 3) {
        number = randomNumber();
        let input = readlineSync.question(`Question: ${number}\nYour answer: `);

        if (number % 2 === 0 && input === 'yes' || number % 2 !== 0 && input === 'no') {
                console.log(`Correct!`);
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
