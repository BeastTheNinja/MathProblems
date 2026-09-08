import { describe, expect, it } from "vitest"
import { gennemsnitAfTerninger } from "../../opgaver/ekstreme/03-terning"

describe("gennemsnitAfTerninger", () => {
    it("giver et helt gennemsnit mellem 1 og 6", () => {
        const resultat = gennemsnitAfTerninger(20)

        expect(Number.isInteger(resultat)).toBe(true)
        expect(resultat).toBeGreaterThanOrEqual(1)
        expect(resultat).toBeLessThanOrEqual(6)
    })
})
