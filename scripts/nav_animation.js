window.onload = () => {
	var menuButton = document.getElementsByClassName('btn-menu')[0];
	var scrollToTop = document.getElementsByClassName('back-to-top-btn')[0];

	scrollToTop.onclick = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		})
	}

	menuButton.onclick = () => {
		var navButtons = document.getElementsByClassName('nav_buttons'),
			c = 0,
			interval;

		if ( menuButton.className.indexOf('menu_clicked') < 0 ) {
			menuButton.className += "menu_clicked";
			interval = setInterval(() => {
				console.log("opening");
				navButtons[c].style.right = "0px";
				c++;
				if (c >= 5 ) {
					clearInterval(interval);
				}
			}, 50);
		}else {
			menuButton.className = "btn-menu";
			interval = setInterval(() => {
				console.log("closing");
				navButtons[4-c].style.right = "-300px";
				c++;
				if (c >= 5 ) {
					clearInterval(interval);
				}
			}, 50);
		}
	}
}