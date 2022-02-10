import React, {useState} from 'react';
import Card from './Card.jsx';
import * as card from './card.js';
import * as api from '../api.js'





function App() {

  const [movie, setMovie] = useState(card.movies[0]);
  console.log(card.movies[0]);

  function changeMovie(){
    api.newMovie();
    setMovie(card.movies[card.movies.length-1]);
    console.log(card.movies.length-1);
    console.log("this is the movie: "+movie);
  }

  return (
    <div>
      <h1 id="gameTitle">Movie Game</h1>
      <button onClick={changeMovie}>Click me!</button>
      <div className="boardGame">
      <Card
        movie = {movie}
      />
      </div>
    </div>
  );
}

export default App;
