import { describe, expect, it } from "vitest"
import { antalPakker } from "../../opgaver/nemme/09-ceil-pakker"

describe("antalPakker", () => {
    it("runder antal pakker op", () => {
        expect(antalPakker(13, 5)).toBe(3)
        expect(antalPakker(10, 5)).toBe(2)
    })
})
