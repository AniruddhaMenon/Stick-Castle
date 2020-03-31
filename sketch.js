function setup() {
  createCanvas(400,400);
  
}

function draw() {
  background(25,225,25);
  rectMode(CENTER);
  fill ("turquoise")
  rect(50,250,10,300);
  fill ("blue")
  rect(80,310,50,250);
  fill ("blue")
  rect(130,310,50,250);
  fill ("red")
  triangle(100,110,68,185,133,185);
  fill ("blue")
  rect(180,310,50,250);
  fill ("blue")
  rect(230,310,50,250);
  fill ("red")
  triangle(133,185,162,115,195,185);
  fill ("red")
  triangle(195,185,225,110,255,185);
  fill ("blue")
  rect(260,310,30,250);
  fill ("turquoise")
  rect(280,250,10,300);

  
  drawSprites();
}