$(document).ready(function(){
  
  $('.menu .frame').on('click', function() {
    $('#nav').toggleClass('menu_show');
  });    
  
});

const button = document.querySelector(".button");
const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");
const line3 = document.querySelector(".line-3");
let contador = 0;

button.addEventListener("click", (e) => {
	contador = contador + 1;
	if (contador == 1) {
		line1.classList.add("animation-1");
		line2.classList.add("animation-3");
		line3.classList.add("animation-2");
		line1.classList.remove("no-animation");
		line2.classList.remove("no-animation");
		line3.classList.remove("no-animation");

		contador = contador - 2;
	} else {
		line1.classList.remove("animation-1");
		line2.classList.remove("animation-3");
		line3.classList.remove("animation-2");
		// 	// line1.classList.add('no-animation');
		// 	// line2.classList.add('no-animation');
		// 	// line3.classList.add('no-animation');
	}
});
