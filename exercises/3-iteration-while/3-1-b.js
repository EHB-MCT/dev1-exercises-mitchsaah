"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawRectangle();

function drawRectangle() {

    context.beginPath();
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);

    drawGrid();

}

function drawGrid() {
    let i = 0;
    while (i < 6) {
        //variabelen aanmaken
        let x = 75;
        let y = x;

        Utils.drawLine(x, y + i * 50, 325, y + i * 50);
        Utils.drawLine(x + i * 50, y, x + i * 50, 325);
        i++;
    }
}