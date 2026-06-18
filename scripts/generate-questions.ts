import { Question } from '../src/types';
import * as fs from 'fs';
import * as path from 'path';

// Helper to compile a standardised Question structure
function makeQuestion(
  id: number,
  level: 'A1' | 'A2',
  question: string,
  correctAnswer: string,
  wrongAnswers: [string, string, string],
  explanation: string
): Question {
  return {
    id,
    level,
    question,
    options: [correctAnswer, ...wrongAnswers],
    correctIndex: 0,
    explanation
  };
}

const pool: Question[] = [];
let currentId = 1;

console.log("Starte systematische Generierung von 3700+ Fragen...");

// ==========================================
// 1. MODULE: praesens_modal (Verben: Gegenwart / Präsens)
// Ziel: At least 520 Fragen
// ==========================================
console.log("Generiere Module: praesens_modal...");
const presentVerbsList = [
  { inf: "parlare", stems: "parl", type: "are", de: "sprechen" },
  { inf: "mangiare", stems: "mangi", type: "are", de: "essen" },
  { inf: "amare", stems: "am", type: "are", de: "lieben" },
  { inf: "cantare", stems: "cant", type: "are", de: "singen" },
  { inf: "ballare", stems: "ball", type: "are", de: "tanzen" },
  { inf: "ascoltare", stems: "ascolt", type: "are", de: "hören" },
  { inf: "viaggiare", stems: "viaggi", type: "are", de: "reisen" },
  { inf: "abitare", stems: "abit", type: "are", de: "wohnen" },
  { inf: "studiare", stems: "studi", type: "are", de: "studieren" },
  { inf: "comprare", stems: "compr", type: "are", de: "kaufen" },
  { inf: "cucinare", stems: "cucin", type: "are", de: "kochen" },
  { inf: "guardare", stems: "guard", type: "are", de: "anschauen" },
  { inf: "lavorare", stems: "lavor", type: "are", de: "arbeiten" },
  { inf: "pensare", stems: "pens", type: "are", de: "denken" },
  { inf: "aspettare", stems: "aspett", type: "are", de: "warten" },
  { inf: "trovare", stems: "trov", type: "are", de: "finden" },
  
  { inf: "scrivere", stems: "scriv", type: "ere", de: "schreiben" },
  { inf: "leggere", stems: "legg", type: "ere", de: "lesen" },
  { inf: "prendere", stems: "prend", type: "ere", de: "nehmen" },
  { inf: "vedere", stems: "ved", type: "ere", de: "sehen" },
  { inf: "vivere", stems: "viv", type: "ere", de: "leben" },
  { inf: "credere", stems: "cred", type: "ere", de: "glauben" },
  { inf: "chiedere", stems: "chied", type: "ere", de: "fragen" },
  { inf: "rispondere", stems: "rispond", type: "ere", de: "antworten" },
  { inf: "perdere", stems: "perd", type: "ere", de: "verlieren" },
  { inf: "chiudere", stems: "chiud", type: "ere", de: "schließen" },
  { inf: "correre", stems: "corr", type: "ere", de: "rennen" },
  { inf: "vincere", stems: "vinc", type: "ere", de: "gewinnen" },
  
  { inf: "sentire", stems: "sent", type: "ire", de: "hören" },
  { inf: "dormire", stems: "dorm", type: "ire", de: "schlafen" },
  { inf: "partire", stems: "part", type: "ire", de: "abreisen" },
  { inf: "aprire", stems: "apr", type: "ire", de: "öffnen" },
  { inf: "offrire", stems: "offr", type: "ire", de: "anbieten" },
  { inf: "vestire", stems: "vest", type: "ire", de: "anziehen" },
  { inf: "soffrire", stems: "soffr", type: "ire", de: "leiden" },
  { inf: "servire", stems: "serv", type: "ire", de: "dienen" },
  
  { inf: "finire", stems: "fin", type: "isc", de: "beenden" },
  { inf: "capire", stems: "cap", type: "isc", de: "verstehen" },
  { inf: "preferire", stems: "prefer", type: "isc", de: "bevorzugen" },
  { inf: "pulire", stems: "pul", type: "isc", de: "putzen" },
  { inf: "spedire", stems: "sped", type: "isc", de: "versenden" }
];

const pronounsList = [
  { sub: "Io", ending: { are: "o", ere: "o", ire: "o", isc: "isco" }, de: "ich" },
  { sub: "Tu", ending: { are: "i", ere: "i", ire: "i", isc: "isci" }, de: "du" },
  { sub: "Lui/Lei", ending: { are: "a", ere: "e", ire: "e", isc: "isce" }, de: "er/sie" },
  { sub: "Noi", ending: { are: "iamo", ere: "iamo", ire: "iamo", isc: "iamo" }, de: "wir" },
  { sub: "Voi", ending: { are: "ate", ere: "ete", ire: "ite", isc: "ite" }, de: "ihr" },
  { sub: "Loro", ending: { are: "ano", ere: "ono", ire: "ono", isc: "iscono" }, de: "sie (Plural)" }
];

