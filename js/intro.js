

window.onbeforeunload = () => {
    window.localStorage.setItem('userData', JSON.stringify(userData));
};

var chefSelect = document.getElementById('chef-select');


var userData = [];


chefSelect.addEventListener('click', collectChefChoice);
function collectChefChoice(event) {
    event.preventDefault();
    var playerChef = event.target.src;
    console.log('chef file:', playerChef);
    userData.push(playerChef);
}


var playerName = document.getElementById('player-name');
playerName.addEventListener('submit', playerNameSubmit);
function playerNameSubmit(event) {
    event.preventDefault();
    var userName = event.target.username.value;
    userData.push(userName);
    console.log('username:', userName);
    console.log(userData);
    window.location.replace('../index.html');
}



