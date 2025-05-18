// Slider functionality
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

if (nextBtn && prevBtn) {
  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  showSlide(currentSlide);
}

// Form validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const formMessage = document.getElementById('formMessage');

    if (!name.value || !email.value || !message.value) {
      formMessage.textContent = 'Please fill in all fields.';
      formMessage.style.color = 'red';
    } else {
      formMessage.textContent = 'Message sent successfully!';
      formMessage.style.color = 'green';
      contactForm.reset();
    }
  });
}
