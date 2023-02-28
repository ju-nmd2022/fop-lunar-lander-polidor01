function setup() {
    createCanvas(600,700);
    background(255,255,255);
}

function airBalloon(x, y) {
    push();
      translate(x,y);
  
      //strings
      stroke(140,60,8);
      strokeWeight(2.5);
      line(x - 55, y + 56, 25, 260);
      line(x - 35, y + 126, 8, 170);
      line(x + 50, y + 60, 67, 260);
      line(x + 50, y + 28, 70, 260);
  
      //the airballoon
      fill (185,28,28);
      noStroke();
      ellipse (x, y, 150, 180);
      
      //small circle
      fill(217,54,54);
      ellipse(x, y, 100, 180);

     // smaller circle
      fill(185,28,28);
      ellipse(x, y, 40,180);
  
      //rectangle under airballoon
      fill(162,75,19);
      noStroke();
      rect(x - 47, y + 120, 89, 50, 3);
  
    pop();
  }

  function draw() {
    background(255,255,255);
    airBalloon(50,100);
  }

  function scenery() {
    push();
    noStroke();
    fill(235,93,36); //light red
    rect(0, 0, width, 200);

    fill(193,64,23,50); //dark red/orange
    rect(0, 160, width, 90);

    fill(193,64,23,10); //dark red/orange
    rect(0, 150, width, 20);

    fill(224,36,36,60); //dark red/orange
    rect(0, 40, width, 60);


    fill(203,30,51,70); //dark pink
    rect(0, 100, width, 80);

    fill(250,204,48,130); //yellow sunset
    rect(0, 190, width, 90);

    fill(240,110,27,80); // light orange/red
    ellipse(450,190,90); //sun


    fill(214,68,29); //dark red
    ellipse(450,190,80);

    fill(239,116,45); //light orange
    rect(0, 200, width, height);

  

    fill(201,78,35); //dark red
    ellipse(300, 110, 20); //cloud
    ellipse(313, 110, 20); //cloud
    ellipse(309, 124, 25); //cloud
    ellipse(325, 121, 20); //cloud
    ellipse(290, 120, 20); //cloud


    fill(201,78,35); //dark red
    ellipse(354, 156, 20); //cloud
    ellipse(362, 159, 20); //cloud
    ellipse(368, 169, 20); //cloud
    ellipse(354, 170, 20); //cloud
    ellipse(341, 167, 20); //cloud
  

    pop();

  }

  function draw() {
    scenery();
    airBalloon(50,100);
  }



//   function mountain() {
//     noStroke();
//     push();
//     fill(138,70,22); // brown/red
//     triangle (302, 265, 380, 149, 460, 266); //mountain
    
//     fill(73,138,22,120);  // light green //mountain
//     triangle (302, 265, 380, 170, 400, 265);
    
//     fill(116,196,53,120); // dark green //mountain
//     triangle (308, 265, 400, 190, 400, 265);

//     pop();

//   }


function mountain(a,b) {
    push();
    noStroke();
    fill(138,100,22); // brown
    triangle (a - 120, b + 90, a, b - 70, a + 105, b + 90);
  
    fill(73,138,22,170);  // light green 
    triangle (a - 120, b + 90, a, b - 50, a + 35, b + 90);
  
    fill(116,196,53,120); // dark green 
    triangle (a - 120, b + 90, a + 15, b - 5, a + 35, b + 90);

    pop();
}

  function draw() {
    scenery();
    airBalloon(50,100);
    mountain(300,450);
  }

 


  function plane(g,h) {
    // g = g * speed;
    // h = h * speed;

    push();
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
    
    pop();
    }

    function draw() {
      scenery();
      airBalloon(50,100);
      plane(400,200);
    
    }

    let planeX = 600;

    function draw() {
        scenery();
        plane(planeX, 100);
        airBalloon(50, 100);

        planeX = planeX - 1.5;
    }

    let airBalloonY = 50;
    let velocity = 1;
    let acceleration = 0.2;

    // function draw() {
    //     scenery();
    //     plane(planeX, 100);
    //     airBalloon(50, airBalloonY);

    //     planeX = planeX - 1.5;
    //     airBalloonY = airBalloonY + velocity;
    //     velocity = velocity + acceleration;

    //     if (planeX < -200) {
    //         planeX = width + 100;
    //     }
    // }

    // stop the airballoon on the land

    let isGameActive = true;

    function draw() {
        scenery();
        plane(planeX, 100);
        airBalloon(50, airBalloonY);

        if (isGameActive) {
            planeX = planeX - 1.5;
            airBalloonY = airBalloonY + velocity;
            velocity = velocity + acceleration;
            
            if (planeX < -100) {
                planeX = width + 100;
            }
            
            if (airBalloonY > 200) {
                isGameActive = false;
            }
        }
    }


    //MOVE THE AIRBALLOON ON CLICK
    acceleration = 0.1;

    function draw() {
      scenery();
      plane(planeX, 100);
      airBalloon(50, 100);
    
      if (isGameActive) {
        planeX = planeX - 1.5;
        airBalloonY = airBalloonY + velocity;
        velocity = velocity + acceleration;
      
        if (planeX < -0) {
          planeX = width + 100;
        }
    
        if (mouseIsPressed) {
          velocity = velocity - 0.2;
        }
      
        if (airBalloonY > 200) {
          isGameActive = false;
        }
      }
    }























































































