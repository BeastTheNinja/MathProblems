// Opgave: giv spilleren et tilfældigt bonuspoint fra 10 til 50.
// Læg derefter bonuspointet sammen med alle pointene med reduce.

export function samletScore(point: number[]): number {
    // Brug Math.random, Math.floor og reduce.
    return point.reduce((acc, curr) => acc + curr, 0) + Math.floor(Math.random() * 41) + 10;
}
