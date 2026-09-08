import { describe, expect, it } from "vitest"
import { terningGennemsnit } from "../../opgaver/ekstreme/09-random-gennemsnit"

describe("terningGennemsnit", () => {
    it("giver et helt gennemsnit fra 1 til 6", () => {
        const resultat = terningGennemsnit(20)
        expect(Number.isInteger(resultat)).toBe(true)
        expect(resultat).toBeGreaterThanOrEqual(1)
        expect(resultat).toBeLessThanOrEqual(6)
    })
})
