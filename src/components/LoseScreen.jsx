import React from "react";
import { CanvasRenderer } from "three";
import * as app from './App.jsx';
import * as card from './card.js';

function LoseScreen(props){

    function playAgain(){
        props.setLives(3);
        props.setMovie([card.movies[card.movies.length-1]]);
        props.setScore(0);
    }

    


    return(
        <div className="lostModal">
            <h1>You Lose! Your score was {props.score}</h1>
            <button className = "loseButton"onClick={playAgain}>Play Again</button>
            
        </div>
    )
}

export default LoseScreen;