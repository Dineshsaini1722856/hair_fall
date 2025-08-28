

// Initialize AOS
  AOS.init();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// FAQ Toggle
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const isActive = answer.classList.contains('active');

    // Close all FAQ answers
    document.querySelectorAll('.faq-answer').forEach(ans => {
        ans.classList.remove('active');
    });

    // Toggle current answer
    if (!isActive) {
        answer.classList.add('active');
    }
}

// Purchase handler
function handlePurchase() {
    alert('Redirecting to payment gateway...\n\nThis is a demo. In production, this would connect to your payment processor (Razorpay, Stripe, etc.)');
}

// Floating animation on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating');

    parallaxElements.forEach(el => {
        const speed = 0.2;
        el.style.transform = `translateY(${Math.sin(scrolled * 0.01) * 10}px)`;
    });
});
