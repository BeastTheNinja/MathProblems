import { describe, expect, it } from "vitest"
import { afstand } from "../../opgaver/nemme/06-afstand"

describe("afstand", () => {
    it("giver altid en positiv afstand", () => {
        expect(afstand(4, 10)).toBe(6)
        expect(afstand(10, 4)).toBe(6)
    })
})
