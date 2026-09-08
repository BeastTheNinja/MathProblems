// NYT: saml flere resultater i et objekt.
// Det gør det muligt at returnere minimum, maksimum og gennemsnit på én gang.

export function eksempelAnalyse(scores: number[]) {
    const sum = scores.reduce((samlet, score) => samlet + score, 0);
    const gennemsnit = Math.round(sum / scores.length);
    const minimum = Math.min(...scores);
    const maksimum = Math.max(...scores);

    return {
        minimum,
        maksimum,
        gennemsnit,
    };
}

// eksempelAnalyse([40, 70, 90]) giver:
// { minimum: 40, maksimum: 90, gennemsnit: 67 }
