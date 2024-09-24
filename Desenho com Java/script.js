const color = document.querySelector('input');
let screen = document.querySelector('canvas');

let defaultColor = 'black';
let canDraw = false;
let mousex = 0;
let mousey = 0;

let ctx = screen.getContext('2d'); // Corrigido de ctv para ctx

// Atualiza a cor ao trocar o valor do input
color.onchange = () => defaultColor = color.value;

// Eventos de mouse
screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent); // Corrigido 'mousup' para 'mouseup'

// Inicia o desenho
function mouseDownEvent(e) {
    canDraw = true;
    mousex = e.pageX - screen.offsetLeft; // Corrigido 'pagex' para 'pageX'
    mousey = e.pageY - screen.offsetTop;  // Corrigido 'pagey' para 'pageY'
}

// Desenha enquanto o mouse se move
function mouseMoveEvent(e) {
    if (canDraw) {
        draw(e.pageX, e.pageY); // Chamando a função draw corretamente
    }
}

// Para de desenhar
function mouseUpEvent() {
    canDraw = false;
}

// Função que desenha na tela
function draw(x, y) {
    let pointx = x - screen.offsetLeft;
    let pointy = y - screen.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.moveTo(mousex, mousey);
    ctx.lineTo(pointx, pointy); // Corrigido de 'lineto' para 'lineTo'
    ctx.closePath();
    ctx.strokeStyle = defaultColor;
    ctx.stroke();

    mousex = pointx;
    mousey = pointy;
}

// Função que limpa o canvas
function clearBoard() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}