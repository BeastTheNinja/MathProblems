// Opgave: analyser scores og returner et objekt med:
// - minimum: den laveste score
// - maksimum: den højeste score
// - gennemsnit: gennemsnittet afrundet med Math.round
// Brug Math.min, Math.max og reduce.

type Analyse = { minimum: number; maksimum: number; gennemsnit: number };

export function analyserScores(scores: number[]): Analyse {
    void scores;
    return { minimum: 0, maksimum: 0, gennemsnit: 0 };
}
