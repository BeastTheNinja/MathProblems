// Opgave: lav et tilfældigt helt tal fra 1 til 6, som med en terning.
// Tip: Math.random() giver et tal fra 0 (inkl.) til 1 (ekskl.).

// Math.floor() runder til nærmeste heltal hvor man også bruger Math.random() til at få et tal mellem 0 og 5, som man så kan lægge 1 til
export function kastTerning(): number {
    // Skriv din løsning her.
    return Math.floor(Math.random() * 6) + 1;
}
