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
    
    beforeEach(function () {
        ship.hit();
    })
    
    test("Return hits", () => {
        expect(ship.hits).toBe(1);
    })
})
