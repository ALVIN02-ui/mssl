// Initialize Swiper.js for the main slider
const swiper = new Swiper('.swiper-container', {
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	autoplay: {
		delay: 3000,
	},
});

// Initialize Swiper.js for the additional slider
const additionalSwiper = new Swiper('.additional-swiper', {
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	autoplay: {
		delay: 3000,
	},
});

// Add scroll event to toggle header background color
window.addEventListener('scroll', function () {
	const header = document.querySelector('.site-header');
	if (window.scrollY > 50) {
		header.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled');
	}
});

function toggleReadMore() {
	let aboutContent = document.querySelector('.about-content p');
	let visionContent = document.querySelector('.vision-content p');

	if (aboutContent.classList.contains('expanded')) {
		aboutContent.classList.remove('expanded');
		aboutContent.innerHTML =
			'MachineTech Solutions & Services provides high-end technology and support for agricultural and industrial sectors...';
	} else {
		aboutContent.classList.add('expanded');
		aboutContent.innerHTML =
			'MachineTech Solutions & Services provides high-end technology and support for agricultural and industrial sectors. Established in 2018, we aim to ensure efficient and reliable equipment solutions across the region. Our dedicated team works tirelessly to keep operations smooth and sustainable, focusing on advanced machinery solutions to optimize performance.';
	}

	if (visionContent.classList.contains('expanded')) {
		visionContent.classList.remove('expanded');
		visionContent.innerHTML = 'To be the leading provider of innovative and sustainable machinery solutions...';
	} else {
		visionContent.classList.add('expanded');
		visionContent.innerHTML =
			'To be the leading provider of innovative and sustainable machinery solutions, continuously improving the agricultural and industrial landscape in Kenya and beyond. Our vision focuses on maintaining excellence in providing cutting-edge technology that brings sustainable growth and development to our clients.';
	}
}
// POST

document.addEventListener('DOMContentLoaded', function () {
	const form = document.querySelector('form');
	const resultElement = document.createElement('p'); // Create a paragraph element to display the result
	form.appendChild(resultElement); // Append the result element to the form

	form.addEventListener('submit', async function (event) {
		event.preventDefault();
		resultElement.textContent = 'Sending....'; // Display "Sending..." message
		const formData = new FormData(event.target);

		formData.append('access_key', 'ceab3c13-e6a3-4430-8465-74656f19626b');

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				body: formData,
			});

			const data = await response.json();

			if (data.success) {
				resultElement.textContent = 'Form Submitted Successfully';
				form.reset(); // Reset the form
			} else {
				console.log('Error', data);
				resultElement.textContent = data.message; // Display the error message
			}
		} catch (error) {
			console.error('Request failed', error);
			resultElement.textContent = 'An error occurred. Please try again.'; // Display a generic error message
		}
	});
});

// jQuery for the company logo testimonials
$(document).ready(function () {
	$('.customer-logos').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 3,
				},
			},
		],
	});
});
