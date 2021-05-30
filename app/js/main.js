//плавное появления картинок
let container = document.getElementById('boxImg');
let listElements = document.querySelectorAll('.page-works-images-item');

function isVisible(elem) {
  	let coords = elem.getBoundingClientRect();
  	let windowHeight = document.documentElement.clientHeight;
  	let topVisible = coords.top > 0 && coords.top < windowHeight;
  	let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
  	return topVisible || bottomVisible;
}

function showVisible() {
	for(i = 0; i < listElements.length; i++) {
	    if (isVisible(listElements[i])) {
	    	listElements[i].classList.add('show')
    	} else {
    		listElements[i].classList.remove('show')
    	}
    }   
}
showVisible();
window.onscroll = showVisible;

//плавный переход по ссылкам
let anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function(event) {
		event.preventDefault();
		menuClose();
		const BlockID = anchor.getAttribute('href')	
		document.querySelector('' + BlockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}