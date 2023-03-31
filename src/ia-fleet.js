import { y, x } from "./data";

export let shipSize = 5;

export function getMachineFleet() {
    const random = () => Math.floor(Math.random() * 10);
    let axis = getAxis();
    let coords = random();
    let item = [];

    function getAxis() {
        return random() % 2 == 0 ? "row" : "column";
    }
    
    const getItem = (n) => {
        if (axis == "row") {
            if (coords < n) {
                for (let i = n; i > 0; i--) {
                    item.push(y[coords] + x[(coords + n)- i]);
                }
            } else {
                for (let i = n; i > 0; i--) {
                    item.push(y[coords] + x[coords- i]);
                }
            }

        } else {
            if (coords < 5){
                for (let i = n; i > 0; i--) {
                    item.push(y[(coords + n)- i] + x[coords]);
                }
            } else {
                for (let i = n; i > 0; i--) {
                    item.push(y[coords - i] + x[n]);
                }
            }
        }
    }

    if (shipSize == 0) return;
    else if (shipSize == 5) getItem(5);
    else if (shipSize < 3) getItem(2);
    else getItem(shipSize);

    return item;
}

export function trigger() {
    let item = getMachineFleet();

    if (shipSize == 5) {
        machineCoords.push(item);
        shipSize--;
    }
    else {
        if (test(machineCoords, item) == false) {
            if (shipSize == 0) return;
            else {
                machineCoords.push(item)
                shipSize--;
            }
        }
    }

}

function test(arr, item) {
    let res = [];
    arr.forEach(e => {
        if (e.some(x => item.includes(x))) res.push(true);
    })

    return res.includes(true);
}

export let machineCoords = [

]