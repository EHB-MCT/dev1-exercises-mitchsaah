"use strict";

drawBox();

function drawBox() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.lineWidth = "4";

    context.beginPath();
    context.rect(100, 100, 150, 150);
    context.stroke();

    context.strokeStyle = "red";

    //Line top left ==> right bottom


    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(250,250);
    context.stroke();

    //Line bottom left ==> top right

    context.beginPath();
    context.moveTo(100, 250);
    context.lineTo(250,100);
    context.stroke();

    

}