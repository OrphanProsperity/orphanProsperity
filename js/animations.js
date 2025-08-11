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
    // Index page elements
    const missionCard = document.querySelector('.mission-card');
    const missionImage = document.querySelector('.mission-section img');
    const impactCards = document.querySelectorAll('.impact-card');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // About page elements
    const storyCard = document.querySelector('.story-card');
    const storyImage = document.querySelector('.story-section img');
    const teamCards = document.querySelectorAll('.team-card');
    
    // Projects page elements
    const projectCards = document.querySelectorAll('.project-card');
    
    // Impact page elements
    const impactStoryCard = document.querySelector('.impact-story-card');
    const impactStoryImage = document.querySelector('.impact-story-section img');
    const achievementCards = document.querySelectorAll('.achievement-card');
    
    // Sponsorship page elements
    const sponsorshipCard = document.querySelector('.sponsorship-card');
    const sponsorshipImage = document.querySelector('.sponsorship-details-section img');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    // Donation page elements
    const donationCards = document.querySelectorAll('.donation-card');
    
    // Add to observer with delays
    if (missionCard) observer.observe(missionCard);
    if (missionImage) observer.observe(missionImage);
    if (storyCard) observer.observe(storyCard);
    if (storyImage) observer.observe(storyImage);
    if (impactStoryCard) observer.observe(impactStoryCard);
    if (impactStoryImage) observer.observe(impactStoryImage);
    if (sponsorshipCard) observer.observe(sponsorshipCard);
    if (sponsorshipImage) observer.observe(sponsorshipImage);
    
    // Cards with staggered delays
    impactCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    teamCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    projectCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    achievementCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    testimonialCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    donationCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    galleryItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.05}s`;
        observer.observe(item);
    });
});