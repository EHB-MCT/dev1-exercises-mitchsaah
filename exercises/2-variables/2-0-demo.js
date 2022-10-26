"use strict";



let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

//console.log(context);

let width = context.canvas.width;
let height = context.canvas.height;

drawMickey(400, 400, 100);
drawMickey(300, 300, 50);
drawMickey(500, 300, 50);

function drawMickey(x, y, size) {
    context.beginPath();
    context.arc(x, y, size, 0, Math.PI * 2, true);
    context.fill();

}

