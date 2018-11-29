window.onload = () => {
	var scrollToTopBtn = document.getElementsByClassName('back-to-top-btn')[0];

	scrollToTopBtn.onclick = () => {
		window.scrollTo({
		  top: 0,
		  left: 0,
		  behavior: 'smooth'
		});
	}
}