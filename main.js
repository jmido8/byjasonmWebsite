
//selects hamburger icon
let mainNav = document.getElementById('js-hamburger');
//selects navbar
let toggleNav = document.getElementById('js-navbar-toggle');

//toggles hamburger navbar open/close
toggleNav.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');

});