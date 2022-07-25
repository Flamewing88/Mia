function init() { //переменные, инициализация
    canvas = document.getElementById("ice"); //соединение с html
    canvas.width = 480; // задаём ширину холста
    canvas.height = 320; // задаём высоту холста
    context = canvas.getContext('2d');
    draw();
}
// Отрисовка игры
function draw() {
    gradient.addColorStop(0.5, 'blue', 0.5, white) //градиент
    context.fillStyle = gradient; //это цвет прямоугольника 
    context.fillRect(0, 0, 480, 320); //это типа рисует прямоугольник какой-то
}
init();
