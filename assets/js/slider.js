document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelector(".slides");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const sidebarLinks = document.querySelectorAll(".sidebar-link");

    let currentIndex = 0;

    function showSlide(index) {
        currentIndex = index;
        const translateValue = -index * 100 + "%";
        slides.style.transform = "translateX(" + translateValue + ")";
        toggleButtons();
    }

    function navigateSlide(event) {
        event.preventDefault();
        const slideIndex = parseInt(event.target.getAttribute("data-slide"), 10);
        showSlide(slideIndex);
    }

    function toggleButtons() {
        prevButton.style.display = currentIndex === 0 ? "none" : "block";
        nextButton.style.display =
            currentIndex === slides.children.length - 1 ? "none" : "block";
    }

    prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            showSlide(currentIndex - 1);
        }
    });

    nextButton.addEventListener("click", function () {
        if (currentIndex < slides.children.length - 1) {
            showSlide(currentIndex + 1);
        }
    });

    // Attach click event to sidebar links
    sidebarLinks.forEach(function (link) {
        link.addEventListener("click", navigateSlide);
    });

    // Initial toggle for buttons
    toggleButtons();
});