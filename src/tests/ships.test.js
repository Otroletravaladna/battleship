import * as ships from "../ships";

test("Adds 2 + 1 to equal 3", () => {
    expect(ships.sum(1, 2)).toBe(3);
})