let angle = 0;
let bgColor = [];
let strokeColor = [];
let radSlider;
let incrementSlider;
let increment;
let hueSlider;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100, 100);
  strokeWeight(60);

  let controls = select(".controls");

  let sliderSection = createDiv();
  sliderSection.parent(controls);
  sliderSection.class("sliderSection")

  indexLabel = createDiv("SHAPE");
  indexLabel.parent(sliderSection);

  incrementSlider = createSlider(0, width, PI, 1 / 60);//along X-axis
  incrementSlider.class("slider")
  incrementSlider.parent(sliderSection);

  let radSection = createDiv();
  radSection.parent(controls);

  indexLabel = createDiv("SIZE");
  indexLabel.parent(radSection);

  radSlider = createSlider(0, height, 200, 1 / 60);//along Y-axis
  radSlider.parent(radSection);
  radSlider.class("slider");
  radSection.class("sliderSection")


  // hueSlider = createSlider(0, width, width / 2, 1 / 60);
  // hueSlider.position(500, 10);
  // hueSlider.size(150);



}

function draw() {
  background(0, 0, 99, 15);
  // stroke(360-0.5*frameCount%360, 70, 100);
  noFill();
  translate(width / 2, height / 2);


  //smaller polygon 
  beginShape()
  for (let i = 0; i < TWO_PI; i = i + increment) {
    let colorValue = map(incrementSlider.value(), 0, width, 0, 180);
    increment = map(incrementSlider.value(), 0, width, PI, 0.01)
    stroke(colorValue, 54, 95);
    let r2 = map(Math.floor(radSlider.value()), 0, height, 360, 80);
    let x = cos(i) * r2 + random(-1, 1);
    let y = sin(i) * r2 + random(-1, 1);
    vertex(x, y);
  }
  endShape(CLOSE)



  //larger polygon 
  beginShape();
  for (let a = 0; a < TWO_PI; a += increment) {
    let colorValue = map(incrementSlider.value(), 0, width, 180, 360);
    stroke(colorValue, 54, 95);
    increment = map(incrementSlider.value(), 0, width, PI, 0.01)
    let r1 = map(Math.floor(radSlider.value()), 0, height, 80, 360);
    let x = r1 * cos(a) + random(-1, 1);
    let y = r1 * sin(a) + random(-1, 1);
    vertex(x, y);
  }
  endShape(CLOSE);
}

function createLabel() {
  push()
  fill(0)
  noStroke()
  text(Math.floor(radSlider.value()), 250, 10);
  text(incrementSlider.value(), 250, 30);
  text(increment, 250, 50);
}