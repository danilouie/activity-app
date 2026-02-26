// Close App
function closeApp(e) {
  e.preventDefault();
  window.electronAPI.closeApp();
}

document.getElementById("closeBtn").addEventListener("click", closeApp);

// // Minimize App
// function minimizeApp(e) {
//   e.preventDefault();
//   window.electronAPI.minimizeApp();
// }

// document.getElementById("minBtn").addEventListener("click", minimizeApp);

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
