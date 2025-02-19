/*Carousel and grid option script */ 
document.addEventListener('DOMContentLoaded', function() {
    const carouselViewBtn = document.getElementById('carouselViewBtn');
    const gridViewBtn = document.getElementById('gridViewBtn');
    const carouselView = document.querySelector('.carousel-view');
    const gridView = document.querySelector('.grid-view');

    carouselViewBtn.addEventListener('click', function() {
        carouselView.style.display = 'block';
        gridView.style.display = 'none';
    });

    gridViewBtn.addEventListener('click', function() {
        gridView.style.display = 'block';
        carouselView.style.display = 'none';
    });

    // Carousel functionality
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    const carouselInner = document.querySelector('.carousel-inner');
    let currentIndex = 0;

    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % document.querySelectorAll('.carousel-item').length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + document.querySelectorAll('.carousel-item').length) % document.querySelectorAll('.carousel-item').length;
        updateCarousel();
    });
});