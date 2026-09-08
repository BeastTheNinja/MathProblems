// MATH.ROUND - rund til det nærmeste heltal
//
// Math.round kigger på decimaldelen.
// Under .5 rundes ned, og .5 eller mere rundes op.
//
// Math.round(3.2) bliver 3.
// Math.round(3.5) bliver 4.
// Math.round(3.8) bliver 4.

export function eksempelRound(tal: number): number {
    const resultat = Math.round(tal);
    return resultat;
}

// Når du finder et gennemsnit:
// 1. Læg tallene sammen.
// 2. Divider med antal tal.
// 3. Brug Math.round på gennemsnittet.
//
// Math.round((10 + 11 + 12) / 3) giver 11.
