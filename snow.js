// Инициализация переменных
function init() {
    canvas = document.getElementById("ice");
    canvas.width = 480; // задаём ширину холста
    canvas.height = 320; // задаём высоту холста
    context = canvas.getContext('2d');
    draw();
}
// Отрисовка игры
function draw() {
    context.fillStyle = "#a3d0c2";
    context.fillRect(0, 0, 480, 320);
}
init();
