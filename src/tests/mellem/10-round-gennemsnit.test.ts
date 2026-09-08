import { describe, expect, it } from "vitest"
import { afrundetGennemsnit } from "../../opgaver/mellem/10-round-gennemsnit"

describe("afrundetGennemsnit", () => {
    it("finder og runder gennemsnittet", () => {
        expect(afrundetGennemsnit([10, 11, 12])).toBe(11)
        expect(afrundetGennemsnit([1, 2])).toBe(2)
    })
})
