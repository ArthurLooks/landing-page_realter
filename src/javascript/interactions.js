// Mapeamento de elementos
const menuButton = document.querySelector('.header__mobile-menu')
const navMenu = document.querySelector('.header__menu')

const header = document.querySelector('.header')

const cards = document.querySelectorAll('.property-card')


// Navegação Mobile
const toggleMobileNav = () => {
	navMenu.classList.toggle('header__menu--mobile')
}
const closeMobileNav = () => {
	navMenu.classList.remove('header__menu--mobile')
}
// Event Listeners para navegação mobile
menuButton.addEventListener('click', (event) => {event.stopPropagation(); toggleMobileNav()})
navMenu.addEventListener('mouseleave', closeMobileNav)
navMenu.addEventListener('click', (event) => event.stopPropagation())
document.body.addEventListener('click', closeMobileNav)


// Efeito do Header no Scroll
function handleScroll() {
	const scrollPosition = window.scrollY
	header.classList.toggle('header__scrolled', scrollPosition > 0)
}
// Event Listener para scroll
window.addEventListener('scroll', handleScroll)


// Galeria de imagens dos cards
cards.forEach((card) => {
	const prevBtn = card.querySelector('.property-card__gallery-nav__prev')
	const nextBtn = card.querySelector('.property-card__gallery-nav__next')
	const dots = card.querySelectorAll('.property-card__gallery-dot')
	let currentSlide = 0

	const images = [
		'src/assets/imagem01.jpg',
		'src/assets/imagem02.jpg',
		'src/assets/imagem03.jpg',
		'src/assets/imagem04.jpg',
		'src/assets/imagem05.jpg',
	]

	function updateSlide(){
		const img = card.querySelector('.property-card__image')
		img.src = images[currentSlide]

		// Atualiza os dots
		dots.forEach((dot, index) => dot.classList.toggle('property-card__gallery-dot__active', index === currentSlide))
	}

	prevBtn.addEventListener('click', () => {
		currentSlide = (currentSlide - 1 + images.length) % images.length
		updateSlide()
	})

	nextBtn.addEventListener('click', () => {
		currentSlide = (currentSlide + 1) % images.length
		updateSlide()
	})

	// Adiciona funcionalidade aos dots
	dots.forEach((dot, index) => {
		dot.addEventListener('click', () => {
			currentSlide = index
			updateSlide()
		})
	})

	// Adiciona funcionalidade ao botão de favorito
	const favoriteBtn = card.querySelector('.property-card__favorite')
	favoriteBtn.addEventListener('click', () => {
		const icon = favoriteBtn.querySelector('i')
		icon.classList.toggle('fa-regular')
		icon.classList.toggle('fa-solid')
		icon.classList.toggle('text-red-500')
	})
})