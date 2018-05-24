console.log('highscore.js is loading properly');
'use strict';
/* exported clearHighScoresArray */



// bring in the player name and scores array
let highScoresArray = [
    { playerName: "John", score: 125 },
    { playerName: "Kathy", score: 500 },
    { playerName: "Kenneth", score: 375 }
];

console.log('highScoresArray prior to sort: ', highScoresArray);

// sort array on score (high to low)



var bubbleSort = function(highScoresArray, score) {
    let swapped = true;
    while(swapped === true) {
        swapped = false;
        for(let i = 1; i < highScoresArray.length; i++) {
            if(highScoresArray[i - 1].score < highScoresArray[i].score) {
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

highScoresArray = bubbleSort(highScoresArray, this.score);
console.log(highScoresArray);

// render array items to table

let selectTableBody = document.getElementsByTagName('tbody')[0];
console.log(selectTableBody);
for(var i = 0; i < highScoresArray.length; i++) {
    let tRow = document.createElement('tr');
    selectTableBody.appendChild(tRow);
    let child1 = document.createElement('td');
    child1.textContent = highScoresArray[i].playerName;
    tRow.appendChild(child1);

    let child2 = document.createElement('td');
    child2.textContent = highScoresArray[i].score;
    tRow.appendChild(child2);
}



//reset high-scores function
let clearHighScoresArray = function(){
    selectTableBody.remove();
    // highScoresArray = 0;
};
