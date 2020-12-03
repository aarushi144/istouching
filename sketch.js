var moving ;
var fixed ; 
function setup() {
  createCanvas(800,800);
  moving = createSprite(400, 200, 50, 50);
  fixed = createSprite(400, 200, 150, 50);
}

function draw() {
  
  background(0); 
  moving.x = mouseX ; 
  moving.y = mouseY ;
if (moving.x - fixed.x <= moving.width / 2 + fixed.width / 2  &&
   fixed.x - moving.x <= moving.width / 2 + fixed.width / 2 &&
   moving.y - fixed.y <= moving.height / 2 + fixed.height / 2  &&
    fixed.y - moving.y <= moving.height / 2 + fixed.height / 2){
moving.shapeColor = "red";
fixed.shapeColor = "red";
}
else {
  moving.shapeColor = "grey";
fixed.shapeColor = "grey";
}
  drawSprites();
}