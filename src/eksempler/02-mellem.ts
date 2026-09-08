// MELLEM EKSEMPEL: fordobl tal og læg dem sammen.
//
// Inputtet [1, 2, 3] skal blive til 12.
// Først bruger vi map til at lave et nyt array: [2, 4, 6].
// Derefter bruger vi reduce til at samle arrayet til ét tal.

export function eksempelDobbeltSum(tal: number[]): number {
    const dobbeltTal = tal.map((aktueltTal) => {
        // map besøger hvert tal ét ad gangen.
        return aktueltTal * 2;
    });

    const sum = dobbeltTal.reduce((samlet, aktueltTal) => {
        // samlet er summen indtil videre.
        // aktueltTal er det næste tal, vi lægger til.
        return samlet + aktueltTal;
    }, 0); // 0 er startværdien.

    return sum;
}

// Eksempel:
// eksempelDobbeltSum([1, 2, 3])
// map giver [2, 4, 6]
// reduce giver 12
