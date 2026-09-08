import { describe, expect, it } from "vitest"
import { naermesteTiNed } from "../../opgaver/mellem/02-trin"

describe("naermesteTiNed", () => {
    it("runder ned til nærmeste 10-tal", () => {
        expect(naermesteTiNed(47)).toBe(40)
        expect(naermesteTiNed(99)).toBe(90)
    })
})
