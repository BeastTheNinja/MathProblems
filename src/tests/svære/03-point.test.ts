import { describe, expect, it } from "vitest"
import { samletScore } from "../../opgaver/svære/03-point"

describe("samletScore", () => {
    it("lægger et bonuspoint mellem 10 og 50 til", () => {
        const resultat = samletScore([10, 20])

        expect(Number.isInteger(resultat)).toBe(true)
        expect(resultat).toBeGreaterThanOrEqual(40)
        expect(resultat).toBeLessThanOrEqual(80)
    })
})