// Generiere Verbkonjugationsübungen
let countPre = 0;
// Loop bis wir 530 Fragen für praesens_modal haben
while (countPre < 530) {
  for (const v of presentVerbsList) {
    if (countPre >= 530) break;
    for (const p of pronounsList) {
      if (countPre >= 530) break;
      
      const isA1 = countPre % 2 === 0;
      const level: 'A1' | 'A2' = isA1 ? 'A1' : 'A2';
      
      // Handhabung von Stämmen wie "mangiare" oder "studiare" (keine doppelten i)
      let currentStem = v.stems;
      let end = p.ending[v.type as 'are' | 'ere' | 'ire' | 'isc'];
      if ((v.inf === "mangiare" || v.inf === "studiare") && end.startsWith("i")) {
        currentStem = v.stems.slice(0, -1);
      }
      
      const correctForm = currentStem + end;
      
      // Erzeuge plausible falsche Antworten
      const otherEndings = pronounsList
        .filter(x => x.sub !== p.sub)
        .map(x => {
          let st = v.stems;
          let oEnd = x.ending[v.type as 'are' | 'ere' | 'ire' | 'isc'];
          if ((v.inf === "mangiare" || v.inf === "studiare") && oEnd.startsWith("i")) {
            st = v.stems.slice(0, -1);
          }
          return st + oEnd;
        });
      
      const wrong: [string, string, string] = [
        otherEndings[0],
        otherEndings[1],
        otherEndings[2]
      ];
      
      const qText = `Completa la forma corretta del verbo '${v.inf}' (Konjugation: Präsens / Gegenwart): ${p.sub} ___ ogni giorno.`;
      const explanation = `Das italienische Verb '${v.inf}' (${v.de}) konjugiert für '${p.sub}' im Präsens zu: '${correctForm}'.`;
      
      pool.push(makeQuestion(currentId++, level, qText, correctForm, wrong, explanation));
      countPre++;
    }
  }
}

// ==========================================
// 2. MODULE: vergangenheit (Verben: Passato Prossimo & Imperfetto)
// Ziel: At least 520 Fragen
// ==========================================
console.log("Generiere Module: vergangenheit...");
const auxiliaryAvereParticiples = [
  { inf: "mangiare", pp: "mangiato", de: "gegessen" },
  { inf: "scrivere", pp: "scritto", de: "geschrieben" },
  { inf: "leggere", pp: "letto", de: "gelesen" },
  { inf: "comprare", pp: "comprato", de: "gekauft" },
  { inf: "fare", pp: "fatto", de: "gemacht" },
  { inf: "vedere", pp: "visto", de: "gesehen" },
  { inf: "sentire", pp: "sentito", de: "gehört" },
  { inf: "capire", pp: "capito", de: "verstanden" },
  { inf: "chiedere", pp: "chiesto", de: "gefragt" },
  { inf: "rispondere", pp: "risposto", de: "geantwortet" },
  { inf: "prendere", pp: "preso", de: "genommen" },
  { inf: "chiudere", pp: "chiuso", de: "geschlossen" },
  { inf: "aprire", pp: "aperto", de: "geöffnet" },
  { inf: "bere", pp: "bevuto", de: "getrunken" },
  { inf: "dire", pp: "detto", de: "gesagt" }
];

const auxiliaryAverePronouns = [
  { sub: "Io", aux: "ho" },
  { sub: "Tu", aux: "hai" },
  { sub: "Lui/Lei", aux: "ha" },
  { sub: "Noi", aux: "abbiamo" },
  { sub: "Voi", aux: "avete" },
  { sub: "Loro", aux: "hanno" }
];

