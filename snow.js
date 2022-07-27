// Инициализация переменных
function init() {
    game = new rect("#000", 0, 0, 480, 320);
    // Ракетки-игроки
    ai = new rect("#fff", 10, game.height / 2 - 40, 20, 80);
    player = new rect("#fff", game.width - 30, game.height / 2 - 40, 20, 80);
    // количество очков
    ai.scores = 0;
    player.scores = 0;
    // наш квадратный игровой "шарик"
    ball = new rect("#fff", 40, game.height / 2 - 10, 20, 20);
    canvas = document.getElementById("pong");
    canvas.width = game.width;
    canvas.height = game.height;
    context = canvas.getContext("2d");
    draw();
}
// Отрисовка игры
function draw() {
    context.fillStyle = '#a3d0c2';
    context.fillRect(1, 1, 480, 320);
}
init();

function rect(color, x, y, width, height) {
    this.color = color; // цвет прямоугольника
    this.x = x; // координата х
    this.y = y; // координата у
    this.width = width; // ширина
    this.height = height; // высота
    this.draw = function() // Метод рисующий прямоугольник
    {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}
