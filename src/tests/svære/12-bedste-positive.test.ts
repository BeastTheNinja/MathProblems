import { describe, expect, it } from "vitest"
import { gennemsnitAfPositiveScores } from "../../opgaver/svære/12-bedste-positive"

describe("gennemsnitAfPositiveScores", () => {
    it("ignorerer nul og negative scores", () => {
        expect(gennemsnitAfPositiveScores([-2, 80, 81, 0])).toBe(81)
        expect(gennemsnitAfPositiveScores([-4, 0])).toBe(0)
    })
})
