import React, {useState} from 'react';
import './card.js';
import {Draggable} from 'react-beautiful-dnd';
import * as api from "../api.js";


function Card(props){




  function CardUsed(props) {
    const used = props.used;
    if (used) {
      return <p className="cardInfo">{props.date}</p>;
    }
    else{
      return null;
    }
  }

  function isRight(correct, used){
    if(used && correct){
      return "cardRight card";
    }
    else if(used && !correct){
      return "cardWrong card"
    }
    else{
      return null;
    }
  }


  return(
    
    <Draggable draggableId={String(props.id)} index={props.index} isDragDisabled={props.used}>
      {(provided, snapshot) => {
        return (
            <div className= {isRight(props.right, props.used)}
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>

            <img className = "cardPoster" src={props.poster} alt={props.title}/>
            <CardUsed
              used = {props.used}
              date = {props.date}
            />
      </div>
      );
    }}
  </Draggable>
    );
}

export default Card;
