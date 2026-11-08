// Always start portfolio from the top on reload

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
    });
});

// ===================================
// 1. SCROLL REVEAL ANIMATION
// ===================================

const revealElements = document.querySelectorAll(
    '.skill-card, .project-card, .certificate-card, ' +
    '.education-card, .featured-certificate, ' +
    '.contact-card, .about-content, .resume-content'
);

revealElements.forEach(element => {
    element.classList.add('reveal');
});

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('visible');

            revealObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});


// ===================================
// ACTIVE NAVIGATION
// ===================================

const allSections = document.querySelectorAll('section[id]');
const allNavLinks = document.querySelectorAll('nav a[href^="#"]');

function updateActiveNavigation() {

    let currentSection = '';

    allSections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 180 &&
            window.scrollY < sectionTop + sectionHeight - 180) {

            currentSection = section.getAttribute('id');

        }

    });

    allNavLinks.forEach(link => {

        link.classList.remove('active');

        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }

    });

}

window.addEventListener('scroll', updateActiveNavigation);
window.addEventListener('load', updateActiveNavigation);

updateActiveNavigation();


// BACK TO TOP BUTTON

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}