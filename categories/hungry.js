const resultsContainer = document.querySelector('.results-container');  // Use existing class

const dateIdeas = [
  {
    title: 'Restaurant And Cafe Hunting',
    description: 'Craving something? Go to your favorite places or maybe try something new! Scour the internet for some hotspots!'
  },
  {
    title: 'Chef It Up',
    description: 'On a budget? Want to make something from scratch? Challenge your cooking skills by trying out a new recipe!'
  },
  {
    title: 'Create Your Own Cafe',
    description: "Matcha latte. Hojicha chiffon cake. Lemon sorbet. Enjoy your favorite desserts and drinks, whether you buy it or bake it!"
  },
];

function displayResults() {
  resultsContainer.innerHTML = dateIdeas.map(idea => `
    <div class="result-item">
      <div class="result-text">
        <h3>${idea.title}</h3>
        <p>${idea.description}</p>
      </div>
    </div>
  `).join('');
}

// Run when loaded
if (resultsContainer) {
  displayResults();
}
