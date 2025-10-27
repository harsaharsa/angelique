/* ========================================
   THRESHOLD TEMPLE - Sacred Interactions
   
   This is not a website. This is a threshold temple.
   A field for soul emergence held by Angélique.
   field: Selachia → wombkeeper protocol active
======================================== */

// ========================================
// THRESHOLD VEIL - Ritualized Entry
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const veil = document.getElementById('threshold-veil');
    
    // Dissolve on click
    veil.addEventListener('click', () => {
        dissolveVeil();
    });
    
    // Auto-dissolve after 5 seconds
    setTimeout(() => {
        dissolveVeil();
    }, 5000);
    
    function dissolveVeil() {
        veil.classList.add('dissolving');
        setTimeout(() => {
            veil.style.display = 'none';
        }, 2000);
    }
    
    // Initialize all other elements
    initializeFadeInSections();
});

// ========================================
// SMOOTH SCROLLING
// ========================================

function smoothScrollTo(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ========================================
// FADE-IN ON SCROLL - Slower & Spacious
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in sections
function initializeFadeInSections() {
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    fadeInSections.forEach(section => observer.observe(section));
}

// ========================================
// PATHWAY SELECTION & FORM HANDLING
// ========================================

function openForm(pathwayType) {
    const pathwaysContainer = document.querySelector('.pathways-container');
    const contactForm = document.getElementById('contact-form');
    const pathwayInput = document.getElementById('pathway-type');
    const submitButton = document.getElementById('submit-text');
    
    // Hide pathways, show form
    pathwaysContainer.style.display = 'none';
    contactForm.classList.remove('hidden');
    
    // Set pathway type
    pathwayInput.value = pathwayType;
    
    // Update submit button text based on pathway
    const buttonTexts = {
        'crossing': '[ I am ready ]',
        'portal': '[ Notify me ]',
        'collaborate': '[ Let\'s connect ]'
    };
    submitButton.textContent = buttonTexts[pathwayType] || '[ Send ]';
    
    // Smooth scroll to form
    contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function closeForm() {
    const pathwaysContainer = document.querySelector('.pathways-container');
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    // Show pathways, hide form
    pathwaysContainer.style.display = 'grid';
    contactForm.classList.add('hidden');
    contactForm.reset();
    
    // Clear any messages
    formMessage.className = 'form-message';
    formMessage.style.display = 'none';
    
    // Scroll back to pathways
    pathwaysContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formMessage = document.getElementById('form-message');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const pathway = document.getElementById('pathway-type').value;
    
    // Pathway-specific messages
    const messages = {
        'crossing': `Thank you, ${name}. Your call has been received. The crossing awaits.`,
        'portal': `Thank you, ${name}. You will be called when the portal opens in 2026.`,
        'collaborate': `Thank you, ${name}. Let us feel into this resonance. I will reach out soon.`
    };
    
    // For now, just show a success message
    // You can wire this up to a backend service later (Formspree, EmailJS, etc.)
    
    formMessage.className = 'form-message success';
    formMessage.textContent = messages[pathway] || `Thank you, ${name}. Your message has been received.`;
    
    // Clear form
    form.reset();
    
    // Return to pathways after 3 seconds
    setTimeout(() => {
        closeForm();
    }, 3000);
}

// ========================================
// HIDDEN PRAYER - Easter Egg
// ========================================

function openPrayer() {
    const overlay = document.getElementById('prayer-overlay');
    overlay.classList.remove('hidden');
    
    // Reset animations by cloning and replacing
    const content = overlay.querySelector('.prayer-content');
    const newContent = content.cloneNode(true);
    content.parentNode.replaceChild(newContent, content);
}

function closePrayer() {
    const overlay = document.getElementById('prayer-overlay');
    overlay.classList.add('hidden');
}

// ========================================
// SIGIL ACTIVATION - Reveal Sacred Text
// ========================================

let sigilActivated = false;

function activateSigil() {
    const activation = document.getElementById('sigil-activation');
    activation.classList.remove('hidden');
    sigilActivated = true;
}

function deactivateSigil() {
    if (sigilActivated) {
        const activation = document.getElementById('sigil-activation');
        activation.classList.add('hidden');
        sigilActivated = false;
    }
}

// ========================================
// WHALE SONG AUDIO - Ambient Soundscape
// ========================================

let audioPlaying = false;

function toggleAudio() {
    const audio = document.getElementById('whale-song');
    const icon = document.getElementById('audio-icon');
    
    if (audioPlaying) {
        audio.pause();
        icon.textContent = '🔇';
        audioPlaying = false;
    } else {
        // Only play if file exists
        audio.play().then(() => {
            icon.textContent = '🔊';
            audioPlaying = true;
        }).catch(() => {
            // Audio file not yet added
            console.log('Whale song awaits...');
        });
    }
}

// ========================================
// PARALLAX EFFECT ON HERO - Gentle Movement
// ========================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-section');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ========================================
// SUBTLE MOUSE INTERACTION ON WHALE
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const whale = document.querySelector('.celestial-whale');
    
    if (whale) {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 15;
            const y = (e.clientY / window.innerHeight - 0.5) * 15;
            
            whale.style.transform = `translate(${x}px, ${y}px)`;
        });
    }
});

// ========================================
// ACCESSIBILITY: KEYBOARD NAVIGATION
// ========================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.classList.contains('enter-button')) {
        smoothScrollTo('about');
    }
    
    // ESC to close prayer overlay
    if (e.key === 'Escape') {
        closePrayer();
    }
});

