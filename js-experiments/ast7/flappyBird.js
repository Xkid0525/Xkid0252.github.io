const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// load images

const bird = new Image();
const bg = new Image();
const fg = new Image();
const pipeUp = new Image();
const pipeDown = new Image();
const birdUp=new Image();
const birdDown=new Image();


bird.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeUp.src = "images/pipeUp.png";
pipeDown.src = "images/pipeDown.png";
birdUp.src="images/birdUp.png";
birdDown.src="images/birdDown.png";

// some variables

const gap = 85;
let constant;

const bX = 10;
let bY = 150;
let gravity = 1;

let score = 0;

// audio files

//const fly = new Audio();
//const scor = new Audio();
//
//fly.src = "sounds/fly.mp3";
//scor.src = "sounds/score.mp3";

// on key down

let keyLogg;
document.addEventListener("keydown",moveUp);

function moveUp(event){
    keyLogg=event.code;
//    if(keyLogg==="ArrowUp"){
//    bY -= 35;
////    fly.play();
//    }
}

// pipe coordinates

const pipe = [];

pipe[0] = {
    x : canvas.width,
    y : 0
};




// draw images

let dec=1;
function draw(){
    
    context.drawImage(bg,0,0);
    
    
    for(let i = 0; i < pipe.length; i++){
        
        constant = pipeUp.height+gap;
        context.drawImage(pipeUp,pipe[i].x,pipe[i].y);
        context.drawImage(pipeDown,pipe[i].x,pipe[i].y+constant);
             
        pipe[i].x--;
        
        if( pipe[i].x == 125 ){
            pipe.push({
                x : canvas.width,
                y : Math.floor(Math.random()*pipeUp.height)-pipeUp.height
            }); 
        }

        // detect collision
        
        if( bX + bird.width >= pipe[i].x && 
		bX <= pipe[i].x + pipeUp.width && 
		(bY <= pipe[i].y + pipeUp.height || bY+bird.height >= pipe[i].y+constant) ||
		bY + bird.height >=  canvas.height - fg.height){
            location.reload(); // reload the page
        }
        
        if(pipe[i].x == 5){
            score++;
//            scor.play();
        }
        
        
    }

    context.drawImage(fg,0,canvas.height - fg.height);
    if(keyLogg==="ArrowUp"){
            gravity=1;
            bY=bY-dec;
            context.drawImage(birdUp,bX,bY); 
            dec+=3;
        if(dec>=15){
        keyLogg=null;
            dec=1;
        }
        
//        }
//        dec=1;
        
        
    }
    else{
        if(gravity>3){
        context.drawImage(birdDown,bX,bY);
            
        }
        else{
        context.drawImage(bird,bX,bY);
        }
    }
    
    bY += gravity;
    gravity+=0.05;
    context.fillStyle = "#000";
    context.font = "20px Verdana";
    context.fillText(`Score : ${score}`,10,canvas.height-20);
    
    requestAnimationFrame(draw);
    
}

draw();