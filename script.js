//html canvas project

// Camvas setup

var cnv = document.getElementById("MyCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 500;

// night backround

ctx.fillStyle = "black";
ctx.fillRect(0, 0, 400, 500);

// sky scrapers
ctx.lineWidth = 40;
ctx.strokeStyle = "lightblue";
ctx.beginPath();
ctx.moveTo(365, 100);
ctx.lineTo(365, 500);
ctx.stroke();

ctx.lineWidth = 50;
ctx.strokeStyle = "lightblue";
ctx.beginPath();
ctx.moveTo(365, 100);
ctx.lineTo(365, 500);
ctx.stroke();

ctx.lineWidth = 47;
ctx.strokeStyle = "lightblue";
ctx.beginPath();
ctx.moveTo(265, 87);
ctx.lineTo(265, 500);
ctx.stroke();

ctx.lineWidth = 43;
ctx.strokeStyle = "lightblue";
ctx.beginPath();
ctx.moveTo(165, 85);
ctx.lineTo(165, 500);
ctx.stroke();

ctx.lineWidth = 40;
ctx.strokeStyle = "lightblue";
ctx.beginPath();
ctx.moveTo(65, 120);
ctx.lineTo(65, 500);
ctx.stroke();

// stars
let star = document.getElementById("star-img");
ctx.drawImage(star, 200, 5, 100, 70);
ctx.drawImage(star, 50, 10, 100, 70);
ctx.drawImage(star, 75, 10, 100, 70);

//moon
let moon = document.getElementById("moon-img");
ctx.drawImage(moon, 5, 0, 85, 60);

//tree
ctx.lineWidth = 10;
ctx.strokeStyle = "brown";
ctx.beginPath();
ctx.moveTo(320, 410);
ctx.lineTo(320, 500);
ctx.stroke();

ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(320, 410, 20, 0, 2 * Math.PI);
ctx.fill();

//tree
ctx.lineWidth = 10;
ctx.strokeStyle = "brown";
ctx.beginPath();
ctx.moveTo(220, 410);
ctx.lineTo(220, 500);
ctx.stroke();

ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(220, 410, 20, 0, 2 * Math.PI);
ctx.fill();

//tree
ctx.lineWidth = 10;
ctx.strokeStyle = "brown";
ctx.beginPath();
ctx.moveTo(120, 410);
ctx.lineTo(120, 500);
ctx.stroke();

ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(120, 410, 20, 0, 2 * Math.PI);
ctx.fill();

//tree
ctx.lineWidth = 10;
ctx.strokeStyle = "brown";
ctx.beginPath();
ctx.moveTo(20, 410);
ctx.lineTo(20, 500);
ctx.stroke();

ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(20, 410, 20, 0, 2 * Math.PI);
ctx.fill();

// text hospital
ctx.fillStyle = "red";
ctx.font = "20px Arial";
ctx.fillText("H", 157, 105);

ctx.fillStyle = "red";
ctx.font = "20px Arial";
ctx.fillText("O", 157, 130);

ctx.fillStyle = "red";
ctx.font = "20px Arial";
ctx.fillText("S", 157, 155);

ctx.fillStyle = "red";
ctx.font = "20px Arial";
ctx.fillText("P", 157, 185);

ctx.fillStyle = "red";
ctx.font = "20px Arial";
ctx.fillText("I", 157, 210);

ctx.fillStyle = "red";
ctx.font = "20px Arial";
ctx.fillText("A", 157, 235);

ctx.fillStyle = "red";
ctx.font = "20px Arial";
ctx.fillText("L", 157, 260);

// next buildong

ctx.fillStyle = "red";
ctx.font = "20px Arial";
ctx.fillText("W", 255, 105);

ctx.fillStyle = "red";
ctx.font = "20px Arial";
ctx.fillText("O", 255, 130);

ctx.fillStyle = "red";
ctx.font = "20px Arial";
ctx.fillText("R", 255, 155);

ctx.fillStyle = "red";
ctx.font = "20px Arial";
ctx.fillText("K", 255, 185);

//building window

// building window
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(250, 230); // butt
ctx.lineTo(250, 252); // knee
ctx.stroke();

// window
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(270, 250); // butt
ctx.lineTo(250, 250); // knee
ctx.stroke();

// building window
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(271, 230); // butt
ctx.lineTo(271, 252); // knee
ctx.stroke();

// window
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(270, 232); // butt
ctx.lineTo(250, 232); // knee
ctx.stroke();

// window
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(270, 250); // butt
ctx.lineTo(250, 230); // knee
ctx.stroke();

// building window
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(270, 230); // butt part
ctx.lineTo(250, 252); // knee part
ctx.stroke();
