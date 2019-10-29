const API_LINK = 'https://swapi.co/api/films/';
let allMovies = [];
function fetchFn(apiUrl, callback) {
    fetch(apiUrl)
        .then( response => response.json())
        .then( response => callback(response))
        .catch( err => console.log(err));
}
fetchFn(API_LINK, response =>{
    for (let i = 0; i < response.results.length; i++) {
        let eachMovie = [],
            allChar = [],
            movieCharsArr = [];
        Promise.all(response.results[i].characters.reduce(char => charUrls.map(charUrl => fetchFn(charUrl)))).then(results => console.log(results) );
        movieCharsArr.push(response.results[i].characters);
        for (let j = 0; j < movieCharsArr.length; j++) {
            for (let k = 0; k < movieCharsArr[j].length; k++) {
                fetchFn(movieCharsArr[j][k], response => {
                    let eachChar = {};
                    eachChar.name = response.name;
                    eachChar.birth_year = response.birth_year;
                    allChar.push(eachChar);
                })
            }
            eachMovie.characters = allChar;
        }
        eachMovie.title = response.results[i].title;
        eachMovie.director = response.results[i].director;
        eachMovie.release_date = response.results[i].release_date;
        allMovies.push(eachMovie);
    }
    console.log(allMovies);
});

fetchFn()