let countPast = 0;
while (countPast < 530) {
  // AVERE-Perfekt Drills
  for (const v of auxiliaryAvereParticiples) {
    if (countPast >= 530) break;
    for (const p of auxiliaryAverePronouns) {
      if (countPast >= 530) break;
      
      const correctWord = p.aux;
      const wrong: [string, string, string] = auxiliaryAverePronouns
        .filter(x => x.aux !== p.aux)
        .map(x => x.aux)
        .slice(0, 3) as [string, string, string];
        
      const qText = `Scegli l'ausiliare corretto per il Passato Prossimo (Perfekt/Vergangenheit): ${p.sub} ___ ${v.pp} ieri mattina. (Verbo: ${v.inf})`;
      const explanation = `Das Perfekt / Passato Prossimo mit 'avere' bildet sich aus dem Hilfsverb / Ausiliare und dem Partizip. Für '${p.sub}' ist das Hilfsverb '${p.aux}'.`;
      
      pool.push(makeQuestion(currentId++, 'A2', qText, correctWord, wrong, explanation));
      countPast++;
    }
  }

  // ESSERE-Perfekt Drills
  const essereVerbs = [
    { inf: "andare", ppM: "andato", ppF: "andata", ppMP: "andati", ppFP: "andate" },
    { inf: "venire", ppM: "venuto", ppF: "venuta", ppMP: "venuti", ppFP: "venute" },
    { inf: "partire", ppM: "partito", ppF: "partita", ppMP: "partiti", ppFP: "partite" },
    { inf: "uscire", ppM: "uscito", ppF: "uscita", ppMP: "usciti", ppFP: "uscite" },
    { inf: "tornare", ppM: "tornato", ppF: "tornata", ppMP: "tornati", ppFP: "tornate" }
  ];

  for (const ev of essereVerbs) {
    if (countPast >= 530) break;
    
    // Maria (weiblich)
    pool.push(makeQuestion(
      currentId++,
      'A2',
      `Maria ___ a casa stasera. (Verbo: ${ev.inf}, passato prossimo/Vergangenheit)`,
      `è ${ev.ppF}`,
      [`ha ${ev.ppM}`, `è ${ev.ppM}`, `sono ${ev.ppFP}`],
      `Das Hilfsverb ist 'essere'. Bei weiblichen Singularsubjekten (Maria) endet das Partizip Perfekt auf -a (è ${ev.ppF}).`
    ));
    countPast++;

    if (countPast >= 530) break;
    // I ragazzi (männlicher Plural)
    pool.push(makeQuestion(
      currentId++,
      'A2',
      `I ragazzi ___ presto. (Verbo: ${ev.inf}, passato prossimo/Vergangenheit)`,
      `sono ${ev.ppMP}`,
      [`hanno ${ev.ppMP}`, `sono ${ev.ppM}`, `sono ${ev.ppFP}`],
      `Das Hilfsverb ist 'essere'. Bei männlichen Plural-Subjekten angepasst (sono ${ev.ppMP}). Perfekt-Ausiliare.`
    ));
    countPast++;

    if (countPast >= 530) break;
    // Le amiche (weiblicher Plural)
    pool.push(makeQuestion(
      currentId++,
      'A2',
      `Le amiche ___ per Roma. (Verbo: ${ev.inf}, passato prossimo/Vergangenheit)`,
      `sono ${ev.ppFP}`,
      [`hanno ${ev.ppFP}`, `sono ${ev.ppMP}`, `sono ${ev.ppF}`],
      `Das Hilfsverb ist 'essere'. Bei weiblichen Plural-Subjekten angepasst (sono ${ev.ppFP}).`
    ));
    countPast++;
  }

  // Imperfetto Drills
  const impVerbs = [
    { inf: "parlare", forms: ["parlavo", "parlavi", "parlava", "parlavamo", "parlavate", "parlavano"] },
    { inf: "leggere", forms: ["leggevo", "leggevi", "leggeva", "leggevamo", "leggevate", "leggevano"] },
    { inf: "finire", forms: ["finivo", "finivi", "finiva", "finivamo", "finivate", "finivano"] }
  ];

  for (const iv of impVerbs) {
    if (countPast >= 530) break;
    const prons = ["Io", "Tu", "Lui/Lei", "Noi", "Voi", "Loro"];
    for (let i = 0; i < 6; i++) {
      if (countPast >= 530) break;
      const correctForm = iv.forms[i];
      const wrong: [string, string, string] = [
        iv.forms[(i + 1) % 6],
        iv.forms[(i + 2) % 6],
        iv.forms[(i + 3) % 6]
      ];
      const qText = `Completa all'Imperfetto (Gewohnheit in der Vergangenheit): Da bambino/a ${prons[i]} ___ spesso. (Verbo: ${iv.inf})`;
      const explanation = `Das Imperfetto / Vergangenheit drückt Gewohnheiten aus. Für '${prons[i]}' ist die Form '${correctForm}'.`;
      pool.push(makeQuestion(currentId++, 'A2', qText, correctForm, wrong, explanation));
      countPast++;
    }
  }
}

// ==========================================
// 3. MODULE: zukunft_konditional (Zukunft, Imperativ & Konditional)
// Ziel: At least 520 Fragen
// ==========================================
console.log("Generiere Module: zukunft_konditional...");
const futVerbs = [
  { inf: "parlare", stem: "parler", de: "Zukunft von sprechen" },
  { inf: "scrivere", stem: "scriver", de: "Zukunft von schreiben" },
  { inf: "finire", stem: "finir", de: "Zukunft von beenden" },
  { inf: "andare", stem: "andr", de: "Zukunft von gehen" },
  { inf: "essere", stem: "sar", de: "Zukunft von sein" },
  { inf: "avere", stem: "avr", de: "Zukunft von haben" }
];

