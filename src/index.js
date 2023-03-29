import "./style.css";
import * as ships from "./ships";
import * as menu from "./menu-ui";
import * as game from "./game-ui";

menu.changeText();

document.querySelector(".change-axis").addEventListener("click", () => {
    game.changeAxis();
})
