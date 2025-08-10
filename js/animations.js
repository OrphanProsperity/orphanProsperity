// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Mission section elements
    const missionCard = document.querySelector('.mission-card');
    const missionImage = document.querySelector('.mission-section img');
    
    // Impact cards
    const impactCards = document.querySelectorAll('.impact-card');
    
    // Gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Add to observer
    if (missionCard) observer.observe(missionCard);
    if (missionImage) observer.observe(missionImage);
    
    impactCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(card);
    });
    
    galleryItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(item);
    });
});