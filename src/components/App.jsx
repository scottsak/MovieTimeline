import React, {useState} from 'react';
import Card from './Card.jsx';
import * as card from './card.js';
import * as api from '../api.js'





function App() {

  const [moviePoster, setMoviePoster] = useState(card.movies[0].img);
  const [movieTitle, setMovieTitle] = useState(card.movies[0].title);
  console.log("start Movie "+ moviePoster);


  function changeMovie(){
    api.newMovie();
    setMoviePoster(card.movies[card.movies.length-1].img);
    console.log("This is the movie poster: "+card.movies[card.movies.length-1].img);
    setMovieTitle(card.movies[card.movies.length-1].title);
    console.log("This is the movie title: "+ card.movies[card.movies.length-1].title);
    // console.log(card.movies.length-1);
    // console.log("this is the movie: "+movie);
  }

  return (
    <div>
      <h1 id="gameTitle">Movie Game</h1>
      <button onClick={changeMovie}>Click me!</button>
      <div className="boardGame">
      <Card
        moviePoster = {moviePoster}
        movieTitle = {movieTitle}
      />
      </div>
    </div>
  );
}

export default App;
