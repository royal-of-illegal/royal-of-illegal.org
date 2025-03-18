document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded successfully!");

    // Navbar Glow Effect on Scroll
    window.addEventListener("scroll", function() {
        let header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.style.boxShadow = "0px 0px 20px rgba(255, 0, 100, 0.8)";
        } else {
            header.style.boxShadow = "0px 0px 15px rgba(255, 255, 255, 0.3)";
        }
    });

    // Button Hover Animation
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.1)";
        });
        button.addEventListener("mouseleave", function() {
            this.style.transform = "scale(1)";
        });
    });
});
