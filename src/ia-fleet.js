import { y, x } from "./data";

export let shipSize = 5;

export function getMachineFleet(n) {
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

    getItem(n);
    return item;
}

export function trigger() {
    let item = getMachineFleet(shipSize);

    if (shipSize == 5) {
        machineCoords.push(item);
        shipSize--;
    }
    else {
        if (test(machineCoords, item) == false) {
            machineCoords.push(item)
            shipSize--;
        }
        else alert(item);
        console.log(test(machineCoords, item));
    }

    console.table(machineCoords);
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