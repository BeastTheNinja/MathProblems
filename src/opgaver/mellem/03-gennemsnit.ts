// Opgave: find gennemsnittet af tallene og rund til nærmeste heltal.
// Brug reduce og Math.round.

export function gennemsnit(tal: number[]): number {
    const sum = tal.reduce((acc, curr) => acc + curr, 0);
    return Math.round(sum / tal.length);
}
