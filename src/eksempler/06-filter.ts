// NYT: filter.
// filter laver et nyt array med de elementer, der består en regel.

const tal = [-2, 5, 0, 3];

const positiveTal = tal.filter((aktueltTal) => {
    // Kun tal større end 0 bliver gemt.
    return aktueltTal > 0;
});

// positiveTal er [5, 3].
// Derefter kan reduce lægge dem sammen til 8.
const sum = positiveTal.reduce((samlet, aktueltTal) => {
    return samlet + aktueltTal;
}, 0);

export { positiveTal, sum };