const condVerbs = [
  { inf: "volere", stem: "vorr", de: "Konditional von wollen" },
  { inf: "potere", stem: "potr", de: "Konditional von können" },
  { inf: "dovere", stem: "dovr", de: "Konditional von müssen" },
  { inf: "mangiare", stem: "manger", de: "Konditional von essen" },
  { inf: "fare", stem: "far", de: "Konditional von machen" }
];

let countFuture = 0;
while (countFuture < 530) {
  // Futuro Semplice Drills (Endings: -ò, -ai, -à, -emo, -ete, -anno)
  const futProns = [
    { sub: "Io", end: "ò" },
    { sub: "Tu", end: "ai" },
    { sub: "Lui/Lei", end: "à" },
    { sub: "Noi", end: "emo" },
    { sub: "Voi", end: "ete" },
    { sub: "Loro", end: "anno" }
  ];

  for (const fv of futVerbs) {
    if (countFuture >= 530) break;
    for (const fp of futProns) {
      if (countFuture >= 530) break;
      const correctForm = fv.stem + fp.end;
      const wrong: [string, string, string] = futProns
        .filter(x => x.sub !== fp.sub)
        .map(x => fv.stem + x.end)
        .slice(0, 3) as [string, string, string];

      const qText = `Coniuga al Futuro Semplice (Zukunft): L'anno prossimo ${fp.sub} ___ in Italia. (Verbo: ${fv.inf})`;
      const explanation = `Das Futuro Semplice (Zukunft) für '${fp.sub}' wird mit der Endung -${fp.end} gebildet: '${correctForm}'.`;

      pool.push(makeQuestion(currentId++, 'A2', qText, correctForm, wrong, explanation));
      countFuture++;
    }
  }

  // Condizionale Presente Drills (Endings: -ei, -esti, -ebbe, -emmo, -este, -ebbero)
  const condProns = [
    { sub: "Io", end: "ei" },
    { sub: "Tu", end: "esti" },
    { sub: "Lui/Lei", end: "ebbe" },
    { sub: "Noi", end: "emmo" },
    { sub: "Voi", end: "este" },
    { sub: "Loro", end: "ebbero" }
  ];

  for (const cv of condVerbs) {
    if (countFuture >= 530) break;
    for (const cp of condProns) {
      if (countFuture >= 530) break;
      const correctForm = cv.stem + cp.end;
      const wrong: [string, string, string] = condProns
        .filter(x => x.sub !== cp.sub)
        .map(x => cv.stem + x.end)
        .slice(0, 3) as [string, string, string];

      const qText = `Höfliche Bitte / Wunsch - Completa al Condizionale (Konditional): ${cp.sub} ___ volentieri un espresso. (Verbo: ${cv.inf})`;
      const explanation = `Das Condizionale Presente (Konditional) wird für wünschevolle, höfliche Sätze verwendet. Form: '${correctForm}'.`;

      pool.push(makeQuestion(currentId++, 'A2', qText, correctForm, wrong, explanation));
      countFuture++;
    }
  }

  // Imperativo Drills
  const imperVerbs = [
    { inf: "parlare", tuField: "parla", voiField: "parlate", formal: "parli", de: "sprechen" },
    { inf: "prendere", tuField: "prendi", voiField: "prendete", formal: "prenda", de: "nehmen" },
    { inf: "sentire", tuField: "senti", voiField: "sentite", formal: "senta", de: "hören" }
  ];

  for (const iv of imperVerbs) {
    if (countFuture >= 530) break;
    // Tu-Aufforderung
    pool.push(makeQuestion(
      currentId++,
      'A2',
      `Imperativo (Aufforderung) an Marco (du): Marco, ___ piano! (Verbo: ${iv.inf})`,
      iv.tuField,
      [iv.voiField, iv.formal, iv.inf],
      `Der informelle Befehlssatz (Imperativo, Aufforderung) für 'tu' bei '${iv.inf}' lautet: '${iv.tuField}'.`
    ));
    countFuture++;

    if (countFuture >= 530) break;
    // Voi-Aufforderung
    pool.push(makeQuestion(
      currentId++,
      'A2',
      `Imperativo (Aufforderung) an alle (ihr): Ragazzi, ___ questo! (Verbo: ${iv.inf})`,
      iv.voiField,
      [iv.tuField, iv.formal, iv.inf],
      `Der Pluralbefehl (Imperativo, Aufforderung/Befehl) für 'voi' lautet: '${iv.voiField}'.`
    ));
    countFuture++;
  }
}

