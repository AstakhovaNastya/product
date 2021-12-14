document.addEventListener("DOMContentLoaded", function(event) {
	initBurger();
	initSwitch();
	initSlick();
});

function initBurger() {
	const activeClass = 'menu-opened';
	const page = document.documentElement;
	const opener = document.querySelector('.burger-menu');
	const onClickFn = (e) => {
		e.preventDefault();

		page.classList.toggle(activeClass);
	};

	opener.addEventListener('click', onClickFn);
}

function initSwitch() {
	const activeClass = 'dark-theme';
	const page = document.documentElement;
	const opener = document.querySelector('.switch-color');
	const onClickFn = (e) => {
		e.preventDefault();

		page.classList.toggle(activeClass);
	};

	opener.addEventListener('click', onClickFn);
}

function initSlick() {
	jQuery('.items-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 968,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
}