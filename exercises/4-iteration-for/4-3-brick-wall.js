"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawBricks();

function drawBricks() {

    let rows = 6;
    
    for(let i = 0; i < rows; i++) {

        //kleur
        context.fillStyle = "#8b0100";
        // bakstenen
        context.fillRect(i * 110, 20, 100, 40);
        context.fillRect(60 + i * 110, 70, 100, 40);
        context.fillRect(i * 110, 120, 100, 40);
        context.fillRect(60 + i * 110, 170, 100, 40);

        

    }

}