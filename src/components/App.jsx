import React, {useState} from 'react';
import Card from './Card.jsx';
import * as card from './card.js';
import * as api from '../api.js';
// import PlayedCards from './PlayedCards'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import PlayedCards from './PlayedCards.jsx';
import NewCard from './NewCard.jsx';
import EmptySpace from './EmptySpace.jsx';


function App() {
  const [movieData, setMovie] = useState([]);



  const testMovie = {
    key: 123432112530,
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
    setTimeout(function(){
      console.log('after');
      for (let i = 0; i < movieData.length; i++) {
        console.log("This is the list of Movies: "+movieData[i].title);
      }
      console.log("how long the list is: "+movieData.length);
  },1000);
  }

  function handleOnDragEnd(result){
    const { source, destination } = result;
    console.log("destination: "+destination.droppableId+" source: "+ source.droppableId);
    console.log(testMovie);
    if(result.source.droppableId ==='next' && result.destination.droppableId ==='played'){
      console.log("went through what i want it to")
      card.movies.push(testMovie);
      let tempMovie = card.movies[card.movies.length-1]
      console.log("temp movie: "+tempMovie.id)
      setMovie(prevMovies => {
        return [...prevMovies, testMovie];
      });
    }
    else if(result.source.droppableId ==='played' && result.destination.droppableId ==='played'){
      const items = Array.from(movieData);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);

      setMovie(items);
    }
    setTimeout(function(){
    console.log("Movie Data prime: "+movieData);
    for (let i = 0; i < movieData.length; i++) {
      console.log("This is the list of Movies: "+movieData[i].title);
    }
  },1000);
    
  }

  return (
    <div>
      <h1 id="gameTitle">Movie Game</h1>
      <button onClick={changeMovie}>Click me!</button>


      <DragDropContext onDragEnd={handleOnDragEnd}>

      <NewCard 
        movieItem={testMovie}
      />
          
          <div className="boardGame scroll">
          <PlayedCards 
            movieData =  {movieData}
          />
          </div>
        </DragDropContext>

    </div>
  );
}

export default App;
