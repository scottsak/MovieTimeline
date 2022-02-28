import React, {useState} from 'react';
import Card from './Card.jsx';
import * as card from './card.js';
import * as api from '../api.js'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';


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

  function handleOnDragEnd(result){
    const items = Array.from(movieData);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setMovie(items);
  }

  return (
    <div>
      <h1 id="gameTitle">Movie Game</h1>
      <button onClick={changeMovie}>Click me!</button>
      <div className="emptySpace">
      </div>
      <div className="boardGame scroll">
      <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="characters" direction="horizontal">
          {(provided) => (
          <ul className="timelineCards" {...provided.droppableProps} ref={provided.innerRef}>
            {movieData.map((movieItem, index) => {
            return (
              <Draggable key={movieItem.title} draggableId={movieItem.title} index={index}>
              {(provided) => (
              <li className="timelineCard" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <div className="card">
                    <img className = "cardPoster" src={movieItem.poster_path} alt={movieItem.title}/>
                    <p className = "cardInfo" >{movieItem.title}</p>
                    <p className = "cardInfo">{movieItem.release_date}</p>
                </div>
              </li>
               )}
              </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
