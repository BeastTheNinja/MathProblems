// MATH.CEIL - rund op
//
// Math.ceil finder det mindste heltal, som er større end eller lig med tallet.
//
// Math.ceil(4.1) bliver 5.
// Math.ceil(4.9) bliver 5.
// Math.ceil(4) bliver 4.
//
// Det er nyttigt, når der skal være plads til alt.
// 13 ting med 5 ting i hver pakke kræver 3 pakker.

export function eksempelCeil(antal: number, antalPrPakke: number): number {
    const pakkerSomDecimaltal = antal / antalPrPakke; // 2.6
    return Math.ceil(pakkerSomDecimaltal); // 3
}

// Husk formen:
// Math.ceil(antal / antalPrPakke)
//
// Vi runder op, fordi 2.6 pakker ikke er nok.
