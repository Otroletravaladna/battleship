export function createGrids() {
    const playerGrid = document.querySelector(".player-grid");
    const machineGrid = document.querySelector(".machine-grid");

    for(let i = 0; i < 10; i++) {
        const row = document.createElement("div");
        row.classList.add(`row`);
        row.style.backgroundColor = "white";
        row.textContent = "";
        playerGrid.append(row);

        for(let j = 0; j < 10; j++) {
            const column = document.createElement("div");
            column.classList.add("column");
            column.textContent = "";
            row.appendChild(column);
        }
    }
}