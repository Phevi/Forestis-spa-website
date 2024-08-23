document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const name = event.target.name.value;
    const email = event.target.email.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;

    const mailtoLink = `mailto:feventilhun31@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message)}`;

    window.location.href = mailtoLink; // Redirect to email client
});
