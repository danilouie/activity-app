const resultsContainer = document.querySelector('.results-container');  // Use existing class

const dateIdeas = [
  {
    title: 'Escape Rooms',
    description: "Want to test your problem-solving and communication skills in a game? Challenge yourself to add another victory to your winning streak!"
  },
    {
    title: 'Gaze At The Stars',
    description: "Pack your sleeping bags and firewood. It's camping time! Bring your favorite snacks, some hot cocoa, and a telescope!"
  },
  {
    title: 'The World Is Your Oyster',
    description: "Try exploring the other side of your city or maybe a new one completely! Maybe even travel to a new company and learn about new cultures!"
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
