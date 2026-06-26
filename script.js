// Scroll Reveal Animation
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
}

// Use IntersectionObserver for better performance
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// Also keep scroll listener as fallback
window.addEventListener('scroll', reveal);
// Trigger reveal on load
document.addEventListener('DOMContentLoaded', () => {
    reveal();
});

// Typing Animation
const typingTexts = [
    "Technical Content Writer",
    "AI & IOT Research",
    "Innovation Story Teller"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const currentText = typingTexts[textIndex];

    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        typingSpeed = 500;
    }

    setTimeout(typeText, typingSpeed);
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', typeText);

// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = "kzav-m8XLy-5HgR-S";
const EMAILJS_SERVICE_ID = "service_ejlvkbc";
const EMAILJS_TEMPLATE_ID = "template_t5bisyi";

// Initialize EmailJS
(function() {
    emailjs.init(EMAILJS_PUBLIC_KEY);
})();

// Project Details Data
const projectDetails = {
    monopure: {
        title: "MONOPURE",
        subtitle: "PORTABLE CO AIR PURIFIER",
        image: "kupbin.jpg",
        summary: "MONOPURE is a portable, battery-powered air purifier designed specifically to eliminate toxic carbon monoxide (CO) and heavy smoke from kerosene heaters used in military bunkers and civilian homes in cold regions like Kashmir. Unlike standard HEPA purifiers that only capture particles, MONOPURE integrates a Hopcalite catalyst to convert deadly CO into harmless CO₂ at room temperature, alongside a 7‑layer filter stack (silica gel desiccant, activated carbon, MERV‑8 felt, and foam) that removes PM2.5, VOCs, and moisture. Powered by a 12V LiFePO₄ battery and a high‑static‑pressure AVC centrifugal blower, it runs for 8+ hours on a single charge. The entire system is housed in a rugged 300×200×350 mm sheet‑metal enclosure with a source‑capture hood, achieving 80‑95% CO conversion and 70‑85% PM2.5 removal. Designed for easy field maintenance with QR‑coded filter cartridges and a dedicated mobile app, MONOPURE bridges the gap between life‑safety and air quality in off‑grid, high‑risk environments.",
        tags: ["Hopcalite Catalyst", "LiFePO₄ Battery", "7-Layer Filter", "AVC Blower", "Mobile App"]
    },
    co2purus: {
        title: "CO₂ Purus",
        subtitle: "ADVANCED AIR PURIFICATION SYSTEM",
        image: "co2purus.jpg",
        summary: "CO₂ Purus is an innovative air purification system concept developed with the objective of improving indoor air quality and creating a healthier, safer, and more sustainable environment. As air pollution continues to pose significant health and environmental challenges, this project was designed to address the growing need for efficient and accessible air purification solutions. The system focuses on reducing harmful airborne pollutants, dust particles, allergens, smoke residues, and other contaminants that negatively affect human health and overall well-being. By integrating modern design principles with practical functionality, CO₂ Purus aims to deliver clean and purified air while maintaining energy efficiency and user convenience. The project emphasizes the importance of environmental sustainability and public health by providing a solution that can be adapted for various indoor settings, including homes, educational institutions, offices, healthcare facilities, and public spaces. Special attention was given to creating a design that is both effective and user-friendly, ensuring ease of operation, maintenance, and long-term usability. Through extensive research and conceptual development, the system was designed to optimize airflow, maximize purification efficiency, and support healthier living conditions for users. CO₂ Purus demonstrates the application of engineering design principles, innovation, critical thinking, and problem-solving skills in addressing a real-world challenge. The development process involved identifying environmental issues, analyzing existing purification methods, and designing an improved solution that balances performance, practicality, and sustainability. The project reflects a commitment to technological advancement and environmental responsibility while showcasing creativity and technical expertise in product design and development. Through its innovative approach, CO₂ Purus represents a meaningful contribution toward promoting cleaner air, healthier communities, and a more sustainable future.",
        tags: ["Air Purification", "Indoor Air Quality", "Sustainable Design", "Energy Efficient"]
    },
    kupbin: {
        title: "KUPBIN",
        subtitle: "IOT SMART WASTE SYSTEM",
        image: "monopure.jpg",
        summary: "KUPBIN is an intelligent street waste management system designed to prevent dustbin overflow. It continuously monitors waste levels and alerts supervisors when the bin is nearly full. If waste collection is delayed, the system automatically compresses the waste to create additional storage space, reducing overflow and maintaining cleanliness in public areas.",
        tags: ["Waste Monitoring", "Overflow Alert", "Auto Compression"]
    }
};

// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-active');
        const icon = menuBtn.querySelector('i');
        if (navLinks.classList.contains('mobile-active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('mobile-active');
            const icon = menuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// Active Navigation Link Highlight
const sections = document.querySelectorAll('section[id]');
const navLinksArray = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinksArray.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Back to Top Button
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (backToTopBtn) {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    }
});

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Project Modal Functions
const projectModal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');

function openProject(projectId) {
    const project = projectDetails[projectId];
    if (project && projectModal && modalBody) {
        modalBody.innerHTML = `
            <div class="modal-image-section">
                <img src="${project.image}" alt="${project.title}">
                <div class="modal-subtitle">
                    <i class="fas fa-shield-alt"></i> ${project.subtitle}
                </div>
            </div>
            <div class="modal-content-section">
                <h2>${project.title}</h2>
                <span class="modal-label">PROJECT OVERVIEW</span>
                <p>${project.summary}</p>
                <div class="modal-tags">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
            </div>
        `;
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeProject() {
    if (projectModal) {
        projectModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close modal when clicking outside
if (projectModal) {
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            closeProject();
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProject();
    }
});

// Success Toast Functions
const successToast = document.getElementById('success-toast');
let toastTimeout;

function showSuccessToast() {
    if (successToast) {
        // Clear any existing timeout
        if (toastTimeout) clearTimeout(toastTimeout);
        
        successToast.classList.remove('active');
        successToast.style.animation = 'slideIn 0.3s ease-out';
        successToast.classList.add('active');
        
        // Hide toast after 3 seconds
        toastTimeout = setTimeout(() => {
            successToast.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                successToast.classList.remove('active');
            }, 300);
        }, 3000);
    }
}

// Contact Form
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (formStatus) {
            formStatus.textContent = 'Sending your message...';
            formStatus.style.color = 'var(--primary-color)';
        }

        const templateParams = {
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
            .then(() => {
                showSuccessToast();
                if (formStatus) {
                    formStatus.textContent = '';
                }
                contactForm.reset();
            }, () => {
                if (formStatus) {
                    formStatus.textContent = 'Oops! Something went wrong. Please try again.';
                    formStatus.style.color = '#ef4444';
                }
            });
    });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

console.log('Portfolio loaded successfully!');
