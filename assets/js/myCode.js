// // Optional: If you want to pause on hover
// const slider = document.querySelector('.slider');
// const slides = document.querySelector('.slides');

// slider.addEventListener('mouseover', () => {
//     slides.style.animationPlayState = 'paused';
// });

// slider.addEventListener('mouseout', () => {
//     slides.style.animationPlayState = 'running';
// });


document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideCount = slides.children.length;
    let index = 0;

    function moveToNextSlide() {
        index++;
        if (index >= slideCount) {
            index = 0;
        }
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(moveToNextSlide, 3000); // Change slide every 3 seconds
});