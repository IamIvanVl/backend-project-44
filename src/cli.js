import readlineSync from 'readline-sync'

export default () => {
    const sayName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${sayName}!`);
}

