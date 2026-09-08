// Opgave: brug reduce til at lægge alle tal i arrayet sammen.
// Eksempel: [2, 3, 5] skal give 10.


// acc er det samlede resultat.
// curr er det aktuelle tal i arrayet.
// 0 er startværdien.

export function laegSammen(tal: number[]): number {
    // Skriv din løsning her.
    return tal.reduce((acc, curr) => acc + curr, 0);
}
