"use strict";

drawStarryNight();

function drawStarryNight() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.lineWidth = "5";
    context.strokeStyle = "#fda704";
    
    //Frame
    context.beginPath();
    context.rect(100, 100, 400, 400);
    context.stroke();

    //Star
    context.beginPath();
    context.arc(100, 100, 200, 0, Math.PI /2);
    context.arc();
    //context.arc();
    
    context.stroke();

}