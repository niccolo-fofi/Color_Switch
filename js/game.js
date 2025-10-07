import { Ball } from "./Ball.js";

let ball = null;
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let gameState = "menu";
let testoInizio = true;

function drawMenu() {
    ctx.fillStyle = "rgb(38,38,38)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.font = "bold 50px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Color Switch", canvas.width / 2, canvas.height / 2 - 50);

    ctx.fillStyle = "white";
    ctx.fillRect(canvas.width / 2 - 100, canvas.height / 2, 200, 60);

    ctx.fillStyle = "black";
    ctx.font = "bold 30px Arial";
    ctx.fillText("START", canvas.width / 2, canvas.height / 2 + 40);
}

function drawPlay() {

    ctx.fillStyle = "rgb(38,38,38)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (testoInizio) {
        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.textAlign = "center";
        ctx.fillText("Premi SPACE per iniziare la partita", canvas.width / 2, canvas.height - 80);
    } else {
        null;
    }

    if (!ball) {
        ball = new Ball(canvas.width / 2, 790, 10, 10);
    }

    ball.update(canvas);
    ball.draw(ctx);
}


function drawNext() {

    ctx.fillStyle = "rgb(38,38,38)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.font = "bold 50px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Livello superato", canvas.width / 2, canvas.height / 2 - 50);

    ctx.fillStyle = "white";
    ctx.fillRect(canvas.width / 2 - 200, canvas.height / 2, 400, 60);

    ctx.fillStyle = "black";
    ctx.font = "bold 30px Arial";
    ctx.fillText("PROSSIMO LIVELLO", canvas.width / 2, canvas.height / 2 + 40);
}

function selezionaSchermata() {
    switch (gameState) {
        case "menu": drawMenu(); break;
        case "play": drawPlay(); break;
        case "next": drawNext(); break;
    }
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);

canvas.addEventListener("click", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const btnXStart = canvas.width / 2 - 100;
    const btnYStart = canvas.height / 2;
    const btnWStart = 200;
    const btnHStart = 60;

    const btnXNext = canvas.width / 2 - 200;
    const btnYNext = canvas.height / 2;
    const btnWNext = 400;
    const btnHNext = 60;

    if (
        mouseX >= btnXStart && mouseX <= btnXStart + btnWStart &&
        mouseY >= btnYStart && mouseY <= btnYStart + btnHStart &&
        gameState === "menu"
    ) {
        gameState = "play";
        testoInizio = true;
    } else {

        if (
            mouseX >= btnXNext && mouseX <= btnXNext + btnWNext &&
            mouseY >= btnYNext && mouseY <= btnYNext + btnHNext &&
            gameState === "next"
        ) {
            gameState = "menu";
        }
    }
});


window.addEventListener("keydown", (e) => {
    if (e.code === "Space" && gameState === "play" && ball) {
        ball.jump();
        testoInizio = false;
    }
});

function gameLoop() {
    selezionaSchermata();
    requestAnimationFrame(gameLoop);
}

resizeCanvas();
gameLoop();