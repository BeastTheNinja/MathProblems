import { describe, expect, it } from "vitest"
import { rangering } from "../../opgaver/ekstreme/06-rangering"

describe("rangering", () => {
    it("sorterer størst til mindst uden at ændre input", () => {
        const scores = [40, 90, 70]

        expect(rangering(scores)).toEqual([90, 70, 40])
        expect(scores).toEqual([40, 90, 70])
    })
})
