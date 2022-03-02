import React, {useState} from 'react';
import Card from './Card.jsx';
import * as card from './card.js';
import * as api from '../api.js'
import PlayedCards from './PlayedCards';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';


function App() {

  function changeMovie(){
    api.newMovie();
    let newMovie = card.movies[card.movies.length - 1]

    console.log("Movie: "+newMovie)
    card.setMovie(prevMovies => {
      return [...prevMovies, newMovie];
    });
  }

  function handleOnDragEnd(result){
    const items = Array.from(card.movieData);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    card.setMovie(items);
  }

  return (
    <div>
      <h1 id="gameTitle">Movie Game</h1>
      <button onClick={changeMovie}>Click me!</button>
      <div className="emptySpace">
      </div>
      <div className="boardGame scroll">
      <DragDropContext onDragEnd={handleOnDragEnd}>
      <PlayedCards />
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
