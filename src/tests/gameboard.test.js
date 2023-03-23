import { Gameboard } from "../ships";

describe("Gameboard functions test", () => {
    let playerShip; 

    beforeEach(() => {
        playerShip = new Gameboard("AC", ["a1", "a2", "a3", "a4", "a5"]);
        playerShip.receiveAttack("a2");
        playerShip.receiveAttack("a3");
        playerShip.receiveAttack("a4");
        playerShip.receiveAttack("a5");
        playerShip.receiveAttack("a1");
    })

    test("Return hit message", () => {
        expect(playerShip.receiveAttack("a1")).toMatch(/Hit!/);
    })

    test("Update hits count of ship", () => {
        expect(playerShip.ship.hits).toBe(5);
    })

    test("Return sink status of ship", () => {
        expect(playerShip.reportSink()).toMatch(/This ship is wrecked!/)
    })
})