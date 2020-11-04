const readline = require('readline');

const r1 = readline.createInterface({input: process.stdin, output: process.stdout}); //create a readline interface, using stdin and stdout as the input/output
const userProfile = {
  name: "",
  activity: "",
  music: "",
  typeMeal: "",
  meal: "",
  sport: "",
  amazing: ""
};

r1.question("what is your name?  ", (answer) => {
  userProfile.name = answer;
  r1.question("what's an activity you like doing?  ", (answer) => {
    userProfile.activity = answer;
    r1.question("what do you listen to while doing that?  ", (answer) => {
      userProfile.music = answer;
      r1.question("which meal is your favourite (eg: dinner, brunch)?  ", (answer) => {
        userProfile.typeMeal = answer;
        r1.question("what's your favourite food?   "  , (answer) => {
          userProfile.meal = answer;
          r1.question("what's your favourite sport?  ", (answer) => {
            userProfile.sport = answer;
            r1.question("what are you amazing at?  ", (answer) => {
              userProfile.amazing = answer;
              console.log('----------------------')
              console.log(`${userProfile.name} loves listening to ${userProfile.music} while ${userProfile.activity}, devouring ${userProfile.meal} for ${userProfile.typeMeal}, prefers ${userProfile.sport} over any other sport, and is amazing at ${userProfile.amazing}.`)
              r1.close();
            })
          })
        })
      })
    })
  })
})








