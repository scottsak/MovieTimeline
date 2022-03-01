import React from 'react';
import './card.js';
import Draggable from 'react-draggable';
import * as api from "../api.js";

function Card(props){
  console.log(props.date);
  console.log(props.title);


    return(
          <div className="card">
              <img className = "cardPoster" src={props.poster} alt={props.title}/>
          </div>
    )
}

export default Card;
