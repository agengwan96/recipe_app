const searchForm = document.querySelector('form');
const searchResult = document.querySelector('.search-result');
const container = document.querySelector('.container');
let searchQuery = '';

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchAPI();
});

async function fetchAPI(){
    const url = `https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2/?q=${searchQuery}&type=public`;
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
};