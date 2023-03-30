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
            
        } else {
            if (coords < 5){
                for (let i = shipSize; i > 0; i--) {
                    item.push(y[(coords + 5)- i] + x[coords]);
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