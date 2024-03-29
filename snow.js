// Инициализация переменных
// Отрисовка игры
function draw() {
    context.fillStyle = "#000";
    context.fillRect(0, 0, 480, 320);
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
// Инициализация переменных
function init() {
    canvas = document.getElementById("ice");
    canvas.width = 480; // задаём ширину холста
    canvas.height = 320; // задаём высоту холста
    context = canvas.getContext('2d');
    // объект который задаёт игровое поле
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
    game.draw(); // рисуем игровое поле
    // рисуем на поле счёт
    context.font = 'bold 128px courier';
    context.textAlign = 'center';
    context.textBaseline = 'top';
    context.fillStyle = '#ccc';
    context.fillText(ai.scores, 100, 0);
    context.fillText(player.scores, game.width-100, 0);
    for (var i = 10; i < game.height; i += 45) // линия разделяющая игровое поле на две части
   {
        context.fillStyle = "#ccc";
        context.fillRect(game.width/2 - 10, i, 20, 30);
    }
    ai.draw(); // рисуем левого игрока
    player.draw(); // правого игрока
    ball.draw(); // шарик
}
// движение игрока
function playerMove(e) {
    var y = e.pageY;
    if (player.height / 2 + 10 < y && y < game.height - player.height / 2 - 10) {
        player.y = y - player.height / 2;
    }
}
// отрисовка игры
function draw() {
    game.draw(); // рисуем игровое поле
    // рисуем на поле счёт
    context.font = 'bold 128px courier';
    context.textAlign = 'center';
    context.textBaseline = 'top';
    context.fillStyle = '#ccc';
    context.fillText(ai.scores, 100, 0);
    context.fillText(player.scores, game.width - 100, 0);
    for (var i = 10; i < game.height; i += 45)
    // линия разделяющая игровое поле на две части
    {
        context.fillStyle = "#ccc";
        context.fillRect(game.width / 2 - 10, i, 20, 30);
    }
    ai.draw(); // рисуем левого игрока
    player.draw(); // правого игрока
    ball.draw(); // шарик
}
// Изменения которые нужно произвести
function update() {
    // меняем координаты шарика
    ball.x += ball.vX;
    ball.y += ball.vY;

}
function play() {
    draw(); // отрисовываем всё на холсте
    update(); // обновляем координаты
}
// Инициализация переменных
function init() {
    // объект который задаёт игровое поле
    game = new rect("#000", 0, 0, 480, 320);
    // Ракетки-игроки
    ai = new rect("#fff", 10, game.height / 2 - 40, 20, 80);
    player = new rect("#fff", game.width - 30, game.height / 2 - 40, 20, 80);
    // количество очков
    ai.scores = 0;
    player.scores = 0;
    // наш квадратный игровой "шарик"
    ball = new rect("#fff", 40, game.height / 2 - 10, 20, 20);
    // скорость шарика
    ball.vX = 2; // скорость по оси х
    ball.vY = 2; // скорость по оси у
    canvas = document.getElementById("pong");
    canvas.width = game.width;
    canvas.height = game.height;
    context = canvas.getContext("2d");
    canvas.onmousemove = playerMove;
    setInterval(play, 1000 / 50);
}
function collision(objA, objB) {
    if (objA.x+objA.width  > objB.x &&
        objA.x             < objB.x+objB.width &&
        objA.y+objA.height > objB.y &&
        objA.y             < objB.y+objB.height) {
            return true;
        }
        else {
            return false;
            }
    }
function update() {
    // меняем координаты шарика
    // Движение по оси У
    if (ball.y<0 || ball.y+ball.height>game.height) {
        // соприкосновение с полом и потолком игрового поля
        ball.vY = -ball.vY;
    }
    // Движение по оси Х
    if (ball.x<0) {
        // столкновение с левой стеной
        ball.vX = -ball.vX;
        player.scores ++;
    }
    if (ball.x+ball.width>game.width) {
        // столкновение с правой
        ball.vX = -ball.vX;
        ai.scores ++;
    }
    // Соприкосновение с ракетками
    if ((collision(ai, ball) && ball.vX<0) || (collision(player, ball) && ball.vX>0)){
        ball.vX = -ball.vX;
    }
    // приращение координат
    ball.x += ball.vX;
    ball.y += ball.vY;
    aiMove()
}
function aiMove() {
    var y;
    // делаем скорость оппонента на две единицы меньше чем скорость шарика
    var vY = Math.abs(ball.vY) - 2;
    if (ball.y < ai.y + ai.height/2) {
        y = ai.y - vY;
    }
    else {
        y = ai.y + vY;
    }
    if (10 < y && y < game.height - ai.height - 10) {
        ai.y = y;
    }
}
