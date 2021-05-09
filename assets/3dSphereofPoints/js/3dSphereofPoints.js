/*Art from https://codepen.io/sha99y8oy/pen/LNRaQV*/
var boxSz = 205;
var sphereRadius = 184.5;

function updtVar1(){
    var x=parseInt(document.getElementById("var1").value);
    boxSz=x;
}

function updtVar2(){
    var x=parseInt(document.getElementById("var2").value);
    sphereRadius=x;
}
function setup() {
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
}

function draw() {
  background(35,25,90);
  
  // rotate scene
  rotateY(frameCount *0.01);
  
  push();
  // spin entire sphere
  rotateX(frameCount * 0.01);
   rotateZ(frameCount * 0.02);
 
  // move along sphere
    for(var s = 0; s <= 180; s += 6){
    var radianS = radians(s);
    var z = sphereRadius * cos(radianS);
    
    // draw complete circle of points
    for(var t = 0; t < 360; t += 12){
      var radianT = radians(t);
      var radius = sphereRadius * sin(radianS);
      var x = radius * cos(radianT);
      var y = radius * sin(radianT);
      
      // draw sphere at p]oint
      push();
      translate(x, y, z);
      sphere(5, 8);
      pop();
    }
  }
  pop();
  
drawBox();
} // draw

function drawBox() {
  // DRAW OUTLINE BOX
  stroke(255);
  //front
  line(-boxSz, -boxSz,  boxSz,  boxSz, -boxSz,  boxSz);
  line(-boxSz,  boxSz,  boxSz,  boxSz,  boxSz,  boxSz);
  line(-boxSz, -boxSz,  boxSz, -boxSz,  boxSz,  boxSz);
  line( boxSz, -boxSz,  boxSz,  boxSz,  boxSz,  boxSz);

  //back
  line(-boxSz, -boxSz, -boxSz,  boxSz, -boxSz, -boxSz);
  line(-boxSz,  boxSz, -boxSz,  boxSz,  boxSz, -boxSz);
  line(-boxSz, -boxSz, -boxSz, -boxSz,  boxSz, -boxSz);
  line( boxSz, -boxSz, -boxSz,  boxSz,  boxSz, -boxSz);

  //left top
  line(-boxSz, -boxSz,  boxSz, -boxSz, -boxSz, -boxSz);
  //left bottom
  line(-boxSz,  boxSz, -boxSz, -boxSz,  boxSz,  boxSz);
  //right top
  line( boxSz, -boxSz,  boxSz,  boxSz, -boxSz, -boxSz);
  // // right bottom
  line( boxSz,  boxSz, -boxSz,  boxSz,  boxSz,  boxSz);  

}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
