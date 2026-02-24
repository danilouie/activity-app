const resultsContainer = document.getElementById('resultsContainer');

const dateIdeas = [
  { 
    title: 'Pottery or Ceramics Class', 
    description: 'Take a pottery wheel class together and make something for each other. It\'s hands-on, a little messy, and you\'ll have a handmade keepsake to remember the date.' 
  },
  { 
    title: 'Paint and Sip at Home', 
    description: 'Set up an art station at home with canvases, paints, and your favorite drinks. Choose the same reference photo and see how differently you interpret it. No artistic skills required!' 
  },
  { 
    title: 'Create a Time Capsule', 
    description: 'Gather meaningful items, write letters to your future selves, and create a time capsule together. Decide when you\'ll open it - in 1 year, 5 years, or even longer.' 
  },
  { 
    title: 'DIY Craft Project', 
    description: 'Choose a fun DIY project like making candles, tie-dye shirts, or building something from wood. Visit a craft store together to pick supplies and spend the afternoon creating.' 
  }
];

function displayResults() {
  resultsContainer.innerHTML = dateIdeas.map(idea => `
    <div class="idea-card">
      <h3>${idea.title}</h3>
      <p>${idea.description}</p>
    </div>
  `).join('');
}

displayResults();  // ← CRITICAL: actually run it
