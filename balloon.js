

function Reset() {
pLane1 = 600;
pLane2 = 600;
pLane3 = 600;
pLane4 = 600;
pLane5 = 600;
pLane6 = 600;
cloudX = 180;
cloudA = 990;
cloudB = 420;
cloudY = 630;
cloudC = 640;
cloudD = 1320;
cloudE = 1090;
longMountainX = 100;
longMountainA = 160;
longMountainB = 570;
longMountainY = 495;
longMountainC = 385;
longMountainD = 265;
longMountainE = 775;
longMountainF = 355;
x = 50; //airballoon
y = 100; //airballoon
velocity = 0.3; 
acceleration = 0.1; 
isGameActive = true;
isGameOver = false;
state = "start";
}

let pLane1 = 600;
let pLane2 = 600;
let pLane3 = 600;
let pLane4 = 600;
let pLane5 = 600;
let pLane6 = 600;



let cloudX = 180;
let cloudA = 990;
let cloudB = 420;
let cloudY = 630;
let cloudC = 640;
let cloudD = 1320;
let cloudE = 1090;

let longMountainX = 100;
let longMountainA = 160;
let longMountainB = 570;
let longMountainY = 495;
let longMountainC = 385;
let longMountainD = 265;
let longMountainE = 775;
let longMountainF = 355;

let x = 50; //AIR BALLOON
let y = 100; //AIR BALLOON
let velocity = 0.3; 
let acceleration = 0.1; 

let isGameActive = true;
let isGameOver = false;
let score = 0;

let state = "start";


function startScreen() {
  background(138, 193, 220); // LIGHT ORANGE/RED



   // SUN GRADIENT 
   fill(204, 55, 13, 240);
   noStroke();
   ellipse(700, 230, 880);

   fill(235, 93, 36, 200);
   noStroke();
   ellipse(760, 180, 750);

   fill(193, 64, 23, 50);
   noStroke();
   ellipse(760, 180, 550);

   fill(239, 113, 23, 10);
   noStroke();
   ellipse(860, 150, 490);

   fill(224,36,36,60);
   noStroke();
   ellipse(900, 100, 460);

   fill(239, 179, 53);
   noStroke();
   ellipse(910, 100, 250);
   
   

    // TITLE OF GAME
    noStroke();
    textSize(60);
    fill(255, 255, 255);
    textFont('Mynerve');
    text("Air balloon Landing", 300, 100);


    // INSTRUCTIONS OF GAME
    noStroke();
    fill(255, 255, 255);
    textSize(22);
    textFont('Mynerve');
    text('To make the air balloon rise, press the Space-Key.', 300, 260); 
    text('To make the air balloon move, press the left and right arrow key.', 300, 290);
    text('Goal: Make the air balloon land gently on the land.', 300, 360);
    text('If you land the air balloon too fast, you LOSE.', 300, 390);


    // CLICK BUTTON
    stroke(235, 232, 236);
    fill(255, 255, 255);
    rect(290, 520, 220, 50, 3);
    noStroke();
    fill(0, 0, 0);
    textSize(30);
    textFont('Annie+Use+Your+Telescope');
    text("Click To Play", 310, 555);
    airBalloon(50, 90);   
}

function winningScreen() {
    isGameActive = false;
    //WINNING TITLE
    background(198, 163, 223);

   //BACKGROUND DESIGN 
    fill(204, 55, 13, 240);
   noStroke();
   ellipse(700, 230, 80);

   fill(235, 93, 36, 60);
   noStroke();
   ellipse(730, 80, 750);

   fill(193, 64, 23, 50);
   noStroke();
   ellipse(610, 180, 550);

   fill(239, 113, 23, 10);
   noStroke();
   ellipse(340, 150, 490);

   fill(224,36,36,60);
   noStroke();
   ellipse(200, 100, 460);

   fill(239, 179, 53);
   noStroke();
   ellipse(110, 100, 250);
   
   //WINNING TEXT
   textSize(60);
   fill(255, 0, 0, 90);
   textFont('Mynerve');
   text("You Won!", 300, 300);

   //CLICK BUTTON
   stroke(235, 232, 236);
   fill(255, 255, 255);
   rect(290, 520, 220, 50, 3);
   noStroke();
   fill(0, 0, 0);
   textSize(30);
   textFont('Annie+Use+Your+Telescope');
   text("Click To Retry", 310, 555);
   state = "win";

}

function losingScreen() {
    isGameActive = false;
    //LOST TITLE
    background(138, 193, 220); // BLUE COLOUR
    textSize(60);
    fill(255, 0, 0);
    textFont('Mynerve');
    text("OOPSSS!", 300, 100);
    textSize(80);
    text("YOU LOST!", 220, 200);

    // CLICK TO PLAY BUTTON 
    noStroke();
    fill(255, 255, 255);
    rect(290, 420, 220, 50, 3);
    fill(0, 0, 0);
    textSize(30);
    textFont('Annie+Use+Your+Telescope');
    text("Try Again ", 350, 455);
    state = "lose";
}

