import readlineSync from 'readline-sync';

export const rlSync = (username) => {
    username = readlineSync.question('May I have your name?');
    console.log('Hello, ' + username + '!');
}