import { describe, expect, it } from "vitest"
import { rundOp } from "../../opgaver/nemme/02-ceil"

describe("rundOp", () => {
    it("runder decimaler op", () => {
        expect(rundOp(4.1)).toBe(5)
        expect(rundOp(9)).toBe(9)
    })
})
