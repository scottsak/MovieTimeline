import React from 'react';
import './card.js';
import Draggable from 'react-draggable';
import * as api from "../api.js";

function Card(props){



    return(
      // <Draggable>
        <li class="timelineCard">
          <div className="card">
              <img className = "cardPoster" draggable="false" src={props.poster} alt={props.title}/>
              <p className = "cardInfo" >{props.title}</p>
          </div>
        </li>
      // </Draggable>
    )
}

export default Card;
