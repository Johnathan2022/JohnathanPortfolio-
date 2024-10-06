document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = "Thank you for your message!";
    formMessage.style.color = "#88c0d0";

    // Reset the form after submission
    event.target.reset();
});
