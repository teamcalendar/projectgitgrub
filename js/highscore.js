'use strict';
/* exported clearHighScoresArray */

let highScoreData = window.localStorage.getItem('highScore');
highScoreData = JSON.parse(highScoreData);



// sort array on score (high to low)

function bubbleSort(array, prop) {
    let swapped = true;
    while(swapped === true) {
        swapped = false;
        for(let i = 1; i < array.length; i++) {
            if(array[i - 1][prop] < array[i][prop]) {
                let temp;
                temp = array[i];
                array[i] = array[i - 1];
                array[i - 1] = temp;
                swapped = true;
            }
        }
    }
    return array;
}

bubbleSort(highScoreData, 'score');
console.log(highScoreData);

// render array items to table

const selectTableBody = document.querySelector('tbody');

for(var i = 0; i < highScoreData.length; i++) {
    let tRow = document.createElement('tr');
    selectTableBody.appendChild(tRow);
    let child1 = document.createElement('td');
    child1.textContent = highScoreData[i].playerName;
    tRow.appendChild(child1);

    let child2 = document.createElement('td');
    child2.classList = 'number-row';
    child2.textContent = highScoreData[i].score;
    tRow.appendChild(child2);
}



//reset high-scores function
let clearHighScoresArray = function(){
    selectTableBody.remove();
    // highScoresArray = 0;
};
