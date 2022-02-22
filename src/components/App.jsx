import React, {useState} from 'react';
import Card from './Card.jsx';
import * as card from './card.js';
import * as api from '../api.js'
import {DragDropContext, Droppable} from 'react-beautiful-dnd';





function App() {
  const [movieData, setMovie] = useState([]);
  let newMovie = {
      poster_path: 'https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      title: "Fight Club",
      release_date: "1999-11-11"
  }

  // const [moviePoster, setMoviePoster] = useState(card.movies[0].img);
  // const [movieTitle, setMovieTitle] = useState(card.movies[0].title);


  function changeMovie(){
    api.newMovie();
    let newMovie = card.movies[card.movies.length - 1]

    console.log("Movie: "+newMovie)
    setMovie(prevMovies => {
      return [...prevMovies, newMovie];
    });
  //   setMoviePoster(card.movies[card.movies.length-1].img);
  //   console.log("This is the movie poster: "+card.movies[card.movies.length-1].img);
  //   setMovieTitle(card.movies[card.movies.length-1].title);
  //   console.log("This is the movie title: "+ card.movies[card.movies.length-1].title);
  }

  return (
    <div>
      <h1 id="gameTitle">Movie Game</h1>
      <button onClick={changeMovie}>Click me!</button>
      <div className="boardGame">
      <DragDropContext>
        <ul class="timelineCards">
          {movieData.map((movieItem, index) => {
          return (
            <Card
              key={index}
              id={index}
              title={movieItem.title}
              poster={movieItem.poster_path}
              date = {movieItem.release_date}
            />
          );
        })}
      </ul>
    </DragDropContext>
      </div>
    </div>
  );
}

export default App;
