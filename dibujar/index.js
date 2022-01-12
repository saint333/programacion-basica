let teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

let cuadro = document.getElementById("cuadrito");
let papel = cuadro.getContext("2d");
let x = 0;
let y = 0;
let mouse;
document.addEventListener("mousemove",dibujarMouse)
document.addEventListener("keydown", dibujarTeclado);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento) {
    let colorcito = document.getElementById("colorcito").value;
    let movimiento = 5;
    switch (evento.keyCode) {
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            break;
            case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
            break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
            break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            break;
    }
}

function dibujarMouse(evento){
    (evento.button == 1) 
        ? dibujarLinea(colorcito,x,y,evento.layerX,evento.layerY,papel)
        :0;
        x = evento.layerX;
        y = evento.layerY;
}