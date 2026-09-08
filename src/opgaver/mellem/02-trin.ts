// Opgave: rund et tal ned til nærmeste 10-tal.
// Eksempel: 47 skal blive til 40, og 99 skal blive til 90.
// Brug Math.floor.

export function naermesteTiNed(tal: number): number {
    return Math.floor(tal / 10) * 10;
}
