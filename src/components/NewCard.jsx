import React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import Card from './Card.jsx';


function NewCard(props){
    return(
        <div className="timelineCards">
        <Droppable droppableId="next" direction="horizontal">
            {(provided) => (
                <div className="timelineCard" {...provided.droppableProps} ref={provided.innerRef}>
                    <Card
                        key={props.movieItem.id}
                        id = {props.movieItem.id}
                        index={1000}
                        used= {false}
                        title = {props.movieItem.title}
                        poster = {props.movieItem.poster_path}
                        date = {props.movieItem.release_date}
                    />
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
        </div>
    );
}

export default NewCard;