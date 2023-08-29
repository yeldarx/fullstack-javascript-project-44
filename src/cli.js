import readlineSync from 'readline-sync';

export const readlineSy = (username) => {
    username = readlineSync.question(`May I have your name? `);
    console.log('Hello, ' + username + '!');
}
