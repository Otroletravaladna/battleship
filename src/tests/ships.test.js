import * as ships from "../ships";

let ship;
ship = new ships.Ships("Aircraft Carrier", 5, 0, false);


describe("Ship object call", () => {

    test("Return ship properties", () => {
        expect(ship).toMatchObject({type: "Aircraft Carrier", size: 5, hits: 0,
        sink: false});
    });

})

describe("Ships basic functions", () => {
    let cruiser;
    
    beforeEach(function () {
        cruiser = new ships.Ships("Cruiser", 3, 2, false);
        cruiser.hit();
        cruiser.isSunk();
    })
    
    test("Update hit counter", () => {
        expect(cruiser.hits).toBe(3);
    })

    test("Update sink status", () => {
        expect(cruiser.sink).toBeTruthy();
    })
})
