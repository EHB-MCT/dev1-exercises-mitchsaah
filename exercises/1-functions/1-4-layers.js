"use strict";

drawLayers();

function drawLayers() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    //Big rectangle

    context.lineWidth = "2";
    context.fillStyle = "#add9e6";

    context.beginPath();
    context.rect(50, 50, 350, 350);
    context.rect(50, 50, 280, 280);
    context.rect(170, 115, 160, 160);
    context.fill();
    context.stroke();

    //Lines within rectangle

    //Big rectangle
    context.beginPath();
    context.moveTo(110, 50);
    context.lineTo(110, 275);
    context.lineTo(330, 275);
    context.stroke();

    //Small rectangle
    context.beginPath();
    context.moveTo(170, 175);
    context.lineTo(275, 175);
    context.lineTo(275, 275);
    context.stroke();
    
}