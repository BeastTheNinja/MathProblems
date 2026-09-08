import { describe, expect, it } from "vitest"
import { tilfældigtMellemTiOgTyve } from "../../opgaver/mellem/09-random-interval"

describe("tilfældigtMellemTiOgTyve", () => {
    it("giver et helt tal fra 10 til 20", () => {
        const resultat = tilfældigtMellemTiOgTyve()
        expect(Number.isInteger(resultat)).toBe(true)
        expect(resultat).toBeGreaterThanOrEqual(10)
        expect(resultat).toBeLessThanOrEqual(20)
    })
})
