/*Art from https://codepen.io/philnash/pen/wmermr*/
const canvas = document.getElementById('the-art');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

let i,
  j,
  step = 20;

let randomness = 60;
let colorSpace = 120;

function updtVar1(){
    var x=parseInt(document.getElementById("var1").value);
    i=x;
    j=x;
    step=x;
}

function updtVar2(){
    var x=parseInt(document.getElementById("var2").value);
    randomness=x;
}

function updtVar3(){
    var x=parseInt(document.getElementById("var3").value);
    colorSpace=x;
}

function drawLines() {
  const lines = [];
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (i = 0; i <= canvasHeight; i += step) {
    const line = [];
    for (j = 0; j <= canvasWidth; j += step) {
      const horizontalRandomness = j > canvasWidth / 2 ? canvasWidth - j : j;
      const rand =
        Math.random() * randomness * horizontalRandomness / canvasWidth;
      line.push({ x: j, y: i + rand });
    }
    lines.push(line);
  }

  for (i = 0; i < lines.length; i++) {
    context.beginPath();
    context.moveTo(lines[i][0].x, lines[i][0].y);
    for (j = 0; j < lines[i].length; j++) {
      context.lineTo(lines[i][j].x, lines[i][j].y);
    }
    context.strokeStyle = `hsl(${step *
      i /
      canvasHeight *
      colorSpace}, 100%, 50%)`;
    context.stroke(); 
  }

  colorSpace += 20;
}

setInterval(drawLines, 200);
