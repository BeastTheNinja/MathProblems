import { describe, expect, it } from "vitest"
import { rundNedTilTi } from "../../opgaver/nemme/08-floor-ti"

describe("rundNedTilTi", () => {
    it("runder ned til nærmeste 10-tal", () => {
        expect(rundNedTilTi(87)).toBe(80)
        expect(rundNedTilTi(40)).toBe(40)
    })
})
