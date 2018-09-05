document.addEventListener("DOMContentLoaded", () => {
	//ŁAPIEMY ZMIENNE
		var nextBtn = document.querySelector('.banner-next');
		var prevBtn = document.querySelector('.banner-prev');
		var images = document.querySelectorAll('.slide');
		var currentImageIndex = 0;

		console.log(images.length);

		//PISZEMY FUNKCJE
		function nextPicture() {
				images[currentImageIndex].classList.remove('visible');

				currentImageIndex++;

				if (currentImageIndex === images.length) {
						currentImageIndex = 0;
				}

				images[currentImageIndex].classList.add('visible');
		}


		function prevPicture() {
				images[currentImageIndex].classList.remove('visible');

				currentImageIndex--;

				if (currentImageIndex < 0) {
						currentImageIndex = images.length - 1;
				}

				images[currentImageIndex].classList.add('visible');
		}

		//PISZEMY LOGIKE / DZIAŁANIE
		images[currentImageIndex].classList.add('visible');
		nextBtn.addEventListener('click', nextPicture);
		prevBtn.addEventListener('click', prevPicture);

})
