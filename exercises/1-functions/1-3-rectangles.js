"use strict";

drawRectangles();

function drawRectangles() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    //Red rectangles

    context.strokeStyle = "red";
    context.beginPath();
    context.rect(50, 50, 250, 250);
    context.rect(300, 300, 250, 250);
    context.rect(425, 100, 75, 75);
    context.rect(100, 425, 75, 75);
    context.stroke();

    //Black rectangles

    context.fillStyle = "#000000";
    context.beginPath();
    context.rect(175, 175, 250, 250);
    context.rect(50, 500, 50, 50);
    context.rect(500, 50, 50,50);
    context.fill();

}