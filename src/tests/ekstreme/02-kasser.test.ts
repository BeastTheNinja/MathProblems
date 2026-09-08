import { describe, expect, it } from "vitest"
import { samletAntalKasser } from "../../opgaver/ekstreme/02-kasser"

describe("samletAntalKasser", () => {
    it("tæller kasser for alle varetyper", () => {
        expect(samletAntalKasser([
            { antal: 10, kassestoerrelse: 4 },
            { antal: 8, kassestoerrelse: 5 },
        ])).toBe(5)
    })
})
