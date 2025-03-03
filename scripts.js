//Script for the carousel
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

//Script for the email and phone messages
function showContactField(method) {
    var phoneInput = document.getElementById('phoneInput');
    var emailInput = document.getElementById('emailInput');
    if (method === 'phone') {
        phoneInput.style.display = 'block';
        emailInput.style.display = 'none';
    } else if (method === 'email') {
        emailInput.style.display = 'block';
        phoneInput.style.display = 'none';
    }
}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.product-container .product-item img').forEach(item => {
        item.addEventListener('click', function() {
            document.getElementById('lightboxModal').style.display = "block";
            document.getElementById('lightboxImg').src = this.src;
            document.getElementById('caption').innerHTML = this.alt;
        });
    });

    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('lightboxModal').style.display = "none";
    });
});
