import { describe, expect, it } from "vitest"
import { slutScore } from "../../opgaver/ekstreme/01-point"

describe("slutScore", () => {
    it("runder scores ned og giver bonus ved højt gennemsnit", () => {
        expect(slutScore([80, 90])).toBe(220)
        expect(slutScore([49, 50])).toBe(90)
    })
})
