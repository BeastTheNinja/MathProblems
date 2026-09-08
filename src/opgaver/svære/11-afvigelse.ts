// Opgave: find den største afstand fra et mål.
// For hvert tal skal du finde Math.abs(tal - mål), og returnere den største afstand.
// Eksempel: [8, 13, 17] med mål 10 giver 7.
// Kombinér map, Math.abs og Math.max.

export function størsteAfvigelse(tal: number[], mål: number): number {
    const afstande = tal.map(t => Math.abs(t - mål));
    return Math.max(...afstande);
}
