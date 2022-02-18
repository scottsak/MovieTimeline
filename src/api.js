// import axios from 'axios';
import * as moviesFile from "./components/card.js";
import * as app from "./components/App.jsx";

const apiKEY = "api_key=9192af8a9192f6deb676dc0150d2e4aa&language=en-US";
const baseURL = "https://api.themoviedb.org/3/movie/"
const urlTest = 'https://api.themoviedb.org/3/movie/550?api_key=9192af8a9192f6deb676dc0150d2e4aa&language=en-US'

const axios = require('axios')

function getRandMovie(){
    return (Math.floor((Math.random()*1000)+1)).toString();
}


function newMovie(){
    axios
    .get(baseURL+getRandMovie()+"?"+apiKEY)
    .then(res => {
        console.log("status code")
        console.log(`statusCode: ${res.status}`)
        console.log("res")
        console.log(res)
        console.log("posterpath")
        console.log(`posterPath: ${res.data.poster_path}`)
        moviesFile.addMovie(res)

    })
    .catch(error => {
        console.error(error)
        newMovie();
    })



}

export {newMovie, apiKEY};
