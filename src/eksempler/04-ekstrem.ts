// EKSTREMT EKSEMPEL: flere rabatter efter hinanden.
//
// Input: pris 100 og rabatter [10, 20].
// Det betyder ikke 30% én gang. Rabatterne sker i rækkefølge:
// 1. 100 med 10% rabat bliver 90.
// 2. 90 med 20% rabat bliver 72.
// 3. Først nu runder vi ned med Math.floor.

export function eksempelFlereRabatter(
    pris: number,
    rabatter: number[],
): number {
    const prisEfterRabatter = rabatter.reduce((aktuelPris, rabat) => {
        // En rabat på 10% betyder, at vi beholder 90% = 0.90.
        const procentDerBeholdes = 1 - rabat / 100;

        // reduce sender resultatet videre som aktuelPris
        // til næste rabat i arrayet.
        return aktuelPris * procentDerBeholdes;
    }, pris); // Den oprindelige pris er startværdien.

    // Vi venter med at runde, indtil alle rabatter er brugt.
    return Math.floor(prisEfterRabatter);
}

// eksempelFlereRabatter(100, [10, 20])
// første trin: 100 * 0.90 = 90
// andet trin: 90 * 0.80 = 72
// resultat: 72
