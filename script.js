// Header scroll effect
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.padding = '10px 5%';
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.3)';
    } else {
        header.style.padding = '20px 5%';
        header.style.boxShadow = 'none';
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Stop observing once revealed
        }
    });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Glitch effect text duplicator logic is handled by CSS,
// but we can add random subtle glitch class toggles for extra randomness if desired.
const glitchTexts = document.querySelectorAll('.glitch');

setInterval(() => {
    glitchTexts.forEach(text => {
        if (Math.random() > 0.9) {
            text.style.animationDuration = (Math.random() * 2 + 0.5) + 's';
        }
    });
}, 2000);
