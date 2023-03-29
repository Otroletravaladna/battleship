import "./style.css";
import * as ships from "./ships";
import * as menu from "./menu-ui";
import * as game from "./game-ui";
import * as data from "./data";

menu.changeText();

document.querySelector(".change-axis").addEventListener("click", () => {
    game.changeAxis();
})
