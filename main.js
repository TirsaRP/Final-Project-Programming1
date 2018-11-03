
//Get reference to canvas
const canvas = document.getElementById("particles");

//Set canvas size
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

console.log(canvas);

//Get context from canvas
const context = canvas.getContext("2d");
console.log(context);

/////////////////////////////////////////////////////////

//this makes the stokeStyle a gradient of purple-hot pink
let gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop("0", " #7300e6"); //purple
gradient.addColorStop(".2", "#a31aff"); //bright purple
gradient.addColorStop(".4", "#0000ff"); //blue
gradient.addColorStop(".5", "#33ccff"); //bright blue
gradient.addColorStop(".6", "#00ffff"); //turquoise
gradient.addColorStop(".7", "#cc00cc"); //magenta
gradient.addColorStop(".9", "#ff4dc4"); //hot pink
context.strokeStyle = gradient;


//this makes the canvas (background) a gradient from  black on top to grey at bottom
let canvasGradient = context.createLinearGradient(0, 0, 0, canvas.height);
canvasGradient.addColorStop(0,"black");
canvasGradient.addColorStop(0.6,"#1a1a1a");
canvasGradient.addColorStop(0.8,"#262626");
canvasGradient.addColorStop(0.9,"#333333");
canvasGradient.addColorStop(1,"#404040");
context.fillStyle=canvasGradient;
context.fillRect(0,0, canvas.width, canvas.height);


//Set thickness
context.lineWidth = 4;


//Boolean variable for mouse state
let isMouseDown = false;

//Handle mouse down
function handleMouseDown(event) {
  console.log("Mouse button down");
  console.log("Mouse down at x: " + event.clientX + ", y: " + event.clientY);
  isMouseDown = true;
  context.beginPath();
  context.moveTo(event.clientX, event.clientY);
}

//Handle mouse up
function handleMouseUp(event) {
  console.log("Mouse button up");
  console.log("Mouse up at x: " + event.clientX + ", y: " + event.clientY);
  isMouseDown = false;
  context.closePath();
}

//Handle mouse movement
function handleMouseMove(event) {
  //console.log("Mouse is moving");
  if (isMouseDown === true) {
    context.lineTo(event.clientX, event.clientY);
    context.stroke();
  }
}
//Set mouse listeners. don't need to write false as it is the default
document.addEventListener("mousedown", handleMouseDown);
document.addEventListener("mouseup", handleMouseUp);
document.addEventListener("mousemove", handleMouseMove);


//preparing for javascript code to select colors from select element options
//let colorSelectors= getElementById("selectColor");
