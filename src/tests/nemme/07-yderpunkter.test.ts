import { describe, expect, it } from "vitest"
import { yderpunkter } from "../../opgaver/nemme/07-yderpunkter"

describe("yderpunkter", () => {
    it("finder mindste og største tal", () => {
        expect(yderpunkter([8, 3, 12])).toEqual({ mindste: 3, største: 12 })
    })
})
