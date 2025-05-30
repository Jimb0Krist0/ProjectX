document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');
    const zoomButtons = document.querySelectorAll('.zoom-btn');

    zoomButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = button.dataset.image;
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});