background(255, 255, 255);
let x = 100;
let y = 100;
//face
stroke(139, 69, 19);
strokeWeight(3);
fill(255, 215, 0);
ellipse(x + 50, y + 50, 150, 150);
//glasses
//left
stroke(105, 105, 105);
strokeWeight(3);
fill(255, 255, 255);
rect(x - 5, y + 30, 40, 25, 8);
//right
stroke(105, 105, 105);
strokeWeight(3);
fill(255, 255, 255);
rect(x + 50, y + 30, 40, 25, 8);
//eye balls
noStroke();
fill(0, 0, 0);
ellipse(x + 15, y + 43, 16, 16);
ellipse(x + 70, y + 43, 16, 16);
//mouth
fill(139, 69, 19);
beginShape();
vertex(115, 165);
bezierVertex(120, 180, 160, 190, 175, 165);
bezierVertex(155, 185, 130, 180, 115, 165);
endShape();
//tears
fill(65, 155, 225);
rect(x + 10, y + 56, 10, 65, 3);
rect(x + 66, y + 56, 10, 65, 3);
