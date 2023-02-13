var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Grid info variables
const nodeWidth = 50;
const nodeHeight = 50;
const counterGridWidth = canvas.width / nodeWidth;
const counterGridHeight = canvas.height / nodeHeight;

//global variables
var mouseDown = false;
var input = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

var matrix = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

var weight0 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

var weight1 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

var weight2 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

var weight3 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

var weight4 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

//document elements

//Buttons
const btn0 = document.createElement("button");
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");
const btn4 = document.createElement("button");
const btnGuess = document.createElement("button");
const btnErase = document.createElement("button");

document.body.appendChild(btn0);
document.body.appendChild(btn1);
document.body.appendChild(btn2);
document.body.appendChild(btn3);
document.body.appendChild(btn4);
document.body.appendChild(btnGuess);
document.body.appendChild(btnErase);

btn0.innerText = "Add 0";
btn1.innerText = "Add 1";
btn2.innerText = "Add 2";
btn3.innerText = "Add 3";
btn4.innerText = "Add 4";
btnGuess.innerText = "Guess";
btnErase.innerText = "Erase";

btn0.style.background = "#e7e7e7";
btn0.style.padding = "20px";
btn0.style.borderRadius = "12px";
btn0.style.position = "relative";
btn0.style.top = "-550px";
btn0.style.left = "-100px";
btn0.style.boxShadow =
  "0 12px 16px 0 rgba(0,0,0,0.24)," + "0 17px 50px 0 rgba(0,0,0,0.19)";

btn1.style.background = "#e7e7e7";
btn1.style.padding = "20px";
btn1.style.borderRadius = "12px";
btn1.style.position = "relative";
btn1.style.top = "-480px";
btn1.style.left = "-180px";
btn1.style.boxShadow =
  "0 12px 16px 0 rgba(0,0,0,0.24)," + "0 17px 50px 0 rgba(0,0,0,0.19)";

btn2.style.background = "#e7e7e7";
btn2.style.padding = "20px";
btn2.style.borderRadius = "12px";
btn2.style.position = "relative";
btn2.style.top = "-410px";
btn2.style.left = "-260px";
btn2.style.boxShadow =
  "0 12px 16px 0 rgba(0,0,0,0.24)," + "0 17px 50px 0 rgba(0,0,0,0.19)";

btn3.style.background = "#e7e7e7";
btn3.style.padding = "20px";
btn3.style.borderRadius = "12px";
btn3.style.position = "relative";
btn3.style.top = "-340px";
btn3.style.left = "-340px";
btn3.style.boxShadow =
  "0 12px 16px 0 rgba(0,0,0,0.24)," + "0 17px 50px 0 rgba(0,0,0,0.19)";

btn4.style.background = "#e7e7e7";
btn4.style.padding = "20px";
btn4.style.borderRadius = "12px";
btn4.style.position = "relative";
btn4.style.top = "-270px";
btn4.style.left = "-420px";
btn4.style.boxShadow =
  "0 12px 16px 0 rgba(0,0,0,0.24)," + "0 17px 50px 0 rgba(0,0,0,0.19)";

btnGuess.style.background = "#00FA9A";
btnGuess.style.padding = "20px";
btnGuess.style.borderRadius = "12px";
btnGuess.style.position = "relative";
btnGuess.style.top = "-50px";
btnGuess.style.left = "-500px";
btnGuess.style.boxShadow =
  "0 12px 16px 0 rgba(0,0,0,0.24)," + "0 17px 50px 0 rgba(0,0,0,0.19)";

btnErase.style.background = "#FF0000";
btnErase.style.color = "#e7e7e7";
btnErase.style.padding = "20px";
btnErase.style.borderRadius = "12px";
btnErase.style.position = "relative";
btnErase.style.top = "-200px";
btnErase.style.left = "-580px";
btnErase.style.boxShadow =
  "0 12px 16px 0 rgba(0,0,0,0.24)," + "0 17px 50px 0 rgba(0,0,0,0.19)";

btn0.addEventListener("click", btn0Click);
btn1.addEventListener("click", btn1Click);
btn2.addEventListener("click", btn2Click);
btn3.addEventListener("click", btn3Click);
btn4.addEventListener("click", btn4Click);
btnGuess.addEventListener("click", btnGuessClick);
btnErase.addEventListener("click", btnEraseClick);


//==========================- Buttons functions -===========================//

function btn0Click() {
  addMatrixToWeight(weight0);
  resetMatrix();
}

function btn1Click() {
  addMatrixToWeight(weight1);
  resetMatrix();
}

function btn2Click() {
  addMatrixToWeight(weight2);
  resetMatrix();
}

function btn3Click() {
  addMatrixToWeight(weight3);
  resetMatrix();
}

function btn4Click() {
  addMatrixToWeight(weight4);
  resetMatrix();
}

function btnGuessClick() {
  var RQ0 = getRecognitionQuotient(weight0), //RQ = RecognitionQuotient
    RQ1 = getRecognitionQuotient(weight1),
    RQ2 = getRecognitionQuotient(weight2),
    RQ3 = getRecognitionQuotient(weight3);
  RQ4 = getRecognitionQuotient(weight4);

  //array to hold RQ of all weights.
  var arrayOfRQs = [RQ0, RQ1, RQ2, RQ3, RQ4];
  //var to help us indicate the highest RQ inside the arr.
  var Maxindex = 0;
  for (let i = 1; i < 5; i++) {
    if (arrayOfRQs[Maxindex] < arrayOfRQs[i]) Maxindex = i;
  }

  if (arrayOfRQs[Maxindex] < 0.5) {
    console.log("The pattern does not exist within the knowledge base");
  } else {
    console.log("The pattern is recognized as " + Maxindex + " by " + arrayOfRQs[Maxindex]);
  }
}

