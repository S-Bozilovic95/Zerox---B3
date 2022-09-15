let images = document.querySelectorAll('.img-hidden');
let arrow = document.querySelector('#arrow');

arrow.addEventListener('click', () => {
    arrow.classList.toggle('activeArrow');
    images.forEach(el => {
        el.classList.toggle('img-show');
    });
});

