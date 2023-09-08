import React, { useState, useEffect } from "react";

function buttonHandler() {
  console.log("")
}
document.addEventListener("DOMContentLoaded", function() {
  const startButton = document.getElementsById('start-btn');
  startButton.addEventListener("click", buttonHandler);
});

function Easy() {
  const [time, setTime] = useState(60);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [startGame, setStartGame] = useState(true);

  useEffect(() => {
    const displayTime = document.getElementById("timer");
    const displayScore = document.getElementById("score");
    const game = document.querySelector(".game");
    const alert = document.getElementById("alert");
    const target = document.querySelector(".target");
  
    displayTime.textContent = `Time: ${time}`;
    displayScore.textContent = `Score: ${score}`;
    
    function start() {
      return;
    };


    let timer;
  
    if (!gameOver) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setGameOver(true);
            return 0; 
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    }
  
    return () => {
      clearInterval(timer); // reset the timer back to 0
    };
  
    target.addEventListener("click", () => {
      if (time > 0 && !gameOver) {
        setScore((prevScore) => prevScore + 1);
        spawnTarget();
      }
    });

    function spawnTarget() {
        if (gameOver) {
          alert.style.display = "block"; // Show the game over message
          return;
        }
      
        const gameWidth = game.clientWidth;
        const gameHeight = game.clientHeight;
        const targetWidth = target.offsetWidth;
        const targetHeight = target.offsetHeight;
      
        // Set the position of the target
        const left = Math.floor(Math.random() * (gameWidth - targetWidth)) + "px";
        const top = Math.floor(Math.random() * (gameHeight - targetHeight)) + "px";
      
        // Apply the position to the target element
        target.style.left = left;
        target.style.top = top;
      }      

    spawnTarget();

    target.addEventListener("click", () => {
      spawnTarget();
    });
  }, [time, score, gameOver]);

  return (
    <div className="game">
      <section className="h4-container">
        <h4 className="h4" id="timer">
          Time: {time}
        </h4>
        <h4 className="h4" id="score">
          Score: {score}
        </h4>
      </section>
      <button id="start-btn">START GAME</button>
      <img className="target" alt="target" src="../img/target.jpg" />
      <h2 id="alert">{gameOver ? "GAME OVER" : ""}</h2>
    </div>
  );
}

export default Easy;
