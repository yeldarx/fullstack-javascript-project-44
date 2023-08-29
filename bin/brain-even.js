#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const username = readlineSync.question(`May I have your name? `);

console.log('Hello, ' + username + '!');

console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

const randomNumber = () => {
    return Math.floor(Math.random() * (100 + 1));
} 

let number  = 0; // рандом сан
let writeAnswers = 0; // дұрыс жауаптар

while (writeAnswers < 3) {
    number = randomNumber();

    let input = readlineSync.question(`Question: ${number}\nYour answer: `);

    if (number % 2 === 0) {
        if (input === 'yes') {
            console.log(`Correct!`);
            writeAnswers += 1;
        } else {
            console.log(`'${input}' is wrong answer ;(. Correct answer was 'yes'.`);
            writeAnswers += Infinity;
        }
    } else {
        if (input === 'no') {
            console.log(`Correct!`);
            writeAnswers += 1;
        } else {
            console.log(`'${input}' is wrong answer ;(. Correct answer was 'no'.`);
            writeAnswers += Infinity;
        }
    }
  }

if (writeAnswers === 3) {
    console.log(`Congratulations, ${username}!`)
} else {
    console.log(`Let's try again, ${username}!`)
}
