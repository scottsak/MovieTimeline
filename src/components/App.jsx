import React, {useState} from 'react';
import Card from './Card.jsx';
import * as card from './card.js';
import * as api from '../api.js';
import {DragDropContext} from 'react-beautiful-dnd';
import PlayedCards from './PlayedCards.jsx';
import NewCard from './NewCard.jsx';
import Lives from './Lives.jsx';


function App() {

  const [movieData, setMovie] = useState([card.movies[card.movies.length-1]]);
  const [gameCard, setGameCard] = useState(card.movieQueued[card.movieQueued.length-1]);
  const [lives, setLives] = useState(3);
  const [stillAlive, setStillAlive] = useState(true);

  function changeMovie(){
    console.log("Length of list: "+movieData.length);
    api.newMovie();
    let nextMovie = card.movieQueued[card.movieQueued.length-1];
    setGameCard(nextMovie);
  }

  function handleOnDragEnd(result){
    console.log("index of landing: "+result.destination.index);
    if(result.source.droppableId ==='next' && result.destination.droppableId ==='played'){
      card.movies.push(gameCard);
      let tempMovie = card.movies[card.movies.length-1];

      const items = Array.from(movieData);
      items.splice(result.destination.index, 0, gameCard);

      items.sort(function(a, b){
        let x = new Date(a.release_date);
        let y = new Date(b.release_date);
        return x - y;
      });
      setMovie(items);
      changeMovie();
}

  }

  return (
    <div>
      <h1 id="gameTitle">Movie Game</h1>
      <button onClick={changeMovie}>Click me!</button>
      <Lives
        heart = {3}
      />

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
