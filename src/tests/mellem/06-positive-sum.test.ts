import { describe, expect, it } from "vitest"
import { sumPositive } from "../../opgaver/mellem/06-positive-sum"

describe("sumPositive", () => {
    it("lægger kun positive tal sammen", () => {
        expect(sumPositive([-2, 5, 0, 3])).toBe(8)
        expect(sumPositive([-4, 0])).toBe(0)
    })
})
