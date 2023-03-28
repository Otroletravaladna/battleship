export function createGrids() {
    const container = document.querySelector(".game");
    const playerGrid = document.querySelector(".player");
    const machineGrid = document.querySelector(".machine");

    const y = ['j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
    container.style.display = "grid";

    function displayGrids(parent) {
        for(let i = 0; i < 10; i++) {
            const row = document.createElement("div");
            row.classList.add(`column`);
            row.style.backgroundColor = "white";
            row.textContent = "";
            parent.append(row);
            for(let j = 0; j < 10; j++) {
                const column = document.createElement("div");
                column.classList.add(`${y[j] + (i + 1)}`);
                column.textContent = "";
                row.appendChild(column);
            }
        }
    }
    
    displayGrids(playerGrid);
    displayGrids(machineGrid);
}

export function displayPlayerName() {
    const input = document.querySelector("input");
    const nameDisplay = document.querySelector(".player-name");

    if (!input.value) nameDisplay.textContent = "Elon Musk";
    else nameDisplay.textContent = input.value;
}

function displayFleetElement() {
    let container = document.querySelector(".fleet-container");

    const ac = (container) => {
        for(let i = 0; i < 4; i++) {
            let cell = document.createElement("div");
            cell.classList.add("fleet-item");
            container.appendChild(cell);
        }
    }

    ac(container);
}

displayFleetElement();

