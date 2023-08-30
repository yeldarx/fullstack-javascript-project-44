import readlineSync from 'readline-sync';
// import { wA } from '../games/even.js';

console.log('Welcome to the Brain Games!');

export const readlineSy = () => {
    let username = readlineSync.question(`May I have your name? `);
    console.log('Hello, ' + username + '!');
    return { username };
}

// const result = readlineSy();

// export const final = () => {
//     if (wA === 3) {
//         console.log(`Congratulations, ${result.username}!`)
//     } else {
//         console.log(`Let's try again, ${result.username}!`)
//     }
// }
