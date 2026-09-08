import { describe, expect, it } from "vitest"
import { rundingsrapport } from "../../opgaver/ekstreme/08-rundingsrapport"

describe("rundingsrapport", () => {
    it("laver tre forskellige summer", () => {
        expect(rundingsrapport([1.2, 2.5, 3.8])).toEqual({
            ned: 6,
            op: 9,
            naermeste: 8,
        })
    })
})
