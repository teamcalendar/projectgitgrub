console.log('app.js is loading properly');

var chefSelect = document.getElementById('chef-select'); 

chefSelect.addEventListener('click', collectChefChoice);
function collectChefChoice (event) {
    event.preventDefault();
    var playerChef = event.target.src;
    console.log('userImageChoice: ', playerChef);
}


var playerName = document.getElementById('player-name');
playerName.addEventListener('submit', playerNameSubmit);
function playerNameSubmit (event) {
    event.preventDefault();
    var userName = event.target.username.value;
    console.log('userName:', userName);
}

