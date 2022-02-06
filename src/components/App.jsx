import React from 'react';
import Card from './Card.jsx';
import * as card from './card.js';
import * as api from '../api.js'



function App() {
  return (
    <div>
      <h1 id="gameTitle">Movie Game</h1>
      <button onClick={api.newMovie}>Click me!</button>
      <div class="boardGame">
      {/* <dl className="dictionary">{card.movies.map(createCard)}</dl> */}
      {card.createCard(card.movies[card.movies.length-1])}
      </div>
    </div>
  );
}

export default App;
