import React from 'react';
import './card.js';
import Draggable from 'react-draggable';
import "../api.js";

function Card(){
    return(
      <Draggable>
        <div className="card">
        </div>
      </Draggable>
    )
}

export default Card;
