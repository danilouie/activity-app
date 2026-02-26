const resultsContainer = document.querySelector('.results-container');  // Use existing class

const dateIdeas = [
  {
    title: 'Shopping Spree',
    description: "Play dress up in the mall, attempt for your favorite collectibles, or find an unexpected treasure!"
  },
  {
    title: 'For The Memories',
    description: 'Vlog your memories and edit your own movie to look back on. Watch precious moments unfold before your eyes.'
  },
  {
    title: 'Mix And Match!',
    description: "Combine different date ideas into one, or plan out a day with different activities! Create your own perfect day!"
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
