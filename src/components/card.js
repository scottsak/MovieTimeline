// import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import Card from './Card.jsx';
import * as api from "../api.js";
import React, {useState} from 'react';

const [movieData, setMovie] = useState([]);
let newMovie = {
    poster_path: 'https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    title: "Fight Club",
    release_date: "1999-11-11"
}


const movies = [
    {
      poster_path: 'https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      title: "Fight Club",
      release_date: "1999-11-11"
    }

];

function addMovie(movie) {
    let randNum = Math.floor(Math.random() * (19 - 1 + 0)) + 0;
    let movieFound = true;
    let count=0;
    let mov = {};
    while(movieFound){
      console.log("going through");
      if(!movie.data.results[randNum].adult && movie.data.results[randNum].vote_count > 1500){
        mov = {
            poster_path: "https://image.tmdb.org/t/p/original/"+movie.data.results[randNum].poster_path,
            title: movie.data.results[randNum].title,
            release_date: movie.data.results[randNum].release_date
        }
        movies.push(mov);
        console.log("what is going through")
        console.log(movies.length-1);
        console.log(movies);
        movieFound=false;
      }
      else if(count<10){
        randNum = Math.floor(Math.random() * (19 - 1 + 0)) + 0;
        count++;
      }
      else{
        api.newMovie();
        break;
      }
    }
}


export {addMovie, movies, newMovie, movieData, setMovie};
