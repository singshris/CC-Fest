let angle = 0;
let bgColor = []; 
let strokeColor = [];

function setup() {
  createCanvas(800, 800);
  noFill();
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  background(0, 0, 100, 15);
  // stroke(360-0.5*frameCount%360, 70, 100);
  strokeWeight(60);
  translate(width/2,height/2);
  let increment = map(mouseX, 0, width, PI, 0.01)

  //smaller polygon 
    beginShape()
  for(let i = 0; i < TWO_PI; i=i+increment){
     let colorValue = map(mouseX, 0, width, 0, 360);
      stroke(colorValue, 60, 95);
      let r2 = map(mouseY, 0, height, 400, 50);
      let x = cos(i)*r2 + random(0,1);
      let y = sin(i)*r2 + random(0,1);
      vertex(x,y);
  }
  endShape(CLOSE)
  

    //larger polygon 
  beginShape();
  for(let a = 0; a < TWO_PI; a+=increment){
      let colorValue = map(mouseX, 0, width, 360, 0);
      stroke(colorValue, 60, 95);
      let r = map(mouseY, 0, height, 50, 400);
      let r1 = r+random(0,1);
      let x = r1*cos(a);
      let y = r1*sin(a);
      vertex(x,y);
  }
  endShape(CLOSE);

 
  
}