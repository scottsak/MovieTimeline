import React from 'react';
import './card.js';
import Draggable from 'react-draggable';
import * as api from "../api.js";

function Card(props){



    return(
      <Draggable>
        <div className="card">
            <img className = "cardPoster" draggable="false" src={props.moviePoster} />
            <p className = "cardInfo" >{props.movieTitle}</p>
        </div>
      </Draggable>
    )
}

export default Card;