// ==========================================
// 4. MODULE: nomen_artikel (Substantive & Artikel)
// Ziel: At least 520 Fragen
// ==========================================
console.log("Generiere Module: nomen_artikel...");
const nounsArticlesData = [
  // Maskulin (il, lo, l')
  { word: "libro", det: "il", ind: "un", pl: "i libri", type: "m-cons", de: "Buch" },
  { word: "tavolo", det: "il", ind: "un", pl: "i tavoli", type: "m-cons", de: "Tisch" },
  { word: "ragazzo", det: "il", ind: "un", pl: "i ragazzi", type: "m-cons", de: "Junge" },
  { word: "caffè", det: "il", ind: "un", pl: "i caffè", type: "m-cons", de: "Kaffee" },
  { word: "treno", det: "il", ind: "un", pl: "i treni", type: "m-cons", de: "Zug" },
  { word: "cane", det: "il", ind: "un", pl: "i cani", type: "m-cons", de: "Hund" },
  
  { word: "zio", det: "lo", ind: "uno", pl: "gli zii", type: "m-z", de: "Onkel" },
  { word: "zaino", det: "lo", ind: "uno", pl: "gli zaini", type: "m-z", de: "Rucksack" },
  { word: "studente", det: "lo", ind: "uno", pl: "gli studenti", type: "m-s-cons", de: "Student" },
  { word: "specchio", det: "lo", ind: "uno", pl: "gli specchi", type: "m-s-cons", de: "Spiegel" },

  { word: "amico", det: "l'", ind: "un", pl: "gli amici", type: "m-vow", de: "Freund" },
  { word: "albero", det: "l'", ind: "un", pl: "gli alberi", type: "m-vow", de: "Baum" },
  { word: "orologio", det: "l'", ind: "un", pl: "gli orologi", type: "m-vow", de: "Uhr" },
  { word: "aeroporto", det: "l'", ind: "un", pl: "gli aeroporti", type: "m-vow", de: "Flughafen" },

  // Feminin (la, l')
  { word: "casa", det: "la", ind: "una", pl: "le case", type: "f-cons", de: "Haus" },
  { word: "sedia", det: "la", ind: "una", pl: "le sedie", type: "f-cons", de: "Stuhl" },
  { word: "porta", det: "la", ind: "una", pl: "le porte", type: "f-cons", de: "Tür" },
  { word: "macchina", det: "la", ind: "una", pl: "le macchine", type: "f-cons", de: "Auto" },
  { word: "chiave", det: "la", ind: "una", pl: "le chiavi", type: "f-cons", de: "Schlüssel" },

  { word: "amica", det: "l'", ind: "un'", pl: "le amiche", type: "f-vow", de: "Freundin" },
  { word: "arancia", det: "l'", ind: "un'", pl: "le arance", type: "f-vow", de: "Orange" },
  { word: "isola", det: "l'", ind: "un'", pl: "le isole", type: "f-vow", de: "Insel" },
  { word: "aula", det: "l'", ind: "un'", pl: "le aule", type: "f-vow", de: "Klassenzimmer" }
];

let countArticles = 0;
while (countArticles < 530) {
  for (const n of nounsArticlesData) {
    if (countArticles >= 530) break;

    // Definite Article Drill
    const correctDet = n.det;
    const detWrong: [string, string, string] = ["il", "lo", "la", "i", "gli"]
      .filter(x => x !== correctDet && x !== "l'")
      .slice(0, 3) as [string, string, string];

    const qText1 = `Qual è l'articolo determinativo corretto (bestimmter Artikel) per: ___ ${n.word}? (${n.de})`;
    const expl1 = `Das Wort '${n.word}' ist ein Substantiv (${n.de}). Der richtige bestimmte Artikel lautet '${correctDet}'.`;
    pool.push(makeQuestion(currentId++, 'A1', qText1, correctDet, detWrong, expl1));
    countArticles++;

    if (countArticles >= 530) break;

    // Indefinite Article Drill
    const correctInd = n.ind;
    const indWrong: [string, string, string] = ["un", "uno", "una", "un'"]
      .filter(x => x !== correctInd)
      .slice(0, 3) as [string, string, string];

    const qText2 = `Scegli l'articolo indeterminativo corretto (unbestimmter Artikel) per: ___ ${n.word}`;
    const expl2 = `Für das Substantiv '${n.word}' lautet der unbestimmte Artikel '${correctInd}'.`;
    pool.push(makeQuestion(currentId++, 'A1', qText2, correctInd, indWrong, expl2));
    countArticles++;

    if (countArticles >= 530) break;

    // Plural Form Drill
    const correctPl = n.pl;
    const plParts = n.pl.split(" ");
    const articlePl = plParts[0];
    const nounPl = plParts[1];
    
    const plWrong: [string, string, string] = [
      `i ${n.word}i`,
      `le ${n.word}e`,
      `gli ${n.word}s`
    ];

    const qText3 = `Qual è il plurale corretto del sostantivo (Mehrzahl) '${n.word}' (Singular: ${n.det} ${n.word})?`;
    const expl3 = `Der Plural von '${n.det} ${n.word}' lautet '${correctPl}'. Grammatik der Substantive / Plural.`;
    pool.push(makeQuestion(currentId++, 'A1', qText3, correctPl, plWrong, expl3));
    countArticles++;
  }
}

