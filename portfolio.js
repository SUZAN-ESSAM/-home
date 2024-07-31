document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation
    const links = document.querySelectorAll('nav a');
    
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    }

    // Handle form submission
const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            alert('Thank you, ' + name + '! Your message has been sent.');
            form.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
    })