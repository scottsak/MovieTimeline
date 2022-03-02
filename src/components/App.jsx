import React, {useState} from 'react';
import Card from './Card.jsx';
import * as card from './card.js';
import * as api from '../api.js';
// import PlayedCards from './PlayedCards'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';


function App() {
  const [movieData, setMovie] = useState([]);


  let newMovie = {
      poster_path: 'https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      title: "Fight Club",
      release_date: "1999-11-11",
      id: 3421331248
  }

  const testMovie = {
      poster_path: 'https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      title: "Runaways",
      release_date: "2021-11-11",
      id: 542349012
  }

  function changeMovie(){
    api.newMovie();
    let newMovie = card.movies[card.movies.length-1]

    console.log("Movie: "+newMovie)
    setMovie(prevMovies => {
      return [...prevMovies, newMovie];
    });
  }

  function handleOnDragEnd(result){
    setMovie(prevMovies=> {
      return[...prevMovies, testMovie];
    })
    console.log(movieData);
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
              <Draggable key={testMovie.title} draggableId={String(testMovie.id)} index={500}>
              {(provided) => (
              <div className="timelineCard" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <Card
                  key={500}
                  id = {testMovie.id}
                  used= {false}
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
                  <Draggable key={movieItem.title} draggableId={String(movieItem.id)} index={index}>
                  {(provided) => (
                  <li className="timelineCard" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Card
                      key={index}
                      id={movieItem.id}
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
