import { describe, expect, it } from "vitest"
import { kastTerning } from "../../opgaver/nemme/04-random"

describe("kastTerning", () => {
    it("giver et helt tal fra 1 til 6", () => {
        const resultat = kastTerning()

        expect(Number.isInteger(resultat)).toBe(true)
        expect(resultat).toBeGreaterThanOrEqual(1)
        expect(resultat).toBeLessThanOrEqual(6)
    })
})
