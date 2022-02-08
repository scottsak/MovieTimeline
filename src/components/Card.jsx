import React from 'react';
import './card.js';
import Draggable from 'react-draggable';
import * as api from "../api.js";

function Card(props){

    return(
      <Draggable>
        <div className="card">
            <img className = "cardPoster" draggable="false" src={props.img} alt="fight Club" />
            <p className = "cardInfo" >{props.title}</p>
        </div>
      </Draggable>
    )
}

export default Card;
