const readlineSync = require("readline-sync");
const chalk = require("chalk");


var score=0;
var level=0;
var repeat="y";
var red = chalk.bold.red;
var green = chalk.green;
var cyan = chalk.bold.cyanBright;
var blue = chalk.bold.blueBright;
var yellow = chalk.yellow;
var userName = readlineSync.question("What is your name? ");


var highScores = [
  {
    name:"Apurva",
    score:10
  },
  {
    name:"Shraddha",
    score:9
  },
  {
    name:"Asha",
    score:4
  },
  {
    name:"Shiv",
    score:3
  },
  {
    name:"Dhruv",
    score:2
  }
];

var BollywoodL1 = [
  {
    question:"Bade bade shehron mein aisi chhoti chhoti baatein hoti rehti hain!!",
    answer:"b", a:"Anupam Kher", b:"Shahrukh Khan", c:"Varun Dhawan"
  },
  {
    question:"Utha le re baba!!!",
    answer:"a", a:"Paresh Rawal", b:"Sunil Shetty", c:"Johnny Lever"
  },
  {
    question:"How’s the josh?",
    answer:"a", a:"Vicky Kaushal", b:"Paresh Rawal", c:"Mohit Raina"
  },
  {
    question:"Ek baar jo maine commitment kar di, fir main apne aap ki bhi nahi sunta.",
    answer:"c", a:"Ranveer Singh", b:"Varun Dhawan", c:"Salman Khan"
  },
  {
    question:"Basanti, inn kutton ke saamne mat naachna!!",
    answer:"b", a:"Amitabh Bachchan", b:"Dharmendra", c:"Amjad Khan"
  },
  {
  question:"Mhari choriya chhoro se kam hai kay!!",
  answer:"c", a:"Salman Khan", b:"Ranveer Singh", c:"Amir Khan"
  }
]

var BollywoodL2 = [
  {
  question:"Mere paas maa hai.",
  answer:"a", a:"Deewar", b:"Kaalia", c:"Laawaris"
  },
  {
  question:"Tension lene ka nahi, sirf dene ka.",
  answer:"c", a:"Dabangg", b:"Rowdy Rathore", c:"Munna Bhai MBBS"
  },
  {
  question:"Tumse naa ho payega.",
  answer:"a", a:"Gangs Of Wasseypur", b:"Gully Boy", c:"Don"
  },
  {
  question:"Pushpa, I hate tears…",
  answer:"a", a:"Amar Prem", b:"Maine Pyaar Kiya", c:"Yaadon Ki Baraat"
  },
  {
  question:"Sara shehar mujhe lion ke naam se jaanta hai.",
  answer:"c", a:"Rangeela", b:"Damini", c:"Kalicharan "
  },
  {
  question:"Hum jahan khade hote hain line yahi se shuru hoti hai.",
  answer:"b", a:"Chaalbaaz", b:"Kaalia", c:"Masaan"
  }
]

console.log(green("\nWelcome to the Entertaiment Quiz " + userName +" !"));
  
function rules(){
  console.log(blue("\nLet's understand the rules: "));
  console.log("\n1. Type the option number as your answer. (eg. Your answer: a/b/c)\n\n2. Every level has 6 questions, answer 5 to move to the next level. ")

  var enter=readlineSync.question(yellow("\nPress Enter to Continue: "));
  //press Enter to continue (blank string input)
}


function play(question,answer,a,b,c)
{
  var userAnswer = readlineSync.question
  ("\n" + cyan(question) + "\n\na. " + a + "\nb. " + b + "\nc. " + c + "\n\nYour answer: ");

  if(answer.toUpperCase() === userAnswer.toUpperCase())
  {
    score++;
    console.log("\nYou are" + green(" right!"));
    console.log("Your score is : ", score);
  }
  else
  {
    console.log("\nYou are" + red(" wrong!"));
    console.log("Your score is : ", score);
  }
  console.log("_____________________________________________________________________")
}

function askQuestion(currentArray)
{
  for(var i=0;i<currentArray.length;i++)
  {
    play(currentArray[i].question,currentArray[i].answer,currentArray[i].a,currentArray[i].b,currentArray[i].c)
  }
}


function finalScores(userScore)
{
  for(var j=0;j<highScores.length;j++)
  {
    if(userScore>highScores[j].score)
    {
      var min=highScores[0].score;
      var lowestElement=0;
      for(var i=0;i<highScores.length;i++)
      {
          if(highScores[i].score<min)
          {
            min=highScores[i].score;
            lowestElement=i
          }
      }
      console.log("\n*********************************************************************")
      console.log(green("\t\t\t\tYayyyy!!! You made it to the Top 5"))
      console.log("*********************************************************************")
      highScores[lowestElement].name=userName;
      highScores[lowestElement].score=userScore;
      break;
    }
  }
}

function showHighScores()
{
  console.log("\n=====================================================================")
  console.log(cyan("\n\t\t\t\t\tCheck out the Top 5 Scores: "))
  for(var i=0;i<highScores.length;i++)
  {
    console.log("\nName: " + highScores[i].name + "\nScore: " + highScores[i].score);
  }
}

while(repeat==="y")
{
  score=0;
  console.log("\n---------------------------------------------------------------------")
  console.log(cyan("\t\t\t\t\t\tEntertaiment Quiz"))
  console.log("---------------------------------------------------------------------")
  rules();
  console.log("\n---------------------------------------------------------------------")
  console.log("\t\t\t\tLevel 1 : Guess who said the below dialoges")
  console.log("---------------------------------------------------------------------")
  askQuestion(BollywoodL1);
  console.log("\n\t\t\t\t\t\tYour score is: " + score);
  console.log("---------------------------------------------------------------------")
    
  if(score>=5)
  {
    console.log("\n*********************************************************************")
    console.log(green("\t\t\t\tYayyyy!!! You made it to Level 2. \n\tLet's see if you could win this game. It's gonna be tough now!"))
    console.log("*********************************************************************")
    console.log("\n---------------------------------------------------------------------")
    console.log("Level 2 : Identify the movie in which the below dialoges were said")
    console.log("---------------------------------------------------------------------")
    console.log
    askQuestion(BollywoodL2)
    console.log("\n\t\t\t\t\t\tYour score is: " + score);
    console.log("---------------------------------------------------------------------")
    
  }
  else
  {
    console.log(red("\t\t\tSorry, we cannot take you to the next level. "))
  }
  console.log("---------------------------------------------------------------------")
  console.log("Exit the game to check out the highest scores")
  var repeat = readlineSync.question("\nWanna try it again?? [y/N]:  ");
}
finalScores(score);
showHighScores();