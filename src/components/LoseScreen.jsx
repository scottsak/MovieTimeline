import React from "react";
import { CanvasRenderer } from "three";
import * as app from './App.jsx';

function LoseScreen(props){

    function playAgain(){
        props.setLives(3);
        
        
    }

    return(
        <div>
            <button onClick={playAgain}>Play Again</button>
            <h1>You Lose! Your score was {props.score}</h1>
        </div>
    )
}

export default LoseScreen;