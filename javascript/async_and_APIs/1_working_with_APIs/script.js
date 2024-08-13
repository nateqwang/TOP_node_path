const img = document.querySelector('img');

fetch('https://api.giphy.com/v1/gifs/translate?api_key=Kgvg2ffXbebXz2tqqmoQnD19fExsy5Yk&s=cats', {mode: 'cors'})
.then(function(response) {
    return response.json();
    })
    .then(function(response) {
        img.src = response.data.images.original.url;
    });

const searchInput = document.querySelector('input');
const submitSearch = document.querySelector('button');

submitSearch.addEventListener('click', () => {
    let searchTerm = searchInput.value;
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=gvg2ffXbebXz2tqqmoQnD19fExsy5Yk&s=${searchTerm}`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        img.src = response.data.images.original.url;
    });
})
