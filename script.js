// Smooth scroll to menu when button is clicked
function scrollToMenu() {
    const menuSection = document.getElementById('menu');
    menuSection.scrollIntoView({ behavior: 'smooth' });
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    // Get form values
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
    
    // Simple validation
    if (name && email && message) {
        // Show success message
        alert(`Thank you ${name}! Your message has been sent.\nWe'll get back to you at ${email} soon.`);
        
        // Reset form
        form.reset();
    } else {
        alert('Please fill in all fields.');
    }
}

// Add smooth hover effect to menu items
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
});

// Smooth active navigation link highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Add animations on page load
window.addEventListener('load', function() {
    // Fade in elements as page loads
    const elements = document.querySelectorAll('.menu-item, .feature, .contact-info');
    
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '0';
            element.style.animation = 'fadeIn 0.5s ease forwards';
        }, index * 50);
    });
});

// CSS animation definition (added via JavaScript for better control)
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .nav a.active {
        color: #d4a574;
        font-weight: bold;
        border-bottom: 2px solid #d4a574;
    }
`;
document.head.appendChild(style);

// Mobile menu toggle functionality (if needed in future)
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}
