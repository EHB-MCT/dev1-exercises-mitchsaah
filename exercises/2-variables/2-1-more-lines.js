"use strict";

window.onresize = drawMoreLines();

drawMoreLines();


function drawMoreLines() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    let margin = 300;

    context.beginPath();
    context.moveTo(margin, 50);
    context.lineTo(margin + 300, 50);
    context.lineTo(margin, 100);
    context.lineTo(margin + 300, 100);
    context.lineTo(margin, 150);
    context.lineTo(margin + 300, 150);
    context.lineTo(margin, 200);
    context.lineTo(margin + 300, 200);
    context.lineTo(margin, 250);
    context.lineTo(margin + 300, 250);
    context.lineTo(margin, 300);
    context.lineTo(margin + 300, 300);
    context.closePath();

    context.stroke();
}