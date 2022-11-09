"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawFlag();

function drawFlag() {

    for (let i = 0; i < 150000; i++) {

        let x = Math.random() * width;
        let y = Math.random() * height;

        if(x < width * 1/4){
            context.fillStyle = "red";
        }else if(x < width * 3/4) {
            context.fillStyle = "white"; // dots zijn onzichtbaar (wit)
        }else{
            context.fillStyle = "yellow";
        }

        Utils.fillCircle(x, y, 2);
    }
}