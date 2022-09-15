let menu = document.querySelector('.header__menuBar');
let x = document.querySelector('.header__menuBar__x');
let hamburger = document.querySelector('.header__navBar__menuIcon');
let overlay = document.querySelector('.header__overlay');
let hasChildren = document.querySelectorAll('.hs-item-has-children');
let inMenuList = document.querySelectorAll('.hs-menu-children-wrapper');
let navBar = document.querySelector('.header__navBar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        navBar.classList.add('backgroundNav');
    } else {
        navBar.classList.remove('backgroundNav');
    }
});

hamburger.addEventListener('click', () => {
    menu.classList.remove('moveBarRight');
    menu.classList.add('moveBarLeft');
    overlay.classList.remove('hideOverlay');
    overlay.classList.add('showOverlay');
});

x.addEventListener('click', () => {
    menu.classList.remove('moveBarLeft');
    menu.classList.add('moveBarRight');
    overlay.classList.remove('showOverlay');
    overlay.classList.add('hideOverlay');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('moveBarLeft');
    menu.classList.add('moveBarRight');
    overlay.classList.remove('showOverlay');
    overlay.classList.add('hideOverlay');
});

hasChildren.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('rotateChev');
        inMenuList.forEach(e => {
            e.classList.toggle('moveOptionsDown');
        });
    });
});
