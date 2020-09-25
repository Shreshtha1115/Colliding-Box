var movingRec, Rec


function setup() {
  createCanvas(800,400);
  movingRec = createSprite(400, 200, 50, 50);
  movingRec.shapeColor = ("green")
  Rec = createSprite(600,200,80,30)
  Rec.shapeColor = ("green")
}

function draw() {
  background(255,255,255);  

movingRec.x = World.mouseX
movingRec.y = World.mouseY

if(movingRec.x-Rec.x <= movingRec.width/2 + Rec.width/2 && Rec.x - movingRec.x <= movingRec.width/2 + Rec.width/2 && 
  movingRec.y-Rec.y <= movingRec.height/2 + Rec.height/2 && Rec.y - movingRec.y <= movingRec.height/2 + Rec.height/2
  ){
  movingRec.shapeColor = ("red")
  Rec.shapeColor = ("red")
}else{

  movingRec.shapeColor = ("green")
  Rec.shapeColor = ("green")

}



  drawSprites();
}