import { describe, expect, it } from "vitest"
import { dobbeltSum } from "../../opgaver/mellem/05-sum-af-gange"

describe("dobbeltSum", () => {
    it("fordobler hvert tal og lægger dem sammen", () => {
        expect(dobbeltSum([1, 2, 3])).toBe(12)
        expect(dobbeltSum([])).toBe(0)
    })
})
