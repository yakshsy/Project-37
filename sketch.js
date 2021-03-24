var canva, background;
var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, Quiz;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  Quiz = new Quiz();
  Quiz.getState();
  Quiz.start();
}


function draw(){
  background("pink");
 if(contestantCount === 4){
   Quiz.updata(1);
 }
  if(gameState === 1){
    clear();
    Quiz.play();
  }
}