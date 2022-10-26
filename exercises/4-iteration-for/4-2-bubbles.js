"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawBubbles();

function drawBubbles() {
    // background
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    
    for (let i = 0; i < 40; i++) {

        // transparent - gekleurde cirkels regelen
        context.fillStyle = "hsla(" + Utils.randomNumber(0, 360) + ", 50%, 50%, 0.2)";

        // cirkels random plaats geven
        Utils.fillCircle(Utils.randomNumber(200, (width - 200)), Utils.randomNumber(200, (height - 200)), Utils.randomNumber(15, 50));

    }
}