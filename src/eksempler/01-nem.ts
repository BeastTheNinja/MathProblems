// NEMT EKSEMPEL: rund ned til nærmeste 10-tal.
//
// Målet er at gøre 47 til 40.
// Vi deler først med 10, så 47 bliver til 4.7.
// Math.floor(4.7) bliver 4.
// Til sidst ganger vi med 10 igen: 4 * 10 = 40.

export function eksempelNaermesteTiNed(tal: number): number {
    const divideretMedTi = tal / 10;
    const heltal = Math.floor(divideretMedTi);
    const resultat = heltal * 10;

    return resultat;
}

// Det samme skrevet kortere:
// return Math.floor(tal / 10) * 10;
