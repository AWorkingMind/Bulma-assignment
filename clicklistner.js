document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        // Toggle active class on click
        this.classList.toggle('active');

        // If you want only one card to expand at a time, you can add this code to close other cards
        document.querySelectorAll('.card').forEach(otherCard => {
            if (otherCard !== this) {
                otherCard.classList.remove('active');
            }
        });
    });
});