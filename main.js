document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        project.addEventListener('click', function() {
            const targetModalId = this.getAttribute('data-modal-target');
            const modal = document.querySelector(targetModalId);
            if (modal) {
                modal.style.display = 'flex';
            }
        });
    });

    const closeBtns = document.querySelectorAll('.close-btn');
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
        });
    });

    window.onclick = function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    };

    // Carousel functionality for modals
    document.querySelectorAll('.modal').forEach(modal => {
        const carousel = modal.querySelector('.carousel-images');
        if (!carousel) return;
        const images = carousel.querySelectorAll('img');
        const prevBtn = modal.querySelector('.prev-btn');
        const nextBtn = modal.querySelector('.next-btn');
        let currentIndex = 0;

        const updateCarousel = () => {
            carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
        };

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
                updateCarousel();
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
                updateCarousel();
            });
        }
    });
});
