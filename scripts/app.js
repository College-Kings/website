const navContainer = document.getElementById('nav');

// get all elements inside nav-content
const navContent = navContainer.querySelectorAll('li');

let pathName = window.location.pathname;



const activeNav = () => {
	for(let i = 0; i < navContent.length; i++){
		if(navContent[i].href === pathName){
			navContent[i].classList.add('active');
		}
	}
}

activeNav();