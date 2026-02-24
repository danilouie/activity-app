const backBtn = document.getElementById('backBtn');
const categoryTitle = document.getElementById('categoryTitle');

// Get the selected category
const category = localStorage.getItem('selectedCategory');
categoryTitle.textContent = category || 'Results';

backBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
});

const scriptMap = {
  Hungry: 'categories/hungry.js',
  Creative: 'categories/creative.js',
  Tired: 'categories/tired.js',
  Active: 'categories/active.js',
  Curious: 'categories/curious.js',
  Other: 'categories/other.js'
};

const scriptSrc = scriptMap[category];
if (scriptSrc) {
  const script = document.createElement('script');
  script.src = scriptSrc;
  document.head.appendChild(script);
}
