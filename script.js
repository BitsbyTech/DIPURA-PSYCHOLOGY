document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.querySelector('#main-nav ul');

    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('show');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple testimonial slider
    const testimonials = document.querySelectorAll('.testimonial-item');
    let currentTestimonial = 0;

    function showNextTestimonial() {
        testimonials[currentTestimonial].style.display = 'none';
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].style.display = 'block';
    }

    // Initially hide all testimonials except the first one
    testimonials.forEach((testimonial, index) => {
        if (index !== 0) {
            testimonial.style.display = 'none';
        }
    });

    // Change testimonial every 5 seconds
    setInterval(showNextTestimonial, 5000);
});

document.querySelectorAll('.faq-item h3').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
    });
});
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Collect form data
    var name = encodeURIComponent(document.getElementById('name').value);
    var email = encodeURIComponent(document.getElementById('email').value);
    var phone = encodeURIComponent(document.getElementById('phone').value);
    var service = encodeURIComponent(document.getElementById('service').value);
    var message = encodeURIComponent(document.getElementById('message').value);

    // Construct the email subject and body
    var subject = 'Contact Form Submission';
    var body = 'Name: ' + decodeURIComponent(name) + '%0D%0A' +
               'Email: ' + decodeURIComponent(email) + '%0D%0A' +
               'Phone Number: ' + decodeURIComponent(phone) + '%0D%0A' +
               'Service Interested In: ' + (service ? decodeURIComponent(service) : 'N/A') + '%0D%0A' +
               'Message: ' + decodeURIComponent(message);

    // Create the mailto link
    var mailtoLink = 'mailto:dipuranatasha@gmail.com' +
                     '?subject=' + encodeURIComponent(subject) +
                     '&body=' + body;

    // Open the default email client with the pre-filled content
    window.location.href = mailtoLink;
});
