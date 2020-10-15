const menuButton = document.getElementById('menu-button');
const navBg = document.getElementById('nav-bg');
const navContent = document.getElementById('nav-content');

menuButton.addEventListener('click', () => {
    if (navBg.classList.contains('show')) {
        navBg.classList.remove('show')
    } else {
        navBg.classList.add('show')
    }
});

navContent.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link')) {
        navBg.classList.remove('show')
    }
});