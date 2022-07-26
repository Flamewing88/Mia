function init() { //переменные, инициализация
    canvas = document.getElementById("ice"); //соединение с html
    canvas.width = 480; // задаём ширину холста
    canvas.height = 320; // задаём высоту холста
    context = canvas.getContext('2d');
    draw();
}
// Отрисовка игры
function draw() { 
    context.fillStyle = '#a3d0c2'; //это цвет прямоугольника 
    context.fillRect(1, 1, 480, 320); //это типа рисует прямоугольник какой-то
}
init();
