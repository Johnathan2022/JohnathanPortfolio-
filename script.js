document.addEventListener("DOMContentLoaded", function () {
    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.style.opacity = "1"; // Fade in effect for welcome message

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Handle project gallery click to show modal
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            const projectName = this.getAttribute('data-project');
            alert(`More information about ${projectName}`);
        });
    });

    // Contact form submission handling
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();
        
        const formMessage = document.getElementById('formMessage');
        formMessage.textContent = "Thank you for your message!";
        formMessage.style.color = "#88c0d0";

        // Reset the form after submission
        event.target.reset();
    });
});
