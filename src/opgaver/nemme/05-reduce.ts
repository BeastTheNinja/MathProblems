// Opgave: brug reduce til at lægge alle tal i arrayet sammen.
// Eksempel: [2, 3, 5] skal give 10.


// reduce() tager en callback funktion som første argument, og et initialt værdi som andet argument.

export function laegSammen(tal: number[]): number {
    // Skriv din løsning her.
    return tal.reduce((acc, curr) => acc + curr, 0);
}
