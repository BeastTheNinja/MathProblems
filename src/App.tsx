import { useState } from "react";

type Level = "Alle" | "Nemme" | "Mellem" | "Svaere" | "Ekstreme";

type Task = {
  id: string;
  title: string;
  level: Exclude<Level, "Alle">;
  functionName: string;
  description: string;
  hint: string;
};

const tasks: Task[] = [
  {
    id: "01",
    title: "Rund ned",
    level: "Nemme",
    functionName: "Math.floor",
    description: "Fjern decimalerne ved altid at gå ned til nærmeste hele tal.",
    hint: "Start i opgaver/nemme/01-floor.ts",
  },
  {
    id: "02",
    title: "Rund op",
    level: "Nemme",
    functionName: "Math.ceil",
    description:
      "Rund et tal op til næste hele tal, også når decimalen kun er lille.",
    hint: "Start i opgaver/nemme/02-ceil.ts",
  },
  {
    id: "03",
    title: "Nærmeste tal",
    level: "Nemme",
    functionName: "Math.round",
    description:
      "Rund op eller ned alt efter om decimalen er under eller over 0.5.",
    hint: "Start i opgaver/nemme/03-round.ts",
  },
  {
    id: "04",
    title: "Kast en terning",
    level: "Nemme",
    functionName: "Math.random",
    description: "Lav et tilfældigt helt tal fra 1 til 6, som et terningekast.",
    hint: "Start i opgaver/nemme/04-random.ts",
  },
  {
    id: "05",
    title: "Læg sammen",
    level: "Nemme",
    functionName: "reduce",
    description: "Læg alle tallene i et array sammen til én samlet værdi.",
    hint: "Start i opgaver/nemme/05-reduce.ts",
  },
  {
    id: "06",
    title: "Rabat på en vare",
    level: "Svaere",
    functionName: "floor + procent",
    description: "Beregn en rabat og rund den nye pris ned til hele kroner.",
    hint: "Kombinér procentregning med Math.floor.",
  },
  {
    id: "07",
    title: "Gennemsnit",
    level: "Svaere",
    functionName: "reduce + ceil",
    description: "Find gennemsnittet af tal og rund resultatet op.",
    hint: "Brug reduce til summen og Math.ceil til sidst.",
  },
  {
    id: "08",
    title: "Bonuspoint",
    level: "Svaere",
    functionName: "random + reduce",
    description:
      "Giv en spiller tilfældige bonuspoint og læg dem til en score.",
    hint: "Lav bonuspoint fra 10 til 50.",
  },
  {
    id: "09",
    title: "Kasser på lageret",
    level: "Svaere",
    functionName: "ceil + division",
    description: "Regn ud hvor mange kasser der skal bruges til et antal ting.",
    hint: "En halvfuld kasse tæller stadig som en hel kasse.",
  },
  {
    id: "10",
    title: "Highscore",
    level: "Svaere",
    functionName: "map + floor + reduce",
    description: "Rund scores ned til nærmeste 10-tal og læg dem sammen.",
    hint: "Eksempel: 27 bliver til 20.",
  },
  {
    id: "11",
    title: "Fordel hold",
    level: "Mellem",
    functionName: "ceil",
    description: "Find hvor mange hold der skal bruges, når alle skal have en plads.",
    hint: "Start i opgaver/mellem/01-personer.ts",
  },
  {
    id: "12",
    title: "Nærmeste 10-tal",
    level: "Mellem",
    functionName: "floor",
    description: "Rund et tal ned til nærmeste 10-tal.",
    hint: "Start i opgaver/mellem/02-trin.ts",
  },
  {
    id: "13",
    title: "Afrundet gennemsnit",
    level: "Mellem",
    functionName: "reduce + round",
    description: "Find gennemsnittet og rund det til nærmeste hele tal.",
    hint: "Start i opgaver/mellem/03-gennemsnit.ts",
  },
  {
    id: "14",
    title: "Tilfældigt interval",
    level: "Mellem",
    functionName: "random + floor",
    description: "Lav et tilfældigt helt tal, hvor både minimum og maksimum må bruges.",
    hint: "Start i opgaver/mellem/04-tilfaeldigt-interval.ts",
  },
  {
    id: "15",
    title: "Dobbelt sum",
    level: "Mellem",
    functionName: "map + reduce",
    description: "Fordobl alle tal og læg derefter resultaterne sammen.",
    hint: "Start i opgaver/mellem/05-sum-af-gange.ts",
  },
  {
    id: "16",
    title: "Slutscore",
    level: "Ekstreme",
    functionName: "map + reduce + round",
    description: "Rund scores ned og giv bonus, hvis gennemsnittet er højt nok.",
    hint: "Start i opgaver/ekstreme/01-point.ts",
  },
  {
    id: "17",
    title: "Flere varekasser",
    level: "Ekstreme",
    functionName: "map + ceil + reduce",
    description: "Beregn samlet antal kasser for flere forskellige varetyper.",
    hint: "Start i opgaver/ekstreme/02-kasser.ts",
  },
  {
    id: "18",
    title: "Terningegennemsnit",
    level: "Ekstreme",
    functionName: "random + reduce + round",
    description: "Kast mange terninger, find summen, og rund gennemsnittet.",
    hint: "Start i opgaver/ekstreme/03-terning.ts",
  },
  {
    id: "19",
    title: "Flere rabatter",
    level: "Ekstreme",
    functionName: "reduce + floor",
    description: "Anvend flere rabatter efter hinanden og rund kun til sidst.",
    hint: "Start i opgaver/ekstreme/04-rabat.ts",
  },
  {
    id: "20",
    title: "Bedste score",
    level: "Ekstreme",
    functionName: "map + floor + max",
    description: "Find den største score efter afrunding til nærmeste 10-tal.",
    hint: "Start i opgaver/ekstreme/05-bedste.ts",
  },
  {
    id: "21",
    title: "Afstand mellem tal",
    level: "Nemme",
    functionName: "Math.abs",
    description: "Find afstanden mellem to tal, uanset hvilket tal der kommer først.",
    hint: "Start i opgaver/nemme/06-afstand.ts",
  },
  {
    id: "22",
    title: "Yderpunkter",
    level: "Nemme",
    functionName: "Math.min + Math.max",
    description: "Find det mindste og største tal i et array.",
    hint: "Start i opgaver/nemme/07-yderpunkter.ts",
  },
  {
    id: "23",
    title: "Sum af positive tal",
    level: "Mellem",
    functionName: "filter + reduce",
    description: "Filtrér negative tal væk og læg resten sammen.",
    hint: "Start i opgaver/mellem/06-positive-sum.ts",
  },
  {
    id: "24",
    title: "Tal i interval",
    level: "Mellem",
    functionName: "filter + length",
    description: "Tæl hvor mange tal der ligger mellem to grænser.",
    hint: "Start i opgaver/mellem/07-tael-interval.ts",
  },
  {
    id: "25",
    title: "Største afvigelse",
    level: "Svaere",
    functionName: "map + abs + max",
    description: "Find den største afstand fra et bestemt mål.",
    hint: "Start i opgaver/svære/11-afvigelse.ts",
  },
  {
    id: "26",
    title: "Positive scores",
    level: "Svaere",
    functionName: "filter + reduce + round",
    description: "Find gennemsnittet af scores over nul og rund resultatet.",
    hint: "Start i opgaver/svære/12-bedste-positive.ts",
  },
  {
    id: "27",
    title: "Score-rangering",
    level: "Ekstreme",
    functionName: "spread + sort",
    description: "Sortér scores fra størst til mindst uden at ændre input-arrayet.",
    hint: "Start i opgaver/ekstreme/06-rangering.ts",
  },
  {
    id: "28",
    title: "Score-analyse",
    level: "Ekstreme",
    functionName: "min + max + reduce",
    description: "Returnér minimum, maksimum og afrundet gennemsnit samlet i et objekt.",
    hint: "Start i opgaver/ekstreme/07-analyse.ts",
  },
  {
    id: "29",
    title: "Ned til 10-tal",
    level: "Nemme",
    functionName: "Math.floor",
    description: "Rund et tal ned til nærmeste 10-tal.",
    hint: "Start i opgaver/nemme/08-floor-ti.ts",
  },
  {
    id: "30",
    title: "Antal pakker",
    level: "Nemme",
    functionName: "Math.ceil",
    description: "Find hvor mange hele pakker der skal bruges.",
    hint: "Start i opgaver/nemme/09-ceil-pakker.ts",
  },
  {
    id: "31",
    title: "Rund til mål",
    level: "Nemme",
    functionName: "Math.round",
    description: "Rund et decimaltal til nærmeste hele tal.",
    hint: "Start i opgaver/nemme/10-round-maal.ts",
  },
  {
    id: "32",
    title: "Gang alle tal",
    level: "Mellem",
    functionName: "reduce",
    description: "Brug reduce til at gange alle tal i et array.",
    hint: "Start i opgaver/mellem/08-reduce-produkt.ts",
  },
  {
    id: "33",
    title: "Tilfældigt 10 til 20",
    level: "Mellem",
    functionName: "random + floor",
    description: "Lav et tilfældigt helt tal i et fast interval.",
    hint: "Start i opgaver/mellem/09-random-interval.ts",
  },
  {
    id: "34",
    title: "Afrundet gennemsnit",
    level: "Mellem",
    functionName: "reduce + round",
    description: "Beregn et gennemsnit og rund det til nærmeste heltal.",
    hint: "Start i opgaver/mellem/10-round-gennemsnit.ts",
  },
  {
    id: "35",
    title: "Hele priser",
    level: "Svaere",
    functionName: "map + floor + reduce",
    description: "Rund hver pris ned og læg de hele priser sammen.",
    hint: "Start i opgaver/svære/13-floor-priser.ts",
  },
  {
    id: "36",
    title: "Hele minutter",
    level: "Svaere",
    functionName: "map + ceil + reduce",
    description: "Rund hver aktivitet op til hele minutter før summen.",
    hint: "Start i opgaver/svære/14-ceil-tid.ts",
  },
  {
    id: "37",
    title: "Flere terninger",
    level: "Svaere",
    functionName: "random + reduce",
    description: "Kast flere terninger og læg alle øjne sammen.",
    hint: "Start i opgaver/svære/15-random-terninger.ts",
  },
  {
    id: "38",
    title: "Rundingsrapport",
    level: "Ekstreme",
    functionName: "floor + ceil + round + reduce",
    description: "Lav tre forskellige summer med tre forskellige afrundinger.",
    hint: "Start i opgaver/ekstreme/08-rundingsrapport.ts",
  },
  {
    id: "39",
    title: "Terningegennemsnit",
    level: "Ekstreme",
    functionName: "random + reduce + round",
    description: "Kast mange terninger og rund gennemsnittet.",
    hint: "Start i opgaver/ekstreme/09-random-gennemsnit.ts",
  },
  {
    id: "40",
    title: "Rabatter med reduce",
    level: "Ekstreme",
    functionName: "reduce + floor",
    description: "Anvend flere rabatter efter hinanden og rund kun til sidst.",
    hint: "Start i opgaver/ekstreme/10-reduce-rabat.ts",
  },
];

