// import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import Card from './Card.jsx';

const movies = [
    {
        img: 'https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
        title: "Fight Club"
    }
];

function addMovie(movie) {
    const mov = {
        img: "https://api.themoviedb.org/3/movie/"+movie.data.poster_path,
        title: movie.data.title
    }

    movies.push(mov);
    // createCard(movies[movies.length-1]);
    console.log("what is going through")
    console.log(movies.length-1);
    console.log(movies);
}

export {addMovie, movies};
