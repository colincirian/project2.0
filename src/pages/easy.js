import React from "react";

function Easy() {
    
    document.addEventListener("DOMContentLoaded", function () {
        const displayTime = document.getElementByClassName('time');
        const displayScore = document.getElementByClassName('.score');
        const game = document.getElementByClassName('game');
        const alert = document.getElementById('alert');

        let gameOver = False;
        let time = 60;
        let score = 0;

        displayTime.innerHTML = `Time: ${time}`;
        displayScore.textContent = `Score: ${score}`;

        let timer = setInterval(function() {
            time--; //Decrement time 
            displayTime.innerHTML = `Time: ${time}`;

            if (time === 0) {
            clearInterval(timer); // Stops the timer
            alert.textContent`${alert}`;
            gameOver = True;
            }
        }, 1000);

        target.addEventListener("click", function () {
            if (time > 0) { // Only allow clicks while game is running
                score++;
                displayScore.textContent = `Score: ${score}`;
            };
        });
    });

    function spawnTarget() {
        if (gameOver) {
            target.style.display = "none";
            return;
        }
    };

    return (
        <div className="game">
            <h1 className="h1">Hello</h1>
            <h4 className="time">Time: 0</h4>
            <h4 className="score">Score: </h4>
            <div>
                <img className="target" alt="target" src="../img/target.jpg"/>

            </div>
            <h2 id="alert">GAME OVER!</h2>
        </div>
    )
}

export default Easy;
