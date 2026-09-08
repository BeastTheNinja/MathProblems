// Opgave: lav en rapport med tre resultater for et array af tal:
// - ned: summen af alle tal rundet ned med Math.floor
// - op: summen af alle tal rundet op med Math.ceil
// - naermeste: summen af alle tal rundet med Math.round
// Brug map og reduce.

type Rapport = { ned: number; op: number; naermeste: number };

export function rundingsrapport(tal: number[]): Rapport {
    void tal;
    return { ned: 0, op: 0, naermeste: 0 };
}
