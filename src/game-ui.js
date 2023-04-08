import { playerCoords, y, x } from "./data";
import { getFleet } from "./ia-fleet";

export let shipSize = 5;

export function createGrids() {
    const container = document.querySelector(".game");
    const playerGrid = document.querySelector(".player");
    const machineGrid = document.querySelector(".machine");

    container.style.display = "grid";

    function displayGrid(parent) {
        y.forEach((item) => {
            for (let i = 0; i < 10; i++) {
                const cell = document.createElement("div");
                cell.classList.add(item + (i +1));
                parent.append(cell);
            }
        })
    }
    
    displayGrid(playerGrid);
    displayGrid(machineGrid);
    dragItem();
}

export function displayPlayerName() {
    const input = document.querySelector("input");
    const nameDisplay = document.querySelector(".player-name");

    if (!input.value) nameDisplay.textContent = "Elon Musk";
    else nameDisplay.textContent = input.value;
}

function displayFleetElement(shipSize) {
    const container = document.querySelector(".item-container");
    container.textContent = "";

    const generateShip = (container) => {
        for(let i = 0; i < shipSize; i++) {
            let cell = document.createElement("div");
            cell.classList.add("fleet-item");
            container.appendChild(cell);
        }
    }
    
    generateShip(container);
}


export function changeAxis() {
    const container = document.querySelector(".item-container");
    
    if (container.id == "column") {
        container.style.flexDirection = "row"
        container.id = "row";
    } else {
        container.style.flexDirection = "column";
        container.id = "column";
    }
}

displayFleetElement(shipSize);

function dragItem() {
    const src = document.querySelector(".item-container");
    const target = document.querySelector(`.player.grid`);

    src.addEventListener("dragstart", (e) => {
        src.style.background = "lightblue";
        e.dataTransfer.setDragImage(src, 0, 0);
    })

    target.addEventListener("dragover", (e) => {
        e.preventDefault();
        let dragged = handleItems(e);
        if (dragged.includes(null)) {
            dragged.forEach(e => {
                if (e !== null) {
                    e.style.background = "red";
                } 
            });
        
        } else {
            dragged.forEach(e => {
                if (e.id == "selected") {
                    for (let item of dragged) {
                        item.style.background = "red";
                    }
                } 
                else if (!dragged.some((e) => e.id == "selected")) {
                    e.style.background = "green";
                }
            })
        };

    }, false);


    target.addEventListener("dragleave", (e) => {
        let abandoned = handleItems(e);
        abandoned.forEach(e => {
            if(e !== null) {
                if (e.id !== "selected") e.style.background = "white"; 
                else if (e.id == "selected") e.style.background = "green";
            }
        });
    });

    target.addEventListener("drop", (e) => {
        e.preventDefault();
        let ship = handleItems(e);

        if (ship.includes(null)) {
            ship.forEach(e => { 
                if (e !== null) e.style.background = "white";
            });

        } else if (ship.some((e) => e.id == "selected")) {
            ship.forEach(e => {
                if (e.id == "selected") e.style.background = "green";
                else e.style.background = "white";
            })

        } else if (!ship.some((e) => e.id == "selected")) {
            ship.forEach(e => e.id = "selected");
            shipSize--;
            if (shipSize == 0) {
                playerCoords.push(ship.map(e => e.className));
                getFleet();
                document.querySelector(".set-fleet").remove();
            }
            else if(shipSize < 3) displayFleetElement(2);
            else displayFleetElement(shipSize);
            playerCoords.push(ship.map(e => e.className));
        }
    })

    function handleItems(e) {
        const targetx = Number(e.target.className.slice(1));
        const targety = e.target.className[0];
        let itemAxis = src.id;
        let rowItems = [];
        let columnItems = [];

        if (itemAxis == "row") {
            for (let i = 0; i < src.childElementCount; i++){
                let item = document.querySelector(`.${targety + (targetx + i)}`);
                rowItems.push(item);
            }

        } else {
            for (let i = 0; i < src.childElementCount; i++){
                let item = document.querySelector(`.${y[y.indexOf(targety) + i] +  targetx}`);
                columnItems.push(item);
            }
        }

        if (rowItems.length == 0) return columnItems; 
        return rowItems;
    }
}

