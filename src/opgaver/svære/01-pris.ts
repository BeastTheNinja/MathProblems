// Opgave: en vare koster pris kroner og har rabat procent.
// Beregn den nye pris, rund ned til hele kroner.

export function prisEfterRabat(pris: number, rabat: number): number {
    // Kombinér procentregning med Math.floor.

    return Math.floor(pris * (1 - rabat / 100));

}
