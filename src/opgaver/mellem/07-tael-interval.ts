// Opgave: tæl hvor mange tal der ligger mellem minimum og maksimum inklusive.
// Eksempel: [1, 4, 6, 10] mellem 4 og 6 giver 2.
// Brug filter og arrayets length.

export function taelIInterval(tal: number[], minimum: number, maksimum: number): number {
    const talIMellem = tal.filter(t => t >= minimum && t <= maksimum);
    return talIMellem.length;
}
