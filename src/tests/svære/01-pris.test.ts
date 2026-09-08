import { describe, expect, it } from "vitest"
import { prisEfterRabat } from "../../opgaver/svære/01-pris"

describe("prisEfterRabat", () => {
    it("giver 150 kr ved 25% rabat på 200 kr", () => {
        expect(prisEfterRabat(200, 25)).toBe(150)
    })

    it("giver 90 kr ved 10% rabat på 100 kr", () => {
        expect(prisEfterRabat(100, 10)).toBe(90)
    })
})