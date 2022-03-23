import React, {useState} from 'react';
import Card from './Card.jsx';
import * as card from './card.js';
import * as api from '../api.js';
import {DragDropContext} from 'react-beautiful-dnd';
import PlayedCards from './PlayedCards.jsx';
import NewCard from './NewCard.jsx';
import Lives from './Lives.jsx';
import LoseScreen from './LoseScreen.jsx';
import Header from './Header.jsx'


function App() {

  api.newMovie();
  let startMovie;
  if(localStorage.getItem("lastItem") === 'undefined' || localStorage.getItem("lastItem") === null){
    startMovie = [card.movies[card.movies.length-1]]
  }
  else{
    startMovie = [JSON.parse(localStorage.getItem("lastItem"))]
    console.log(startMovie)
    console.log(startMovie[0].correct)
    startMovie[0].correct = true;
  }
  let startGameCard;
  if(localStorage.getItem("lastGameCard") === 'undefined' || localStorage.getItem("lastGameCard") === null){
    startGameCard = card.movieQueued[card.movieQueued.length-1]
  }
  else{
    startGameCard = JSON.parse(localStorage.getItem("lastGameCard"))
    console.log(startGameCard)
  }

  
  const [movieData, setMovie] = useState(startMovie);
  const [gameCard, setGameCard] = useState(startGameCard);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);

 

  function changeMovie(){
    console.log("Length of list: "+movieData.length);
    api.newMovie();
    let nextMovie = card.movieQueued[card.movieQueued.length-1];
    setGameCard(nextMovie);
  }

  function handleOnDragEnd(result){
    let correct = true;
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
      if(result.destination.index !== items.indexOf(tempMovie)){
        console.log(false)
        setLives(lives-1);
        items[items.indexOf(tempMovie)].correct = false;

        
        document.body.style.backgroundColor = "#9F2D4D";
        setTimeout(() => {
          document.body.style.backgroundColor = "#25274D";
        }, 200);
      }
      else{
        setScore(score+1);
        items[items.indexOf(tempMovie)].correct = true;
      }
      setMovie(items);
      
      // for(let i=0; i<movieData.length; i++){
      //   console.log(JSON.stringify(movieData[i]));
      // }
      // console.log(movieData[movieData.indexOf(tempMovie)].correct)
      changeMovie();
      let lastGameCard = JSON.stringify(gameCard);
      if(lives > 1 ){
        localStorage.setItem("lastGameCard", lastGameCard);
      }
      
}

  }

  return (
    <div>
      <Header />
      <DragDropContext onDragEnd={handleOnDragEnd}>
      {lives < 1 ? 
        (
          <div className="nextCard">
          <LoseScreen
            score = {score}
            setLives = {setLives}
            setMovie = {setMovie}
            setGameCard = {setGameCard}
            setScore = {setScore}
          />
          </div>
        
        )
      :(
      <>
      {/* <button onClick={changeMovie}>Click me!</button> */}
      <Lives
            heart={lives} />
            
              <div className="nextCard">
                <NewCard
                  movieItem={gameCard} />
              </div></>

      )}
      <div className="boardGame scroll">
                <PlayedCards
                  movieData={movieData} />
              </div>

      </DragDropContext>

    </div>
  );
}

export default App;
