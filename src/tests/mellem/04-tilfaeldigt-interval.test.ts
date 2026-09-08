import { describe, expect, it } from "vitest"
import { tilfaeldigtTal } from "../../opgaver/mellem/04-tilfaeldigt-interval"

describe("tilfaeldigtTal", () => {
    it("giver et helt tal inklusive minimum og maksimum", () => {
        const resultat = tilfaeldigtTal(3, 7)

        expect(Number.isInteger(resultat)).toBe(true)
        expect(resultat).toBeGreaterThanOrEqual(3)
        expect(resultat).toBeLessThanOrEqual(7)
    })
})
