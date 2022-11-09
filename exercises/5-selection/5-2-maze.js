"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawMaze();

function drawMaze() {
    context.lineWidth = 10;

    let r = Math.round(Math.random() * 2);
    // verschil maken tussen variabele en waarde
    if(r == 0){
        Utils.drawLine(0, 0, 100, 100);
    } else{
        Utils.drawLine(0, 100, 100, 0);
    }

}