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