import React, {useState} from 'react';
import Card from './Card.jsx';
import * as card from './card.js';
import * as api from '../api.js'
import {DragDropContext, Droppable} from 'react-beautiful-dnd';


const movieTestList = [
    {
      poster_path: 'https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      title: "Fight Club",
      release_date: "1999-11-11"
    },
    {
      poster_path: 'https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      title: "Funny",
      release_date: "1999-11-11"
    },
    {
      poster_path: 'https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      title: "Sad",
      release_date: "1999-11-11"
    },
    {
      poster_path: 'https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      title: "Scary",
      release_date: "1999-11-11"
    }

];


function App() {
  const [movieData, setMovie] = useState([]);
  let newMovie = {
      poster_path: 'https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      title: "Fight Club",
      release_date: "1999-11-11"
  }


  function changeMovie(){
    api.newMovie();
    let newMovie = card.movies[card.movies.length - 1]

    console.log("Movie: "+newMovie)
    setMovie(prevMovies => {
      return [...prevMovies, newMovie];
    });
  }

  return (
    <div>
      <h1 id="gameTitle">Movie Game</h1>
      <button onClick={changeMovie}>Click me!</button>
      <div className="boardGame">
      <DragDropContext>
      <Droppable droppableId="characters">
          {(provided) => (
          <ul class="timelineCards" {...provided.droppableProps} ref={provided.innerRef}>
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
          )}
        </Droppable>
    </DragDropContext>
      </div>
    </div>
  );
}

export default App;
