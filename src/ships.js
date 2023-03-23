export function Ships(type, size, hits, sink) {
    this.type = type;
    this.size = size; 
    this.hits = hits;
    this.sink = sink;

    this.hit = () => { 
        this.hits++;
    };
    
    this.isSunk = () => {
        if (this.hits == this.size) this.sink = true;
    };
}

export function Gameboard(ship, coords, hit) {
    
    if(ship == "AC") this.ship = new Ships("Aircraft Carrier", 5, 0, false);
    else if (ship == "BS") this.ship = new Ships("Battleship", 4, 0, false);
    else if (ship == "CR") this.ship = new Ships("Cruiser", 3, 0, false);
    else if (ship == "DT") this.ship = new Ships("Destroyer", 2, 0, false);
    else if (ship == "SB") this.ship = new Ships("Submarine", 1, 0, false);
    
    this.coords = coords;

    this.receiveAttack = (hit) => {
        if (this.coords.some(x => x == hit)){
            this.ship.hits++;
            return "Hit!";
        }
        return "Miss!";
    };

    this.reportSink = () => {
        this.ship.isSunk();
        if (this.ship.sink == true) return `This ship is wrecked!`;
        return `This ship still can fight!`;
    }
    
}

export function match(arrPlayer) {
    let count;

    const playerFleet = {
        ac: new Gameboard("AC", arrPlayer[0]),
        bs: new Gameboard("BS", arrPlayer[1]),
        cr: new Gameboard("CR", arrPlayer[2]),
        dtOne: new Gameboard("DT", arrPlayer[3]),
        dtTwo: new Gameboard("DT", arrPlayer[4]),
        sbOne: new Gameboard("SB", arrPlayer[5]),
        sbTwo: new Gameboard("SB", arrPlayer[6]),
    }
    

    function attack(enemy, coords){
        for (let [key, value] of Object.entries(enemy)){
            value.receiveAttack(coords);
        }
        // console.log(playerFleet.dtTwo.ship.hits)

    }

    // attack(playerFleet, "a6");
    
} 

const playerCoords = [
    ["a1", "a2", "a3", "a4", "a5"],
    ["b1", "b2", "b3", "b4"],
    ["c3", "c4", "c5"],
    ["d2", "d3"],
    ["a6", "a7"],
    ["d8"],
    ["f9"],
]


console.log(match(playerCoords))