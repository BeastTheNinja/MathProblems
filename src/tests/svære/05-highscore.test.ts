import { describe, expect, it } from "vitest"
import { samletHighscore } from "../../opgaver/svære/05-highscore"

describe("samletHighscore", () => {
    it("runder scores ned til nærmeste 10-tal og lægger dem sammen", () => {
        expect(samletHighscore([27, 44])).toBe(60)
        expect(samletHighscore([9, 10, 19])).toBe(20)
    })
})
