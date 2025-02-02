// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

let currentIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove("active");
        dots[i].classList.remove("active");
    });

    testimonials[index].classList.add("active");
    dots[index].classList.add("active");
}

function currentSlide(index) {
    currentIndex = index;
    showTestimonial(currentIndex);
}

function autoSlide() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}

setInterval(autoSlide, 5000);