
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);

  addWeirdshape (100,100,0.5, "magenta");

  //if (mouseX<=100){
   // fill (0)
 }
 //  else if (mouseX>100&&mouseX<=200){
    // fill (250,400,40)  
  // }
 // else if (mouseX>200&&mouseX<=300){
  //  fill (255,0,50)
 // }
//  else if (mouseX>300&&mouseX<=400){
   // fill (255,0,250)
 // }
   
 
//}
function addWeirdshape(x,y,size,ifColor){
  translate (x,y)
  scale(size)
  noStroke()
  fill (ifColor)
  rect (0,0,100,400)
  rect(0,0,400,100)
  rect (300,0,100,400)
  rect (0,300,400,100)
  
}