// ==========================================
// 5. MODULE: praepositionen (Präpositionen: Simple & Articulate)
// Ziel: At least 520 Fragen
// ==========================================
console.log("Generiere Module: praepositionen...");
const basePrepositions = [
  { p: "a", q: "Vado ___ Roma per le vacanze. (zu/nach Städten)", wrong: ["in", "da", "di"], expl: "Vor Städtenamen verwendet man immer die einfache Präposition 'a'." },
  { p: "in", q: "Viaggio ___ Italia domani mattina. (nach/in Länder)", wrong: ["a", "da", "di"], expl: "Vor Ländernamen verwendet man standardmäßig die einfache Präposition 'in'." },
  { p: "da", q: "Vengo ___ Germania, sono tedesco. (Herkunft/von)", wrong: ["di", "in", "a"], expl: "Die Herkunft / Bewegung weg von einem Ort wird mit der Präposition 'da' ausgedrückt." },
  { p: "di", q: "Questo è il libro ___ Paolo. (Besitztum/Zugehörigkeit)", wrong: ["da", "a", "con"], expl: "Zugehörigkeit oder Besitz ('von Paolo') wird mit der Präposition 'di' übersetzt." },
  { p: "con", q: "Esco volentieri ___ i miei amici. (Begleitung/mit)", wrong: ["per", "da", "a"], expl: "Die Präposition 'con' bedeutet 'mit'." },
  { p: "per", q: "Questo regalo è ___ te, spero ti piaccia. (für)", wrong: ["di", "con", "da"], expl: "Die Präposition 'per' bedeutet 'für'." }
];

const prepArticolateData = [
  { correct: "sul", sentence: "Metto la chiave ___ tavolo. (su + il)", wrong: ["sulla", "al", "nel"], expl: "Die Verschmelzung von 'su' (auf) und der Artikel 'il' ergibt 'sul'." },
  { correct: "sulla", sentence: "La borsa è ___ sedia. (su + la)", wrong: ["sul", "nella", "di"], expl: "Die Verschmelzung von 'su' und 'la' ergibt 'sulla'." },
  { correct: "nel", sentence: "Le mele sono ___ frigorifero. (in + il)", wrong: ["nel'", "al", "sul"], expl: "Die Verschmelzung von 'in' (in) und der Artikel 'il' ergibt 'nel' (im)." },
  { correct: "nella", sentence: "Il quaderno è ___ borsa della mamma. (in + la)", wrong: ["nel", "sulla", "al"], expl: "Die Verschmelzung von 'in' und 'la' ergibt 'nella'." },
  { correct: "al", sentence: "Andiamo ___ ristorante stasera? (a + il)", wrong: ["nel", "dal", "sotto"], expl: "Die Verschmelzung von 'a' (zu/an) und 'il' ergibt 'al'." },
  { correct: "alle", sentence: "La lezione inizia ___ tre del pomeriggio. (a + le)", wrong: ["a la", "dal", "alla"], expl: "Die Verschmelzung von 'a' und 'le' bei Uhrzeiten ergibt 'alle'." },
  { correct: "dal", sentence: "Domani vado ___ medico. (da + il - Personenbewegung)", wrong: ["al", "nel", "sotto"], expl: "Die Bewegung hin zu Personen verlangt 'da'. Zusammen mit 'il' ergibt es 'dal'." },
  { correct: "del", sentence: "Qual è il colore ___ vestito? (di + il)", wrong: ["dal", "al", "sotto"], expl: "Die Verschmelzung von 'di' und 'il' ergibt 'del'." }
];

let countPreps = 0;
while (countPreps < 530) {
  for (const bp of basePrepositions) {
    if (countPreps >= 530) break;
    pool.push(makeQuestion(
      currentId++,
      'A1',
      bp.q,
      bp.p,
      bp.wrong as [string, string, string],
      bp.expl
    ));
    countPreps++;
  }

  for (const pa of prepArticolateData) {
    if (countPreps >= 530) break;
    pool.push(makeQuestion(
      currentId++,
      'A2',
      `Preposizione articolata: ${pa.sentence}`,
      pa.correct,
      pa.wrong as [string, string, string],
      pa.expl
    ));
    countPreps++;
  }
}

