// Opgave: beregn en slutscore.
// Hver score skal først rundes ned til nærmeste 10-tal.
// Giv derefter en bonus på 50, hvis gennemsnittet af de oprindelige scores er mindst 80.
// Brug reduce, map, Math.floor og Math.round.

export function slutScore(scores: number[]): number {
    const afrundedeScores = scores.map(score => Math.floor(score / 10) * 10);
    const gennemsnit = scores.reduce((acc, curr) => acc + curr, 0) / scores.length;
    const bonus = gennemsnit >= 80 ? 50 : 0;
    return afrundedeScores.reduce((acc, curr) => acc + curr, 0) + bonus;
}
