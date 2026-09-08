// MATH.RANDOM - tilfældige tal
//
// Math.random() giver et decimaltal fra 0 inklusive til 1 eksklusive.
// Det kan for eksempel være 0.12 eller 0.89, men aldrig præcis 1.
//
// Til heltal fra 1 til 6 bruger vi:
// Math.floor(Math.random() * 6) + 1
//
// Hvis random giver 0.2:
// 0.2 * 6 = 1.2
// floor(1.2) = 1
// 1 + 1 = 2

export function eksempelTerning(): number {
    return Math.floor(Math.random() * 6) + 1;
}

// Generel form fra minimum til maksimum inklusive:
// const størrelse = maksimum - minimum + 1;
// return Math.floor(Math.random() * størrelse) + minimum;
