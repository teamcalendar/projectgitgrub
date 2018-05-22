console.log('highscore.js is loading properly');
'use strict';
/* exported clearHighScoresArray */



// bring in the player name and scores array
let highScoresArray = [
    { name: "John", score: 125 },
    { name: "Kathy", score: 500 },
    { name: "Kenneth", score: 375 }
];

console.log('highScoresArray prior to sort: ', highScoresArray);

// sort array on score (high to low)

let score = 0;

var bubbleSort = function(highScoresArray, score) {
    let swapped = true;
    while(swapped === true) {
        swapped = false;
        for(let i = 1; i < highScoresArray.length; i++) {
            if(highScoresArray[i - 1][score] < highScoresArray[i][score]) {
                let temp;
                temp = highScoresArray[i];
                highScoresArray[i] = highScoresArray[i - 1];
                highScoresArray[i - 1] = temp;
                swapped = true;
            }
        }
    }
    return highScoresArray;
};
highScoresArray =  bubbleSort(highScoresArray, score);
console.log(highScoresArray);

// render array items to table




//reset high-scores function
let clearHighScoresArray = function(){
    highScoresArray = 0;
};
