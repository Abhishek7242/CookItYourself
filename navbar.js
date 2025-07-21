const hamburger = document.getElementById('hamburger-menu');
const container = document.getElementById('mobile-nav-container');
const navMenu = document.querySelector('.mobile-nav-menu');
let nav=false
hamburger.onclick = function () {
    this.classList.toggle('active');
    if (nav) {
        nav=false
        navMenu.classList.toggle('open');
        setTimeout(() => {
            container.classList.remove('open');

        }, 800);
    } else {
        nav=true
        container.classList.add('open');
        setTimeout(() => {
            navMenu.classList.toggle('open');

        }, 100);
    }
  
};
