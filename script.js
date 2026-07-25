// Dynamic Interactions & Animations for INKORA Brand

document.addEventListener('DOMContentLoaded', () => {

    // 1. تغيير خلفية الهيدر عند التمرير (Scroll Effect)
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
            header.style.padding = '15px 8%';
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.8)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.85)';
            header.style.padding = '20px 8%';
            header.style.boxShadow = 'none';
        }
    });

    // 2. ظهور كروت المنتجات بالتتابع عند التمرير (Reveal Animation)
    const cards = document.querySelectorAll('.product-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.6s ease-out";
        cardObserver.observe(card);
    });

});