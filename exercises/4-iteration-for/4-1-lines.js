"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawLines();

function drawLines() {

    // background
    context.fillStyle = "orange";
    context.fillRect(0, 0, width, height);

    //eerste lijn => van links boven naar rechts beneden

    let step = 10; //variabele 'step' aanmaken => elk lijntje wordt 10px verder getekend
    let amount = width / step; // zodat dit mooi geplaatst wordt

    for (let i = 0; i < amount; i++) {
        // witte kleur geven aan lijntjes
        context.strokeStyle = "white";
        //lijntjes boven naar onder
        Utils.drawLine(step * i, 0, width - (step * i), height);
        // lijntjes van links naar rechts
        Utils.drawLine(0, step * i, width, height - (step * i));

    }

}

// modulo-operator gebruiken om in 1 for loop dit te kunnen loopen