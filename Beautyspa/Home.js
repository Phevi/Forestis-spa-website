// Select all anchor elements within the nav
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Prevent default link behavior
        e.preventDefault();

        // Get the target URL from the href attribute
        const targetUrl = this.getAttribute('href');

        // Redirect to the target URL
        window.location.href = targetUrl;
    });
});

// Button Click Event for "Book an Appointment"
document.getElementById('book-appointment').addEventListener('click', function() {
    window.location.href = "contact.html"; // Redirects to contact page
});

