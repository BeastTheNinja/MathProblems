import { describe, expect, it } from "vitest"
import { laegSammen } from "../../opgaver/nemme/05-reduce"

describe("laegSammen", () => {
    it("lægger alle tal sammen", () => {
        expect(laegSammen([2, 3, 5])).toBe(10)
        expect(laegSammen([])).toBe(0)
    })
})
