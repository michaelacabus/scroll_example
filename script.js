function bgChanger() {
//window content height detection
//scrollY scroll vertical top, add BgActive
	if(window.scrollY > (window.innerHeight <= 3)) {
		document.body.classList.add('bg_active')
	}  
//if not, remove class bg_active	
	 else {
		document.body.classList.remove('bg_active')
	}
}

//calls function
window.addEventListener('scroll', bgChanger)