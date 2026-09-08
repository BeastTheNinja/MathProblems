// MATH.FLOOR - rund ned
//
// Math.floor fjerner ikke bare decimaler tilfældigt.
// Den finder det største heltal, som stadig er mindre end eller lig med tallet.
//
// Math.floor(4.9) bliver 4.
// Math.floor(4.1) bliver 4.
// Math.floor(4) bliver 4.
// Math.floor(-4.1) bliver -5, fordi -5 ligger nedad fra -4.1.

const tal = 47;
const delt = tal / 10; // 4.7
const ned = Math.floor(delt); // 4
const tilbage = ned * 10; // 40

export function eksempelFloor(tal: number): number {
    // Del med 10 for at gøre tiere til decimaler.
    // Rund ned.
    // Gang med 10 igen for at komme tilbage til tiere.
    return Math.floor(tal / 10) * 10;
}

// Husk formen:
// Math.floor(tal)
//
// Brug formen / 10 * 10, når tallet skal ned til nærmeste 10-tal.
export { delt, ned, tilbage };
