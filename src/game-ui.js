export function createGrids() {
    const container = document.querySelector(".game");
    const playerGrid = document.querySelector(".player");
    const machineGrid = document.querySelector(".machine");

    const y = ['j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
    const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
    
    displayGrid(playerGrid);
    displayGrid(machineGrid);
    
    // displayGrids(playerGrid);
    // displayGrids(machineGrid);
    dragItem();
}

export function displayPlayerName() {
    const input = document.querySelector("input");
    const nameDisplay = document.querySelector(".player-name");

    if (!input.value) nameDisplay.textContent = "Elon Musk";
    else nameDisplay.textContent = input.value;
}

function displayFleetElement() {
    let container = document.querySelector(".item-container");

    const ac = (container) => {
        for(let i = 0; i < 5; i++) {
            let cell = document.createElement("div");
            cell.classList.add("fleet-item");
            container.appendChild(cell);
        }
    }

    function changeAxis() {
        const btn = document.querySelector(".change-axis");
        let isRow = false;
        
        btn.addEventListener("click", () => {
            if (!isRow) {
                container.style.flexDirection = "row"
                isRow = true;
            } else {
                container.style.flexDirection = "column";
                isRow = false;
            };
        })
    }

    changeAxis();
    ac(container);
}

displayFleetElement();

function dragItem() {
    let dragged; 

    const src = document.querySelector(".item-container");
    src.addEventListener("drag", (e) => {
        console.log("dragging");
    })

    src.addEventListener("dragstart", (e) => {
        dragged = e.target;
        e.dataTransfer.setDragImage(src, 0, 0);
        e.target.classList.add("draggin");
    })

    src.addEventListener("dragend", (e) => {
        e.target.classList.remove("draggin");
    })

    const target = document.querySelector(`.player.grid`);

    target.addEventListener("dragover", (e) => {
        e.preventDefault();
    }, false);

    target.addEventListener("dragenter", (e) => {
        e.target.classList.add("dragover");
        console.log(e.target);
    })

    target.addEventListener("dragleave", (e) => {
        e.target.classList.remove("dragover");
    })

    target.addEventListener("drop", (e) => {
        e.preventDefault();
        e.target.classList.remove("dragover");
        e.target.append(dragged);
    })
}

