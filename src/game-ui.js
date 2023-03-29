let shipSize = 5;

export function createGrids() {
    const container = document.querySelector(".game");
    const playerGrid = document.querySelector(".player");
    const machineGrid = document.querySelector(".machine");

    const y = ['j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
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

    function changeAxis() {
        const btn = document.querySelector(".change-axis");
        let isRow = false;
        container.id = "column";
        
        btn.addEventListener("click", () => {
            if (!isRow) {
                container.style.flexDirection = "row"
                container.id = "row";
                isRow = true;
            } else {
                container.style.flexDirection = "column";
                container.id = "column";
                isRow = false;
            };
        })
    }

    changeAxis();
    generateShip(container);
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
        let dragged = handleItems(e, target);
        if (dragged.includes(null)) {
            dragged.forEach(e => {
                if (e !== null) e.style.background = "red";
            });

        } else dragged.forEach(e => e.style.background = "green" );

    }, false);


    target.addEventListener("dragleave", (e) => {
        let left = handleItems(e, target);
        left.forEach(e => { if(e !== null) e.style.background = "white" });
    });

    target.addEventListener("drop", (e) => {
        e.preventDefault();
        let ship = handleItems(e, target);

        if (ship.includes(null)) {
            ship.forEach(e => { 
                if (e !== null) e.style.background = "white";
            });

        } else { 
            ship.forEach(e => {
                e.id = "selected";
            })
            shipSize--;
            console.log(shipSize)
            if (shipSize == 0) src.remove();
            else if(shipSize < 3) displayFleetElement(2);
            else displayFleetElement(shipSize);
        }
    })

    function handleItems(e, target) {
        const y = ['j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
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

