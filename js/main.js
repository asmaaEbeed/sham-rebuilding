// // Prevent inspect or download
// function alertMessage() {
//     alert("This feature is disabled. Inspecting elements is restricted as the website is still under development")
// }
// document.addEventListener('contextmenu', (event) => {event.preventDefault(); alertMessage()});

// document.addEventListener('keydown', (event) => {
//     // Prevent F12, Ctrl+Shift+I/J/C, Ctrl+U, and Ctrl+S
//     if (
//       event.key === 'F12' || 
//       (event.ctrlKey && event.shiftKey && ['I', 'J', 'C'].includes(event.key)) ||
//       (event.ctrlKey && (event.key === 'U' || event.key === 's'))
//     ) {
//         event.preventDefault();
//         event.stopPropagation();
//         alertMessage()
//     }
// });

// setInterval(() => {
//     const devtools = /./;
//     devtools.toString = function () {
//         return 'devtools';
//     };
//     if (devtools.toString() !== 'devtools') {
//         alert('Developer tools are not allowed!');
//     }
// }, 1000);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Initialize tooltips
document.addEventListener('DOMContentLoaded', function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Navigation bar scroll effect
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    function checkScroll() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Initial check
    checkScroll();

    // Add scroll event listener
    window.addEventListener('scroll', checkScroll);

    // Initialize Bootstrap carousel with fade effect
    const heroCarousel = document.querySelector('#heroCarousel');
    if (heroCarousel) {
        new bootstrap.Carousel(heroCarousel, {
            interval: 5000, // Change slides every 5 seconds
            fade: true
        });
    }
});
// document.addEventListener("DOMContentLoaded", function () {
//     let video = document.getElementById("sham-video");
//     video.play().catch(error => console.log("Autoplay blocked:", error));
//   });