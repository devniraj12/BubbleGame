/*
 *   Copyright (c) 2023 SMARTz Developer
 *   All rights reserved.
 */
let time = 60;
let score = 0;

let hitVal = 0;



const makeBubble = () => {
  let bubble = "";

  const surface = document.querySelector("#pbottom");
  let bubbleNum;

  for (let i = 0; i <= 160; i++) {
    bubbleNum = Math.floor(Math.random() * 10);
    bubble += `<div id="bubble">${bubbleNum}</div>`;
  }

  surface.innerHTML = bubble;
};


const startTimer = () => {
    
    const timer = document.querySelector("#time");
    let timerInt = setInterval(() => {
        if (time>0) {
            time--;
            timer.innerHTML = time;
        }else{
            clearInterval(timerInt);
            document.querySelector("#pbottom").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

const setHit = () => {
    const hit = document.querySelector("#hit");
    hitVal = Math.floor(Math.random()*10);
    hit.innerHTML = hitVal;
}

const addScore = () => {
    score += 10;
    document.querySelector("#score").textContent = score;
}

document.querySelector("#pbottom").addEventListener("click", (targetBubble) => {
    clickedBubble = Number(targetBubble.target.textContent);

    if (clickedBubble===hitVal) {
        addScore();
        makeBubble();
        setHit();
    }
})

makeBubble();
startTimer();
setHit();
