/*Javascript file*/

const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let button = document.querySelector('#top-btn')

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})

sr.reveal('.about,.portfolio,.skills,.education,.contact',{delay:200, origin:'bottom'})

button.addEventListener('click', function(){
	const downloadLink = document.createElement('a');
	downloadLink.href = `https://docs.google.com/document/d/1DVnmw0NpZLQSpLbkDlZPkigg5ZpNH3ZLgBdIMWcKRrk/export?format=pdf`;
	downloadLink.target = '_blank';
	downloadLink.download = 'Tomiwa-Adedokun-RESUME.pdf';
	downloadLink.click();
});


