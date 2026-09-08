import { describe, expect, it } from "vitest"
import { gangSammen } from "../../opgaver/mellem/08-reduce-produkt"

describe("gangSammen", () => {
    it("ganger alle tal sammen", () => {
        expect(gangSammen([2, 3, 4])).toBe(24)
        expect(gangSammen([])).toBe(1)
    })
})
