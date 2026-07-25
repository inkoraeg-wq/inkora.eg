// INKORA — Main JavaScript Functions

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Add to Cart Notification Logic
    const cartButtons = document.querySelectorAll('.btn-add-cart');
    
    cartButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const productCard = e.target.closest('.product-card');
            const productName = productCard ? productCard.querySelector('.product-title').innerText : 'المنتج';
            
            // alert or smooth notification
            alert(`✅ تم إضافة "${productName}" إلى سلة المشتريات بنجاح!`);
        });
    });

    // 2. Smooth Scrolling for Links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    console.log("INKORA Website Loaded Successfully 🚀");
});
