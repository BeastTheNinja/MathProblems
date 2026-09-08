// Opgave: find afstanden mellem to tal.
// Afstanden skal altid være positiv.
// Eksempel: afstand(4, 10) og afstand(10, 4) skal begge give 6.
// Nyt værktøj: Math.abs.

export function afstand(førsteTal: number, andetTal: number): number {
    
    return Math.abs(førsteTal - andetTal);
}
