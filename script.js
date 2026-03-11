// Smooth Scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Floating cross interactive hover effect
const cross = document.querySelector('.cross');
cross.addEventListener('mouseover', () => {
    cross.style.transform = 'scale(1.3) rotate(15deg)';
});
cross.addEventListener('mouseout', () => {
    cross.style.transform = 'scale(1) rotate(0deg)';
});

// Simulated form submission
const form = document.querySelector('.contact form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for contacting The Overflow Church! We will get back to you soon.');
    form.reset();
});

// Optional: subtle wave parallax effect
const waves = document.querySelectorAll('.wave');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    waves.forEach((wave, index) => {
        wave.style.transform = `translateX(${scrollY * (0.1 + index * 0.05)}px) rotate(${scrollY * 0.05}deg)`;
    });
});