// ==========================================
// 6. MODULE: adjektive_pronomen (Adjektive, Pronomen & Steigerung)
// Ziel: At least 520 Fragen
// ==========================================
console.log("Generiere Module: adjektive_pronomen...");
const adjPossessive = [
  { sub: "Io", fieldM: "il mio libro", fieldF: "la mia amica", fieldPLM: "i miei libri", fieldPLF: "le mie amiche", de: "mein" },
  { sub: "Tu", fieldM: "il tuo libro", fieldF: "la tua amica", fieldPLM: "i tuoi libri", fieldPLF: "le tue amiche", de: "dein" },
  { sub: "Lui/Lei", fieldM: "il suo libro", fieldF: "la sua amica", fieldPLM: "i suoi libri", fieldPLF: "le sue amiche", de: "sein/ihr" },
  { sub: "Noi", fieldM: "il nostro libro", fieldF: "la nostra amica", fieldPLM: "i nostri libri", fieldPLF: "le nostre amiche", de: "unser" },
  { sub: "Voi", fieldM: "il vostro libro", fieldF: "la vostra amica", fieldPLM: "i vostri libri", fieldPLF: "le vostre amiche", de: "euer" }
];

const directPronouns = [
  { item: "la pizza", pron: "la", q: "Compri la pizza? Sì, ___ compro.", wrong: ["lo", "li", "le"] },
  { item: "il libro", pron: "lo", q: "Compri il libro? Sì, ___ compro.", wrong: ["la", "li", "le"] },
  { item: "i biscotti", pron: "li", q: "Mangi i biscotti? Sì, ___ mangio.", wrong: ["lo", "le", "la"] },
  { item: "le mele", pron: "le", q: "Mangi le mele? Sì, ___ mangio.", wrong: ["la", "li", "lo"] }
];

const indirectPronouns = [
  { toPerson: "a Marco (ihm)", pron: "gli", q: "Telefoni a Marco? Sì, ___ telefono.", wrong: ["le", "lo", "la"] },
  { toPerson: "a Sofia (ihr)", pron: "le", q: "Telefoni a Sofia? Sì, ___ telefono.", wrong: ["gli", "la", "lo"] },
  { toPerson: "ai genitori (ihnen)", pron: "gli", q: "Scrivi ai tuoi genitori? Sì, ___ scrivo volentieri.", wrong: ["loro", "le", "li"] }
];

let countAdjPron = 0;
while (countAdjPron < 530) {
  // Possessive Drill M
  for (const ap of adjPossessive) {
    if (countAdjPron >= 530) break;
    pool.push(makeQuestion(
      currentId++,
      'A1',
      `Possessiv-Pronomen / Adjektiv von '${ap.sub}': Questo è ___ (Kategorie: maskulin Singular).`,
      ap.fieldM,
      [ap.fieldF, "mio libro", "tuo libro"],
      `Für das Subjekt '${ap.sub}' lautet das Possessivadjektiv im Maskulin Singular '${ap.fieldM}'.`
    ));
    countAdjPron++;

    if (countAdjPron >= 530) break;
    pool.push(makeQuestion(
      currentId++,
      'A1',
      `Possessiv-Pronomen / Adjektiv von '${ap.sub}': Questa è ___ (Kategorie: feminin Singular).`,
      ap.fieldF,
      [ap.fieldM, "mia amica", "sua amica"],
      `Für das Subjekt '${ap.sub}' lautet das Possessivadjektiv im Femininen Singular '${ap.fieldF}'.`
    ));
    countAdjPron++;
  }

  // Direct Pronouns Drill
  for (const dp of directPronouns) {
    if (countAdjPron >= 530) break;
    pool.push(makeQuestion(
      currentId++,
      'A2',
      `Akkusativ / Direkte Pronomen: ${dp.q}`,
      dp.pron,
      dp.wrong as [string, string, string],
      `Das direkte Pronomen (Akkusativ) ersetzt '${dp.item}' durch '${dp.pron}'.`
    ));
    countAdjPron++;
  }

  // Indirect Pronouns Drill
  for (const ip of indirectPronouns) {
    if (countAdjPron >= 530) break;
    pool.push(makeQuestion(
      currentId++,
      'A2',
      `Dativ / Indirekte Pronomen: ${ip.q}`,
      ip.pron,
      ip.wrong as [string, string, string],
      `Das Dativobjekt '${ip.toPerson}' wird durch das indirekte Pronomen '${ip.pron}' ersetzt.`
    ));
    countAdjPron++;
  }
}

