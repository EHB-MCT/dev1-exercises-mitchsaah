"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawRectangle();

function drawRectangle() {

    context.beginPath();
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);

    drawCross();

}

function drawCross() {
    let i = 0;
    while (i < 5) {
        let step = 150;
        //variabelen aanmaken
        
        let x = 50;
        let y = x;
        Utils.drawLine(x, step + i * 25, 350, step + i *25);
        Utils.drawLine(step + i * 25, 350, step + i *25, y);
        i++;
    }

}
