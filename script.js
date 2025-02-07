document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    alert('Thank you for contacting me! I will respond shortly.');

    // Clear input fields after submission
    document.querySelectorAll(".container input, .container textarea").forEach(input => {
        input.value = "";
    });
});
