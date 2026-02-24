// Close button handler -> doesn't work
const closeBtn = document.getElementById('closeBtn');
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        window.close();
    });
}

// Category button handler
document.querySelectorAll('.container button').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.id;
        // Store the selected category
        localStorage.setItem('selectedCategory', category);
        // Navigate to results page
        window.location.href= 'results.html';
    });
});
