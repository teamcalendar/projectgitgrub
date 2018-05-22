console.log('menu.js is loading properly');

<<<<<<< HEAD


$(function() {

    var special = ['reveal', 'top', 'boring', 'perspective', 'extra-pop'];
  
    // Toggle Nav on Click
    $('#hearts a').click(function() {
  
        var transitionClass = $(this).data('transition');
    
        if ($.inArray(transitionClass, special) > -1) {
            $('body').removeClass();
            $('body').addClass(transitionClass);
        } else {
            $('body').removeClass();
            $('#site-canvas').removeClass();
            $('#site-canvas').addClass(transitionClass);
        }
    
        $('#site-wrapper').toggleClass('show-nav');
    
        return false;
  
    });
  
});
=======
const menu = document.querySelector('#toggle');  
const menuItems = document.querySelector('#overlay');  
const menuContainer = document.querySelector('.menu-container');  
const menuIcon = document.querySelector('i');  

function toggleMenu(e) {
    menuItems.classList.toggle('open');
    menuContainer.classList.toggle('full-menu');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.add('fa-times');
    e.preventDefault();
}

menu.addEventListener('click', toggleMenu, false);
>>>>>>> master
