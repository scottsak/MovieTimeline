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

  const [movieData, setMovie] = useState([card.movies[card.movies.length-1]]);
  const [gameCard, setGameCard] = useState(card.movieQueued[card.movieQueued.length-1]);
  console.log("gameCard: "+gameCard.title);
  console.log("movieData: "+movieData[movieData.length-1].title);


  function changeMovie(){
    console.log("Length of list: "+movieData.length);
    api.newMovie();
    let nextMovie = card.movieQueued[card.movieQueued.length-1]
    console.log("Movie: "+nextMovie)

    setGameCard(nextMovie);

  }

  function handleOnDragEnd(result){
    const { source, destination } = result;
    console.log("destination: "+destination.droppableId+" source: "+ source.droppableId);
    if(result.source.droppableId ==='next' && result.destination.droppableId ==='played'){
      console.log("went through what i want it to")
      card.movies.push(gameCard);
      let tempMovie = card.movies[card.movies.length-1];
      console.log("temp movie: "+tempMovie.id)

      setMovie(prevMovies => {
        return [...prevMovies, tempMovie];
      });

      changeMovie();
    }
    else if(result.source.droppableId ==='played' && result.destination.droppableId ==='played'){
      const items = Array.from(movieData);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      console.log("Items: "+items);
      items.sort(function(a, b){
        let x = new Date(a.release_date);
        let y = new Date(b.release_date);
        console.log("x: "+x);
        console.log("y: "+y);
        return x - y;
      });

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
        movieItem={gameCard}
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
