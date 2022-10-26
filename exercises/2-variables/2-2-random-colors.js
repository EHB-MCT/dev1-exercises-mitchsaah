"use strict";

setup();

function setup() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");


    drawRectangle();

    function drawRectangle(pos, size) {

        context.fillStyle = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";

        context.beginPath();
        context.rect(pos, pos, size, size);
        context.fill();
    }

    drawMoreRectangles();

    function drawMoreRectangles() {
        drawRectangle(50, 500);
        drawRectangle(100, 400);
        drawRectangle(150, 300);
        drawRectangle(200, 200);
        drawRectangle(250, 100);
    }

}