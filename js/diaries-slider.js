document.addEventListener('DOMContentLoaded', function() {
    const diaryCards = document.querySelectorAll('.diary-card');

    diaryCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const { left, width } = card.getBoundingClientRect();
            const xPos = (e.clientX - left) / width * 100;
            card.querySelector('.after').style.clipPath = `polygon(${xPos}% 0, 100% 0, 100% 100%, ${xPos}% 100%)`;
        });
    });
});