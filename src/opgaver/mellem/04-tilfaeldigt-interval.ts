// Opgave: lav et tilfældigt helt tal mellem minimum og maksimum, begge inklusive.
// Eksempel: tilfældigtTal(3, 7) må kun give 3, 4, 5, 6 eller 7.
// Brug Math.random, Math.floor og intervallets størrelse.

export function tilfaeldigtTal(minimum: number, maksimum: number): number {
    const intervalStørrelse = maksimum - minimum + 1;
    return Math.floor(Math.random() * intervalStørrelse) + minimum;
}
