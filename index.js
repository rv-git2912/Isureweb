// WhatsApp redirection
function openWhatsApp() {
    const phoneNumber = "911169658920";
    const message = encodeURIComponent("Hello SAI, Tell me about your business!");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
}


// Particle Effect
const particle = document.getElementById("particles");

for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;
    particle.style.animationDuration = `${Math.random() * 5 + 2}s`;
    particles.appendChild(particle);
}

// Back-to-Top Button
window.onscroll = () => {
    document.getElementById("backToTop").style.display = window.scrollY > 300 ? "block" : "none";
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
// JavaScript for Product Tour Section

// Add smooth scrolling when clicking the "Learn more about onboarding" link
document.querySelector('.tour-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector('#about');  // Smooth scroll to About section
    target.scrollIntoView({ behavior: 'smooth' });
});

// Animation on scroll
window.addEventListener('scroll', () => {
    const tourSection = document.querySelector('.product-tour');
    const sectionPosition = tourSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (sectionPosition < screenPosition) {
        tourSection.classList.add('visible');
    }
});

// Image hover effect
const image = document.querySelector('.tour-image img');
image.addEventListener('mouseenter', () => {
    image.style.transform = 'scale(1.1)';
    image.style.transition = 'transform 0.5s ease';
});

image.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)';
});

// Add dynamic content change on button click
const tourButton = document.querySelector('.tour-btn');
tourButton.addEventListener('click', () => {
    tourButton.textContent = "Exploring Onboarding...";
    setTimeout(() => {
        tourButton.textContent = "Learn more about onboarding ➡️";
    }, 2000);
});

function toggleMenu() {
    const menu = document.getElementById("navLinks");
    menu.classList.toggle("show");
  }
  const typewriterWords = ["AI Advisor", "Smart Consultant", "Insurance Guide"];
  let tIndex = 0, charIndex = 0, isBackspace = false;
  const twElement = document.getElementById("typewriter");
  
  function typeLoop() {
    const word = typewriterWords[tIndex];
    if (!isBackspace) {
      twElement.textContent = word.substring(0, charIndex++);
      if (charIndex > word.length) {
        isBackspace = true;
        setTimeout(typeLoop, 1200);
        return;
      }
    } else {
      twElement.textContent = word.substring(0, charIndex--);
      if (charIndex < 0) {
        isBackspace = false;
        tIndex = (tIndex + 1) % typewriterWords.length;
      }
    }
    setTimeout(typeLoop, isBackspace ? 50 : 100);
  }
  typeLoop();