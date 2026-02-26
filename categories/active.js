const resultsContainer = document.querySelector('.results-container');  // Use existing class

const dateIdeas = [
  {
    title: "Journey Through Nature",
    description: "Take a gentle stroll by the beach or leap up the mountain! Bring lots of water (and maybe a snack) wherever you decide to take a breath of fresh air."
  },
  {
    title: "Be An Olympian!",
    description:  "Pick up a sport you've been curious about or maybe one that you haven't touched in a while. Get your body moving!"
  },
  {
    title: "Gym Galore",
    description: "Motivated to hit a new PR? Feeling strong? Try some new classes or facilities at the gym! Yoga with dogs?"
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
