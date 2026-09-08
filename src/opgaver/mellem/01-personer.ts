// Opgave: fordel personer i hold.
// Hvis der er 17 personer og 4 personer pr. hold, skal resultatet være 5 hold.
// Brug Math.ceil.

export function antalHold(personer: number, personerPrHold: number): number {
    return Math.ceil(personer / personerPrHold);
}
