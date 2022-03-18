import React, {useState} from 'react';
import * as app from './App.jsx';
import * as card from './card.js';


function LoseScreen(props){
    const [highScore, setHighScore] = useState(localStorage.getItem("highscore") ?? "0");

    function checkHighScore(score) {
        if(highScore < score){
            setHighScore(score);
            localStorage.setItem("highscore", score);
        }
        return highScore;
    }

    function playAgain(){
        props.setLives(3);
        props.setMovie([card.movies[card.movies.length-1]]);
        props.setScore(0);
    }

    


    return(
        <div className="lostModal">
            <h1>You Lose! Your score was {props.score}</h1>
            <h2>Your HighScore is {checkHighScore(props.score)}</h2>
            <button className = "loseButton"onClick={playAgain}>Play Again</button>
            
        </div>
    )
}

export default LoseScreen;