// import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import Card from './Card.jsx';
import * as api from "../api.js";

const movies = [
    {
      poster_path: 'https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      title: "Fight Club",
      release_date: "1999-11-11"
    }

];

function addMovie(movie) {
    let randNum = Math.floor(Math.random() * (19 - 1 + 0)) + 0;
    const mov = {
        poster_path: "https://image.tmdb.org/t/p/original/"+movie.data.results[randNum].poster_path,
        title: movie.data.results[randNum].title,
        date: movie.data.results[randNum].release_date
    }


    movies.push(mov);
    // createCard(movies[movies.length-1]);
    console.log("what is going through")
    console.log(movies.length-1);
    console.log(movies);
}

export {addMovie, movies};
