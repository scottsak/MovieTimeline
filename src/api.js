// import axios from 'axios';

const apiKEY = "api_key=9192af8a9192f6deb676dc0150d2e4aa";
const baseURL = "https://api.themoviedb.org/3/movie/"
const urlTest = 'https://api.themoviedb.org/3/movie/550?api_key=9192af8a9192f6deb676dc0150d2e4aa&language=en-US'

const axios = require('axios')

axios
  .get(urlTest)
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    console.log(res)
    console.log()
  })
  .catch(error => {
    console.error(error)
  })