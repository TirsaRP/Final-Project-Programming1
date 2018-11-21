//setup canvas
const canvas = document.getElementById("graphics");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
const context = canvas.getContext("2d");

//get the picture
let pic = document.getElementById("Picture1");
//create the pics coordinates
let picCor = {x:0, y:0}

//Create mouse position variables
let mouseCor = {x:0, y:0}

//check direction of mouse (event)
let direction1 = "";
let direction2 = "";
function mouseMove (event){
    mouseCor.x = event.pageX;
    mouseCor.y = event.pageY;

    if(mouseCor.x > picCor.x ){
        direction1 = "right";
    } else if (mouseCor.x < picCor.x){
        direction1 = "left";
    }

    if(mouseCor.y < picCor.y){
        direction2 = "up";
    } else if(mouseCor.y> picCor.y){
        direction2 = "down"
    }

    picCor.x = mouseCor.x;
    picCor.y = mouseCor.y; 

    console.log(direction1 + " and " + direction2);
}
//add event listener
document.addEventListener("mousemove", mouseMove, false);

function draw() {
    context.save()
    
}

