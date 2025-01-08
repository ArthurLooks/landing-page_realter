// Mapeando Elementos
const menu = document.querySelector('.nav-bars')
const nav = document.querySelector('.nav_list')

const header = document.getElementsByTagName('header')

const carousel = document.getElementById('carousel')
const slideBtns = document.querySelectorAll('.wrapper i')
const cardWidth = carousel.querySelector('.card').offsetWidth;

// Mobile Menu
const MobileNav = () => {
    if (nav.classList.contains('mobile-nav-list')) {
        removeMobileNav()
    } else {
        nav.classList.add('mobile-nav-list');
    }
}
const removeMobileNav = () => {
    if(nav.classList.contains('mobile-nav-list')){
        nav.classList.remove('mobile-nav-list')
    }
}

menu.addEventListener('click', MobileNav);
nav.addEventListener('mouseleave', removeMobileNav);
document.body.addEventListener('click', removeMobileNav);
menu.addEventListener('click', (event) => {event.stopPropagation()});
nav.addEventListener('click', (event) => {event.stopPropagation()});

// Header Effect
function scrolling() {
    const scrollPosition = window.scrollY

    if (scrollPosition > 0) {
        header[0].style.background = 'var(--color-primal_1)'
        header[0].style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)'
    } else {
        header[0].style.background = 'var(--color-primal_2)'
        header[0].style.boxShadow = 'none'
    }
}

// Offers Slide
let isDragging = false, startX, startScrollLeft;

const dragStart = (coord) => {
    isDragging = true;
    carousel.classList.add('dragging')

    startX = coord.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (coord) => {
    if (!isDragging) return;

    carousel.scrollLeft = startScrollLeft - (coord.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove('dragging')
}
carousel.onmousedown = dragStart
carousel.onmousemove = dragging
document.onmouseup = dragStop

slideBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        carousel.scrollLeft += btn.id === 'left' ? -cardWidth : cardWidth
    })
});