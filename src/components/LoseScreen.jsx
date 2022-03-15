import React from "react";
import * as app from './App.jsx';

function LoseScreen(props){

    function playAgain(){
        console.log("loser")
        
    }

    return(
        <div>
            <button onClick={playAgain}>Play Again</button>
            <h1>You Lose</h1>
        </div>
    )
}

export default LoseScreen;