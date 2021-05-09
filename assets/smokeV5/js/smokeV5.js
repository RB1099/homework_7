/*Art from https://codepen.io/superbuggy/pen/JaVVOE*/
let increment = 0.1
let rows, columns
let basePixels = 10
let frameRateDisplay
let timeOffset = 0.01

function updtVar1(){
    var x=parseFloat(document.getElementById("var1").value);
    rows,columns,basePixels=x;
}
function updtVar2(){
  var x=parseFloat(document.getElementById("var2").value);
  timeOffset=x;
}
function setup () {
  createCanvas(window.innerWidth, window.innerHeight)
  background(0, 0, 0)
  rows = floor(window.innerHeight / basePixels)
  columns = floor(window.innerWidth / basePixels)
}
 function draw () {
  let yOffset = 0
  for (let y = 0; y < rows; y++) {
    let xOffset = 0
    for (let x = 0; x < columns; x++) {
      let randomGrey = noise(xOffset, yOffset, timeOffset) * 255
      xOffset += increment
      noStroke()
      fill(randomGrey)
      rect(
        x * basePixels,
        y * basePixels,
        basePixels,
        basePixels
      )
      ellipse(
        x * basePixels  + random(-4, 4),
        y * basePixels  + random(-4, 4),
        basePixels
      )
      
    }
    timeOffset += increment * .005
    yOffset += increment
  }
}