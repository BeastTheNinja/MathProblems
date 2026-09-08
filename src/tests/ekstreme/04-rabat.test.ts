import { describe, expect, it } from "vitest"
import { flereRabatter } from "../../opgaver/ekstreme/04-rabat"

describe("flereRabatter", () => {
    it("anvender rabatter efter hinanden", () => {
        expect(flereRabatter(100, [10, 20])).toBe(72)
        expect(flereRabatter(250, [20])).toBe(200)
    })
})
