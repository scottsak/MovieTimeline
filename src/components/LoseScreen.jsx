import React, {useState} from 'react';
import * as app from './App.jsx';
import * as card from './card.js';
import * as api from '../api';


function LoseScreen(props){

    


    const [highScore, setHighScore] = useState(localStorage.getItem("highscore") ?? "0");
    let movieToBeSaved = JSON.stringify(card.movies[card.movies.length-1]);
    function checkHighScore(score) {
        localStorage.setItem("lastItem", movieToBeSaved);
        console.log(JSON.parse(localStorage.getItem("lastItem")))

        if(highScore < score){
            setHighScore(score);
            localStorage.setItem("highscore", score);

        }
        return highScore;
    }

    function playAgain(){
        props.setLives(3);
        card.movies[card.movies.length-1].correct=true;
        props.setMovie([card.movies[card.movies.length-1]]);

        props.setScore(0);
    }

    


    return(
        <div className="lostModal">
            <table className='loseTable'>
                <tr className='loseRow1'>
                    <th><h1>Your Score</h1></th>
                    <th><h1>High Score</h1></th>
                </tr>
                <tr className='loseRow2'>
                    <td><h2>{props.score}</h2></td>
                    <td><h2>{checkHighScore(props.score)}</h2></td>
                </tr>
            </table>
            <button className = "loseButton"onClick={playAgain}>Play Again</button>
            
        </div>
    )
}

export default LoseScreen;