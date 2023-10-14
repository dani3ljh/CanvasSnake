/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

/** @type {Array<Array<number>>} */
let grid = [];

/** @type {Array<object>} */
let snake = [];

function setSquare(x, y, color = "black", empty = false) {
    let xPrime = x * canvas.width / 10;
    let yPrime = y * canvas.height / 10;
    let width = canvas.width / 10;
    let height = canvas.height / 10;

    ctx.fillStyle = color;

    if (empty) {
        clearSquare(x, y);
        ctx.strokeRect(xPrime, yPrime, width, height);
    } else
        ctx.fillRect(xPrime, yPrime, width, height);
}

function clearSquare(x, y) {
    let xPrime = x * canvas.width / 10;
    let yPrime = y * canvas.height / 10;
    let width = canvas.width / 10;
    let height = canvas.height / 10;

    ctx.clearRect(xPrime, yPrime, width, height);
}

function setup() {
    const cWidth = canvas.width;
    const cHeight = canvas.height;

    for (let y = 0; y < 10; y++) {
        grid[y] = [];
        for (let x = 0; x < 10; x++) {
            grid[y][x] = 0;
            setSquare(x, y, "black", true);
        }
    }

    snake = [
        { x: 4, y: 5 },
        { x: 3, y: 5 },
        { x: 2, y: 5 },
        { x: 1, y: 5 },
        { x: 0, y: 5 },
    ];

    for (let i = 0; i < snake.length; i++) {
        const { x, y } = snake[i];
        grid[y][x] = 1;
        setSquare(x, y, "green");
    }
}

function tick() {
    logic();
    draw();
}

function logic() {
    // TODO:
}

function draw() {
    for (let y = 0; y < grid.length; y++) {
        const row = grid[y];
        for (let x = 0; x < row.length; x++) {
            const value = row[x];
            if (value === 1)
                setSquare(x, y, "green");
            else
               setSquare(x, y, "black", true);
        }
    }
}