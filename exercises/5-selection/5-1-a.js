"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawPortugal();

function drawPortugal() {

    for (let i = 0; i < 150000; i++) {
        // variabele maken duidelijkere code te krijgen
        let x = Math.random() * width;
        let y = Math.random() * height;

        if (x < width / 2) {
            context.fillStyle = "red";
        } else {
            context.fillStyle = "green";
        }
        
        Utils.fillCircle(x, y, 2);
    }

}