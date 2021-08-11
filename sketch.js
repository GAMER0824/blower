var button


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

}

function draw() {
  background(255,255,255);  

  ball.show()
  blower.show()
  mouth.show()

  drawSprites();
}
function button(){
  button = createButton("click to blow")
  button.position(width / 2, height -100)
  button.class("blower")
  button.mousePressed(blow)
}
 function blow() {
  Matter.Body.applyForce(ball.body, {x: 0,y: 0},{x: 0,y: 0.05})
}