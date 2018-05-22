console.log('app.js is loading properly');

var chefSelect = document.getElementById('chef-select'); 

chefSelect.addEventListener('submit', collectChefChoice);
function collectChefChoice (event) {
    event.preventDefault();
    var playerChef = event.target.src;
    var userName = event.target.value;
    console.log('userName:', userName);
    console.log('userImageChoice: ', playerChef);
}