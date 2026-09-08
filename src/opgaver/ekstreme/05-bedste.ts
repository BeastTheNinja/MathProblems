// Opgave: find den bedste score efter afrunding.
// Rund hver score ned til nærmeste 10-tal og returner den største afrundede score.
// Brug map og Math.max.

export function bedsteAfrundedeScore(scores: number[]): number {
    const afrundedeScores = scores.map(score => Math.floor(score / 10) * 10);
    return Math.max(...afrundedeScores);
}
