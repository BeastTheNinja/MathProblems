import { describe, expect, it } from "vitest"
import { samletHelePris } from "../../opgaver/svære/13-floor-priser"

describe("samletHelePris", () => {
    it("runder hver pris ned før summen", () => {
        expect(samletHelePris([10.9, 4.2])).toBe(14)
        expect(samletHelePris([1.9, 1.9, 1.9])).toBe(3)
    })
})
