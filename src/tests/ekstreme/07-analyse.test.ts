import { describe, expect, it } from "vitest"
import { analyserScores } from "../../opgaver/ekstreme/07-analyse"

describe("analyserScores", () => {
    it("returnerer minimum, maksimum og afrundet gennemsnit", () => {
        expect(analyserScores([40, 70, 90])).toEqual({
            minimum: 40,
            maksimum: 90,
            gennemsnit: 67,
        })
    })
})
