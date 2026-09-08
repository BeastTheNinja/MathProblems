// SVÆRT EKSEMPEL: beregn en slutscore med bonus.
//
// Input: [80, 90]
// 1. Rund hver score ned til nærmeste 10-tal.
// 2. Læg de afrundede scores sammen.
// 3. Find gennemsnittet af de oprindelige scores.
// 4. Giv 50 bonus, hvis gennemsnittet er mindst 80.

export function eksempelSlutScore(scores: number[]): number {
    const afrundedeScores = scores.map((score) => {
        // 87 / 10 = 8.7
        // floor(8.7) = 8
        // 8 * 10 = 80
        return Math.floor(score / 10) * 10;
    });

    const sum = scores.reduce((samlet, score) => samlet + score, 0);
    const gennemsnit = sum / scores.length;
    const bonus = gennemsnit >= 80 ? 50 : 0;

    const afrundetSum = afrundedeScores.reduce(
        (samlet, score) => samlet + score,
        0,
    );

    return afrundetSum + bonus;
}

// eksempelSlutScore([80, 90])
// afrundedeScores = [80, 90]
// gennemsnit = 85, så bonus = 50
// resultat = 80 + 90 + 50 = 220
