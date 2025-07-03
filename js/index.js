// Scroll reveal for product cards
// index.js
document.addEventListener("DOMContentLoaded", () => {
  const products = document.querySelectorAll(".product");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Stops observing after animation triggers
        }
      });
    },
    {
      threshold: 0.2, // Adjust as needed — 0.2 = 20% of the element is visible
    }
  );

  products.forEach((product) => {
    observer.observe(product);
  });
});


