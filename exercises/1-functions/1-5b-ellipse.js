"use strict";

drawEllipse();

function drawEllipse() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    //Background
    context.fillStyle = "#fea400";
    context.beginPath();
    context.rect(100, 100, 400, 400);
    context.fill();

    //Ellipse
    context.fillStyle = "#ffff01";
    context.beginPath();
    context.ellipse(300, 350, 100, 50, 0, 0, Math.PI * 2, true);
    context.fill();

    //Water
    context.fillStyle = "#0000fe";
    context.beginPath();
    context.rect(100, 350, 400, 150);
    context.fill();

}