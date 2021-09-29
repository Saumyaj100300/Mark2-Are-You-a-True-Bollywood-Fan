var readLineSync=require('readline-sync');
var chalk = require('chalk');
var username=readLineSync.question(chalk.hex('#4acfac')("Hey There!\nPlease enter your name: "));
console.log(chalk.hex('#0f89ca')("Welcome "+username+" , Let's play a quiz about Bollywood.\nEnter a/ b/ c  to answer.\nFor each correct answer you will get two points and for wrong answer one point will be deducted."));
console.log(chalk.grey("______"));
var score=0;



function play(question, answer){
  var userAnser=readLineSync.question(chalk.hex('#1a578f')(question));
   if(userAnser.toUpperCase()==answer.toUpperCase()){
     console.log(chalk.yellowBright("You are right! You get 2 points"));
     score+=2;
   }
   else{
     console.log(chalk.redBright.bold("Oops! You are wrong."));
     score--;
   }
   console.log(chalk.bgBlack("Your score is "+score));
   console.log(chalk.grey("__"));

}

var questions=[ {
  question:"Which cities does Rani visit when she goes on her 'solo' honeymoon in Queen? \na. Paris and Amsterdam! \nb. London and New York \nc. Tokyo and Shanghai \n",
  answer:"a",
},{
  question:"Which movie is this groundbreaking line from:'Teja main hoon, Mark idhar hai'? \na. Hera Pheri \nb. Welcome \nc. Andaz Apna Apna \n",
  answer:"c",


},{
  question:"In Karthik Calling Karthik, who was actually calling Karthik? \na. Kamath \nb. Shonali \nc. Kartik \n",
  answer:"c",
},{
  question:"In Chak De! India, how many minutes, according to coach Kabir Khan, does the team have? \na. 30 \nb. 70 \nc. 50 \n. ",
  answer:"b",
},{
  question:"In Jab We Met, what is the name of Geet's first love? \na. Anshuman \nb. Ayushman \nc. Armaan \n",
  answer:"a",
},{
  question:"From where does Veeru propose to Basanti in Sholay? \na. Roof top \nb. Top of a tree \nc. Top of a water tank \n" ,
  answer:"c",
}
];


for(var i=0;i<questions.length;i++){
  var currques=questions[i];
  play(currques.question,currques.answer);
}

if(score>4) {
console.log(chalk.hex('#DEADED')("Congratulations you are a true Bollywood fan!! ;)"))
}
else  {
  console.log(chalk.yellowBright("Oops! seems like you don't know much about Bollywood :("))
}