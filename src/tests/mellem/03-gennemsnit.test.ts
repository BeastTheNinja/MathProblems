import { describe, expect, it } from "vitest"
import { gennemsnit } from "../../opgaver/mellem/03-gennemsnit"

describe("gennemsnit", () => {
    it("finder og afrunder gennemsnittet", () => {
        expect(gennemsnit([1, 2, 3])).toBe(2)
        expect(gennemsnit([4, 5])).toBe(5)
    })
})
