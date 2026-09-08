// Opgave: analyser scores og returner et objekt med:
// - minimum: den laveste score
// - maksimum: den højeste score
// - gennemsnit: gennemsnittet afrundet med Math.round
// Brug Math.min, Math.max og reduce.

type Analyse = { minimum: number; maksimum: number; gennemsnit: number };

export function analyserScores(scores: number[]): Analyse {
    const minimum = Math.min(...scores);
    const maksimum = Math.max(...scores);
    const sum = scores.reduce((acc, curr) => acc + curr, 0);
    const gennemsnit = Math.round(sum / scores.length);
    return { minimum, maksimum, gennemsnit };
}
