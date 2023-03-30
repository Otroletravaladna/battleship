export let shipSize = 5;

export function getMachineFleet() {
    const random = () => Math.floor(Math.random() * 10);

    const getAxis = () => {
        if (random() % 2 == 0) return "row";
        return "column";
    }

    const getItem = (shipSize) => {
        
    }
    
    console.log(getAxis())
}