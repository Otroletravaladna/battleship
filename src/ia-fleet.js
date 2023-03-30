import { y, x } from "./data";

export let shipSize = 5;

export function getMachineFleet() {
    const random = () => Math.floor(Math.random() * 10);
    let axis = getAxis();
    let coords = random();

    function getAxis() {
        return random() % 2 == 0 ? "row" : "column";
    }
    
    const getItem = (shipSize) => {
        if (axis == "row") {
            
        } else {
            if (coords < 5) coords += shipSize;
            for (let i = shipSize; i > 0; i--) {
                (y[coords - i] + x[coords]);
            }
        }
    }
    
    getItem(shipSize);
}