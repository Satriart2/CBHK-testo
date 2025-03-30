// togle
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamb-menu').onclick = () =>{
    navbarNav.classList.toggle('active')
};

// click outside

const hamburg = document.querySelector('#hamb-menu')

document.addEventListener('click', function(e){
    if(!hamburg.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }
});