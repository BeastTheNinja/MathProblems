// Opgave: beregn hvor mange kasser der skal bruges til flere varetyper.
// Hver varetype har et antal og en kassestørrelse.
// Returner summen af Math.ceil(antal / kassestoerrelse) for alle varetyper.
// Brug map og reduce.

type Varetype = { antal: number; kassestoerrelse: number };

export function samletAntalKasser(varer: Varetype[]): number {
    return varer
        .map(vare => Math.ceil(vare.antal / vare.kassestoerrelse))
        .reduce((acc, curr) => acc + curr, 0);
}
