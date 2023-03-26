export function createGrids() {
    const playerGrid = document.querySelector(".player");
    const machineGrid = document.querySelector(".machine");

    function displayGrids(parent) {
        for(let i = 0; i < 10; i++) {
            const row = document.createElement("div");
            row.classList.add(`row`);
            row.style.backgroundColor = "white";
            row.textContent = "";
            parent.append(row);
            for(let j = 0; j < 10; j++) {
                const column = document.createElement("div");
                column.classList.add("column");
                column.textContent = "";
                row.appendChild(column);
            }
        }
    }
    
    displayGrids(playerGrid);
    displayGrids(machineGrid);
}
