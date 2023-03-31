import { y, x } from "./data";

export let shipSize = 5;

export function getMachineFleet() {
    const random = () => Math.floor(Math.random() * 10);
    let axis = getAxis();
    let coords = random();
    let item = [];
    console.log(shipSize);


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
    if (shipSize == 5) {
        machineCoords.push(item);
        // shipSize--;

    }else if(checkForVisited(item) === false && shipSize > 0) {
        machineCoords.push(item);
        // shipSize--;
        // console.table(machineCoords);
    }
    
    if (shipSize == 0) return;
    else if (shipSize < 3) getItem(2);
    else getItem(shipSize);
    console.table(machineCoords);
    shipSize--;
}

export function checkForVisited(item) {
    let test;
    for (let arr of machineCoords) {
        // console.table(arr);
        test = arr.some(x => item.includes(x))
        console.log(arr.some(x => item.includes(x)));
    }
    return test == true ? true : false;
}

let machineCoords = [

]