import { describe, expect, it } from "vitest"
import { antalKasser } from "../../opgaver/svære/04-sider"

describe("antalKasser", () => {
    it("runder antallet af nødvendige kasser op", () => {
        expect(antalKasser(10, 4)).toBe(3)
        expect(antalKasser(12, 4)).toBe(3)
    })
})
