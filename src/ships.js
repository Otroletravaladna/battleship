export function Ships(type, size, hits, sink) {
    this.type = type;
    this.size = size; 
    this.hits = hits;
    this.sink = sink;

    // this.hit = () => { 
    //     hits++;
    // };
    
    this.isSunk = () => {
        if (this.hits == this.size) this.sink = true;
    };
}

export function Gameboard(ship, coords, hit) {
    
    if(ship == "AC") this.ship = new Ships("Aircraft Carrier", 5, 0, false);
    else if (ship == "BS") this.ship = new Ships("Battleship", 4, 0, false);
    else if (ship == "CR") this.ship = new Ships("Cruiser", 3, 0, false);
    else if (ship == "DT") this.ship = new Ships("Destroyer", 2, 0, false);

    
    this.coords = coords;

    this.receiveAttack = (hit) => {
        if (this.coords.some(x => x == hit)){
            this.ship.hits += 1;
            console.log("Hit!")
            return true;
        }
        console.log("Miss!")
        return false;
    };

    this.reportSink = () => {
        this.ship.isSunk();
        if (this.ship.sink == true)  return console.log(`This ship is wrecked!`);
        return console.log("no");
        // return console.log(`This ship still can fight!`);
    }
    
}

export function match(arrPlayer, arrMachine) {
    let count;

    const playerFleet = {
        ac: new Gameboard("AC", arrPlayer[0]),
        bs: new Gameboard("BS", arrPlayer[1]),
        cr: new Gameboard("CR", arrPlayer[2]),
        dtOne: new Gameboard("DT", arrPlayer[3]),
        dtTwo: new Gameboard("DT", arrPlayer[4]),

    }

    // const machineFleet = {
    //     ac: new Gameboard("AC", arrMachine[0]),
    //     bs: new Gameboard("BS", arrMachine[1]),
    //     cr: new Gameboard("CR", arrMachine[2]),
    //     dtOne: new Gameboard("DT", arrMachine[3]),
    //     dtTwo: new Gameboard("DT", arrMachine[4]),

    // }
    

    function attack(enemy, coords){
        let hit = false;
        for (let [key, value] of Object.entries(enemy)){
            if(value.receiveAttack(coords)) {
                value.reportSink()
                hit = true;
            }
        }
        console.log(hit);
        return hit;      
    }


    const machineChoice = () => {
        let y = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
        let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        const lastHit = {
            coordsy: 8, //nul
            coordsx: 4, //null
            state: false,
            fnIndex : 0,
        }

        let randomChoice = (x, y) =>  {
            let random = () => (Math.floor(Math.random() * 10));
            let coords = y + x;
            let randomy = random();
            let randomx = random();
            console.log((y[randomy] + x[randomx]));

            // return attack(playerFleet, coords);
            if(attack(playerFleet, (y[randomy] + x[randomx]))){
                lastHit.coordsy = randomy;
                lastHit.coordsx = randomx;
                lastHit.state = true;
                return true;
            }
        }

        let adjacentChoice = (x, y) => {
            let hitCount = -1;
            let randomAdjacent = () => (Math.floor(Math.random() * 4));
            if (hitCount == 0) {
                let index = randomAdjacent();
                adjMoves[index](); 
                if(attack(playerFleet, (y[lastHit.coordsy] + x[lastHit.coordsx]))){
                    // console.log("yes");    
                    lastHit.fnIndex = index;   
                    hitCount = 1;
                    // console.log(lastHit.fnIndex);         
                } else {
                    console.log("No");
                    return;
                }

            } else if (hitCount == 1) {
                adjMoves[lastHit.fnIndex]();
                if (attack(playerFleet, (y[lastHit.coordsy] + x[lastHit.coordsx]))) {
                    // console.log("hc1 = active");
                    return;
                } else {
                    hitCount = -1;
                    // console.log("hc1 = not active", hitCount)
                }

            } else if (hitCount == -1) {
                if (lastHit.fnIndex == 0) {
                    adjMoves[2]();
                    if (attack(playerFleet, (y[lastHit.coordsy] + x[lastHit.coordsx]))){
                        hitCount = 1;
                    } else return;

                } else if (lastHit.fnIndex == 1) {
                    adjMoves[3]();
                    if (attack(playerFleet, (y[lastHit.coordsy] + x[lastHit.coordsx]))){
                        hitCount = 1;
                    } else return;
                
                } else if (lastHit.fnIndex == 2) {
                    adjMoves[0]();
                    if (attack(playerFleet, (y[lastHit.coordsy] + x[lastHit.coordsx]))){
                        hitCount = 1;
                    } else return;

                } else if (lastHit.fnIndex == 3) {
                    adjMoves[1]();
                    if (attack(playerFleet, (y[lastHit.coordsy] + x[lastHit.coordsx]))){
                        hitCount = 1;
                    } else return;
                }
            }
            
        }

        const adjMoves = [
            () => lastHit.coordsy++,
            () => lastHit.coordsx++,
            () => lastHit.coordsy--,
            () => lastHit.coordsx--
        ]
    
        adjacentChoice(x, y);

        // if (randomChoice(x, y)) {
        //     console.log(lastHit);
        // };
        
    };

    machineChoice();


} 

const playerCoords = [
    ["a1", "a2", "a3", "a4", "a5"],
    ["b1", "b2", "b3", "b4"],
    ["c3", "c4", "c5"],
    ["d2", "d3"],
    ["a6", "a7"],

]

const machineCoords = [

]

//Create an array for the machine
//Test the attack function with both player and machine.
//Create basic grid to set fleet of elements there.
//Create function that allows player take turns.
//Create logic of IA of computer. 
//Create messages to display while playing.
//Pay attention to the messages displayed as strings among the objects

//the selector of of random choice or adjacentchoice must take as parameter the
//lastHit.state.

console.log(match(playerCoords))