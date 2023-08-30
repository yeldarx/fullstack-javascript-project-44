import readlineSync from 'readline-sync';
import { readlineSy } from '../src/cli.js';

const result = readlineSy();

console.log(`What is the result of the expression?`);

export const calc = () => {

const randomMath = () => {
    const randomNumber = () => {
        return Math.floor(Math.random() * (10 + 1));
    } 
    let number1 = randomNumber();
    let number2 = randomNumber();
    const sings = [
                    [`${number1} + ${number2}`, number1 + number2],
                    [`${number1} - ${number2}`, number1 - number2],
                    [`${number1} * ${number2}`, number1 * number2]
                    ];
    const randomIndex = Math.floor(Math.random() * sings.length);
    return [sings[randomIndex]];
}

let writeAnswers = 0; // дұрыс жауаптар

while (writeAnswers < 3) {
    const [sign] = randomMath();
    let input = readlineSync.question(`Question: ${sign[0]}\nYour answer: `);
    if (input == sign[1]) {
        console.log(`Correct!`);
        writeAnswers += 1;
    } else {
        console.log(`'${input}' is wrong answer ;(. Correct answer was '${sign[1]}'.`);
        writeAnswers += Infinity;
    }
}

if (writeAnswers === 3) {
    console.log(`Congratulations, ${result.username}!`)
} else {
    console.log(`Let's try again, ${result.username}!`)
}

}
