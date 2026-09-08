// Opgave: kast en terning mange gange og find gennemsnittet.
// Kast antalKast gange med Math.random, læg kastene sammen med reduce,
// og rund gennemsnittet med Math.round.

export function gennemsnitAfTerninger(antalKast: number): number {
    const kast = Array.from({ length: antalKast }, () => Math.floor(Math.random() * 6) + 1);
    const sum = kast.reduce((acc, curr) => acc + curr, 0);
    return Math.round(sum / antalKast);
}
