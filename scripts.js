document.addEventListener('DOMContentLoaded', function() {
    const gridViewBtn = document.getElementById('gridViewBtn');
    const carouselViewBtn = document.getElementById('carouselViewBtn');
    const productContainer = document.querySelector('.product-container');

    gridViewBtn.addEventListener('click', function() {
        productContainer.classList.add('grid-view');
        productContainer.classList.remove('carousel-view');
    });

    carouselViewBtn.addEventListener('click', function() {
        productContainer.classList.add('carousel-view');
        productContainer.classList.remove('grid-view');
    });
});