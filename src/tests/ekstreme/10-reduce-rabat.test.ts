import { describe, expect, it } from "vitest"
import { prisMedRabatter } from "../../opgaver/ekstreme/10-reduce-rabat"

describe("prisMedRabatter", () => {
    it("anvender rabatter efter hinanden", () => {
        expect(prisMedRabatter(100, [10, 20])).toBe(72)
        expect(prisMedRabatter(250, [20])).toBe(200)
    })
})
