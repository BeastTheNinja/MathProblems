import { describe, expect, it } from "vitest"
import { bedsteAfrundedeScore } from "../../opgaver/ekstreme/05-bedste"

describe("bedsteAfrundedeScore", () => {
    it("finder den største afrundede score", () => {
        expect(bedsteAfrundedeScore([27, 44, 91])).toBe(90)
        expect(bedsteAfrundedeScore([9, 19])).toBe(10)
    })
})
