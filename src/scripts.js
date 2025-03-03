const searchForm = document.querySelector('form');
const searchResult = document.querySelector('.search-results');
const container = document.querySelector('.container');
let searchQuery = '';

nextBtn.addEventListener('click', () => {
    countFrom += 20;
    countTo += 20;
    fetchAPI();
});

async function fetchAPI(){
    const url = `https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?&q=${searchQuery}&type=public&random=true`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a7e5e3f6cbmsh457f36bbd724520p1d3a3djsndf3e29e67946',
            'x-rapidapi-host': 'edamam-recipe-search.p.rapidapi.com',
            'Accept-Language': 'en'
        }
    };
    const response = await fetch(url, options);
    const data = await response.json();
    generateHTML(data.hits);
    changePageNum(countFrom, data.count);
    console.log(data);
};

const generateHTML = (results) => {
    let generatedHTML = '';
    results.map(result => {
        generatedHTML += `
        <div class="item">
            <img src="${result.recipe.image}" alt="">
            <div class="flex-container">
                <h1 class="title">${result.recipe.label}</h1>
                <a class="view-btn" href="${result.recipe.url}" target="_blank">View Recipe</a>
            </div>
            <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
            <p class="item-data">Diet Label: ${result.recipe.dietLabels.length > 0 ? result.recipe.dietLabels : 'No Data Found'}</p>
            <p class="item-data">Health Label: ${result.recipe.healthLabels}</p>
        </div>
        `;
    });
    searchResult.innerHTML = generatedHTML;
}