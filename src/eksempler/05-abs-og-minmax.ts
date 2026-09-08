// NYT: Math.abs, Math.min og Math.max.
//
// Math.abs gør et negativt tal positivt:
// Math.abs(-7) bliver 7.
// Det er nyttigt, når vi vil måle afstand.
const afstand = Math.abs(10 - 16); // 6

// Math.min finder det mindste tal.
const mindste = Math.min(8, 3, 12); // 3

// Math.max finder det største tal.
const største = Math.max(8, 3, 12); // 12

export { afstand, mindste, største };

// Med et array skal man sprede arrayet ud:
// Math.min(...[8, 3, 12]) giver 3.