function btnEraseClick() {
  resetMatrix();
}

function arrOfNodesIntoInput() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 10; j++) {
      if (arrayOfNodes[i + 4][j + 1].isBlack) input[i][j] = 1;
      else input[i][j] = 0;
    }
  }
}

/* Function to fetch the input of the user and convert 
it accordingly to the matrix */
function fetchInput() {
  arrOfNodesIntoInput();
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 10; j++) {
      if (input[i][j] == 1) matrix[i][j] = 1;
      else matrix[i][j] = -1;
    }
  }
}

/* Fuction to add the matrix of the user input to 
the corresponding weight(arr) */
function addMatrixToWeight(weightArr) {
  fetchInput();
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 10; j++) {
      weightArr[i][j] += matrix[i][j];
    }
  }
}

function resetMatrix() {
  for (let i = 4; i < 12; i++) {
    for (let j = 1; j < 11; j++) {
      drawClear(i, j);
      arrayOfNodes[i][j].setBlack(false);
    }
  }
  //We redraw the drawing canvas
  drawDrawingCanvas();
}

function getCandidateScore(weightArr) {
  arrOfNodesIntoInput();
  var cS = 0; //stands for candidateScore
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 10; j++) {
      cS += weightArr[i][j] * input[i][j];
    }
  }
  return cS;
}

function getIdealWeightModelScore(weightArr) {
  var IWDMS = 0; //stands for IdealWeightModelScore
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 10; j++) {
      if (weightArr[i][j] > 0) IWDMS += weightArr[i][j];
    }
  }
  return IWDMS;
}

function getRecognitionQuotient(weightArr) {
  var cS = getCandidateScore(weightArr),
    IWDMS = getIdealWeightModelScore(weightArr);

  return cS / IWDMS + 0.08;
}

//==========================- Class Node -===========================//
//This Node class is to make the drawing for the user and the
//fetcing easier.

class Node {
  constructor(posX, posY) {
    //index of the node (helps in the arrayOfNodes).
    this.Xindex = posX;
    this.Yindex = posY;
    //actual x position of the node inside the document
    this.posX = posX * nodeWidth;
    this.posY = posY * nodeHeight;
    this.isBlack = false;
  }
  getXIndex() {
    return this.Xindex;
  }
  getYIndex() {
    return this.Yindex;
  }
  getPosX() {
    return this.posX;
  }
  getPosY() {
    return this.posY;
  }
  setBlack(c) {
    this.isBlack = c;
  }
}

var arrayOfNodes = [[]];
for (var i = 0; i < counterGridWidth; i++) {
  arrayOfNodes[i] = [];
  for (var j = 0; j < counterGridHeight; j++) {
    arrayOfNodes[i][j] = new Node(i, j);
  }
}

var isMouseDown = false;

// Add event listener for mouse down
document.addEventListener("mousedown", function(e) {
  isMouseDown = true;
  if (e.x / 50 > 4 && e.x / 50 < 12 && e.y / 50 > 1 && e.y / 50 < 11) {
    fillNode(ctx, parseInt(e.x / 50), parseInt(e.y / 50));
    arrayOfNodes[parseInt(e.x / 50)][parseInt(e.y / 50)].setBlack(true);
  }
});

// Add event listener for mouse up
document.addEventListener("mouseup", function() {
  isMouseDown = false;
});

// Add event listener for mouse move
document.addEventListener("mousemove", function(e) {
  if (isMouseDown) {
    if (e.x / 50 > 4 && e.x / 50 < 12 && e.y / 50 > 1 && e.y / 50 < 11) {
      fillNode(ctx, parseInt(e.x / 50), parseInt(e.y / 50));
      arrayOfNodes[parseInt(e.x / 50)][parseInt(e.y / 50)].setBlack(true);
    }
  }
});
//============================- Draw Functions -============================//

//clear drawing
function drawClear(i, j) {
  ctx.beginPath();
  ctx.rect(
    arrayOfNodes[i][j].posX,
    arrayOfNodes[i][j].posY,
    nodeWidth,
    nodeHeight
  );
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#93C572";
  ctx.fillStyle = "#93C572";
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "undefined";
}

//Rectangle drawing function
function drawRectBorder(ctx, x, y, width, height) {
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  ctx.lineWidth = 4;
  ctx.strokeStyle = "#FFFFFF";
  ctx.stroke();
}
//Node drawing function
function drawNode(ctx, Xindex, Yindex) {
  ctx.beginPath();
  ctx.rect(Xindex * nodeWidth, Yindex * nodeHeight, nodeWidth, nodeHeight);
  ctx.lineWidth = 4;
  ctx.strokeStyle = "#FFFFFF";
  ctx.stroke();
}

function fillNode(ctx, Xindex, Yindex) {
  ctx.beginPath();
  ctx.rect(Xindex * nodeWidth, Yindex * nodeWidth, nodeWidth, nodeHeight);
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#000000";
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "undefined";
}

function drawDrawingCanvas() {
  for (let i = 4; i < 12; i++) {
    for (let j = 1; j < 11; j++) {
      drawNode(ctx, i, j);
    }
  }
}

//============================- Start -============================//

function start() {
  resetMatrix();
  drawRectBorder(ctx, 0, 0, 800, 600);
  drawRectBorder(ctx, 200, 50, 400, 500);
  drawDrawingCanvas();
}
start();

//=================================================================//
