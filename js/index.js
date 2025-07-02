// Scroll reveal for product cards
const productCards = document.querySelectorAll('.product');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Remove observer after animation
      }
    });
  },
  {
    threshold: 0.1, // Triggers when 10% of the element is in view
  }
);

productCards.forEach((card) => {
  observer.observe(card);
});
