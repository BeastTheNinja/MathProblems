import { describe, expect, it } from "vitest"
import { størsteAfvigelse } from "../../opgaver/svære/11-afvigelse"

describe("størsteAfvigelse", () => {
    it("finder den største afstand fra målet", () => {
        expect(størsteAfvigelse([8, 13, 17], 10)).toBe(7)
    })
})
