export function createGrids() {
    const playerGrid = document.querySelector(".player");
    const machineGrid = document.querySelector(".machine");

    const y = ['j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
    const x = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];

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
