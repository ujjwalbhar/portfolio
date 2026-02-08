// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe all sections
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    sectionObserver.observe(section);
});

// Smooth scroll behavior
document.addEventListener('DOMContentLoaded', () => {
    // Make sure the first section is visible
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.classList.add('active');
    }
});

// Optional: Add scroll-based parallax effect to background
let ticking = false;

function updateBackgroundPosition() {
    const scrolled = window.pageYOffset;
    const background = document.querySelector('.fixed-background');
    
    if (background) {
        // Subtle parallax effect
        const yPos = -(scrolled * 0.1);
        background.style.transform = `translateY(${yPos}px)`;
    }
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateBackgroundPosition);
        ticking = true;
    }
});
