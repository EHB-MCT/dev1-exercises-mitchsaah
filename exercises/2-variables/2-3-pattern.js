"use strict";

window.onresize = drawPattern();

drawPattern();

function drawPattern() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    let canvasWidth = context.canvas.width;
    let canvasHeight = context.canvas.height;
    
    context.fillStyle = "#2C3E50";
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    context.fillStyle = "#3498DB";
    context.fillRect(0, canvasHeight * 2 / 3, canvasWidth, canvasHeight * 1 / 3);
    context.fillStyle = "#ffffff";
    context.fillRect(canvasWidth * 1 / 3, 0, canvasWidth * 1 / 3, canvasHeight);
    context.fillStyle = "#e84c3d";
    // Deze als laatste doen zodat die over de rest heengaat
    context.fillRect(0, canvasHeight * 1 / 6, canvasWidth, canvasHeight * 1 / 3);

}