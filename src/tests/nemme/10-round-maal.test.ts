import { describe, expect, it } from "vitest"
import { rundTilHeltal } from "../../opgaver/nemme/10-round-maal"

describe("rundTilHeltal", () => {
    it("runder til nærmeste heltal", () => {
        expect(rundTilHeltal(7.4)).toBe(7)
        expect(rundTilHeltal(7.6)).toBe(8)
    })
})
