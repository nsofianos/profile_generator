const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  answers.push(answer);
  rl.question("What's an activity you like doing? ", (answer) => {
    answers.push(answer);
    rl.question("What do you listen do while you're doing that? ", (answer) => {
      answers.push(answer);
      console.log(`So your name is ${answers[0]}, you like ${answers[1]}, and you listen to listen to ${answers[2]} while doing that!`)
      rl.close();
    });
  });
});

  

