// Opgave: gang hvert tal med 2 og læg derefter alle resultater sammen.
// Eksempel: [1, 2, 3] bliver [2, 4, 6] og giver 12.
// Brug map og reduce.

export function dobbeltSum(tal: number[]): number {
    const dobbeltTal = tal.map(num => num * 2);
    return dobbeltTal.reduce((acc, curr) => acc + curr, 0);
}
