import { useState } from "react";

type Level = "Alle" | "Nemme" | "Svaere";

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
        <div className="progress">10 øvelser · skriv kode · test dig selv</div>
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
          {(["Alle", "Nemme", "Svaere"] as Level[]).map((option) => (
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
                <span className="number">{task.id} / 10</span>
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
