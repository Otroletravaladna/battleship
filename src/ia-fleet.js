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
    
    const getItem = (shipSize) => {
        if (axis == "row") {
            if (coords < shipSize) {
                for (let i = shipSize; i > 0; i--) {
                    item.push(y[coords] + x[(coords + shipSize)- i]);
                }
            } else {
                for (let i = shipSize; i > 0; i--) {
                    item.push(y[coords] + x[coords- i], coords - i);
                }
            }

        } else {
            if (coords < 5){
                for (let i = shipSize; i > 0; i--) {
                    item.push(y[(coords + shipSize)- i] + x[coords]);
                }
            } else {
                for (let i = shipSize; i > 0; i--) {
                    item.push(y[coords - i] + x[coords]);
                }
            }
        }
        machineCoords.push(item);
    }
    
    getItem(shipSize);
    console.log(machineCoords);
}

let machineCoords = [

]