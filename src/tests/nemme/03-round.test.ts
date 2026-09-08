import { describe, expect, it } from "vitest"
import { naermesteHeltal } from "../../opgaver/nemme/03-round"

describe("naermesteHeltal", () => {
    it("runder til nærmeste hele tal", () => {
        expect(naermesteHeltal(4.4)).toBe(4)
        expect(naermesteHeltal(4.6)).toBe(5)
    })
})
