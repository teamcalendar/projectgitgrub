console.log('highscore.js is loading properly');
'use strict';
/* exported clearHighScoresArray */



// bring in the player name and scores array
let highScoresArray = [
    { name: "John", score: 125 },
    { name: "Kathy", score: 500 },
    { name: "Kenneth", score: 375 }
];

console.log(highScoresArray);

// sort array on score (high to low)
var highScore = Math.max.apply(Math, highScoresArray);
console.log('the highest score in the array is: ' + highScore);

// render array items to table




//reset high-scores function
let clearHighScoresArray = function(){
    highScoresArray = 0;
};
