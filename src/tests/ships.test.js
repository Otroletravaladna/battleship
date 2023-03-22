import * as ships from "../ships";

describe("Ship obj basics calls", () => {
    let ship;

    beforeEach(function () {
        ship = new ships.Ships("Aircraft Carrier", 5, 0, false);
    })

    test("Return ship properties", () => {
        expect(ship).toMatchObject({type: "Aircraft Carrier", size: 5, hits: 0,
        sink: false});
    })
})
