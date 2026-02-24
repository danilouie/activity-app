const resultsContainer = document.getElementById('resultsContainer');

const dateIdeas = [
  {
    title: 'Restaurant and Cafe Hunting',
    description: 'Craving something? Go to your favorite places or maybe try something new!'
  },
  {
    title: 'Cook on a Budget?',
    description: 'Maybe just want some quality time making something from scratch together.'
  },
  {
    title: 'Cooking Challenge',
    description: 'Challenge your cooking skills by trying out a recipe together!'
  }
  // Add more as needed
];

function displayResults() {
  resultsContainer.innerHTML = dateIdeas.map(idea => `
    <div class="result-item idea-card">
      <div class="result-image" style="background-color: #ff6b6b;"></div>
      <div class="result-text">
        <h3>${idea.title}</h3>
        <p>${idea.description}</p>
      </div>
    </div>
  `).join('');
}

displayResults();