function App() {
  const [level, setLevel] = useState<Level>("Alle");
  const visibleTasks =
    level === "Alle" ? tasks : tasks.filter((task) => task.level === level);

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="logo">
          math<span>/</span>lab
        </div>
        <div className="progress">40 øvelser · skriv kode · test dig selv</div>
      </header>
      <main className="content">
        <div className="eyebrow">JavaScript · matematiske funktioner</div>
        <h1>Lær tallene at kende ved at lege med dem.</h1>
        <p className="intro">
          Små opgaver først. Sværere kombinationer bagefter. Åbn filerne i
          `src/opgaver`, skriv din løsning, og brug kontrolkortene i
          `src/tests`.
        </p>
        <nav className="toolbar" aria-label="Filtrer opgaver">
          {(["Alle", "Nemme", "Mellem", "Svaere", "Ekstreme"] as Level[]).map((option) => (
            <button
              className={`filter ${level === option ? "active" : ""}`}
              key={option}
              onClick={() => setLevel(option)}>
              {option}
            </button>
          ))}
        </nav>
        <section className="task-grid" aria-label="Opgaver">
          {visibleTasks.map((task) => (
            <article className="task-card" key={task.id}>
              <div className="card-top">
                <span className="number">{task.id} / 40</span>
                <span
                  className={`level ${task.level === "Svaere" ? "hard" : ""}`}>
                  {task.level}
                </span>
              </div>
              <h2>{task.title}</h2>
              <p>{task.description}</p>
              <p className="hint">
                {task.functionName} · {task.hint}
              </p>
            </article>
          ))}
        </section>
        <p className="footer-note">
          Tip: forklar højt hvad inputtet er, hvad funktionen gør, og hvad
          outputtet skal være.
        </p>
      </main>
    </div>
  );
}

export default App;