function setup() {
    createCanvas(900, 600);
    background(255,255,255);
    //AIR BALLOON (100,100);
}

function airBalloon(x, y) { 
    push();
    translate(x, y);
    scale(0.8);
    //STRINGS
    stroke(140,60,8);
    strokeWeight(2.5);
    line(x - 55, y + 56, x - 25, y + 160); 
    line(x - 35, y + 126, x - 42, y + 70);
    line(x + 50, y + 60, x + 17, y +  160);
    line(x + 50, y + 28, x + 20, y + 160); 
    
    //RECTANGLE UNDER THE BALLOON
    fill(162,75,19);
    noStroke();
    rect(x - 47, y + 120, 89, 50, 3); 
  
    //THE AIR BALLOON
    fill (185,28,28);
    noStroke();
    ellipse (x, y, 150, 180);
      
    //SMALL CIRCLE
    fill(217,54,54);
    ellipse(x, y, 100, 180);

    //SMALLER CIRCLE
    fill(185,28,28);
    ellipse(x, y, 40,180);
  
   pop();
   
    
  }


function scenery() {
    push();
    noStroke();

    //CREATING THE GRADIENT SKY
    fill(235,93,36); //LIGHT RED
    rect(0, 0, width, 200);

    fill(193,64,23,50); //DARK RED/ORANGE
    rect(0, 160, width, 90);

    fill(193,64,23,10); //DARK ORANGE
    rect(0, 150, width, 20);

    fill(224,36,36,60); //DARK RED
    rect(0, 40, width, 60);

    fill(203,30,51,70); //DARK PINK
    rect(0, 100, width, 80);

    fill(250,204,48,130); //YELLOW SUNSET COLOUR
    rect(0, 190, width, 90);

    //SUN
    fill(240,110,27,80); //LIGHT ORANGE/RED
    ellipse(450, 190, 90); //BIG CIRCLE OF SUN 

    fill(214,68,29); //DARK RED 
    ellipse(450, 190, 80); //MEDIUM CIRCLE OF SUN 

    fill(250,204,48,10); //YELLOW SUN 
    ellipse(450, 190, 60); //SMALL CIRCLE OF SUN 

    fill(239,116,45); //LIGHT 
    rect(0, 200, width, height);
    pop();
}

function land() {
    push();
    noStroke();
    fill(88, 60, 29, 100); //BROWN 
    rect(700, 550, 200, 100);
    pop();

}


function cloud(c,d) {
    push();
    noStroke();
    scale(0.4);
    fill(201,78,35); //DARK BROWN
    ellipse(c, d + 40, 50);
    ellipse(c + 30, d + 30, 50);
    ellipse(c + 15, d + 60, 60);
    ellipse(c + 55, d + 55, 50);
    ellipse(c - 30, d + 60, 50);
    pop();
}


function longMountain(e,f) {
    push();
    noStroke();
    fill(193,54,23, 150); //BROWN
    triangle(e - 120, f + 90, e, f + 20, e + 105, f + 90);  

    pop();
}

// let g = 500;
// let h = 200;

function pLane(g,h) {
    push();
    //BODY OF PLANE
    fill(227,227,227);
    stroke(210,210,210);
    ellipse(g, h + 20, 50, 10);
    ellipse(g, h + 10, 5, 22);
    ellipse(g, h + 30, 5, 23);
    
    //WINDOW OF PLANE
    fill(255,255,255);
    ellipse(g - 10, h + 20, 7);
    ellipse(g, h + 20, 7);
    ellipse(g + 9, h + 20, 7);
    
    //BACK WINGS OF PLANE
    fill(227,227,227);
    triangle(g + 25, h + 19, g + 29, h + 8, g + 23, h + 17);
    triangle(g + 25, h + 22, g + 30, h + 25, g + 26, h + 19);
    
    pop();
}


