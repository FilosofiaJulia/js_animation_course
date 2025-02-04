const canvasTimer = document.getElementById('timer');
const context = canvasTimer.getContext('2d');

canvasTimer.width = 100;
canvasTimer.height = 50;

let myReq
let timeStop = false;
let end;
const now = Date.now;
const duration = 30000;
function displayCountdown() {
    const count = parseInt((end - now()) / 1000);
    context.clearRect(0, 0, canvasTimer.width, canvasTimer.height);
    context.font = "40px Tahoma";
    context.fillStyle = "#00FF0A";
    context.textAlign = 'center';
    context.fillText(count, canvasTimer.width / 2, 40); 
    if (count > 0) {
        myReq = window.requestAnimationFrame(displayCountdown);
    } else {
        cancelAnimationFrame(myReq); 
        timeStop = true;
        console.log(timeStop);
        return  timeStop;   
    }
}

function start() {
    end = now() + duration;
    myReq = window.requestAnimationFrame(displayCountdown);
}

start();

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 20,
    speed: 4,
    color: '#dfc252',
    dx: 0,
    dy: 0
}

function drawPlayer(x, y, radius, color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
} 

const dots = [];
let dotCount = 20;
let dotRadius = 10;
let dotColor = '#526fdf';

function drawDots() {
    for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        drawPlayer(dot.x, dot.y, dot.radius, dot.color);
    }
}

function createDots() {
    for (let i = 0; i < dotCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        dots.push({
            x,
            y,
            radius: dotRadius,
            color: dotColor
        });
    }
}

createDots();

function updatePlayer() {
    player.x += player.dx;
    player.y += player.dy;

    if (player.x - player.radius < 0)
        player.x = player.radius;

    if (player.x + player.radius > canvas.width)
        player.x = canvas.width - player.radius;

    if (player.y - player.radius < 0)
        player.y = player.radius;

    if (player.y + player.radius > canvas.height)
        player.y = canvas.height - player.radius;
}

function checkCollision() {
    for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const distance = Math.sqrt(Math.pow(player.x - dot.x, 2) + Math.pow(player.y - dot.y, 2));

        if (distance < player.radius + dot.radius) {
            dots.splice(i, 1);
            break;
        }
    }
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPlayer(player.x, player.y, player.radius, player.color);
    drawDots();
    updatePlayer();
    checkCollision();
    console.log(dots.length);
    
    if (dots.length === 0 && !timeStop) {
        ctx.fillStyle = '#fff';
        ctx.font = '40px Tahoma';
        ctx.textAlign = "center";
        ctx.fillText('Поздравляем!', canvas.width / 2, canvas.height / 2);
        cancelAnimationFrame(myReq); 
        return;        
    } 
    
    if (timeStop && dots.length !== 0){
        ctx.fillStyle = '#fff';
        ctx.font = '40px Tahoma';
        ctx.textAlign = "center";
        ctx.fillText('Время вышло!', canvas.width / 2, canvas.height / 2);
        return;
    }

    requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            player.dy = -player.speed;
            break;
        case 's':
            player.dy = player.speed;
            break;
        case 'a':
            player.dx = -player.speed;
            break;
        case 'd':
            player.dx = player.speed;
            break;
    }
});

document.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'w':
        case 's':
            player.dy = 0;
            break;
        case 'a':
        case 'd':
            player.dx = 0;
            break;
    }
});

gameLoop();