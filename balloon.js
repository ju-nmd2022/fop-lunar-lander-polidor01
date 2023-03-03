function setup() {
    createCanvas(900,700);
}

let g = 600;
let h = 600;
let speed = 5;


function airBalloon(x,y) {

    //lines
    stroke(187,127,74);
    strokeWeight(2.5);
    line(x - 45, y + 60, 68, 270);
    line(x - 35, y + 120, 38, 170);
    line(x + 50, y + 10, 125, 308);
    line(x + 50, y + 50, 127, 308);

    //the airballoon
    fill (255,238,113);
    noStroke();
    ellipse (x,y,150,180);
    
    //small circle
    fill(203,156,231);
    ellipse(x,y,100,180);

    //rectangle under airballoon
    fill(190,136,42);
    noStroke();
    rect(x - 45, y + 120, 89, 50, 3);
    
    }

    
 const s = 4; //speed
 let x = 100;
 let y = 150;


 

    
 function draw() {
    clear();
     //background colour of the game
    background(193,249,251);  // blue sky     
    if (keyIsDown(37)) {  // airballoon going left 
        x = x - s;
    } else if (keyIsDown(39)) { // airballoon going right
        x = x + s;
    }    
    if (keyIsDown(38)) { // airballoon going up 
        y = y - s;
    } else if (keyIsDown(40)) {  // airballoon going down 
        y = y + s;
    }
 
    


 // // // plane (another obstacle for the game)
 function plane(g,h) {
    g = g * speed;
    h = h * speed;

    fill(227,227,227);
    stroke(210,210,210);
    ellipse(g, h + 20, 50, 10);
    ellipse(g, h + 10, 5, 22);
    ellipse(g, h + 30, 5, 23);
    
    // window of the plane
    fill(255,255,255);
    ellipse(g - 10, h + 20, 7);
    ellipse(g, h + 20, 7);
    ellipse(g + 9, h + 20, 7);
    
    //back small wings of the plane
    fill(227,227,227);
    triangle(g + 25, h + 19, g + 29, h + 8, g + 23, h + 17);
    triangle(g + 25, h + 22, g + 30, h + 25, g + 26, h +19);
    
    }

    plane(400,200);
    plane(500,300);
    plane(600,100);

    
    //cloud (background objects for visual effects)
    function cloud(c,d) {
    noStroke();
    fill(255,255,255); // white 
    ellipse(c, d + 40, 60);
    ellipse(c + 30, d + 30, 50);
    ellipse(c + 15, d + 60, 60);
    ellipse(c + 55, d + 55, 50);
    ellipse(c - 30, d + 60, 50);
    }

    cloud (500,10);  
    cloud (300,60);
    
    //mountains (the other obstacle of the game)
    function mountain(a,b) {
      noStroke();
      fill(138,100,22); // brown
      triangle (a - 120, b + 90, a, b - 70, a + 105, b + 90);
    
      fill(73,138,22,170);  // light green 
      triangle (a - 120, b + 90, a, b - 50, a + 35, b + 90);
    
      fill(116,196,53,120); // dark green 
      triangle (a - 120, b + 90, a + 15, b - 5, a + 35, b + 90);
}

    mountain (300,450);
    mountain (600,400);
    mountain (200,430);
    mountain (130,500);

   
    
    //     //airballoon

    airBalloon(x, y);
    
}