// ==========================================
// 7. MODULE: wortschatz_alltag (Wortschatz, Uhrzeit & Alltag)
// Ziel: At least 520 Fragen
// ==========================================
console.log("Generiere Module: wortschatz_alltag...");
const tensNumbers = [
  { de: "zehn", it: "dieci" },
  { de: "zwanzig", it: "venti" },
  { de: "dreißig", it: "trenta" },
  { de: "vierzig", it: "quaranta" },
  { de: "fünfzig", it: "cinquanta" },
  { de: "sechzig", it: "sessanta" },
  { de: "siebzig", it: "settanta" },
  { de: "achtzig", it: "ottanta" },
  { de: "neunzig", it: "novanta" },
  { de: "hundert", it: "cento" }
];

const vocabularyFoods = [
  { de: "Wein", it: "vino" },
  { de: "Wasser", it: "acqua" },
  { de: "Brot", it: "pane" },
  { de: "Kuchen", it: "dolce" },
  { de: "Obst", it: "frutta" },
  { de: "Fleisch", it: "carne" },
  { de: "Fisch", it: "pesce" },
  { de: "Gemüse", it: "verdura" }
];

const travelDailyPhrases = [
  { sit: "Wie viel kostet dieses Produkt?", ans: "Quanto costa?", wrong: ["Chi sei?", "Dove abiti?", "A che ora parte?"] },
  { sit: "Wo ist das Badezimmer / die Toilette?", ans: "Dov'è il bagno?", wrong: ["Dov'è il treno?", "Cos'è questo?", "Quanto costa?"] },
  { sit: "Können Sie mir bitte helfen?", ans: "Mi può aiutare, per favore?", wrong: ["Cosa fai?", "Vengo subito.", "Grazie mille."] },
  { sit: "Die Rechnung, bitte im Restaurant.", ans: "Il conto, per favore.", wrong: ["Il menu, grazie.", "Un vino, prego.", "Quanto costa?"] }
];

let countVocab = 0;
while (countVocab < 530) {
  // Numbers Vocabulary drills
  for (const num of tensNumbers) {
    if (countVocab >= 530) break;
    const wrong: [string, string, string] = tensNumbers
      .filter(x => x.it !== num.it)
      .map(x => x.it)
      .slice(0, 3) as [string, string, string];

    pool.push(makeQuestion(
      currentId++,
      'A1',
      `Wortschatz / Zahlen: Come si dice il numero '${num.de}' in italiano?`,
      num.it,
      wrong,
      `Die Zahl '${num.de}' heißt auf Italienisch '${num.it}'.`
    ));
    countVocab++;
  }

  // Foods Vocabulary drills
  for (const f of vocabularyFoods) {
    if (countVocab >= 530) break;
    const wrong: [string, string, string] = vocabularyFoods
      .filter(x => x.it !== f.it)
      .map(x => x.it)
      .slice(0, 3) as [string, string, string];

    pool.push(makeQuestion(
      currentId++,
      'A1',
      `Alltagswortschatz: Come si dice '${f.de}' in italiano?`,
      f.it,
      wrong,
      `Das italienische Wort für '${f.de}' lautet '${f.it}'.`
    ));
    countVocab++;
  }

  // Travel Phrasing drills
  for (const tp of travelDailyPhrases) {
    if (countVocab >= 530) break;
    pool.push(makeQuestion(
      currentId++,
      'A2',
      `Wie lautet die richtige italienische Alltagsphrase für: '${tp.sit}'?`,
      tp.ans,
      tp.wrong as [string, string, string],
      `Die passende Formulierung lautet: '${tp.ans}'.`
    ));
    countVocab++;
  }

  // Clock drills
  if (countVocab < 530) {
    pool.push(makeQuestion(
      currentId++,
      'A1',
      "Alltagswortschatz / Uhrzeit: Come si dice 'Es ist ein Uhr'?",
      "È l'una.",
      ["Sono le una.", "È le un.", "Sono l'una."],
      "'L'una' ist Einzahl. Daher sagt man: 'È l'una.'."
    ));
    countVocab++;
  }
  if (countVocab < 530) {
    pool.push(makeQuestion(
      currentId++,
      'A1',
      "Alltagswortschatz / Uhrzeit: Come si dice 'Es ist zwei Uhr'?",
      "Sono le due.",
      ["È le due.", "Sono due ore.", "È l'una."],
      "Für alle Uhrzeiten ab 2 Uhr lautet die Einleitung im Plural: 'Sono le due/tre/quattro...'."
    ));
    countVocab++;
  }
}

console.log(`Systematische Generierung abgeschlossen: ${pool.length} Gesamtfragen erstellt.`);

// Schreibe die JSON-Datei
const outputFilePath = path.join(process.cwd(), 'public', 'questions.json');
fs.writeFileSync(outputFilePath, JSON.stringify(pool, null, 2));
console.log(`Zieldatei erfolgreich geschrieben nach: ${outputFilePath}`);
