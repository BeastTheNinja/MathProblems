import { describe, expect, it } from "vitest"
import { rundNed } from "../../opgaver/nemme/01-floor"

describe("rundNed", () => {
    it("runder decimaler ned", () => {
        expect(rundNed(4.9)).toBe(4)
        expect(rundNed(7.1)).toBe(7)
    })
})
