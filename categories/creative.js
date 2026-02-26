const resultsContainer = document.querySelector('.results-container');  // Use existing class

const dateIdeas = [
  {
    title: 'DIY Projects',
    description: "Ever wanted to create your own candles? Design handmade cards? Sew a shirt? Put your creativity to the test or browse the internet for tutorials!"
  },
  {
    title: 'Vision Board',
    description: "Choose a theme and fill the vision board with designs and photos of your choosing. Go out and snapshot whatever inspires you!"
  },
    {
    title: 'An Artist In The Making',
    description: "Whip out a sketch book or canvas and draw to your hearts content. Bring out your inner Van Gogh or Picasso!"
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
