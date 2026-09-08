// Opgave: find gennemsnittet af de positive scores.
// Ignorér 0 og negative scores. Hvis der ikke er positive scores, returner 0.
// Brug filter, reduce og Math.round.

export function gennemsnitAfPositiveScores(scores: number[]): number {
    const positiveScores = scores.filter(score => score > 0);
    if (positiveScores.length === 0) {
        return 0;
    }
    const sum = positiveScores.reduce((acc, curr) => acc + curr, 0);
    return Math.round(sum / positiveScores.length);
}
