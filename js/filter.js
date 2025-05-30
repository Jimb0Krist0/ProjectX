document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const artworkCards = document.querySelectorAll('.artwork-card');
    const searchInput = document.getElementById('search');

    // Фильтрация по категориям
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.dataset.filter;
            filterArtworks(filter);
        });
    });

    // Поиск по названию
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        filterArtworks(null, searchTerm);
    });

    function filterArtworks(category, searchTerm = '') {
        artworkCards.forEach(card => {
            const matchesCategory = category === 'all' || card.dataset.category === category;
            const matchesSearch = card.dataset.title.toLowerCase().includes(searchTerm);

            if (matchesCategory && matchesSearch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
});