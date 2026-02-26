const resultsContainer = document.querySelector('.results-container');  // Use existing class

const dateIdeas = [
    {
        title: 'Piecing The Puzzle',
        description: "It's time to break out the collection of puzzles on the bookshelf! Watch your masterpiece slowly take shape!"
    },
    {
        title: 'Game Night',
        description: "Throw in the dice and magic decks or build a farm together! Strategize and conquer or immerse yourself in another world."
    },
    {
        title: 'Binge and Bundle',
        description: "Wrap yourself in a blanket on the couch and put on your favorite series! Snuggle with your loved ones!"
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
