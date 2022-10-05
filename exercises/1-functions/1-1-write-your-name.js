"use strict";

drawName();

function drawName() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.lineWidth = "10";

    //M
    context.strokeStyle = "red";
    context.beginPath();
    context.moveTo(50, 150);
    context.lineTo(50, 50);
    context.lineTo(100, 100);
    context.lineTo(150, 50);
    context.lineTo(150, 150);
    context.stroke();

    //I
    context.strokeStyle = "blue";
    context.beginPath();
    context.moveTo(200, 150);
    context.lineTo(200, 60);
    context.stroke();

    //T
    context.strokeStyle = "green";
    context.beginPath();
    context.moveTo(250, 150);
    context.lineTo(250, 47);
    context.lineTo(160, 47);
    context.lineTo(450, 47);
    context.stroke();

    //C
    context.strokeStyle = "yellow";
    context.beginPath();
    context.moveTo(375, 60);
    context.lineTo(275, 60);
    context.lineTo(275, 148);
    context.lineTo(375, 148);
    context.stroke();

    //H
    context.strokeStyle = "pink";
    context.beginPath();
    context.moveTo(400, 56);
    context.lineTo(400, 150);
    context.lineTo(400, 100);
    context.lineTo(450, 100);
    context.lineTo(450, 56);
    context.lineTo(450, 150);
    context.stroke();

}