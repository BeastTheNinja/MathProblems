import { describe, expect, it } from "vitest"
import { samletHeleMinutter } from "../../opgaver/svære/14-ceil-tid"

describe("samletHeleMinutter", () => {
    it("runder hver aktivitet op før summen", () => {
        expect(samletHeleMinutter([2.1, 4.8])).toBe(7)
        expect(samletHeleMinutter([5, 3.2])).toBe(9)
    })
})
