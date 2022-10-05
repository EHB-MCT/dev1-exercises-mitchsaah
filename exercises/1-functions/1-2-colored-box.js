"use strict";

drawBox();

function drawBox() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.beginPath();
    context.rect(100, 100, 100, 100);
    context.stroke();

    context.strokeStyle = "red";

    //Line top left ==> right bottom

    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(200,200);
    context.stroke();

    //Line bottom left ==> top right

    context.beginPath();
    context.moveTo(100, 200);
    context.lineTo(200,100);
    context.stroke();

}