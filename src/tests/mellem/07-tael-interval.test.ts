import { describe, expect, it } from "vitest"
import { taelIInterval } from "../../opgaver/mellem/07-tael-interval"

describe("taelIInterval", () => {
    it("tæller minimum og maksimum med", () => {
        expect(taelIInterval([1, 4, 6, 10], 4, 6)).toBe(2)
        expect(taelIInterval([1, 2, 3], 5, 8)).toBe(0)
    })
})
