// Opgave: find det mindste og største tal i arrayet.
// Returner dem som et objekt: { mindste: ..., største: ... }.
// Eksempel: [8, 3, 12] skal give { mindste: 3, største: 12 }.
// Nye værktøjer: Math.min og Math.max.

type Resultat = { mindste: number; største: number };

export function yderpunkter(tal: number[]): Resultat {
    void tal;
    return { mindste: 0, største: 0 };
}
