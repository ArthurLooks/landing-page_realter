// Mapeamento de elementos
const menuButton = document.querySelector(".header__mobile-menu");
const navMenu = document.querySelector(".header__menu");

const header = document.querySelector(".header");

const carousel = document.querySelector(".carousel__container");
const slideButtons = document.querySelectorAll(".carousel__button");
const cardWidth = carousel.querySelector(".carousel__card").offsetWidth;

// Navegação Mobile
const toggleMobileNav = () => {
  navMenu.classList.toggle("header__menu--mobile");
};
const closeMobileNav = () => {
  navMenu.classList.remove("header__menu--mobile");
};
// Event Listeners para navegação mobile
menuButton.addEventListener("click", (event) => {event.stopPropagation(); toggleMobileNav();});
navMenu.addEventListener("mouseleave", closeMobileNav);
navMenu.addEventListener("click", (event) => event.stopPropagation());
document.body.addEventListener("click", closeMobileNav);

// Efeito do Header no Scroll
function handleScroll() {
  const scrollPosition = window.scrollY;
  header.classList.toggle("header--scrolled", scrollPosition > 0);
}
// Event Listener para scroll
window.addEventListener("scroll", handleScroll);

// Carrossel de Ofertas
let isDragging = false, startX, startScrollLeft;

const handleDragStart = (event) => {
  isDragging = true;
  carousel.classList.add("carousel--dragging");
  startX = event.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const handleDragging = (event) => {
  if (!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (event.pageX - startX);
};

const handleDragStop = () => {
  isDragging = false;
  carousel.classList.remove("carousel--dragging");
};

// Event Listeners para o carrossel
carousel.addEventListener("mousedown", handleDragStart);
carousel.addEventListener("mousemove", handleDragging);
document.addEventListener("mouseup", handleDragStop);

slideButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const direction = button.classList.contains("carousel__button--prev") ? -1 : 1;
    carousel.scrollLeft += cardWidth * direction;
  });
});