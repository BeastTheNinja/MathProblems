// Opgave: vælg kun de positive tal og læg dem sammen.
// Eksempel: [-2, 5, 0, 3] skal give 8.
// Nyt værktøj: filter.

export function sumPositive(tal: number[]): number {
    const positiveTal = tal.filter(t => t > 0);
    return positiveTal.reduce((acc, curr) => acc + curr, 0);
}
