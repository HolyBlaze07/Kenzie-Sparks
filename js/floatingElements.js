// floatingElements.js

document.addEventListener("DOMContentLoaded", () => {
  const floatingElements = document.querySelectorAll(
    " .butterfly"
  );

  floatingElements.forEach((el) => {
    // Hint browser for better performance
    el.style.willChange = "transform";

    const amplitudeX = Math.random() * 40 + 20;
    const amplitudeY = Math.random() * 40 + 20;
    const speedX = Math.random() * 2 + 1;
    const speedY = Math.random() * 2 + 1;
    let angleX = Math.random() * 360;
    let angleY = Math.random() * 360;

    const animate = () => {
      angleX += speedX;
      angleY += speedY;
      const x = Math.sin(angleX * Math.PI / 180) * amplitudeX;
      const y = Math.cos(angleY * Math.PI / 180) * amplitudeY;
      el.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  });
});
console.log("Floating script loaded");

