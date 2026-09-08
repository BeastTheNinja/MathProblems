// Opgave: lav et tilfældigt helt tal fra 1 til 6, som med en terning.
// Tip: Math.random() giver et tal fra 0 (inkl.) til 1 (ekskl.).

// Math.random() * 6 giver et tal fra 0 til under 6.
// Math.floor() laver det til 0, 1, 2, 3, 4 eller 5.
// Til sidst lægger vi 1 til, så resultatet bliver 1 til 6.

export function kastTerning(): number {
    // Skriv din løsning her.
    return Math.floor(Math.random() * 6) + 1;
}
