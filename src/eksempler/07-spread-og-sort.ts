// NYT: spread og sort.
//
// Spread (...) laver en kopi af arrayets elementer.
// Det er vigtigt, fordi sort ændrer det array, den arbejder på.

const scores = [40, 90, 70];
const kopi = [...scores];

kopi.sort((første, anden) => {
    // anden - første sorterer fra størst til mindst.
    return anden - første;
});

// kopi er [90, 70, 40].
// scores er stadig [40, 90, 70].

export { scores, kopi };