function draw() {
    if (state === "start") {
        startScreen();
    } else if (state === "lose") {
        losingScreen();
    } else if (state === "win") {
        winningScreen();       
    } else if (state === "game") {
  scenery();
  pLane(pLane1, 100);
  pLane(pLane2, 29);
  pLane(pLane4, 300);
  pLane(pLane5, 430);
  pLane(pLane6, 320);


  longMountain(longMountainX, 190);
  longMountain(longMountainA, 160);
  longMountain(longMountainB, 170);
  longMountain(longMountainY, 195);
  longMountain(longMountainC, 185);  
  longMountain(longMountainD, 165);
  longMountain(longMountainE, 175);
  longMountain(longMountainF, 155); 
  

  pLane(pLane3, 200);
 
  cloud(cloudX, 100);
  cloud(cloudA, 200);
  cloud(cloudB, 370);
  cloud(cloudY, 10);
  cloud(cloudC, 320);
  cloud(cloudD, 130);
  cloud(cloudE, 290);


 land();

 airBalloon(x, y);


 //MAKE OBJECTS MOVE
    if (isGameActive) {
        pLane1 = pLane1 - 1.5;
        pLane2 = pLane2 - 1.0;
        pLane3 = pLane3 - 2.5;
        pLane4 = pLane4 - 1.0;
        pLane5 = pLane5 - 1.5;
        pLane6 = pLane6 - 2.5;
        cloudX = cloudX - 2;
        cloudA = cloudA - 2;
        cloudB = cloudB - 2;
        cloudY = cloudY - 2;
        cloudC = cloudC - 2;
        cloudD = cloudD - 2;
        cloudE = cloudE - 2;
        longMountainX = longMountainX - 2;
        longMountainA = longMountainA - 2;
        longMountainB = longMountainB - 2;
        longMountainY = longMountainY - 2;
        longMountainC = longMountainC - 2;
        longMountainD = longMountainD - 2;
        longMountainE = longMountainE - 2;
        longMountainF = longMountainF - 2; 

        y = y + velocity;
        velocity = velocity +  acceleration;
    
    //MAKE AIR BALLOON, MOUNTAINS, CLOUDS AND PLANES MOVE IN CONSTANT LOOP

       if (pLane2 < - 29) {
            pLane2 = width + 90;
        }

        if (pLane1 < - 100) { 
            pLane1 = width + 90;
        }
 
        if (pLane3 < - 200) {
            pLane3 = width + 90; 
        }

        if (pLane4 < - 300) {
            pLane4 = width + 90;
        }

        if (pLane5 < - 430) { 
            pLane5 = width + 1000;
        }
 
        if (pLane6 < - 320) {
            pLane6 = width + 1000;  
        }

        if (cloudX < - 100) { 
            cloudX = width + 1000;
        }

        if (cloudA < - 200) { 
            cloudA = width + 1000;
        }
 
        if (cloudB < - 370) {
            cloudB = width + 1000; 
        }

        if (cloudY < - 10) {
            cloudY = width + 1000;
        }

        if (cloudC < - 300) {
            cloudC = width + 1000;
        }

        if (cloudD < - 635) {
            cloudD = width + 1000;
        }

        if (cloudE < - 640) {
            cloudE = width + 1000; 
        }

        if (pLane1 < - 100) { 
            pLane1 = width + 100;
        }
 
        if (pLane3 < - 200) { 
            pLane3 = width + 200; 
        }


        if (longMountainX < - 190) {
            longMountainX = width + 90; 
        }

        if (longMountainA < - 160) { 
            longMountainA = width + 90;
        }
 
        if (longMountainB < - 170) {
            longMountainB = width + 90;
        }

        if (longMountainY < - 195) {
            longMountainY = width + 90;
        }

        if (longMountainC < - 185) {
            longMountainC = width + 90;
        }

        if (longMountainD < - 165) {
            longMountainD = width + 90;
        }

        if (longMountainE < - 175) { 
            longMountainE = width + 90; 
        }
 
        if (longMountainF < - 155) {
            longMountainF = width + 90;
        }


    //MAKE THE AIR BALLOON MOVE WITH SPCAE BUTTON AND LEFT AND ARROW KEYS  
       if (keyIsDown(37)) { //LEFT
        x  = x - 1;
       } else if (keyIsDown(39)) { //RIGHT
        x = x + 1; 
       }

        if (keyIsDown(32)) { // SPACE
            velocity = velocity - 0.3;  
        }
      
    //MAKE THE AIR BALLOON LAND ON PLATFORM    
       if (x <= 430 && y > 430 && velocity > 3) {
        losingScreen();
    
    
       } else if (x > 380 && y > 230 && velocity < 3) {
        winningScreen();
            
            
            velocity = 0;
        }
          
        }    
    
    }


    if (x > 600) { //FOR LOSING SCREEN 
        velocity =  0.1;
        
       }
  
    // COLLISION WITH AIRBALLOON AND PLANE
   


    }     


// CLICK ON THE SCREEN TO SWITCH SCREENS
function mouseClicked() {
    if (state === "start") {
      state = "game";
    } else if (state === "lose") {
        state = "game";
      Reset();
    } else if (state === "win") {
        state = "game";
        Reset();
    }
}


//PARTS OF CODE WERE INSPIRED BY GARRIT'S VIDEOS AND WITH THE HELP OF EVELYN AND TEACHER ASSISTANTS















































































