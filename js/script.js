'use strict'

const gotoLinks = document.querySelectorAll('.nav__link[data-goto]');
const headerBlock = document.querySelector('header');
const headerBefore = getComputedStyle(headerBlock, '::before');
const html = document.body;


if (gotoLinks.length > 0) {
	gotoLinks.forEach(gotoLink => {
		gotoLink.addEventListener('click', onGotoLinkClick);
	});
	function onGotoLinkClick(e) {
		const gotoLink = e.target;
		if (gotoLink.dataset.goto && document.querySelector(gotoLink.dataset.goto)) {
			const gotoBlock = document.querySelector(gotoLink.dataset.goto);
			//const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;
			const gotoBlockValueHeader = gotoBlock.getBoundingClientRect().top + scrollY - headerBlock.offsetHeight;//??если header fixed
			const gotoBlockValueBefore = gotoBlock.getBoundingClientRect().top + scrollY - parseInt(headerBefore.height);
			
			if(burgerBtn.classList.contains('_active')) {
				burgerBtn.classList.remove('_active');
				headerNav.classList.remove('_active');
				document.body.classList.remove('_lock');
			}
			if (html.scrollWidth >= 1200) {
					window.scrollTo({
					top: gotoBlockValueHeader,
					behavior: 'smooth',
				});
			} else {
					window.scrollTo({
					top: gotoBlockValueBefore,
					behavior: 'smooth',
				});
			}

			e.preventDefault();

		}
	}
}

const burgerBtn = document.querySelector('.header__burger');
const block = document.querySelector('.block');
if (burgerBtn) {
	burgerBtn.addEventListener('click', function (e) {
		burgerBtn.classList.toggle('_active');
		block.classList.toggle('_active');
		document.body.classList.toggle('_lock');
	});
}