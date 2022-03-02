import React from 'react';
import './card.js';
import Draggable from 'react-draggable';
import * as api from "../api.js";


function Card(props){
  console.log(props.date);
  console.log(props.title);


  function CardUsed(props) {
    const used = props.used;
    if (used) {
      return <p className="cardInfo">{props.date}</p>;
    }
    else{
      return <p></p>
    }
  }

  console.log(props.id);


  return(
      <div className="card">
          <img className = "cardPoster" src={props.poster} alt={props.title}/>
          <CardUsed
            used = {props.used}
            date = {props.date}
          />
      </div>
    )
}

export default Card;
