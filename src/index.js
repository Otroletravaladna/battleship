import "./style.css";
import * as ships from "./ships";
import * as menu from "./menu-ui";
import * as game from "./game-ui";
import * as data from "./data";
import * as iaFleet from "./ia-fleet";
import { displayMessage, displayShipState } from "./textboard";

menu.changeText();

document.querySelector(".change-axis").addEventListener("click", () => {
    game.changeAxis();
})

// export function makeMove() {
//     document.querySelector(".machine").addEventListener("click", e => {
//         trigger(e);
//     });
// }

// export const trigger = throttle(e => {
//     ships.match(data.playerCoords, data.machineCoords, e);
// })

export function throttle(cb, delay = 4000) {
    let fired = false;

    return (...args) => {
        if (fired) return;
        cb(...args)
        fired = true;
        setTimeout(() => {
            fired = false;
        }, delay);
    }
}