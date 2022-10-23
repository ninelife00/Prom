let rectx =100;
let x, y, r, g, b;
function setup() {
  createCanvas(windowWidth,windowHeight);
 background(0);
  rect (700, 787, 20, 10)
}


  




function draw() {
  r =random (255);
  g =0;
  b = random(655);
  x =random (width);
  y =random (height);
  noStroke()
  fill(r, g, b, 100);
    circle(x, y, 24);
    }


  
