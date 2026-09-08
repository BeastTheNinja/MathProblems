import { describe, expect, it } from "vitest"
import { kastOgLaegSammen } from "../../opgaver/svære/15-random-terninger"

describe("kastOgLaegSammen", () => {
    it("giver en mulig sum af terninger", () => {
        const resultat = kastOgLaegSammen(5)
        expect(Number.isInteger(resultat)).toBe(true)
        expect(resultat).toBeGreaterThanOrEqual(5)
        expect(resultat).toBeLessThanOrEqual(30)
    })
})
