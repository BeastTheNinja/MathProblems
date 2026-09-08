import { describe, expect, it } from "vitest"
import { antalHold } from "../../opgaver/mellem/01-personer"

describe("antalHold", () => {
    it("runder antal hold op", () => {
        expect(antalHold(17, 4)).toBe(5)
        expect(antalHold(20, 4)).toBe(5)
    })
})
