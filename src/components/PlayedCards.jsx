import React, {useState} from 'react';
import Card from './Card.jsx';
import * as card from './card.js';
import * as api from '../api.js';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

function PlayedCards(props){

  return (
    <div>
    <Droppable droppableId="played" direction="horizontal">
        {(provided) => (
        <ul className="timelineCards" {...provided.droppableProps} ref={provided.innerRef}>
          {props.movieData.map((movieItem, index) => {
          return (
            <li className="timelineCard">
              <Card
                draggable={false}
                key={movieItem.id}
                id = {movieItem.id}
                index={index}
                used={true}
                title = {movieItem.title}
                poster = {movieItem.poster_path}
                date = {movieItem.release_date}
              />
            </li>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
        </Droppable>
        </div>
    )
}

export default PlayedCards;
