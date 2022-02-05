import React from 'react';
import './card.js';
import Draggable from 'react-draggable';
import "../api.js";

function Card(){
    return(
      <Draggable>
        <div className="card">
            <img className = "cardPoster" draggable="false" src="https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg" alt="fight Club" />
            <p>Fight Club</p>
        </div>
      </Draggable>
    )
}

export default Card;
