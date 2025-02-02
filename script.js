// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".testimonial-container");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let index = 0;
    const testimonials = document.querySelectorAll(".testimonial");
    const totalTestimonials = testimonials.length;

    function updateSlider() {
        const scrollWidth = testimonials[0].offsetWidth; // Width of one testimonial
        container.style.transform = `translateX(-${index * scrollWidth}px)`;
    }

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % totalTestimonials;
        updateSlider();
    });

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + totalTestimonials) % totalTestimonials;
        updateSlider();
    });

    // Auto-slide every 4 seconds
    setInterval(() => {
        index = (index + 1) % totalTestimonials;
        updateSlider();
    }, 4000);

    // Adjust on window resize
    window.addEventListener("resize", updateSlider);
});
