// REDUCE - lav mange tal om til ét resultat
//
// reduce går gennem arrayet ét element ad gangen.
// callbackens første værdi er det samlede resultat indtil videre.
// callbackens anden værdi er det aktuelle element.
// Det sidste argument er startværdien.

export function eksempelSum(tal: number[]): number {
    return tal.reduce((samlet, aktueltTal) => {
        return samlet + aktueltTal;
    }, 0);
}

// [2, 3, 5] bliver behandlet sådan:
// start: samlet = 0
// 0 + 2 = 2
// 2 + 3 = 5
// 5 + 5 = 10
//
// Ved multiplikation skal startværdien være 1:
// [2, 3, 4].reduce((samlet, tal) => samlet * tal, 1)
// 1 * 2 * 3 * 4 = 24
