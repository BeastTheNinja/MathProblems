// Opgave: rund hver score ned til nærmeste 10-tal og læg dem sammen.
// Eksempel: [27, 44] bliver [20, 40] og giver 60.

export function samletHighscore(scores: number[]): number {
    // Brug map, Math.floor og reduce.
    return scores.map(score => Math.floor(score / 10) * 10).reduce((acc, curr) => acc + curr, 0);
}
