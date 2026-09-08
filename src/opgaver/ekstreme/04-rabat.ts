// Opgave: anvend flere rabatter efter hinanden.
// pris 100 med rabatter [10, 20] betyder først 10% rabat og derefter 20%.
// Rund kun den endelige pris ned med Math.floor.
// Brug reduce.

export function flereRabatter(pris: number, rabatter: number[]): number {
    return Math.floor(rabatter.reduce((acc, rabat) => acc * (1 - rabat / 100), pris));
}
