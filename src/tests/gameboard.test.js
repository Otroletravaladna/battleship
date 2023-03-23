import { Gameboard } from "../ships";

describe("Gameboard functions test", () => {
    let playerShip; 

    beforeEach(() => {
        playerShip = new Gameboard("AC", ["a1", "a2", "a3", "a4", "a5"]);
        playerShip.receiveAttack("a2");
    })

    test("Return hit message", () => {
        expect(playerShip.receiveAttack("a1")).toMatch(/Hit!/);
    })

    test("Update hits count of ship", () => {
        expect(playerShip.ship.hits).toBe(1);
    })
})