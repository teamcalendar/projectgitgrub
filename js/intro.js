
window.onbeforeunload = () => {
    window.localStorage.setItem('userData', JSON.stringify(userData));
};

var chefSelect = document.getElementById('chef-select');

// wrong data structure, use an object:
const user = {
    name: 'user name',
    avatar: 'image src',
    round: 1,
    score: 0
};

var userData = [];
userData[0] = 'image location';
userData[1] = 'user name';
userData[2] = 1;
userData[3] = 0;

chefSelect.addEventListener('click', collectChefChoice);
function collectChefChoice(event) {
    event.preventDefault();
    var playerChef = event.target.src;
    // just set the index, no need to splice
    userData[0] = playerChef;
}

var playerName = document.getElementById('player-name');
playerName.addEventListener('submit', playerNameSubmit);
function playerNameSubmit(event) {

    // Cannot advance if a character isn't selected 
    if(userData[0] === 'image location'){
        event.preventDefault();
        alert('Please click on a character.');
    }
    // Move on if character selected
    else {
        event.preventDefault();
        var userName = event.target.username.value;
        userData[1] = userName;
        // this will prevent back button from going back to this page
        window.location.replace('gameapp.html');
        // normal navigation:
        // window.location = 'gameapp.html';
    }
}



