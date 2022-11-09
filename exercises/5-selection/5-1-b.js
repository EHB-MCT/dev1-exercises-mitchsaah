"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawTheNetherlands();

function drawTheNetherlands() {

    for (let i = 0; i < 150000; i++) {
        // variabele maken duidelijkere code te krijgen
        let x = Math.random() * width;
        let y = Math.random() * height;

        // y gebruiken hierbij!!!
        if (y < height / 3) {
            context.fillStyle = "red";
        } else if(y < height * 2/3){
            context.fillStyle = "white"; // dots zijn onzichtbaar (wit)
        } else{
            context.fillStyle = "blue";
        }

        Utils.fillCircle(x, y, 2);
    }

}