// function setup() {
//     createCanvas(900,700);
// }

// let g = 600;
// let h = 600;
// let speed = 5;


// function airBalloon(x,y) {
//     push();
//     translate(x,y);

//     //strings
//     stroke(187,127,74);
//     strokeWeight(2.5);
//     line(x - 45, y + 60, 68, 270);
//     line(x - 35, y + 120, 38, 170);
//     line(x + 50, y + 10, 125, 308);
//     line(x + 50, y + 50, 127, 308);

//     //the airballoon
//     fill (255,238,113);
//     noStroke();
//     ellipse (x,y,150,180);
    
//     //small circle
//     fill(203,156,231);
//     ellipse(x,y,100,180);

//     //rectangle under airballoon
//     fill(190,136,42);
//     noStroke();
//     rect(x - 45, y + 120, 89, 50, 3);

//     pop();
    
//     }

    
//  const s = 4; //speed
//  let x = 100;
//  let y = 150;


    
//  function draw() {
//     clear();
//      //background colour of the game
//     background(235,123,36);  // blue sky     
//     if (keyIsDown(37)) {  // airballoon going left 
//         x = x - s;
//     } else if (keyIsDown(39)) { // airballoon going right
//         x = x + s;
//     }    
//     if (keyIsDown(38)) { // airballoon going up 
//         y = y - s;
//     } else if (keyIsDown(40)) {  // airballoon going down 
//         y = y + s;
//     }
 



//  // // // plane (another obstacle for the game)
//  function plane(g,h) {
//     g = g * speed;
//     h = h * speed;

//     fill(227,227,227);
//     stroke(210,210,210);
//     ellipse(g, h + 20, 50, 10);
//     ellipse(g, h + 10, 5, 22);
//     ellipse(g, h + 30, 5, 23);
    
//     // window of the plane
//     fill(255,255,255);
//     ellipse(g - 10, h + 20, 7);
//     ellipse(g, h + 20, 7);
//     ellipse(g + 9, h + 20, 7);
    
//     //back small wings of the plane
//     fill(227,227,227);
//     triangle(g + 25, h + 19, g + 29, h + 8, g + 23, h + 17);
//     triangle(g + 25, h + 22, g + 30, h + 25, g + 26, h +19);
    
//     }

//     plane(400,200);
//     plane(500,300);
//     plane(600,100);

// //  const scale = 1.5
  
    
//     //cloud (background objects for visual effects)
//     function cloud(c, d, scale) {  
//     push();
//     noStroke();
//     fill(255,255,255); // white 
//     ellipse(c, d + 40, 60 * scale);
//     ellipse(c + 30, d + 30, 50 * scale);
//     ellipse(c + 15, d + 60, 60 * scale);
//     ellipse(c + 55, d + 55, 50 * scale);
//     ellipse(c - 30, d + 60, 50 * scale);
//     pop();
//     }

//     cloud (500, 10, 0.9);  
//     cloud (300, 60, 0.9);
//     cloud (450, 150, 0.9);
    
//     //mountains (the other obstacle of the game)
//     function mountain(a,b) {
//       noStroke();
//       fill(138,100,22); // brown
//       triangle (a - 120, b + 90, a, b - 70, a + 105, b + 90);
    
//       fill(73,138,22,170);  // light green 
//       triangle (a - 120, b + 90, a, b - 50, a + 35, b + 90);
    
//       fill(116,196,53,120); // dark green 
//       triangle (a - 120, b + 90, a + 15, b - 5, a + 35, b + 90);
// }

//     mountain (300,450);
//     mountain (600,400);
//     mountain (200,430);
//     mountain (130,500);

   
    
//     //     //airballoon

//     airBalloon(x, y);
    
// }





