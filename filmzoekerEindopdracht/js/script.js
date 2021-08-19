// Voegt films toe aan de pagina DOM 
function addMoviesToDom(input) {

    console.log('Start adding movies to dom')

    const list = document.getElementById('movieList');

    input.forEach(item => {
    // Maakte een nieuw element aan voor elke film
    let newLi = document.createElement("li");
    let newImg = document.createElement("img");
    let newA = document.createElement("a");

    // Ordent de elementen in elkaar
    list.appendChild(newLi);
    newLi.appendChild(newA);
    newA.appendChild(newImg);

    // Geeft de elementen de gepaste inhoud
    newA.href = "https://www.imdb.com/title/" + item.id;
    newImg.src = item.Poster;
})
};

addMoviesToDom(movies);

// Nieuwe array maken voor ieder filter met .filter array method
const nieuweFilms = movies.filter((item) => {
    if (item.Year >= 2014) {
        return item;
    }
});

const avengerFilms = movies.filter(item => {
    if (item.Title.includes("Avengers")) {
        return item;
    }
})

const xmenFilms = movies.filter(item => {
    if (item.Title.includes("X-Men")) { 
        return item;
    }
});

const princessFilms = movies.filter(item => {
    if (item.Title.includes("Princess")) { 
        return item;
    }
});

const batmanFilms = movies.filter(item => {
    if (item.Title.includes("Batman")) { 
        return item;
    }
});

// Verwijder huidige lijst met films

const removeList = () => {
    const huidigeFilms = document.getElementById('movieList');
    huidigeFilms.innerHTML = '';
  }

// Event listeners aan de buttons verbinden

document.getElementsByName('filmSelect').
    forEach(movieGenreFilter => {
        movieGenreFilter.addEventListener('change', 
            function handleOnChangeEvent(click) {
                removeList();
                if (click.target.value === 'nieuweFilms') {
                    console.log('Filtert Nieuwe Films')
                    addMoviesToDom(nieuweFilms);
                } else if (click.target.value === 'avengerFilms') {
                    console.log('Filtert Avenger Films')
                    addMoviesToDom(avengerFilms);
                } else if (click.target.value === 'xmenFilms') {
                    addMoviesToDom(xmenFilms);
                } else if (click.target.value === 'princessFilms') {
                    addMoviesToDom(princessFilms);
                } else if (click.target.value === 'batmanFilms') {
                    addMoviesToDom(batmanFilms);
                } else {
                    addMoviesToDom(movies);
                }
            }
        )
    }); 
