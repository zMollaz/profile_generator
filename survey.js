const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = ""; let asnwer1 = ""; let asnwer2 = ""; let asnwer3 = "";
let asnwer4 = ""; let asnwer5 = ""; let asnwer6 = ""; let asnwer7 = "";

rl.question('What\'s your name? Nicknames are also acceptable =) ', (answer) => {
  asnwer1 = answer;
  rl.question('What\'s an activity you like doing? ', (answer) => {
    asnwer2 = answer;
    rl.question('What do you listen to while doing that? ', (answer) => {
      asnwer3 = answer;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        asnwer4 = answer;
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          asnwer5 = answer;
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            asnwer6 = answer;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              asnwer7 = answer;
              profile = `${asnwer1} loves listening to ${asnwer3} while ${asnwer2}, devouring ${asnwer5} for ${asnwer4}, prefers ${asnwer6} over any other sport and is amazing at ${asnwer7}.`;
              console.log(profile);
              rl.close();
            });
          });
        });
      });
    });
  });
});