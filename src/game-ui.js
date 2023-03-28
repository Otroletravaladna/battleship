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
    ac(container);
}

displayFleetElement();

function dragItem() {
    let dragged;

    const src = document.querySelector(".item-container");    


    src.addEventListener("dragstart", (e) => {
        // src.id = "selected"
        e.dataTransfer.setDragImage(src, 0, 0);
    })

    const target = document.querySelector(`.player.grid`);


    target.addEventListener("dragover", (e) => {
        e.preventDefault();
    }, false);

    target.addEventListener("dragenter", (e) => {
        // e.target.classList.add("dragover");
        // console.log(e.target);
    })

    target.addEventListener("dragleave", (e) => {
        // console.log("dragleave");
    })

    target.addEventListener("drop", (e) => {
        e.preventDefault();
        appendItem(e, target, src);
    })

    function appendItem(e, target) {
        const y = ['j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
        const targetx = Number(e.target.className.slice(1));
        const targety = e.target.className[0];
        let itemAxis = src.id;

        if (itemAxis == "row") {
            for (let i = 0; i < src.childElementCount; i++){
                document.querySelector(`.${targety + (targetx + i)}`).id = "selected";
            }

        } else {
            for (let i = 0; i < src.childElementCount; i++){
                document.querySelector(`.${y[y.indexOf(targety) + i] +  targetx}`).id = "selected";
                console.log(y.indexOf(targety), targetx)
            }
        }
    }
}

