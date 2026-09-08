import { describe, expect, it } from "vitest"
import { afrundetGennemsnit } from "../../opgaver/svære/02-gennemsnit"

describe("afrundetGennemsnit", () => {
    it("finder gennemsnittet og runder op", () => {
        expect(afrundetGennemsnit([10, 11, 12])).toBe(11)
        expect(afrundetGennemsnit([1, 2])).toBe(2)
    })
})