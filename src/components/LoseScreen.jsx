import React from "react";
import { CanvasRenderer } from "three";
import * as app from './App.jsx';
import * as card from './card.js';

function LoseScreen(props){

    function playAgain(){
        props.setLives(3);
        props.setMovie([card.movies[card.movies.length-1]])
    }

    return(
        <div>
            <button onClick={playAgain}>Play Again</button>
            <h1>You Lose! Your score was {props.score}</h1>
        </div>
    )
}

export default LoseScreen;