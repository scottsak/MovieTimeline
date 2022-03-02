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

  const testMovie = {
      poster_path: 'https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      title: "Runaways",
      release_date: "2021-11-11"
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


      <DragDropContext onDragEnd={handleOnDragEnd}>

      <Droppable droppableId="next" direction="horizontal">
          {(provided) => (
          <div className="timelineCards" {...provided.droppableProps} ref={provided.innerRef}>
              <Draggable key={testMovie.title} draggableId={testMovie.title} index={500}>
              {(provided) => (
              <div className="timelineCard" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <Card
                  key={500}
                  used= {true}
                  title = {testMovie.title}
                  poster = {testMovie.poster_path}
                  date = {testMovie.release_date}
                />
              </div>
               )}
              </Draggable>
              {provided.placeholder}
            </div>
          )}
          </Droppable>

          <div className="emptySpace">
          </div>
          <div className="boardGame scroll">

      <Droppable droppableId="played" direction="horizontal">
          {(provided) => (
          <ul className="timelineCards" {...provided.droppableProps} ref={provided.innerRef}>
            {movieData.map((movieItem, index) => {
            return (
              <Draggable key={movieItem.title} draggableId={movieItem.title} index={index}>
              {(provided) => (
              <li className="timelineCard" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <Card
                  key={index}
                  used= {true}
                  title = {movieItem.title}
                  poster = {movieItem.poster_path}
                  date = {movieItem.release_date}
                />
              </li>
               )}
              </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
          </Droppable>
                </div>
        </DragDropContext>

    </div>
  );
}

export default App;
