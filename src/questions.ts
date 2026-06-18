/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SectionInfo, Question } from './types';

export const SECTIONS: SectionInfo[] = [
  {
    id: 'Verben',
    title: 'Verben & Zeiten',
    italianLabel: 'Verbi e Tempi',
    description: 'Presente, Passato Prossimo, Imperfetto, Futuro und Condizionale.'
  },
  {
    id: 'Nomen',
    title: 'Nomen & Genus',
    italianLabel: 'Sostantivi e Genere',
    description: 'Geschlecht, Plurale, Ausnahmen und unzählbare Nomen.'
  },
  {
    id: 'Präpositionen',
    title: 'Präpositionen',
    italianLabel: 'Preposizioni',
    description: 'Einfache und verschmolzene Präpositionen für Ort und Zeit.'
  },
  {
    id: 'Artikel',
    title: 'Artikel',
    italianLabel: 'Articoli',
    description: 'Bestimmte, unbestimmte und partitive Begleiter.'
  }
];

export const QUESTIONS: Question[] = [
  // ==========================================
  // SECTION 1: VERBEN (V001 - V080)
  // ==========================================
  
  // --- Presente (V001 - V020) ---
  {
    id: "V001",
    section: "Verben",
    thema: "Presente",
    frage_de: "Wähle Presente (-are): Oggi noi ___ a calcio nel parco.",
    options_de: ["giochiamo", "giociamo", "giocano", "giocare"],
    richtige_antwort: "giochiamo",
    erklaerung_de: "Verben auf -care erhalten im 'noi' ein stummes h."
  },
  {
    id: "V002",
    section: "Verben",
    thema: "Presente",
    frage_de: "Wähle Presente (-ere): Io ___ sempre una lettera a mia madre.",
    options_de: ["scrivo", "scrive", "scriviamo", "scrivete"],
    richtige_antwort: "scrivo",
    erklaerung_de: "Die erste Person Singular von scrivere (schreiben) endet auf -o."
  },
  {
    id: "V003",
    section: "Verben",
    thema: "Presente",
    frage_de: "Wähle Presente (-ire): A che ora ___ stasera, ragazzi?",
    options_de: ["partite", "partiamo", "partono", "parti"],
    richtige_antwort: "partite",
    erklaerung_de: "Die Endung der 2. Person Plural (voi) für -ire ist -ite."
  },
  {
    id: "V004",
    section: "Verben",
    thema: "Presente",
    frage_de: "Wähle Presente (irregular essere): Noi ___ a Roma per lavoro questa settimana.",
    options_de: ["siamo", "sono", "siete", "stiamo"],
    richtige_antwort: "siamo",
    erklaerung_de: "Die 1. Person Plural (noi) von essere (sein) ist siamo."
  },
  {
    id: "V005",
    section: "Verben",
    thema: "Presente",
    frage_de: "Wähle Presente (irregular avere): Maria ___ due fratelli molto simpatici.",
    options_de: ["ha", "hanno", "ho", "hai"],
    richtige_antwort: "ha",
    erklaerung_de: "Die 3. Person Singular (lei/lui) von avere (haben) ist ha."
  },
  {
    id: "V006",
    section: "Verben",
    thema: "Presente",
    frage_de: "Wähle Presente (irregular andare): Stasera io ___ al cinema con Laura.",
    options_de: ["vado", "vai", "va", "andiamo"],
    richtige_antwort: "vado",
    erklaerung_de: "Das unregelmäßige Verb andare bildet die 1. Person Singular als vado."
  },
  {
    id: "V007",
    section: "Verben",
    thema: "Presente",
    frage_de: "Wähle Presente (irregular fare): Anna e Marco ___ colazione alle sette.",
    options_de: ["fanno", "fai", "facciamo", "fatte"],
    richtige_antwort: "fanno",
    erklaerung_de: "Die 3. Person Plural (loro) von fare (machen/tun) lautet fanno."
  },
  {
    id: "V008",
    section: "Verben",
    thema: "Presente",
    frage_de: "Wähle Presente (modal potere): Tu ___ parlare più lentamente, per favore?",
    options_de: ["puoi", "posso", "può", "potete"],
    richtige_antwort: "puoi",
    erklaerung_de: "Die 2. Person Singular (tu) des Modalverbs potere ist puoi."
  },
  {
    id: "V009",
    section: "Verben",
    thema: "Presente",
    frage_de: "Wähle Presente (modal dovere): Mi dispiace, ma oggi io ___ lavorare fino a tardi.",
    options_de: ["devo", "devi", "dobbiamo", "devono"],
    richtige_antwort: "devo",
    erklaerung_de: "Die unregelmäßige Form von dovere für 'io' lautet devo."
  },
  {
    id: "V010",
    section: "Verben",
    thema: "Presente",
    frage_de: "Wähle Presente (modal volere): I bambini ___ mangiare un gelato al cioccolato.",
    options_de: ["vogliono", "vuole", "voglio", "volete"],
    richtige_antwort: "vogliono",
    erklaerung_de: "Die unregelmäßige 3. Person Plural von volere ist vogliono."
  },
  {
    id: "V011",
    section: "Verben",
    thema: "Presente",
    frage_de: "Wähle Presente (-ire con -isc): Il cameriere ___ il tavolo velocemente.",
    options_de: ["pulisce", "puliamo", "puliscono", "pulisci"],
    richtige_antwort: "pulisce",
    erklaerung_de: "Pulire ist ein -isc Verb; die 3. Person Singular ist pulisce."
  },
  {
    id: "V012",
    section: "Verben",
    thema: "Presente",
    frage_de: "Wähle Presente (irregular bere): Di solito voi ___ acqua frizzante o naturale?",
    options_de: ["bevete", "bevo", "bevi", "bevono"],
    richtige_antwort: "bevete",
    erklaerung_de: "Das unregelmäßige Verb bere basiert auf dem Stamm bever-."
  },
  {
    id: "V013",
    section: "Verben",
    thema: "Presente",
    frage_de: "Wähle Presente (irregular venire): Da dove ___ i tuoi nuovi amici?",
    options_de: ["vengono", "vieni", "viene", "venite"],
    richtige_antwort: "vengono",
    erklaerung_de: "Vengono ist die unregelmäßige Form der 3. Person Plural (venire)."
  },
  {
    id: "V014",
    section: "Verben",
    thema: "Presente",
    frage_de: "Wähle Presente (irregular uscire): Di sabato sera io ___ sempre con gli amici.",
    options_de: ["esco", "esci", "esce", "usciamo"],
    richtige_antwort: "esco",
    erklaerung_de: "Die 1. Person Singular von uscire (ausgehen) wechselt zu esco."
  },
  {
    id: "V015",
    section: "Verben",
    thema: "Presente",
    frage_de: "Wähle Presente (-ire con -isc): Io ___ il mio lavoro con molta precisione.",
    options_de: ["finisco", "finisce", "finiamo", "finiscono"],
    richtige_antwort: "finisco",
    erklaerung_de: "Finiere wechselt im Singular Stamm zu -isc; so entsteht finisco."
  },
  {
    id: "V016",
    section: "Verben",
    thema: "Presente",
    frage_de: "Wähle Presente (irregular sapere): Signor Rossi, ___ dove si trova la stazione?",
    options_de: ["sa", "sai", "sappiamo", "sapete"],
    richtige_antwort: "sa",
    erklaerung_de: "Die Höflichkeitsform 'Lei' verlangt die 3. Person Singular sa."
  },
  {
    id: "V017",
    section: "Verben",
    thema: "Presente",
    frage_de: "Wähle Presente (irregular dire): Cosa ___ tu di questa situazione?",
    options_de: ["dici", "dico", "dice", "dite"],
    richtige_antwort: "dici",
    erklaerung_de: "Dire bildet die unregelmäßige Form 'dici' für du / tu."
  },
  {
    id: "V018",
    section: "Verben",
    thema: "Presente",
    frage_de: "Wähle Presente (-ere con -g): Noi ___ la tavola prima di pranzare.",
    options_de: ["mettiamo", "metto", "mettono", "mettete"],
    richtige_antwort: "mettiamo",
    erklaerung_de: "Mettere (decken/stellen) hat im Presente die regelmäßige noi-Endung -iamo."
  },
  {
    id: "V019",
    section: "Verben",
    thema: "Presente",
    frage_de: "Wähle Presente (riflessivo): Noi ___ svegliamo sempre presto la mattina.",
    options_de: ["ci", "mi", "ti", "si"],
    richtige_antwort: "ci",
    erklaerung_de: "Das Reflexivpronomen für noi (wir) lautet stets ci."
  },
  {
    id: "V020",
    section: "Verben",
    thema: "Presente",
    frage_de: "Wähle Presente (riflessivo): Come ___ chiama tua sorella maggiore?",
    options_de: ["si", "ti", "ci", "mi"],
    richtige_antwort: "si",
    erklaerung_de: "Das Reflexivpronomen im Singular für lei/lui lautet si."
  },

  // --- Passato Prossimo - Partizip Perfekt (V021 - V045) ---
  {
    id: "V021",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle Passato Prossimo (avere): Ieri sera noi ___ due pizze deliziose.",
    options_de: ["abbiamo mangiato", "siamo mangiati", "abbiamo mangiare", "manteniamo"],
    richtige_antwort: "abbiamo mangiato",
    erklaerung_de: "Mangiare bildet das Passato Prossimo unregelmäßig mit avere."
  },
  {
    id: "V022",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle Passato Prossimo (essere agreement f. sing.): Francesca ___ in ufficio presto stamattina.",
    options_de: ["è andata", "è andato", "ha andato", "ha andata"],
    richtige_antwort: "è andata",
    erklaerung_de: "Bei 'essere' gleicht sich das Partizip an das weibliche Subjekt an."
  },
  {
    id: "V023",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle Passato Prossimo (essere agreement m. sing.): Il ragazzo ___ a casa molto tardi.",
    options_de: ["è tornato", "è tornata", "ha tornato", "ha tornata"],
    richtige_antwort: "è tornato",
    erklaerung_de: "Männliches Subjekt im Singular verlangt die Partizipendung -o bei essere."
  },
  {
    id: "V024",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle Passato Prossimo (essere agreement f. plur.): Chiara e Paola ___ a teatro sabato sera.",
    options_de: ["sono andate", "sono andati", "hanno andato", "sono andata"],
    richtige_antwort: "sono andate",
    erklaerung_de: "Weiblicher Plural erfordert die Endung -ate beim Partizip mit essere."
  },
  {
    id: "V025",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle Passato Prossimo (essere agreement m. plur.): I miei genitori ___ a Firenze in treno.",
    options_de: ["sono partiti", "sono partite", "hanno partito", "sono partito"],
    richtige_antwort: "sono partiti",
    erklaerung_de: "Männlicher Plural verlangt bei essere die Endung -iti im Partizip."
  },
  {
    id: "V026",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle das unregelmäßige Partizip von fare: Ieri io ___ tutti i compiti.",
    options_de: ["ho fatto", "ho facciato", "sono fatto", "ho fare"],
    richtige_antwort: "ho fatto",
    erklaerung_de: "Das Partizip Perfekt von fare lautet unregelmäßig fatto."
  },
  {
    id: "V027",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle das unregelmäßige Partizip von prendere: Tu ___ l'autobus per andare al lavoro?",
    options_de: ["hai preso", "hai prenduto", "sei preso", "ha preso"],
    richtige_antwort: "hai preso",
    erklaerung_de: "Das Partizip von prendere ist unregelmäßig preso (mit avere)."
  },
  {
    id: "V028",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle das unregelmäßige Partizip von scrivere: Chiara ___ un'e-mail importante ieri.",
    options_de: ["ha scritto", "ha scrivuto", "è scritto", "ha scritta"],
    richtige_antwort: "ha scritto",
    erklaerung_de: "Das unregelmäßige Partizip von scrivere ist scritto."
  },
  {
    id: "V029",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle das unregelmäßige Partizip von leggere: Abbiamo ___ un fantastico libro di ricette italiane.",
    options_de: ["letto", "legguto", "letto", "leggeto"],
    richtige_antwort: "letto",
    erklaerung_de: "Leggere bildet das Partizip unregelmäßig als letto."
  },
  {
    id: "V030",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle das unregelmäßige Partizip von vedere: Domenica scorsa noi ___ un bel film.",
    options_de: ["abbiamo visto", "abbiamo veduto", "siamo visti", "vediamo"],
    richtige_antwort: "abbiamo visto",
    erklaerung_de: "Vedere hat das gängige unregelmäßige Partizip visto."
  },
  {
    id: "V031",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle Passato Prossimo (movement): I turisti ___ all'aeroporto di Milano.",
    options_de: ["sono arrivati", "hanno arrivato", "sono arrivate", "arrivarono"],
    richtige_antwort: "sono arrivati",
    erklaerung_de: "Arrivare drückt Bewegung aus und konjugiert folglich mit essere."
  },
  {
    id: "V032",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle Passato Prossimo (irregular dire): Il dottore mi ___ di bere molta acqua.",
    options_de: ["ha detto", "ha dicuto", "è detto", "ha dicito"],
    richtige_antwort: "ha detto",
    erklaerung_de: "Das Partizip Perfekt von 'dire' (sagen) lautet detto."
  },
  {
    id: "V033",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle Passato Prossimo (riflessivo f. sing): Sabrina ___ alle sette di mattina.",
    options_de: ["si è svegliata", "ha svegliato", "si ha svegliata", "si è svegliato"],
    richtige_antwort: "si è svegliata",
    erklaerung_de: "Reflexive Verben nutzen immer essere, Partizip gleicht sich an (weiblich)."
  },
  {
    id: "V034",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle Passato Prossimo (irregular perdere): La squadra ___ la partita decisiva.",
    options_de: ["ha perso", "ha perduto", "è perso", "ha persa"],
    richtige_antwort: "ha perso",
    erklaerung_de: "Perdere hat das unregelmäßige Partizip perso."
  },
  {
    id: "V035",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle Passato Prossimo (irregular nascere): Il grande scrittore ___ a Firenze.",
    options_de: ["è nato", "ha nato", "è nata", "nacque"],
    richtige_antwort: "è nato",
    erklaerung_de: "Nascere (geboren werden) verlangt das Hilfsverb essere und ist unregelmäßig."
  },
  {
    id: "V036",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle Passato Prossimo (avere): Noi ___ tutta la casa per le feste.",
    options_de: ["abbiamo pulito", "siamo puliti", "abbiamo pulituto", "puliamo"],
    richtige_antwort: "abbiamo pulito",
    erklaerung_de: "Pulire bildet das Passato Prossimo mit avere und lautet pulito."
  },
  {
    id: "V037",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle Passato Prossimo (irregular chiudere): Chi ___ la porta d'ingresso?",
    options_de: ["ha chiuso", "ha chiuduto", "è chiuso", "chiude"],
    richtige_antwort: "ha chiuso",
    erklaerung_de: "Das unregelmäßige Partizip von chiudere ist chiuso."
  },
  {
    id: "V038",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle Passato Prossimo (irregular offrire): Il mio amico mi ___ un ottimo caffè espresso.",
    options_de: ["ha offerto", "ha offrito", "è offerto", "offriva"],
    richtige_antwort: "ha offerto",
    erklaerung_de: "Offrire (anbieten) bildet sein Partizip unregelmäßig als offerto."
  },
  {
    id: "V039",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle Passato Prossimo (irregular aprire): Chi ___ la finestra della cucina?",
    options_de: ["ha aperto", "ha aprito", "è aperto", "apriva"],
    richtige_antwort: "ha aperto",
    erklaerung_de: "Aprire (öffnen) hat das unregelmäßige Partizip aperto."
  },
  {
    id: "V040",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle Passato Prossimo (state): Noi ___ in vacanza due settimane a Capri.",
    options_de: ["siamo stati", "abbiamo stato", "siamo state", "stiamo stati"],
    richtige_antwort: "siamo stati",
    erklaerung_de: "Essere und stare bilden das Partizip 'stato' und fordern 'essere'."
  },
  {
    id: "V041",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle Passato Prossimo (essere agreement m. pl.): Gli studenti ___ in classe alle otto.",
    options_de: ["sono entrati", "sono entrate", "hanno entrato", "entrarono"],
    richtige_antwort: "sono entrati",
    erklaerung_de: "Männliches Plural-Subjekt erfordert die Endung -ati bei essere-Verben."
  },
  {
    id: "V042",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle Passato Prossimo (avere): Ieri tu ___ il tempo di fare la spesa?",
    options_de: ["hai avuto", "sei avuto", "hai avito", "avessi avuto"],
    richtige_antwort: "hai avuto",
    erklaerung_de: "Das Partizip für avere ist unregelmäßig avuto."
  },
  {
    id: "V043",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle Passato Prossimo (irregular decidere): Alla fine noi ___ di rimanere a casa.",
    options_de: ["abbiamo deciso", "abbiamo deciduto", "siamo decisi", "decidemmo"],
    richtige_antwort: "abbiamo deciso",
    erklaerung_de: "Decidere (entscheiden) bildet das Partizip unregelmäßig als deciso."
  },
  {
    id: "V044",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle Passato Prossimo (riflessivo m. pl.): I nonni ___ molto felici alla festa.",
    options_de: ["si sono sentiti", "hanno sentito", "si hanno sentito", "sentirono"],
    richtige_antwort: "si sono sentiti",
    erklaerung_de: "Das reflexive sentire (si sono sentiti) erfordert essere und Endung -iti."
  },
  {
    id: "V045",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle das unregelmäßige Partizip von bere: Noi ___ un buonissimo vino rosso toscano.",
    options_de: ["abbiamo bevuto", "abbiamo bevito", "siamo bevuti", "bevemmo"],
    richtige_antwort: "abbiamo bevuto",
    erklaerung_de: "Das Partizip Perfekt des unregelmäßigen Verbs bere lautet bevuto."
  },

  // --- Imperfetto (V046 - V060) ---
  {
    id: "V046",
    section: "Verben",
    thema: "Imperfetto",
    frage_de: "Wähle Imperfetto: Da bambino io ___ sempre con le macchinine.",
    options_de: ["giocavo", "giocherò", "ha giocato", "giocassi"],
    richtige_antwort: "giocavo",
    erklaerung_de: "Das Imperfetto auf -are bildet die Form für 'io' mit -avo."
  },
  {
    id: "V047",
    section: "Verben",
    thema: "Imperfetto",
    frage_de: "Wähle Imperfetto (essere): Quando noi ___ giovani, andavamo spesso al mare.",
    options_de: ["eravamo", "eravate", "erano", "fossimo"],
    richtige_antwort: "eravamo",
    erklaerung_de: "Die 1. Person Plural von essere im Imperfetto lautet eravamo."
  },
  {
    id: "V048",
    section: "Verben",
    thema: "Imperfetto",
    frage_de: "Wähle Imperfetto (irregular fare): Da piccola mia nonna ___ sempre ottime torte.",
    options_de: ["faceva", "fceva", "ha fatto", "facevano"],
    richtige_antwort: "faceva",
    erklaerung_de: "Fare hat im Imperfetto den erweiterten Stamm facev-."
  },
  {
    id: "V049",
    section: "Verben",
    thema: "Imperfetto",
    frage_de: "Wähle Imperfetto: In quel periodo gli operai ___ molte ore al giorno.",
    options_de: ["lavoravano", "lavoravamo", "lavoravano", "lavorano"],
    richtige_antwort: "lavoravano",
    erklaerung_de: "Die 3. Person Plural im Imperfetto für -are Verben endet auf -avano."
  },
  {
    id: "V050",
    section: "Verben",
    thema: "Imperfetto",
    frage_de: "Wähle Imperfetto (avere): Noi ___ molta fame e quindi siamo andati al ristorante.",
    options_de: ["avevamo", "avevate", "avevano", "abbiamo avuto"],
    richtige_antwort: "avevamo",
    erklaerung_de: "Die 1. Person Plural im Imperfetto von avere lautet avevamo."
  },
  {
    id: "V051",
    section: "Verben",
    thema: "Imperfetto",
    frage_de: "Wähle Imperfetto: Mentre Marco ___ la doccia, è squillato il telefono.",
    options_de: ["faceva", "ha fatto", "fai", "facesse"],
    richtige_antwort: "faceva",
    erklaerung_de: "Eine andauernde Hintergrundhandlung im Vergangenen steht im Imperfetto."
  },
  {
    id: "V052",
    section: "Verben",
    thema: "Imperfetto",
    frage_de: "Wähle Imperfetto: Ogni domenica noi ___ la pasta fresca fatta in casa.",
    options_de: ["mangiavamo", "mangiamo", "mangeremo", "mangiassimo"],
    richtige_antwort: "mangiavamo",
    erklaerung_de: "Regelmäßige Wiederholungen in der Vergangenheit drücken wir mit Imperfetto aus."
  },
  {
    id: "V053",
    section: "Verben",
    thema: "Imperfetto",
    frage_de: "Wähle Imperfetto: Il cielo ___ completamente coperto e pioveva forte.",
    options_de: ["era", "è", "ero", "erano"],
    richtige_antwort: "era",
    erklaerung_de: "Essere für 'il cielo' (singular) im Imperfetto lautet era."
  },
  {
    id: "V054",
    section: "Verben",
    thema: "Imperfetto",
    frage_de: "Wähle Imperfetto (bere): Mio nonno ___ sempre un po' di vino a pranzo.",
    options_de: ["beveva", "beveve", "ha bevuto", "bevevano"],
    richtige_antwort: "beveva",
    erklaerung_de: "Bere bildet den Imperfetto-Stamm unregelmäßig auf bevev-."
  },
  {
    id: "V055",
    section: "Verben",
    thema: "Imperfetto",
    frage_de: "Wähle Imperfetto: Verso le otto i negozi ___ già tutti chiusi.",
    options_de: ["erano", "eravamo", "sono", "erati"],
    richtige_antwort: "erano",
    erklaerung_de: "Die 3. Person Plural von essere im Imperfetto lautet erano."
  },
  {
    id: "V056",
    section: "Verben",
    thema: "Imperfetto",
    frage_de: "Wähle Imperfetto: Al mare noi ___ la sera tardi sulla spiaggia.",
    options_de: ["passeggiavamo", "passeggiamo", "abbiamo passeggiato", "passeggevamo"],
    richtige_antwort: "passeggiavamo",
    erklaerung_de: "Gewohnheiten im Imperfetto für noi enden auf -avamo (-are)."
  },
  {
    id: "V057",
    section: "Verben",
    thema: "Imperfetto",
    frage_de: "Wähle Imperfetto (dire): In ufficio il capo ___ sempre di fare attenzione.",
    options_de: ["diceva", "dice", "ha detto", "dicevano"],
    richtige_antwort: "diceva",
    erklaerung_de: "Dire bildet den Imperfetto-Stamm unregelmäßig auf dicev-."
  },
  {
    id: "V058",
    section: "Verben",
    thema: "Imperfetto",
    frage_de: "Wähle Imperfetto: Tu ___ il tedesco quando abitavi in Germania?",
    options_de: ["parlavi", "parlano", "parlerai", "parlavi"],
    richtige_antwort: "parlavi",
    erklaerung_de: "Die 2. Person Singular des Imperfettowechsels für -are lautet -avi."
  },
  {
    id: "V059",
    section: "Verben",
    thema: "Imperfetto",
    frage_de: "Wähle Imperfetto: Da studente io ___ molti caffè ogni giorno.",
    options_de: ["prendevo", "prendo", "ho preso", "prendessi"],
    richtige_antwort: "prendevo",
    erklaerung_de: "Ausgedrückte Gewohnheit für io im Imperfetto endet auf -evo."
  },
  {
    id: "V060",
    section: "Verben",
    thema: "Imperfetto",
    frage_de: "Wähle Imperfetto: Ieri la città ___ silenziosa durante il fine settimana.",
    options_de: ["sembrava", "sembra", "è sembrata", "sembrasse"],
    richtige_antwort: "sembrava",
    erklaerung_de: "Beschreibung eines Zustands in der Vergangenheit erfordert das Imperfetto."
  },

  // --- Futuro Semplice (V061 - V070) ---
  {
    id: "V061",
    section: "Verben",
    thema: "Futuro",
    frage_de: "Wähle Futuro: L'anno prossimo noi ___ una nuova casa in centro.",
    options_de: ["compreremo", "compriamo", "compreremo", "comprereste"],
    richtige_antwort: "compreremo",
    erklaerung_de: "La desinenza del futuro per la prima persona plurale (noi) è -eremo."
  },
  {
    id: "V062",
    section: "Verben",
    thema: "Futuro",
    frage_de: "Wähle Futuro (irregular essere): Domani ___ una bellissima giornata di sole in Sicilia.",
    options_de: ["sarà", "sarò", "sarà", "sarebbe"],
    richtige_antwort: "sarà",
    erklaerung_de: "Die 3. Person Singular von essere im Futuro Semplice ist sarà."
  },
  {
    id: "V063",
    section: "Verben",
    thema: "Futuro",
    frage_de: "Wähle Futuro (irregular avere): Entro stasera gli studenti ___ i risultati delle prove.",
    options_de: ["avranno", "avrete", "hanno", "avrebbero"],
    richtige_antwort: "avranno",
    erklaerung_de: "Avere bildet die 3. Person Plural im Futuro unregelmäßig als avranno."
  },
  {
    id: "V064",
    section: "Verben",
    thema: "Futuro",
    frage_de: "Wähle Futuro (irregular andare): Sabato prossimo io ___ al mare con mio padre.",
    options_de: ["andrò", "andrei", "andrà", "andrò"],
    richtige_antwort: "andrò",
    erklaerung_de: "Andare verliert das erste 'a' im Futuro-Stamm und endet auf andrò."
  },
  {
    id: "V065",
    section: "Verben",
    thema: "Futuro",
    frage_de: "Wähle Futuro: Sabato sera tu ___ a ballare con noi in discoteca?",
    options_de: ["verrai", "vieni", "verrai", "verresti"],
    richtige_antwort: "verrai",
    erklaerung_de: "Venire zieht im Futuro-Stamm unregelmäßig auf verr- zusammen."
  },
  {
    id: "V066",
    section: "Verben",
    thema: "Futuro",
    frage_de: "Wähle Futuro: Presto noi ___ la data del prossimo esame d'integrazione.",
    options_de: ["sapremo", "sappiamo", "sapremo", "sapremmo"],
    richtige_antwort: "sapremo",
    erklaerung_de: "Sapere hat den verkürzten Futuro-Stamm sapr-."
  },
  {
    id: "V067",
    section: "Verben",
    thema: "Futuro",
    frage_de: "Wähle Futuro: Stasera noi ___ tardi dall'ufficio postale.",
    options_de: ["torneremo", "torniamo", "torneremo", "torneremmo"],
    richtige_antwort: "torneremo",
    erklaerung_de: "Die Zukunftsendung für -are Verben lautet im 'noi' -eremo."
  },
  {
    id: "V068",
    section: "Verben",
    thema: "Futuro",
    frage_de: "Wähle Futuro: Gli sposi ___ il viaggio di nozze in Sardegna.",
    options_de: ["faranno", "fanno", "fanno", "farebbero"],
    richtige_antwort: "faranno",
    erklaerung_de: "Fare bildet die 3. Person Plural im Futuro unregelmäßig als faranno."
  },
  {
    id: "V069",
    section: "Verben",
    thema: "Futuro",
    frage_de: "Wähle Futuro: Domani mattina mio figlio ___ un colloquio di lavoro.",
    options_de: ["avrà", "avrà", "ha", "avrebbe"],
    richtige_antwort: "avrà",
    erklaerung_de: "Avere bildet das Futuro in der 1. und 3. Pers. unregelmäßig."
  },
  {
    id: "V070",
    section: "Verben",
    thema: "Futuro",
    frage_de: "Wähle Futuro: Con impegno tu ___ superare brillantemente questo corso.",
    options_de: ["potrai", "potrai", "puoi", "potresti"],
    richtige_antwort: "potrai",
    erklaerung_de: "Potere bildet die 2. Person Singular im Futuro als potrai."
  },

  // --- Condizionale Presente (V071 - V080) ---
  {
    id: "V071",
    section: "Verben",
    thema: "Condizionale",
    frage_de: "Wähle Condizionale: A pranzo io ___ volentieri un piatto di pasta.",
    options_de: ["mangerei", "mangerò", "mangio", "mangiassi"],
    richtige_antwort: "mangerei",
    erklaerung_de: "Das Condizionale Presente für 'io' endet bei -are auf -erei."
  },
  {
    id: "V072",
    section: "Verben",
    thema: "Condizionale",
    frage_de: "Wähle Condizionale (volere polite): Scusi, io ___ (ich möchte) prenotare un tavolo per due.",
    options_de: ["vorrei", "voglio", "vorrò", "vorresti"],
    richtige_antwort: "vorrei",
    erklaerung_de: "Vorrei ist die unregelmäßige, höfliche Form von 'volere'."
  },
  {
    id: "V073",
    section: "Verben",
    thema: "Condizionale",
    frage_de: "Wähle Condizionale: Tu mi ___ (könntest du) passare il sale, per favore?",
    options_de: ["potresti", "puoi", "potrai", "potresti"],
    richtige_antwort: "potresti",
    erklaerung_de: "Potresti drückt eine höfliche Frage im Condizionale Singular aus."
  },
  {
    id: "V074",
    section: "Verben",
    thema: "Condizionale",
    frage_de: "Wähle Condizionale: Al posto tuo noi ___ (wir würden anrufen) subito l'ufficio d'immigrazione.",
    options_de: ["chiameremmo", "chiameremo", "chiamiamo", "chiamereste"],
    richtige_antwort: "chiameremmo",
    erklaerung_de: "Die Condizionale-Endung für 'noi' lautet stets doppel-m: -emmo."
  },
  {
    id: "V075",
    section: "Verben",
    thema: "Condizionale",
    frage_de: "Wähle Condizionale: Ragazzi, vi ___ (würde es gefallen) fare una gita a Roma sabato?",
    options_de: ["piacerebbe", "piace", "piacerà", "piacerebbe"],
    richtige_antwort: "piacerebbe",
    erklaerung_de: "Piacerebbe ist die 3. Person Singular für das unpersönliche Verb."
  },
  {
    id: "V076",
    section: "Verben",
    thema: "Condizionale",
    frage_de: "Wähle Condizionale: Signora Rossi, ___ (würden Sie tun) un favore per me?",
    options_de: ["farebbe", "farebbe", "fai", "faresti"],
    richtige_antwort: "farebbe",
    erklaerung_de: "Für die Höflichkeitsform 'Lei' verlangt man die 3. Person farebbe."
  },
  {
    id: "V077",
    section: "Verben",
    thema: "Condizionale",
    frage_de: "Wähle Condizionale: Con questo vento io ___ (ich würde schließen) la finestra subito.",
    options_de: ["chiuderei", "chiuderò", "chiudo", "chiuderei"],
    richtige_antwort: "chiuderei",
    erklaerung_de: "Die Endung der 1. Person Singular Condizionale Presente ist -erei."
  },
  {
    id: "V078",
    section: "Verben",
    thema: "Condizionale",
    frage_de: "Wähle Condizionale: Gli studenti ___ (sie würden lesen) molto volentieri testi più semplici.",
    options_de: ["leggerebbero", "leggono", "leggeranno", "leggerebbero"],
    richtige_antwort: "leggerebbero",
    erklaerung_de: "Die 3. Person Plural im Condizionale Presente endet auf -rebbero."
  },
  {
    id: "V079",
    section: "Verben",
    thema: "Condizionale",
    frage_de: "Wähle Condizionale (essere): Se potessi, io ___ (wäre ich) molto più tranquillo per il test.",
    options_de: ["sarei", "sarò", "sono", "sarei"],
    richtige_antwort: "sarei",
    erklaerung_de: "Sarei ist die 1. Person Singular des Condizionale von essere."
  },
  {
    id: "V080",
    section: "Verben",
    thema: "Condizionale",
    frage_de: "Wähle Condizionale: Noi ___ (wir würden haben) bisogno di un chiarimento sul permesso di soggiorno.",
    options_de: ["avremmo", "avremo", "abbiamo", "avreste"],
    richtige_antwort: "avremmo",
    erklaerung_de: "Avremmo (Condizionale double 'm') unterscheidet sich vom Futuro avremo."
  },

  // ==========================================
  // SECTION 2: NOMEN (N001 - N045)
  // ==========================================
  {
    id: "N001",
    section: "Nomen",
    thema: "Genus",
    frage_de: "Wähle das passende Genus: La ___ di Marco è molto gentile e calorosa.",
    options_de: ["famiglia", "zio", "padre", "nonno"],
    richtige_antwort: "famiglia",
    erklaerung_de: "Der Artikel 'La' fordert das weibliche Nomen famiglia."
  },
  {
    id: "N002",
    section: "Nomen",
    thema: "Plural",
    frage_de: "Wähle den passenden Plural: Maria compra tre ___ (Äpfel) al mercato.",
    options_de: ["mele", "mela", "meli", "melo"],
    richtige_antwort: "mele",
    erklaerung_de: "Weibliche Nomen auf -a enden im Plural auf -e."
  },
  {
    id: "N003",
    section: "Nomen",
    thema: "Genus",
    frage_de: "Wähle das passende Nomen: Il ___ di pesce fresco si trova in frigo.",
    options_de: ["piatto", "pasta", "ricetta", "cucina"],
    richtige_antwort: "piatto",
    erklaerung_de: "Der Artikel 'Il' verlangt ein männliches Nomen im Singular."
  },
  {
    id: "N004",
    section: "Nomen",
    thema: "Plural",
    frage_de: "Wähle den passenden Plural: Gli ___ (Freunde) si incontrano al bar in piazza.",
    options_de: ["amici", "amico", "amice", "amiche"],
    richtige_antwort: "amici",
    erklaerung_de: "Männliche Nomen auf -o enden im Plural auf -i."
  },
  {
    id: "N005",
    section: "Nomen",
    thema: "Irregular",
    frage_de: "Wähle die unregelmäßige Form: In questo parco giocano molti ___ (Kinder/Menschen).",
    options_de: ["uomini", "uomo", "uomine", "uomini"],
    richtige_antwort: "uomini",
    erklaerung_de: "Der Plural von 'uomo' (Mann) lautet unregelmäßig 'uomini'."
  },
  {
    id: "N006",
    section: "Nomen",
    thema: "Irregular",
    frage_de: "Wähle das Genus von 'mano': Lava bene le ___ (Hände) con il sapone.",
    options_de: ["mani", "mano", "mane", "mano"],
    richtige_antwort: "mani",
    erklaerung_de: "Mano ist weiblich (la mano); der Plural ist unregelmäßig le mani."
  },
  {
    id: "N007",
    section: "Nomen",
    thema: "Uncountable",
    frage_de: "Wähle das passende Wort: Per colazione preferisco mangiare del ___ fresco.",
    options_de: ["pane", "acqua", "mele", "arance"],
    richtige_antwort: "pane",
    erklaerung_de: "'Del' ist partitiv männlich; fordert das maskuline Massenwort pane."
  },
  {
    id: "N008",
    section: "Nomen",
    thema: "Uncountable",
    frage_de: "Wähle das passende Wort: Durante l'attività fisica bevo molta ___ fresca.",
    options_de: ["acqua", "pane", "vino", "succhi"],
    richtige_antwort: "acqua",
    erklaerung_de: "Das Adjektiv 'molta' verlangt ein weibliches Massenwort wie acqua."
  },
  {
    id: "N009",
    section: "Nomen",
    thema: "Plural",
    frage_de: "Wähle das korrekte Nomen: Ho comprato due nuove ___ (Taschen) per il viaggio.",
    options_de: ["borse", "borsa", "borsi", "borso"],
    richtige_antwort: "borse",
    erklaerung_de: "Weibliche Nomen auf -a bilden den Plural auf -e (borse)."
  },
  {
    id: "N010",
    section: "Nomen",
    thema: "Genus",
    frage_de: "Wähle das korrekte Genus: Il ___ (Zimmer) d'albergo è molto spazioso.",
    options_de: ["letto", "camera", "cucina", "casa"],
    richtige_antwort: "letto",
    erklaerung_de: "Der männliche Artikel 'il' passt perfekt zu 'letto' (Bett)."
  },
  {
    id: "N011",
    section: "Nomen",
    thema: "Plural",
    frage_de: "Wähle den korrekten Plural: Sui monti ci sono molti ___ (Bäume).",
    options_de: ["alberi", "albero", "albere", "alberi"],
    richtige_antwort: "alberi",
    erklaerung_de: "'albero' (m.) endet im Plural regelmäßig auf -i."
  },
  {
    id: "N012",
    section: "Nomen",
    thema: "Genus",
    frage_de: "Wähle das passende Nomen: Nel pomeriggio compro una nuova ___ (Fahrkarte).",
    options_de: ["carta", "biglietto", "passaporto", "giornale"],
    richtige_antwort: "carta",
    erklaerung_de: "Der unbestimmte weibliche Artikel 'una' passt zu 'carta'."
  },
  {
    id: "N013",
    section: "Nomen",
    thema: "Plural",
    frage_de: "Wähle den korrekten Plural: In viaggio porto sempre due ___ (Koffer).",
    options_de: ["valigie", "valigia", "valigi", "valige"],
    richtige_antwort: "valigie",
    erklaerung_de: "Nomen auf -gia erhalten im Plural das 'i' (valigie)."
  },
  {
    id: "N014",
    section: "Nomen",
    thema: "Genus",
    frage_de: "Ergänze das Nomen für Arbeit: Mio fratello cerca un nuovo ___ stabile.",
    options_de: ["lavoro", "lavora", "lavori", "donna"],
    richtige_antwort: "lavoro",
    erklaerung_de: "'Un nuovo' ist ein maskuliner Artikel im Singular."
  },
  {
    id: "N015",
    section: "Nomen",
    thema: "Plural",
    frage_de: "Ergänze den Plural von Arzt: In ospedale lavorano eccezionali ___.",
    options_de: ["medici", "medico", "mediche", "medico"],
    richtige_antwort: "medici",
    erklaerung_de: "Plural von 'medico' lautet 'medici' (Behalt der Aussprache)."
  },
  {
    id: "N016",
    section: "Nomen",
    thema: "Irregular",
    frage_de: "Ergänze das unregelmäßige Nomen: Il cinema ha un grande ___ (Bildschirm).",
    options_de: ["schermo", "schermi", "scherme", "schermp"],
    richtige_antwort: "schermo",
    erklaerung_de: "Der Bildschirm lautet unregelmäßig auf -o im Singular."
  },
  {
    id: "N017",
    section: "Nomen",
    thema: "Irregular",
    frage_de: "Wähle das korrekte Wort: Mi fa male il ___ (Fuß) destro.",
    options_de: ["piede", "piede", "piedi", "pieda"],
    richtige_antwort: "piede",
    erklaerung_de: "'i piedi' ist der Plural, 'il piede' der Singular."
  },
  {
    id: "N018",
    section: "Nomen",
    thema: "Irregular",
    frage_de: "Wähle das korrekte Wort für den Kopf: Oggi ho un forte mal di ___.",
    options_de: ["testa", "gamba", "braccio", "mano"],
    richtige_antwort: "testa",
    erklaerung_de: "Der Kopfschmerz heißt auf Italienisch 'mal di testa'."
  },
  {
    id: "N019",
    section: "Nomen",
    thema: "Wetter",
    frage_de: "Wähle das passende Wort: Oggi c'è un bellissimo ___ caldo nel cielo.",
    options_de: ["sole", "pioggia", "neve", "stella"],
    richtige_antwort: "sole",
    erklaerung_de: "Der Artikel 'un bellissimo' fordert das maskuline Nomen sole."
  },
  {
    id: "N020",
    section: "Nomen",
    thema: "Wetter",
    frage_de: "Wähle das passende Wort: Domani le temperature scendono e arriva la ___.",
    options_de: ["pioggia", "vento", "sole", "nuvoloso"],
    richtige_antwort: "pioggia",
    erklaerung_de: "Der Artikel 'la' verlangt das feminine Nomen pioggia."
  },
  {
    id: "N021",
    section: "Nomen",
    thema: "Plural",
    frage_de: "Wähle den passenden Plural: Mangio sempre molti ___ (Fische).",
    options_de: ["pesci", "pesce", "pescia", "pesce"],
    richtige_antwort: "pesci",
    erklaerung_de: "Nomen auf -e (il pesce) enden im Plural auf -i (i pesci)."
  },
  {
    id: "N022",
    section: "Nomen",
    thema: "Genus",
    frage_de: "Wähle das passende Wort: Per cucinare uso un ottimo ___ d'oliva.",
    options_de: ["olio", "acqua", "salsa", "burra"],
    richtige_antwort: "olio",
    erklaerung_de: "'Un ottimo' ist maskulin, passt perfekt zu 'olio'."
  },
  {
    id: "N023",
    section: "Nomen",
    thema: "Plural",
    frage_de: "Wähle den passenden Plural: Sulla tavola ci sono quattro ___ (Gläser).",
    options_de: ["bicchieri", "bicchiere", "bicchiera", "bicchieri"],
    richtige_antwort: "bicchieri",
    erklaerung_de: "'Bicchiere' (m.) endet im Plural regelmäßig auf -i."
  },
  {
    id: "N024",
    section: "Nomen",
    thema: "Genus",
    frage_de: "Wähle das passende Nomen: Ho prenotato una camera in un lussuoso ___.",
    options_de: ["albergo", "casa", "spiaggia", "città"],
    richtige_antwort: "albergo",
    erklaerung_de: "'In un lussuoso' fordert ein maskulines Nomen mit Vokalanlaut."
  },
  {
    id: "N025",
    section: "Nomen",
    thema: "Plural",
    frage_de: "Wähle den korrekten Plural: I ___ (Züge) arrivano spesso in ritardo.",
    options_de: ["treni", "treno", "trene", "trena"],
    richtige_antwort: "treni",
    erklaerung_de: "Der Plural von treno (m.) lautet regularly treni."
  },
  {
    id: "N026",
    section: "Nomen",
    thema: "Genus",
    frage_de: "Wähle das passende Nomen: Compriamo una nuova ___ di legno per la cucina.",
    options_de: ["sedia", "tavolo", "armadio", "piatto"],
    richtige_antwort: "sedia",
    erklaerung_de: "Der weibliche Artikel 'una' passt zum femininen Nomen sedia."
  },
  {
    id: "N027",
    section: "Nomen",
    thema: "Plural",
    frage_de: "Wähle den passenden Plural: In Italia ci sono molte ___ d'arte.",
    options_de: ["città", "città", "cittae", "cittai"],
    richtige_antwort: "città",
    erklaerung_de: "Nomen mit Akzent am Ende (città) verändern sich im Plural nicht."
  },
  {
    id: "N028",
    section: "Nomen",
    thema: "Genus",
    frage_de: "Wähle das passende Nomen: Devo comprare un nuovo ___ da compilare.",
    options_de: ["modulo", "domanda", "carta", "firma"],
    richtige_antwort: "modulo",
    erklaerung_de: "'Un nuovo' ist maskulin Singular, passt prima zu modulo."
  },
  {
    id: "N029",
    section: "Nomen",
    thema: "Plural",
    frage_de: "Wähle den passenden Plural: La polizia controlla i nostri ___ d'identità.",
    options_de: ["documenti", "documento", "documente", "documenta"],
    richtige_antwort: "documenti",
    erklaerung_de: "'documento' bildet den regulären Plural 'documenti'."
  },
  {
    id: "N030",
    section: "Nomen",
    thema: "Irregular",
    frage_de: "Wähle das korrekte Wort: Devo fare un esame del ___ (Blut).",
    options_de: ["sangue", "ossa", "dente", "medicina"],
    richtige_antwort: "sangue",
    erklaerung_de: "Blut heißt im Italienischen 'il sangue' (maskulin, endet auf -e)."
  },
  {
    id: "N031",
    section: "Nomen",
    thema: "Plural",
    frage_de: "Wähle den passenden Plural: Amo mangiare gli ___ (Spaghetti) con il pomodoro.",
    options_de: ["spaghetti", "spaghetto", "spaghette", "spaghetta"],
    richtige_antwort: "spaghetti",
    erklaerung_de: "Essen wird meist im Plural spaghetti verwendet (-i)."
  },
  {
    id: "N032",
    section: "Nomen",
    thema: "Genus",
    frage_de: "Wähle das passende Nomen: Questa è un'ottima ___ di caffè.",
    options_de: ["tazza", "bicchiere", "piatto", "cucchiaio"],
    richtige_antwort: "tazza",
    erklaerung_de: "Der weibliche apostrophierte Artikel 'un'ottima' erfordert tazza."
  },
  {
    id: "N033",
    section: "Nomen",
    thema: "Plural",
    frage_de: "Wähle den passenden Plural: Nel cestino ci sono molti ___ (Äpfel).",
    options_de: ["frutti", "frutta", "frutte", "frutta"],
    richtige_antwort: "frutti",
    erklaerung_de: "Frutto bildet den Plural frutti, wenn man einzelne Früchte meint."
  },
  {
    id: "N034",
    section: "Nomen",
    thema: "Genus",
    frage_de: "Wähle das passende Wort: Per andare all'estero serve il ___ in corso di validità.",
    options_de: ["passaporto", "carta", "patente", "tessera"],
    richtige_antwort: "passaporto",
    erklaerung_de: "Der Artikel 'il' fordert das maskuline Nomen passaporto."
  },
  {
    id: "N035",
    section: "Nomen",
    thema: "Plural",
    frage_de: "Wähle den passenden Plural: Ho prenotato due ___ (Schiffe) per le vacanze.",
    options_de: ["navi", "nave", "navie", "nava"],
    richtige_antwort: "navi",
    erklaerung_de: "Nave (f.) endet im Plural regelmäßig auf -i (navi)."
  },
  {
    id: "N036",
    section: "Nomen",
    thema: "Genus",
    frage_de: "Wähle das passende Nomen: Signora, mette la ___ per ritirare il pacco?",
    options_de: ["firma", "documento", "codice", "modulo"],
    richtige_antwort: "firma",
    erklaerung_de: "Der feminine Artikel 'la' passt hier zum Nomen 'firma'."
  },
  {
    id: "N037",
    section: "Nomen",
    thema: "Plural",
    frage_de: "Wähle den passenden Plural: I bambini piccoli amano guardare le ___ (Katzen).",
    options_de: ["gatte", "gatti", "gatta", "gatte"],
    richtige_antwort: "gatte",
    erklaerung_de: "'Le' ist der weibliche Plural-Artikel; fordert also gatte."
  },
  {
    id: "N038",
    section: "Nomen",
    thema: "Genus",
    frage_de: "Wähle das passende Genus: Ho mangiato un ___ (Brötchen) al bar storico.",
    options_de: ["panino", "mela", "pasta", "arancia"],
    richtige_antwort: "panino",
    erklaerung_de: "Unbestimmter Artikel 'un' verlangt das maskuline panino."
  },
  {
    id: "N039",
    section: "Nomen",
    thema: "Plural",
    frage_de: "Wähle den passenden Plural: I ___ (Hunde) di Chiara sono rumorosi.",
    options_de: ["cani", "cane", "canie", "cania"],
    richtige_antwort: "cani",
    erklaerung_de: "Il cane (m.) endet im Plural auf -i (i cani)."
  },
  {
    id: "N040",
    section: "Nomen",
    thema: "Genus",
    frage_de: "Wähle das passende Nomen: Ho preso un tè caldo senza ___.",
    options_de: ["zucchero", "sale", "limone", "acqua"],
    richtige_antwort: "zucchero",
    erklaerung_de: "Zucchero (Zucker) ist die passende Zutat für süßen Tee."
  },
  {
    id: "N041",
    section: "Nomen",
    thema: "Plural",
    frage_de: "Wähle den passenden Plural: Le ___ (Schulen) italiane riaprono a settembre.",
    options_de: ["scuole", "scuola", "scuoli", "scuoli"],
    richtige_antwort: "scuole",
    erklaerung_de: "Feminine Nomen auf -a enden im Plural auf -e (scuole)."
  },
  {
    id: "N042",
    section: "Nomen",
    thema: "Genus",
    frage_de: "Wähle das passende Nomen: Per spedire la lettera serve un ___.",
    options_de: ["francobollo", "penna", "busta", "biglietto"],
    richtige_antwort: "francobollo",
    erklaerung_de: "'Un' ist maskulin, passt perfekt zu francobollo (Briefmarke)."
  },
  {
    id: "N043",
    section: "Nomen",
    thema: "Plural",
    frage_de: "Wähle den passenden Plural: Sulla piantina ci sono molti ___ (Vögel).",
    options_de: ["uccelli", "uccello", "uccelle", "uccelli"],
    richtige_antwort: "uccelli",
    erklaerung_de: "Uccello (Vogel) endet im Plural auf -i (uccelli)."
  },
  {
    id: "N044",
    section: "Nomen",
    thema: "Genus",
    frage_de: "Wähle das passende Nomen: Marco studia pianoforte e ama la ___ classica.",
    options_de: ["musica", "suono", "rumore", "quadro"],
    richtige_antwort: "musica",
    erklaerung_de: "Der weibliche Artikel 'la' passt perfekt zu musica."
  },
  {
    id: "N045",
    section: "Nomen",
    thema: "Plural",
    frage_de: "Wähle den passenden Plural: I ___ (Gebäude) storici si trovano nel centro della città.",
    options_de: ["palazzi", "palazzo", "palazze", "palazzi"],
    richtige_antwort: "palazzi",
    erklaerung_de: "Palazzo im Plural wandelt sich regelmäßig zu palazzi."
  },

  // ==========================================
  // SECTION 3: PRÄPOSITIONEN (P001 - P030)
  // ==========================================
  {
    id: "P001",
    section: "Präpositionen",
    thema: "Ort",
    frage_de: "Wähle Präposition: Stasera vado ___ cinema con la mia ragazza.",
    options_de: ["al", "a", "nel", "il"],
    richtige_antwort: "al",
    erklaerung_de: "andere al cinema (Verschmelzung von a + il)."
  },
  {
    id: "P002",
    section: "Präpositionen",
    thema: "Ort",
    frage_de: "Wähle Präposition: Questa estate andiamo in vacanza ___ Italia.",
    options_de: ["in", "a", "ad", "in"],
    richtige_antwort: "in",
    erklaerung_de: "Vor Ländernamen nutzen wir stets die einfache Präposition 'in'."
  },
  {
    id: "P003",
    section: "Präpositionen",
    thema: "Ort",
    frage_de: "Wähle Präposition: Abito ___ Roma da circa tre anni.",
    options_de: ["a", "in", "di", "da"],
    richtige_antwort: "a",
    erklaerung_de: "Vor Städtenamen nutzen wir stets die Präposition 'a'."
  },
  {
    id: "P004",
    section: "Präpositionen",
    thema: "Zeit",
    frage_de: "Wähle das verschmolzene Zeitglied: Torno a casa ___ tre del pomeriggio.",
    options_de: ["alle", "alle", "a le", "alle"],
    richtige_antwort: "alle",
    erklaerung_de: "Uhrzeiten werden mit la prep. articolata 'alle' eingeleitet."
  },
  {
    id: "P005",
    section: "Präpositionen",
    thema: "Herkunft",
    frage_de: "Wähle Präposition: Io sono ___ Berlino, ma ora abito a Milano.",
    options_de: ["di", "da", "di", "in"],
    richtige_antwort: "di",
    erklaerung_de: "Essere + di drückt die Herkunft (Heimatstadt) aus."
  },
  {
    id: "P006",
    section: "Präpositionen",
    thema: "Bewegung",
    frage_de: "Wähle Präposition: Vado ___ medico per una ricetta medica.",
    options_de: ["dal", "al", "da", "di"],
    richtige_antwort: "dal",
    erklaerung_de: "Zu Personen geht man mit 'da' + Artikel: dal medico."
  },
  {
    id: "P007",
    section: "Präpositionen",
    thema: "Ort",
    frage_de: "Wähle Präposition: Le chiavi della macchina sono ___ tavolo in salotto.",
    options_de: ["sul", "su", "il", "nel"],
    richtige_antwort: "sul",
    erklaerung_de: "'sul' bedeutet auf dem (su + il = sul)."
  },
  {
    id: "P008",
    section: "Präpositionen",
    thema: "Ort",
    frage_de: "Wähle Präposition: I bambini giocano ___ giardino della scuola.",
    options_de: ["nel", "in", "al", "lo"],
    richtige_antwort: "nel",
    erklaerung_de: "'nel' bedeutet in dem (in + il = nel)."
  },
  {
    id: "P009",
    section: "Präpositionen",
    thema: "Zugehörigkeit",
    frage_de: "Wähle Präposition: Il quaderno ___ studente è ordinatissimo.",
    options_de: ["dello", "del", "di lo", "dello"],
    richtige_antwort: "dello",
    erklaerung_de: "Ungerader Anlaut s+Konsonant fordert dello (di + lo)."
  },
  {
    id: "P010",
    section: "Präpositionen",
    thema: "Zweck",
    frage_de: "Wähle Präposition: Questo pacco regalo è ___ la mamma.",
    options_de: ["per", "da", "di", "a"],
    richtige_antwort: "per",
    erklaerung_de: "'per' bedeutet für und drückt den Empfänger aus."
  },
  {
    id: "P011",
    section: "Präpositionen",
    thema: "Gemeinschaft",
    frage_de: "Wähle Präposition: Vado al mercato ___ la mia amica tedesca Chiara.",
    options_de: ["con", "tra", "fra", "da"],
    richtige_antwort: "con",
    erklaerung_de: "'con' bedeutet mit und drückt Gemeinschaft aus."
  },
  {
    id: "P012",
    section: "Präpositionen",
    thema: "Alternative",
    frage_de: "Wähle Präposition: Ci sono circa due chilometri ___ la mia casa e la stazione.",
    options_de: ["tra", "in", "con", "tra"],
    richtige_antwort: "tra",
    erklaerung_de: "'tra' oder 'fra' bedeutet zwischen/unter."
  },
  {
    id: "P013",
    section: "Präpositionen",
    thema: "Bewegung",
    frage_de: "Wähle Präposition: Il treno parte ___ Roma per Milano alle undici.",
    options_de: ["da", "a", "di", "in"],
    richtige_antwort: "da",
    erklaerung_de: "Abfahrt von einem Ort wird mit 'da' ausgedrückt."
  },
  {
    id: "P014",
    section: "Präpositionen",
    thema: "Ort",
    frage_de: "Wähle Präposition: La farmacia si trova dritto ___ farmacia comunale.",
    options_de: ["alla", "a", "da", "alla"],
    richtige_antwort: "alla",
    erklaerung_de: "'alla' ist zu der (a + la = alla)."
  },
  {
    id: "P015",
    section: "Präpositionen",
    thema: "Zugehörigkeit",
    frage_de: "Wähle Präposition: La macchina ___ signora Rossi è parcheggiata lì.",
    options_de: ["della", "di la", "da la", "del"],
    richtige_antwort: "della",
    erklaerung_de: "Genitiv weiblich Singular: di + la = della."
  },
  {
    id: "P016",
    section: "Präpositionen",
    thema: "Ort",
    frage_de: "Wähle Präposition: Vado ___ ufficio postale a ritirare la lettera.",
    options_de: ["all'", "al", "in", "dall'"],
    richtige_antwort: "all'",
    erklaerung_de: "all' (a + l' vor Vokal wie ufficio)."
  },
  {
    id: "P017",
    section: "Präpositionen",
    thema: "Zeit",
    frage_de: "Wähle Präposition: Studio la lingua italiana ___ lunedì ___ venerdì.",
    options_de: ["dal / al", "di / a", "in / in", "dal / al"],
    richtige_antwort: "dal / al",
    erklaerung_de: "'von ... bis' im zeitlichen Bereich heißt 'dal ... al'."
  },
  {
    id: "P018",
    section: "Präpositionen",
    thema: "Ort",
    frage_de: "Wähle Präposition: Ripongo la spesa ___ frigorifero.",
    options_de: ["nel", "in", "sul", "del"],
    richtige_antwort: "nel",
    erklaerung_de: "'in dem' Kühlschrank schmilzt zu nel (in + il = nel)."
  },
  {
    id: "P019",
    section: "Präpositionen",
    thema: "Zeit",
    frage_de: "Wähle Präposition: Vivo in Italia ___ ottobre scorso.",
    options_de: ["da", "di", "a", "in"],
    richtige_antwort: "da",
    erklaerung_de: "'da' drückt einen Zustand seit einem bestimmten Zeitpunkt aus."
  },
  {
    id: "P020",
    section: "Präpositionen",
    thema: "Ort",
    frage_de: "Wähle Präposition: Gli studenti studiano in silenzio ___ biblioteca.",
    options_de: ["in", "a", "da", "in"],
    richtige_antwort: "in",
    erklaerung_de: "'in biblioteca' (in der Bibliothek) ist ein fester Ortsausdruck."
  },
  {
    id: "P021",
    section: "Präpositionen",
    thema: "Herkunft",
    frage_de: "Wähle Präposition: Questa ricetta è originaria ___ Sicilia.",
    options_de: ["della", "di", "da", "della"],
    richtige_antwort: "della",
    erklaerung_de: "Zugehörigkeit zu einer Region: della (di + la)."
  },
  {
    id: "P022",
    section: "Präpositionen",
    thema: "Ort",
    frage_de: "Wähle Präposition: Compro il latte ___ supermercato all'angolo.",
    options_de: ["al", "nel", "da", "al"],
    richtige_antwort: "al",
    erklaerung_de: "Einkaufen am Ort: al supermercato (a + il)."
  },
  {
    id: "P023",
    section: "Präpositionen",
    thema: "Material",
    frage_de: "Wähle Präposition: Ho comprato una bella camicia ___ cotone leggero.",
    options_de: ["di", "da", "con", "di"],
    richtige_antwort: "di",
    erklaerung_de: "Materialangaben werden mit 'di' eingeleitet (di cotone)."
  },
  {
    id: "P024",
    section: "Präpositionen",
    thema: "Ort",
    frage_de: "Wähle Präposition: I bambini vanno ___ scuola alle otto di mattina.",
    options_de: ["a", "in", "al", "da"],
    richtige_antwort: "a",
    erklaerung_de: "'andere a scuola' (zur Schule gehen) ist ein fester Ausdruck."
  },
  {
    id: "P025",
    section: "Präpositionen",
    thema: "Zugehörigkeit",
    frage_de: "Wähle Präposition: Il passaporto ___ amici è sul tavolo del salone.",
    options_de: ["degli", "dei", "di gli", "degli"],
    richtige_antwort: "degli",
    erklaerung_de: "Plural Genitiv vor Vokal: degli (di + gli)."
  },
  {
    id: "P026",
    section: "Präpositionen",
    thema: "Zeit",
    frage_de: "Wähle Präposition: Ho intenzione di finire il corso ___ un mese.",
    options_de: ["in", "tra", "da", "fra"],
    richtige_antwort: "in",
    erklaerung_de: "Fristangaben ('in einem Monat') werden mit in ausgedrückt."
  },
  {
    id: "P027",
    section: "Präpositionen",
    thema: "Ort",
    frage_de: "Wähle Präposition: I turisti arrivano ___ treno da Roma.",
    options_de: ["in", "con", "col", "in"],
    richtige_antwort: "in",
    erklaerung_de: "Verkehrsmittel werden meist mit einfacher Präposition 'in' genannt."
  },
  {
    id: "P028",
    section: "Präpositionen",
    thema: "Ort",
    frage_de: "Wähle Präposition: Devo andare ___ banca a fare un bonifico.",
    options_de: ["in", "alla", "a", "in"],
    richtige_antwort: "in",
    erklaerung_de: "'andere in banca' ist eine feste Richtungspräposition."
  },
  {
    id: "P029",
    section: "Präpositionen",
    thema: "Wohnort",
    frage_de: "Wähle Präposition: Abito al terzo piano ___ questo condominio.",
    options_de: ["di", "da", "in", "di"],
    richtige_antwort: "di",
    erklaerung_de: "'di questo' (von diesem) drückt die Zugehörigkeit aus."
  },
  {
    id: "P030",
    section: "Präpositionen",
    thema: "Ort",
    frage_de: "Wähle Präposition: Sabato facciamo una passeggiata ___ bosco comunale.",
    options_de: ["nel", "in", "al", "nel"],
    richtige_antwort: "nel",
    erklaerung_de: "Spaziergang im Wald: nel bosco (in + il = nel)."
  },

  // ==========================================
  // SECTION 4: ARTIKEL (A001 - A025)
  // ==========================================
  {
    id: "A001",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle bestimmten Artikel: ___ studente è molto diligente durante la lezione.",
    options_de: ["lo", "il", "l'", "la"],
    richtige_antwort: "lo",
    erklaerung_de: "Männliche Nomen mit s + Konsonant verlangen den Artikel lo."
  },
  {
    id: "A002",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle unbestimmten Artikel: Maria vorrebbe ordinare ___ antipasto.",
    options_de: ["un", "uno", "una", "un'"],
    richtige_antwort: "un",
    erklaerung_de: "Männliche Nomen vor Vokal verlangen den unbestimmten Artikel un."
  },
  {
    id: "A003",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle bestimmten Artikel: ___ amica di Laura studia medicina.",
    options_de: ["l'", "la", "le", "il"],
    richtige_antwort: "l'",
    erklaerung_de: "Weibliche Nomen im Singular vor Vokal verlangen l'."
  },
  {
    id: "A004",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle unbestimmten Artikel: Per fare questa ricetta mi serve ___ uovo.",
    options_de: ["un", "uno", "una", "un'"],
    richtige_antwort: "un",
    erklaerung_de: "Uovo ist männlich (lo uovo); unbestimmt heißt es un uovo."
  },
  {
    id: "A005",
    section: "Artikel",
    thema: "Partitiv",
    frage_de: "Wähle den Partitiv-Artikel: Vuoi ___ acqua fresca?",
    options_de: ["dell'", "del", "della", "delle"],
    richtige_antwort: "dell'",
    erklaerung_de: "Wasser ist feminin und beginnt mit Vokal: dell'acqua."
  },
  {
    id: "A006",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle bestimmten Artikel: ___ zia di Marco viene da Roma.",
    options_de: ["la", "lo", "l'", "il"],
    richtige_antwort: "la",
    erklaerung_de: "Zia ist weiblich Singular; verlangt einfach 'la'."
  },
  {
    id: "A007",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle bestimmten Artikel: Vorrei provare ___ gnocchi della casa.",
    options_de: ["gli", "i", "le", "lo"],
    richtige_antwort: "gli",
    erklaerung_de: "Plural männlich vor 'gn' erfordert den Artikel 'gli'."
  },
  {
    id: "A008",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle unbestimmten Artikel: Marco è ___ psicologo molto noto.",
    options_de: ["uno", "un", "una", "un'"],
    richtige_antwort: "uno",
    erklaerung_de: "Vor ps- verlangen männliche Nomen den Artikel uno."
  },
  {
    id: "A009",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle bestimmten Artikel: ___ bicchiere è sporco di vino.",
    options_de: ["il", "lo", "l'", "la"],
    richtige_antwort: "il",
    erklaerung_de: "Bicchiere ist maskulin; regularer Konsonant verlangt il."
  },
  {
    id: "A010",
    section: "Artikel",
    thema: "Partitiv",
    frage_de: "Wähle den Partitiv-Artikel: Compro ___ arance dolci al mercato.",
    options_de: ["delle", "del", "della", "dei"],
    richtige_antwort: "delle",
    erklaerung_de: "Plural von arancia (f.): delle arance."
  },
  {
    id: "A011",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle bestimmten Artikel: ___ cani nel parco abbaiano rumorosamente.",
    options_de: ["i", "gli", "le", "lo"],
    richtige_antwort: "i",
    erklaerung_de: "Männlich Plural vor Konsonanten: i cani."
  },
  {
    id: "A012",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle unbestimmten Artikel: Cerco ___ stanza in affitto a Milano.",
    options_de: ["una", "un", "uno", "un'"],
    richtige_antwort: "una",
    erklaerung_de: "Stanza beginnt mit s; ist feminin, verlangt also una."
  },
  {
    id: "A013",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle bestimmten Artikel: ___ zaino rosso sul letto è mio.",
    options_de: ["lo", "il", "l'", "la"],
    richtige_antwort: "lo",
    erklaerung_de: "Zaino beginnt mit z-; benötigt im Singular maskulin lo."
  },
  {
    id: "A014",
    section: "Artikel",
    thema: "Partitiv",
    frage_de: "Wähle den Partitiv-Artikel: Oggi ho comprato ___ pane in panetteria.",
    options_de: ["del", "della", "dei", "delle"],
    richtige_antwort: "del",
    erklaerung_de: "Pane ist männlich Singular unzählbar: del pane."
  },
  {
    id: "A015",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle bestimmten Artikel: ___ chiavi sono nella tasca della borsa.",
    options_de: ["le", "i", "gli", "la"],
    richtige_antwort: "le",
    erklaerung_de: "Chiave (f.) wird im Plural zu le chiavi."
  },
  {
    id: "A016",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle unbestimmten Artikel: Questa è ___ isola molto bella.",
    options_de: ["un'", "una", "un", "uno"],
    richtige_antwort: "un'",
    erklaerung_de: "Femina Nomen vor Vokal verlangen un' mit Apostroph."
  },
  {
    id: "A017",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle bestimmten Artikel: Mi passi ___ sale per l'insalata?",
    options_de: ["il", "lo", "la", "i"],
    richtige_antwort: "il",
    erklaerung_de: "Sale (Salz) ist im Italienischen maskulin (il sale)."
  },
  {
    id: "A018",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle bestimmten Artikel: ___ occhi di mio figlio sono azzurri.",
    options_de: ["gli", "i", "le", "lo"],
    richtige_antwort: "gli",
    erklaerung_de: "Occhio ist maskulin Plural vor Vokalanlaut: gli occhi."
  },
  {
    id: "A019",
    section: "Artikel",
    thema: "Partitiv",
    frage_de: "Wähle den Partitiv-Artikel: Abbiamo preparato ___ spaghetti deliziosi.",
    options_de: ["degli", "dei", "del", "della"],
    richtige_antwort: "degli",
    erklaerung_de: "Partitiv Plural von spaghetto: degli spaghetti."
  },
  {
    id: "A020",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle bestimmten Artikel: ___ stazione si trova vicino al semaforo.",
    options_de: ["la", "il", "l'", "lo"],
    richtige_antwort: "la",
    erklaerung_de: "Stazione ist feminin im Singular; verlangt 'la'."
  },
  {
    id: "A021",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle unbestimmten Artikel: Mi consiglia ___ buon medico a Milano?",
    options_de: ["un", "uno", "una", "un'"],
    richtige_antwort: "un",
    erklaerung_de: "Buon beginnt mit Konsonant, maskulin Singular: un."
  },
  {
    id: "A022",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle bestimmten Artikel: ___ albergo è molto accogliente.",
    options_de: ["l'", "il", "lo", "la"],
    richtige_antwort: "l'",
    erklaerung_de: "Albergo (m.) beginnt mit Vokal, also l'albergo."
  },
  {
    id: "A023",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle bestimmten Artikel: Portate ___ ombrelli stasera?",
    options_de: ["gli", "i", "le", "lo"],
    richtige_antwort: "gli",
    erklaerung_de: "Ombrello (m.) im Plural vor Vokal verlangt gli."
  },
  {
    id: "A024",
    section: "Artikel",
    thema: "Partitiv",
    frage_de: "Wähle den Partitiv-Artikel: Compriamo ___ carne dal macellaio.",
    options_de: ["della", "del", "delle", "dei"],
    richtige_antwort: "della",
    erklaerung_de: "Carne ist weiblich Singular unzählbar: della carne."
  },
  {
    id: "A025",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle bestimmten Artikel: ___ patate fritte sono pronte.",
    options_de: ["le", "i", "gli", "la"],
    richtige_antwort: "le",
    erklaerung_de: "Patata ist feminin im Plural, erfordert le patate."
  },
  {
    id: "V081",
    section: "Verben",
    thema: "Congiuntivo",
    frage_de: "Wähle die passende Verbform: Vorrei che voi ___ la verità.",
    options_de: ["diciate", "diate", "dicate", "diceste"],
    richtige_antwort: "diciate",
    erklaerung_de: "Congiuntivo Presente von 'dire' (2. Pers. Plural) ist 'diciate'."
  },
  {
    id: "V082",
    section: "Verben",
    thema: "Congiuntivo",
    frage_de: "Wähle die passende Verbform: Pensiamo che loro ___ già partiti.",
    options_de: ["siano", "sono", "fossero", "sanno"],
    richtige_antwort: "siano",
    erklaerung_de: "Das Verb 'pensare' leitet einen Nebensatz im Congiuntivo ein (loro siano)."
  },
  {
    id: "V083",
    section: "Verben",
    thema: "Konditionalgefüge",
    frage_de: "Wähle die passende Verbform: Se io ___ più tempo, viaggerei di più.",
    options_de: ["avessi", "avrei", "abbia", "avrò"],
    richtige_antwort: "avessi",
    erklaerung_de: "Irrealer Konditionalsatz mit 'se' verlangt hier das Imperfetto del Congiuntivo (io avessi)."
  },
  {
    id: "V084",
    section: "Verben",
    thema: "Konditionalgefüge",
    frage_de: "Wähle die passende Verbform: Se tu studiassi di più, ___ l'esame di lingua.",
    options_de: ["passeresti", "passerai", "passassi", "passerebbe"],
    richtige_antwort: "passeresti",
    erklaerung_de: "Der Hauptsatz des irrealen Konditionalsatzes steht im Condizionale Presente (tu passeresti)."
  },
  {
    id: "V085",
    section: "Verben",
    thema: "Imperfetto",
    frage_de: "Wähle die passende Verbform: Loro ___ molto stanchi ieri sera dopo il lavoro.",
    options_de: ["erano", "sono", "saranno", "essere"],
    richtige_antwort: "erano",
    erklaerung_de: "Zustandsbeschreibung in der Vergangenheit erfordert das Imperfetto (loro erano)."
  },
  {
    id: "V086",
    section: "Verben",
    thema: "Imperfetto",
    frage_de: "Wähle die passende Verbform: Quando ero piccolo, ___ sempre a calcio nel parco.",
    options_de: ["giocavo", "ho giocato", "giocai", "giocherò"],
    richtige_antwort: "giocavo",
    erklaerung_de: "Wiederkehrende Gewohnheiten in der Vergangenheit werden mit dem Imperfetto ausgedrückt."
  },
  {
    id: "V087",
    section: "Verben",
    thema: "Futuro",
    frage_de: "Wähle die passende Verbform: Appena la mamma ___ a casa, ceneremo.",
    options_de: ["arriverà", "arriva", "arriverebbe", "arrivasse"],
    richtige_antwort: "arriverà",
    erklaerung_de: "Bei Zukünftigkeit in temporalen Nebensätzen steht im Italienischen das Futuro Semplice."
  },
  {
    id: "V088",
    section: "Verben",
    thema: "Imperfetto",
    frage_de: "Wähle die passende Verbform: Mentre noi ___, è suonato all'improvviso il telefono.",
    options_de: ["mangiavamo", "abbiamo mangiato", "mangeremo", "mangiamo"],
    richtige_antwort: "mangiavamo",
    erklaerung_de: "Hintergrundhandlung/Verlauf in der Vergangenheit wird mit dem Imperfetto ausgedrückt."
  },
  {
    id: "V089",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle die passende Verbform: Ieri io ___ a casa tutto il giorno.",
    options_de: ["sono rimasto", "ho rimasto", "sono rimasti", "rimanessi"],
    richtige_antwort: "sono rimasto",
    erklaerung_de: "Das Verb 'rimanere' bildet das Passato Prossimo mit dem Hilfsverb 'essere'."
  },
  {
    id: "V090",
    section: "Verben",
    thema: "Congiuntivo",
    frage_de: "Wähle die passende Verbform: Dov'è Luca? — Credo che ___ ancora in ufficio.",
    options_de: ["sia", "è", "fosse", "starebbe"],
    richtige_antwort: "sia",
    erklaerung_de: "Die Meinungsäußerung 'credere che' verlangt den Congiuntivo Presente (lui sia)."
  },
  {
    id: "V091",
    section: "Verben",
    thema: "Formeller Imperativ",
    frage_de: "Wähle die passende Verbform: Signore, ___ la cortesia di firmare questo modulo.",
    options_de: ["faccia", "fa", "fai", "faceste"],
    richtige_antwort: "faccia",
    erklaerung_de: "Höflichkeitsform (Lei-Form) des Imperativs von 'fare' lautet 'faccia'."
  },
  {
    id: "V092",
    section: "Verben",
    thema: "Imperativ",
    frage_de: "Wähle die passende Verbform: Non ___ paura, tutto si risolverà presto!",
    options_de: ["avere", "hai", "abbia", "avrai"],
    richtige_antwort: "avere",
    erklaerung_de: "Der verneinte Imperativ der 2. Person Singular wird mit 'non + Infinitiv' gebildet."
  },
  {
    id: "V093",
    section: "Verben",
    thema: "Presente",
    frage_de: "Wähle die passende Verbform: Dobbiamo andarcene subito, si ___ molto tardi!",
    options_de: ["fa", "fanno", "faccia", "farebbe"],
    richtige_antwort: "fa",
    erklaerung_de: "'Farsi tardi' (spät werden) im Presente in der 3. Person Singular ist 'si fa'."
  },
  {
    id: "V094",
    section: "Verben",
    thema: "Konditionalgefüge",
    frage_de: "Wähle die passende Verbform: Se avessi saputo la notizia, ti ___ subito al telefono.",
    options_de: ["avrei chiamato", "avessi chiamato", "chiamerei", "chiamavo"],
    richtige_antwort: "avrei chiamato",
    erklaerung_de: "Konditionalgefüge der Vergangenheit verlangt im Hauptsatz das Condizionale Passato (avrei chiamato)."
  },
  {
    id: "V095",
    section: "Verben",
    thema: "Congiuntivo",
    frage_de: "Wähle die passende Verbform: Speriamo che domani ___ una splendida giornata di sole.",
    options_de: ["sia", "è", "fosse", "sarebbe"],
    richtige_antwort: "sia",
    erklaerung_de: "Hoffnungen mit 'speriamo che' leiten den Congiuntivo Presente ein (sia)."
  },
  {
    id: "V096",
    section: "Verben",
    thema: "Presente",
    frage_de: "Wähle die passende Verbform: Chiudi la finestra, per favore! ___ freddo qui dentro.",
    options_de: ["Fa", "È", "Ha", "Stai"],
    richtige_antwort: "Fa",
    erklaerung_de: "Meteorologische Ausdrücke wie 'kalt sein' werden mit 'fare' ausgedrückt: 'fa freddo'."
  },
  {
    id: "V097",
    section: "Verben",
    thema: "Futuro",
    frage_de: "Wähle die passende Verbform: Sabato prossimo noi ___ al mare a goderci il sole.",
    options_de: ["andremo", "siamo andati", "andremmo", "andiamo"],
    richtige_antwort: "andremo",
    erklaerung_de: "Zukünftige Handlungen ('sabato prossimo') verlangen das Futuro Semplice (noi andremo)."
  },
  {
    id: "V098",
    section: "Verben",
    thema: "Congiuntivo",
    frage_de: "Wähle die passende Verbform: Penso che questo vestito rosso ti ___ molto bene.",
    options_de: ["stia", "sta", "starebbe", "stesti"],
    richtige_antwort: "stia",
    erklaerung_de: "'Pensare che' verlangt nachfolgend den Congiuntivo Presente des Verbs 'stare' (tu stia)."
  },
  {
    id: "V099",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle die passende Verbform: I ragazzi ___ tutti i compiti di scuola due ore fa.",
    options_de: ["hanno finito", "finivano", "finiranno", "finiscano"],
    richtige_antwort: "hanno finito",
    erklaerung_de: "Abgeschlossene Handlung zu einem bestimmten historischen Zeitpunkt der Vergangenheit: Passato Prossimo."
  },
  {
    id: "V100",
    section: "Verben",
    thema: "Imperativ",
    frage_de: "Wähle die passende Verbform: Ragazzi, ___ i compiti e poi andate subito a letto!",
    options_de: ["fate", "fai", "facciate", "fanno"],
    richtige_antwort: "fate",
    erklaerung_de: "Imperativ der 2. Person Plural von 'fare' lautet 'fate'."
  },
  {
    id: "V101",
    section: "Verben",
    thema: "Imperfetto",
    frage_de: "Wähle die passende Verbform: Da piccolo non mi ___ mangiare le verdure.",
    options_de: ["piaceva", "piacevano", "è piaciuto", "piaceranno"],
    richtige_antwort: "piaceva",
    erklaerung_de: "'Mangiare le verdure' ist eine Infinitivkonstruktion, daher Singular-Form 'piaceva'."
  },
  {
    id: "V102",
    section: "Verben",
    thema: "Konditional",
    frage_de: "Wähle die passende Verbform: Se fossi ricco, ___ una grande imbarcazione.",
    options_de: ["comprerei", "comprassi", "comprerò", "compreresti"],
    richtige_antwort: "comprerei",
    erklaerung_de: "Der Hauptsatz eines irrealen Konditionalsatzes steht im Condizionale Presente (io comprerei)."
  },
  {
    id: "V103",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle die passende Verbform: Ieri sera Giulia ___ un romanzo giallo davvero entusiasmante.",
    options_de: ["ha letto", "leggeva", "leggerà", "leggesse"],
    richtige_antwort: "ha letto",
    erklaerung_de: "Ieri sera deutet auf eine einmalige, abgeschlossene Handlung hin: ha letto."
  },
  {
    id: "V104",
    section: "Verben",
    thema: "Imperativ",
    frage_de: "Wähle die passende Verbform: Per favore, ___ la porta d'ingresso quando esci!",
    options_de: ["chiudi", "chiuda", "chiudete", "chiuderai"],
    richtige_antwort: "chiudi",
    erklaerung_de: "Informeller Imperativ Sing. (tu) für ein -ere Verb lautet 'chiudi'."
  },
  {
    id: "V105",
    section: "Verben",
    thema: "Trapassato Prossimo",
    frage_de: "Wähle die passende Verbform: Non mi ___ che saresti venuto stasera a cena.",
    options_de: ["avevi detto", "hai detto", "dica", "dicesti"],
    richtige_antwort: "avevi detto",
    erklaerung_de: "Vorvergangenheit zu einer Handlung im Kondizionale: Trapassato Prossimo (avevi detto)."
  },
  {
    id: "V106",
    section: "Verben",
    thema: "Congiuntivo",
    frage_de: "Wähle die passende Verbform: Spero che tu ___ presto la tua vecchia automobile.",
    options_de: ["venda", "vendi", "vendessi", "venderebbe"],
    richtige_antwort: "venda",
    erklaerung_de: "Das Hoffnungsverb 'sperare' verlangt hier den Congiuntivo Presente (tu venda)."
  },
  {
    id: "V107",
    section: "Verben",
    thema: "Trapassato Prossimo",
    frage_de: "Wähle die passende Verbform: Loro non ___ mai stati in Italia prima di quest'anno.",
    options_de: ["erano", "sono", "saranno", "fossero"],
    richtige_antwort: "erano",
    erklaerung_de: "Das Plusquamperfekt (Trapassato Prossimo) von 'essere' lautet hier 'erano stati'."
  },
  {
    id: "V108",
    section: "Verben",
    thema: "Reflexivverben",
    frage_de: "Wähle die passende Verbform: Ogni mattina Paolo ___ stanco alle sette di mattina.",
    options_de: ["si sveglia", "svegliarsi", "si sveglierà", "si svegliasse"],
    richtige_antwort: "si sveglia",
    erklaerung_de: "Reflexives Verb im Presente (3. Person Sg.): si sveglia (svegliarsi)."
  },
  {
    id: "V109",
    section: "Verben",
    thema: "Reflexivverben",
    frage_de: "Wähle die passende Verbform: Noi ci ___ molto divertiti alla festa di ieri sera.",
    options_de: ["siamo", "abbiamo", "saremo", "fossimo"],
    richtige_antwort: "siamo",
    erklaerung_de: "Reflexive Verben bilden zusammengesetzte Zeiten immer mit 'essere' (ci siamo divertiti)."
  },
  {
    id: "V110",
    section: "Verben",
    thema: "Imperativ",
    frage_de: "Wähle die passende Verbform: ___ pazienza, purtroppo la fila alla cassa è ancora molto lunga.",
    options_de: ["Abbi", "Hai", "Abbia", "Avete"],
    richtige_antwort: "Abbi",
    erklaerung_de: "Umgangssprachlicher Imperativ der 2. Pers. Sg. von 'avere' ist 'abbi'."
  },
  {
    id: "V111",
    section: "Verben",
    thema: "Konditionalgefüge",
    frage_de: "Wähle die passende Verbform: Se avessimo preso l'autobus, non ___ in ritardo.",
    options_de: ["saremmo arrivati", "fossimo arrivati", "arriveremmo", "arriveremo"],
    richtige_antwort: "saremmo arrivati",
    erklaerung_de: "Bedingungssatz der Vergangenheit verlangt im Hauptsatz Condizionale Passato (saremmo arrivati)."
  },
  {
    id: "V112",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle die passende Verbform: L'anno scorso i miei genitori ___ a Roma per le vacanze.",
    options_de: ["sono andati", "hanno andato", "andavano", "andassero"],
    richtige_antwort: "sono andati",
    erklaerung_de: "Bewegungsverb 'andare' verlangt 'essere' als Hilfsverb im Passato Prossimo."
  },
  {
    id: "V113",
    section: "Verben",
    thema: "Congiuntivo",
    frage_de: "Wähle die passende Verbform: Mi dispiace tanto che il vostro gatto ___ malato.",
    options_de: ["sia", "è", "fosse", "starebbe"],
    richtige_antwort: "sia",
    erklaerung_de: "Sätze der Gefühlsäußerung ('mi dispiace che') verlangen Congiuntivo Presente (lui sia)."
  },
  {
    id: "V114",
    section: "Verben",
    thema: "Konditional",
    frage_de: "Wähle die passende Verbform: Se io potessi, ___ molto volentieri in vacanza con te.",
    options_de: ["verrei", "venissi", "verrò", "verrebbe"],
    richtige_antwort: "verrei",
    erklaerung_de: "Hauptsatz eines irrealen Konditionalsatzes im Presente steht im Condizionale Presente (io verrei)."
  },
  {
    id: "V115",
    section: "Verben",
    thema: "Congiuntivo",
    frage_de: "Wähle die passende Verbform: Voglio assolutamente che loro ___ questo lavoro entro oggi.",
    options_de: ["facciano", "fanno", "faceste", "facessero"],
    richtige_antwort: "facciano",
    erklaerung_de: "Willensäußerung ('voglio che') fordert den Congiuntivo Presente des Verbs 'fare' (loro facciano)."
  },
  {
    id: "V116",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle die passende Verbform: Noi ___ i biglietti preventivamente per il teatro ieri.",
    options_de: ["abbiamo comprato", "compravamo", "compreremo", "compriamo"],
    richtige_antwort: "abbiamo comprato",
    erklaerung_de: "Das transitive Verb 'comprare' bildet das Passato Prossimo mit dem Hilfsverb 'avere'."
  },
  {
    id: "V117",
    section: "Verben",
    thema: "Imperativ",
    frage_de: "Wähle die passende Verbform: Ragazzi, ___ attenti quando attraversate la strada trafficata!",
    options_de: ["State", "Stai", "Stiate", "Siete"],
    richtige_antwort: "State",
    erklaerung_de: "Imperativ der 2. Person Plural (voi) des Verbs 'stare' lautet 'state'."
  },
  {
    id: "V118",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle die passende Verbform: Loro ci ___ che sarebbero venuti stasera a trovarci.",
    options_de: ["hanno promesso", "promettevano", "prometteranno", "promesso"],
    richtige_antwort: "hanno promesso",
    erklaerung_de: "Vollendetes Geschehen in der Vergangenheit verlangt Passato Prossimo (hanno promesso)."
  },
  {
    id: "V119",
    section: "Verben",
    thema: "Congiuntivo",
    frage_de: "Wähle die passende Verbform: Non credo affatto che a Luigi ___ la carne rossa.",
    options_de: ["piaccia", "piace", "piacesse", "piacerà"],
    richtige_antwort: "piaccia",
    erklaerung_de: "Das verneinte/gelenkte Glaubensverb 'non credere che' verlangt den Congiuntivo Presente (piaccia)."
  },
  {
    id: "V120",
    section: "Verben",
    thema: "Reflexivverben",
    frage_de: "Wähle die passende Verbform: Ieri sera io ___ stanchissimo alle dieci di sera.",
    options_de: ["mi sono addormentato", "ho addormentato", "mi addormentavo", "addormentarsi"],
    richtige_antwort: "mi sono addormentato",
    erklaerung_de: "Das reflexive Verb 'addormentarsi' bildet das Passato Prossimo mit 'essere' im Singular."
  },
  {
    id: "V121",
    section: "Verben",
    thema: "Konditionalgefüge",
    frage_de: "Wähle die passende Verbform: Se noi ___ più risparmi, faremmo un viaggio in Giappone.",
    options_de: ["avessimo", "avremmo", "abbiamo", "avuti"],
    richtige_antwort: "avessimo",
    erklaerung_de: "Im se-Satz steht bei irrealen Gefügen das Imperfetto del Congiuntivo (noi avessimo)."
  },
  {
    id: "V122",
    section: "Verben",
    thema: "Congiuntivo",
    frage_de: "Wähle die passende Verbform: Speravo vivamente che mio figlio ___ l'esame scolastico ieri.",
    options_de: ["avesse superato", "superasse", "superi", "supererebbe"],
    richtige_antwort: "avesse superato",
    erklaerung_de: "Die Vorvergangenheit im Verhältnis zur vergangenen Hoffnung fordert das Trapassato del Congiuntivo."
  },
  {
    id: "V123",
    section: "Verben",
    thema: "Futuro",
    frage_de: "Wähle die passende Verbform: Domani, non appena io ___ tempo libero, ti richiamerò.",
    options_de: ["avrò", "ho", "avrei", "avessi"],
    richtige_antwort: "avrò",
    erklaerung_de: "Die Zukünftigkeit in Temporalsätzen mit 'non appena/quando' verlangt das Futuro Semplice (avrò)."
  },
  {
    id: "V124",
    section: "Verben",
    thema: "Passato Prossimo",
    frage_de: "Wähle die passende Verbform: Due anni fa io ___ seriamente a studiare la lingua italiana.",
    options_de: ["ho cominciato", "cominciavo", "comincerò", "cominciassi"],
    richtige_antwort: "ho cominciato",
    erklaerung_de: "Puntuelle, abgeschlossene Handlung zu einem festen Zeitpunkt der Vergangenheit: ho cominciato."
  },
  {
    id: "V125",
    section: "Verben",
    thema: "Trapassato Prossimo",
    frage_de: "Wähle die passende Verbform: Voi ___ già pranzato quando io sono arrivato alla stazione.",
    options_de: ["avevate", "avete", "stavate", "aveste"],
    richtige_antwort: "avevate",
    erklaerung_de: "Die Vorvergangenheit zu einer vergangenen Handlung im Passato Prossimo lautet 'avevate pranzato'."
  },
  {
    id: "V126",
    section: "Verben",
    thema: "Formeller Imperativ",
    frage_de: "Wähle die passende Verbform: Signora, ___ pure la borsa qui sulla sedia.",
    options_de: ["lasci", "lascia", "lascerà", "lasciate"],
    richtige_antwort: "lasci",
    erklaerung_de: "Der formelle Imperativ (Lei-Form) für Verben der -are Konjugation endet auf -i: 'lasci'."
  },
  {
    id: "V127",
    section: "Verben",
    thema: "Congiuntivo",
    frage_de: "Wähle die passende Verbform: È fondamentale che tutti gli studenti ___ con attenzione questa lezione.",
    options_de: ["capiscano", "capiscono", "capissero", "capiranno"],
    richtige_antwort: "capiscano",
    erklaerung_de: "Unpersönliche Ausdrücke ('è fondamentale che') erfordern den Congiuntivo (capiscano)."
  },
  {
    id: "V128",
    section: "Verben",
    thema: "Futuro",
    frage_de: "Wähle die passende Verbform: Stasera noi ___ una pizza deliziosa in quel locale.",
    options_de: ["mangeremo", "abbiamo mangiato", "mangiavamo", "mangiassimo"],
    richtige_antwort: "mangeremo",
    erklaerung_de: "Zukünftige Handlung am Abend des heutigen Tages verlangt das Futuro Semplice."
  },
  {
    id: "V129",
    section: "Verben",
    thema: "Konditionalgefüge",
    frage_de: "Wähle die passende Verbform: Se tu ci ___ ieri pomeriggio, ti avremmo prestato aiuto.",
    options_de: ["avessi chiamato", "avresti chiamato", "chiamassi", "chiameresti"],
    richtige_antwort: "avessi chiamato",
    erklaerung_de: "Bedingungssatz mit 'se' verlangt bei Vergangenheiten das Congiuntivo Trapassato (tu avessi chiamato)."
  },
  {
    id: "V130",
    section: "Verben",
    thema: "Imperfetto",
    frage_de: "Wähle die passende Verbform: Mio nonno ___ fare una lunga passeggiata ogni tardo pomeriggio.",
    options_de: ["amava", "ha amato", "amerà", "amasse"],
    richtige_antwort: "amava",
    erklaerung_de: "Wiederkehrende Gewohnheiten in der Vergangenheit beschreibt das Imperfetto (lui amava)."
  },
  {
    id: "N046",
    section: "Nomen",
    thema: "Genere",
    frage_de: "Wähle das korrekte Nomen: La ___ svizzera è famosa in tutto il mondo per il suo eccellente cioccolato.",
    options_de: ["popolazione", "cittadino", "paese", "uomo"],
    richtige_antwort: "popolazione",
    erklaerung_de: "Das Wort 'popolazione' ist feminin und passt zum Artikel 'la'."
  },
  {
    id: "N047",
    section: "Nomen",
    thema: "Plurale",
    frage_de: "Wähle den Plural von Straße: Le ___ di Firenze sono estremamente ricche di storia e arte.",
    options_de: ["strade", "strada", "stradi", "stradone"],
    richtige_antwort: "strade",
    erklaerung_de: "Der Plural von 'strada' (f.) lautet 'strade'."
  },
  {
    id: "N048",
    section: "Nomen",
    thema: "Plurale",
    frage_de: "Wähle das korrekte Nomen: La zia prepara sempre delle ottime ___ di mele per la domenica.",
    options_de: ["torte", "torti", "torta", "torto"],
    richtige_antwort: "torte",
    erklaerung_de: "Der Plural von 'torta' ist 'torte' und passt zum Artikel 'delle'."
  },
  {
    id: "N049",
    section: "Nomen",
    thema: "Genere",
    frage_de: "Wähle das passende Nomen: Al bar ho ordinato subito un bel bicchiere di ___ frizzante.",
    options_de: ["acqua", "acquee", "acque", "acqui"],
    richtige_antwort: "acqua",
    erklaerung_de: "'Acqua' (Wasser) ist ein weibliches Nomen im Singular."
  },
  {
    id: "N050",
    section: "Nomen",
    thema: "Genere",
    frage_de: "Wähle das passende Nomen: Quel ___ condominiale è sempre pieno di fiori colorati e profumati.",
    options_de: ["giardino", "giardini", "giardina", "giardine"],
    richtige_antwort: "giardino",
    erklaerung_de: "Der Artikel 'quel' fordert ein maskulines Singular-Nomen: 'giardino'."
  },
  {
    id: "N051",
    section: "Nomen",
    thema: "Plurale",
    frage_de: "Wähle das passende Nomen: Abbiamo visto moltissime ___ turistiche ad accogliere i visitatori in centro.",
    options_de: ["guide", "guida", "guidi", "guido"],
    richtige_antwort: "guide",
    erklaerung_de: "Der Plural des femininen Nomens 'guida' (Fremdenführer/in) lautet 'guide'."
  },
  {
    id: "N052",
    section: "Nomen",
    thema: "Genere",
    frage_de: "Wähle das passende Nomen: Il ___ prezioso del medico specialista è stato estremamente utile e rassicurante.",
    options_de: ["consiglio", "consigli", "consiglia", "consiglie"],
    richtige_antwort: "consiglio",
    erklaerung_de: "Der Artikel 'il' fordert das maskuline Singular-Nomen 'consiglio' (Rat)."
  },
  {
    id: "N053",
    section: "Nomen",
    thema: "Plurale",
    frage_de: "Wähle das passende Nomen: Tutte le ___ della prima fila in teatro sono già state occupate.",
    options_de: ["sedie", "sedi", "sedia", "sediae"],
    richtige_antwort: "sedie",
    erklaerung_de: "Der Plural von 'sedia' (Stuhl) lautet regulär 'sedie'."
  },
  {
    id: "N054",
    section: "Nomen",
    thema: "Plurale",
    frage_de: "Wähle den Plural von Vogel: I ___ cantano felici e spensierati sopra gli alberi fioriti.",
    options_de: ["uccelli", "uccello", "uccelle", "uccella"],
    richtige_antwort: "uccelli",
    erklaerung_de: "Der Plural des maskulinen Nomens 'uccello' lautet 'uccelli'."
  },
  {
    id: "N055",
    section: "Nomen",
    thema: "Genere",
    frage_de: "Wähle das passende Nomen: Dalla finestra del nostro hotel si gode di una ___ panoramica mozzafiato.",
    options_de: ["vista", "viste", "visto", "visti"],
    richtige_antwort: "vista",
    erklaerung_de: "Der unbestimmte Artikel 'una' fordert das feminine Singular-Nomen 'vista'."
  },
  {
    id: "N056",
    section: "Nomen",
    thema: "Ausnahmen",
    frage_de: "Wähle das passende Nomen: Si sa da sempre che il fumo nuoce gravemente alla propria ___.",
    options_de: ["salute", "saluti", "saluta", "salutee"],
    richtige_antwort: "salute",
    erklaerung_de: "'Salute' ist ein feminines Nomen im Singular, das auf '-e' endet."
  },
  {
    id: "N057",
    section: "Nomen",
    thema: "Ausnahmen",
    frage_de: "Wähle das passende Nomen: Hai comprato dell'ottimo ___ fresco dal fornaio per la cena?",
    options_de: ["pane", "pani", "pana", "panee"],
    richtige_antwort: "pane",
    erklaerung_de: "'Pane' ist ein maskulines Nomen im Singular, das auf '-e' endet."
  },
  {
    id: "N058",
    section: "Nomen",
    thema: "Plurale",
    frage_de: "Wähle das passende Nomen: In Italia ci sono moltissime ___ d'arte di inestimabile valore storico.",
    options_de: ["opere", "operi", "opera", "opero"],
    richtige_antwort: "opere",
    erklaerung_de: "Der Plural des femininen Nomens 'opera' lautet 'opere'."
  },
  {
    id: "N059",
    section: "Nomen",
    thema: "Ausnahmen",
    frage_de: "Wähle das passende Nomen: Il professore oggi spiegherà una ___ molto difficile di grammatica.",
    options_de: ["lezione", "lezioni", "leziono", "leziona"],
    richtige_antwort: "lezione",
    erklaerung_de: "Nomen auf '-zione' sind im Italienischen immer feminin im Singular."
  },
  {
    id: "N060",
    section: "Nomen",
    thema: "Plurale",
    frage_de: "Wähle das passende Nomen: Le bibite fresche si trovano tutte all'interno del ___.",
    options_de: ["frigorifero", "frigoriferi", "frigorifera", "frigorifere"],
    richtige_antwort: "frigorifero",
    erklaerung_de: "Der Artikel 'del' (di + il) fordert ein maskulines Singular-Nomen: frigorifero."
  },
  {
    id: "N061",
    section: "Nomen",
    thema: "Genere",
    frage_de: "Wähle das passende Nomen: Mio fratello maggiore studia con passione la ___ naturale all'università.",
    options_de: ["scienza", "scienze", "scienzo", "scienzi"],
    richtige_antwort: "scienza",
    erklaerung_de: "Der Artikel 'la' verlangt das feminine Singular-Nomen 'scienza'."
  },
  {
    id: "N062",
    section: "Nomen",
    thema: "Plurale",
    frage_de: "Wähle das passende Nomen: Ho lavato con cura tutte le ___ sporche che erano in cucina.",
    options_de: ["tazze", "tazza", "tazzi", "tazzo"],
    richtige_antwort: "tazze",
    erklaerung_de: "Der Plural des weiblichen Nomens 'tazza' lautet 'tazze'."
  },
  {
    id: "N063",
    section: "Nomen",
    thema: "Ausnahmen",
    frage_de: "Wähle das passende Nomen: Il ___ rosso Marte è visibile stasera a occhio nudo.",
    options_de: ["pianeta", "pianete", "pianeti", "pianeto"],
    richtige_antwort: "pianeta",
    erklaerung_de: "'Pianeta' ist trotz seiner Endung auf '-a' ein maskulines Nomen: il pianeta."
  },
  {
    id: "N064",
    section: "Nomen",
    thema: "Fremdwörter",
    frage_de: "Wähle das passende Nomen: Il ___ innovativo di questo lussuoso palazzo è decisamente moderno.",
    options_de: ["design", "designe", "designi", "designa"],
    richtige_antwort: "design",
    erklaerung_de: "Fremdwörter (wie 'design') verändern im Plural ihre Form im Italienischen nicht."
  },
  {
    id: "N065",
    section: "Nomen",
    thema: "Ausnahmen",
    frage_de: "Wähle das passende Nomen: Questi ___ di velluto blu sono troppo stretti ed eleganti per me.",
    options_de: ["pantaloni", "pantalone", "pantalona", "pantalonie"],
    richtige_antwort: "pantaloni",
    erklaerung_de: "'Pantaloni' (Hose) wird im Italienischen meist im Plural verwendet."
  },
  {
    id: "N066",
    section: "Nomen",
    thema: "Plurale",
    frage_de: "Wähle den Plural von Schlüssel: Hai preso le ___ della macchina prima di uscire in fretta?",
    options_de: ["chiavi", "chiave", "chiava", "chiavo"],
    richtige_antwort: "chiavi",
    erklaerung_de: "Der Plural von 'chiave' (f.) lautet 'chiavi'."
  },
  {
    id: "N067",
    section: "Nomen",
    thema: "Genere",
    frage_de: "Wähle das passende Nomen: Il delizioso ___ di pomodoro e basilico bolle sul fuoco.",
    options_de: ["sugo", "sughi", "suga", "sughe"],
    richtige_antwort: "sugo",
    erklaerung_de: "Sugo (Sauce/Sugo) ist maskulin Singular im Italienischen."
  },
  {
    id: "N068",
    section: "Nomen",
    thema: "Plurale",
    frage_de: "Wähle das passende Nomen: Loro purtroppo hanno fatto parecchi ___ grammaticali nel testo scritto.",
    options_de: ["errori", "errore", "errora", "erroree"],
    richtige_antwort: "errori",
    erklaerung_de: "Plural von 'errore' (m.) lautet 'errori' (Fehler)."
  },
  {
    id: "N069",
    section: "Nomen",
    thema: "Ausnahmen",
    frage_de: "Wähle das passende Nomen: Quella famosa cantante lirica possiede una ___ magnifica e calda.",
    options_de: ["voce", "voci", "voca", "vocee"],
    richtige_antwort: "voce",
    erklaerung_de: "'Voce' (Stimme) ist ein feminines Nomen, das im Singular auf '-e' endet."
  },
  {
    id: "N070",
    section: "Nomen",
    thema: "Plurale",
    frage_de: "Wähle das passende Nomen: In autunno cadono inesorabilmente tutte le ___ secche dagli alberi.",
    options_de: ["foglie", "foglia", "fogli", "foglio"],
    richtige_antwort: "foglie",
    erklaerung_de: "Der Plural des weiblichen Nomens 'foglia' lautet 'foglie' (Blätter)."
  },
  {
    id: "N071",
    section: "Nomen",
    thema: "Plurale",
    frage_de: "Wähle das passende Nomen: Tutte le ___ della città antica sono accessibili a piedi.",
    options_de: ["parti", "parte", "parta", "parto"],
    richtige_antwort: "parti",
    erklaerung_de: "'Parte' (Teil) ist feminin; der korrekte Plural lautet 'parti'."
  },
  {
    id: "N072",
    section: "Nomen",
    thema: "Plurale",
    frage_de: "Wähle den Plural von Blume: Ho comprato un coloratissimo mazzo di ___ profumati per la mamma.",
    options_de: ["fiori", "fiore", "fiora", "fiorie"],
    richtige_antwort: "fiori",
    erklaerung_de: "Plural des maskulinen Nomens 'fiore' lautet 'fiori'."
  },
  {
    id: "N073",
    section: "Nomen",
    thema: "Ausnahmen",
    frage_de: "Wähle das passende Nomen: Hai finito la delicata ___ del testo dall'italiano al tedesco?",
    options_de: ["traduzione", "traduzioni", "traduziono", "traduziona"],
    richtige_antwort: "traduzione",
    erklaerung_de: "Nomen auf '-zione' sind im Singular immer feminin: traduzione."
  },
  {
    id: "N074",
    section: "Nomen",
    thema: "Plurale",
    frage_de: "Wähle den Plural von Kartoffel: Vorrei mangiare una porzione croccante di ___ al forno.",
    options_de: ["patate", "patata", "patati", "patato"],
    richtige_antwort: "patate",
    erklaerung_de: "Der Plural des weiblichen Nomens 'patata' lautet 'patate'."
  },
  {
    id: "N075",
    section: "Nomen",
    thema: "Genere",
    frage_de: "Wähle das passende Nomen: Sabato scorso la ___ per Milano era affollata di macchine.",
    options_de: ["autostrada", "autostrade", "autostrado", "autostradi"],
    richtige_antwort: "autostrada",
    erklaerung_de: "Der Artikel 'la' deutet auf das feminine Singular-Nomen 'autostrada' hin."
  },
  {
    id: "N076",
    section: "Nomen",
    thema: "Ausnahmen",
    frage_de: "Wähle das passende Nomen: Il ___ cruciale trattato in questa conferenza internazionale è l'ambiente.",
    options_de: ["tema", "teme", "temi", "temo"],
    richtige_antwort: "tema",
    erklaerung_de: "'Tema' ist trotz der Endung auf '-a' im Italienischen maskulin (il tema)."
  },
  {
    id: "N077",
    section: "Nomen",
    thema: "Ausnahmen",
    frage_de: "Wähle das passende Nomen: Quella borsa di marca è interamente fatta di ___ di vitello.",
    options_de: ["pelle", "pelli", "pella", "pellee"],
    richtige_antwort: "pelle",
    erklaerung_de: "Pelle (Leder/Haut) ist ein feminines Nomen im Singular und endet auf -e."
  },
  {
    id: "N078",
    section: "Nomen",
    thema: "Genere",
    frage_de: "Wähle das passende Nomen: In quella gelateria artigianale servono un ottimo ___ al pistacchio.",
    options_de: ["gelato", "gelati", "gelata", "gelate"],
    richtige_antwort: "gelato",
    erklaerung_de: "Gelato (Eis) ist männlich im Singular: un ottimo gelato."
  },
  {
    id: "N079",
    section: "Nomen",
    thema: "Genere",
    frage_de: "Wähle das passende Nomen: Vado immediatamente a fare la ___ settimanale al supermercato.",
    options_de: ["spesa", "spese", "speso", "spesi"],
    richtige_antwort: "spesa",
    erklaerung_de: "Umgangssprachlich heißt einkaufen gehen 'fare la spesa' (f. Singular)."
  },
  {
    id: "N080",
    section: "Nomen",
    thema: "Akzentuierte Nomen",
    frage_de: "Wähle das passende Nomen: Al mattino mi piace molto godermi l'intenso profumo del ___.",
    options_de: ["caffè", "caffé", "caffe", "caffeti"],
    richtige_antwort: "caffè",
    erklaerung_de: "Das Wort 'caffè' wird mit einem Gravis-Akzent auf dem letzten e geschrieben."
  },
  {
    id: "N081",
    section: "Nomen",
    thema: "Ausnahmen",
    frage_de: "Wähle das passende Nomen: Il ___ di capodanno tra amici è stato memorabile di gioia.",
    options_de: ["brindisi", "brindise", "brindiso", "brindisa"],
    richtige_antwort: "brindisi",
    erklaerung_de: "'Brindisi' (der Trinkspruch/Toast) ist im Italienischen maskulin und unveränderlich auf -i."
  },
  {
    id: "N082",
    section: "Nomen",
    thema: "Ausnahmen",
    frage_de: "Wähle das passende Nomen: Il ___ lastricato della scuola elementare è molto grande.",
    options_de: ["cortile", "cortili", "cortila", "cortilo"],
    richtige_antwort: "cortile",
    erklaerung_de: "Cortile (Hof) ist ein maskulines Nomen, das im Singular auf -e endet."
  },
  {
    id: "N083",
    section: "Nomen",
    thema: "Plurale",
    frage_de: "Wähle das passende Nomen: Ci sono moltissime splendide ___ colorate nel nostro giardino estivo.",
    options_de: ["rose", "rosa", "rosi", "roso"],
    richtige_antwort: "rose",
    erklaerung_de: "Der Plural des weiblichen Nomens 'rosa' lautet 'rose'."
  },
  {
    id: "N084",
    section: "Nomen",
    thema: "Genere",
    frage_de: "Wähle das passende Nomen: La ___ della nonna è sempre generosamente colma di biscotti fatti in casa.",
    options_de: ["dispensa", "dispense", "dispenso", "dispensi"],
    richtige_antwort: "dispensa",
    erklaerung_de: "Der feminine Artikel 'la' erfordert das Singular-Nomen 'dispensa' (Speisekammer)."
  },
  {
    id: "N085",
    section: "Nomen",
    thema: "Plurale",
    frage_de: "Wähle das passende Nomen: L'insegnante di scuola ha distribuito con calma tutte le ___ degli esercizi.",
    options_de: ["schede", "scheda", "schedi", "schedo"],
    richtige_antwort: "schede",
    erklaerung_de: "Scheda (Arbeitsblatt); der Plural im Femininen lautet 'schede'."
  },
  {
    id: "N086",
    section: "Nomen",
    thema: "Genere",
    frage_de: "Wähle das passende Nomen: Quel cagnolino scodinzolava felice muovendo una ___ lunghissima.",
    options_de: ["coda", "code", "codo", "codi"],
    richtige_antwort: "coda",
    erklaerung_de: "Der unbestimmte Artikel 'una' fordert das feminine Singular-Nomen 'coda'."
  },
  {
    id: "N087",
    section: "Nomen",
    thema: "Ausnahmen",
    frage_de: "Wähle das passende Nomen: Questo difficile enigma matematico ha una ___ teorica davvero banale.",
    options_de: ["soluzione", "soluzioni", "soluziono", "soluziona"],
    richtige_antwort: "soluzione",
    erklaerung_de: "Endungen auf '-zione' sind im Singular immer feminin: soluzione."
  },
  {
    id: "N088",
    section: "Nomen",
    thema: "Genere",
    frage_de: "Wähle das passende Nomen: L'___ di calcio di ieri pomeriggio è stato intenso e faticoso.",
    options_de: ["allenamento", "allenamenti", "allenamenta", "allenamente"],
    richtige_antwort: "allenamento",
    erklaerung_de: "'Allenamento' (Training) ist maskulin im Singular."
  },
  {
    id: "N089",
    section: "Nomen",
    thema: "Genere",
    frage_de: "Wähle das passende Nomen: Francesco lavora con passione come ___ in un ristorante di lusso di Roma.",
    options_de: ["cuoco", "cuochi", "cuoca", "cuoche"],
    richtige_antwort: "cuoco",
    erklaerung_de: "Cuoco (Koch) ist die männliche Berufsbezeichnung im Singular."
  },
  {
    id: "N090",
    section: "Nomen",
    thema: "Plurale",
    frage_de: "Wähle den Plural von Buch: Mi piace moltissimo leggere i ___ storici nel tempo libero.",
    options_de: ["libri", "libro", "libre", "libra"],
    richtige_antwort: "libri",
    erklaerung_de: "Plural des maskulinen Nomens 'libro' lautet 'libri'."
  },
  {
    id: "N091",
    section: "Nomen",
    thema: "Plurale",
    frage_de: "Wähle il Plurale: Ci sono due ___ vuote di latte sottomesse nel frigorifero.",
    options_de: ["bottiglie", "bottiglia", "bottigli", "bottiglio"],
    richtige_antwort: "bottiglie",
    erklaerung_de: "Plural von 'bottiglia' lautet 'bottiglie' (Flaschen)."
  },
  {
    id: "N092",
    section: "Nomen",
    thema: "Genere",
    frage_de: "Wähle das passende Nomen: Il morbido ___ grigio del gatto di casa protegge dal freddo.",
    options_de: ["pelo", "peli", "pela", "pele"],
    richtige_antwort: "pelo",
    erklaerung_de: "Pelo (Fell/Haar des Tieres) ist maskulin im Singular."
  },
  {
    id: "N093",
    section: "Nomen",
    thema: "Ausnahmen",
    frage_de: "Wähle das passende Nomen: Il ___ caldo mediterraneo della costa siciliana attira molti turisti esteri.",
    options_de: ["clima", "climi", "clime", "climo"],
    richtige_antwort: "clima",
    erklaerung_de: "'Clima' ist trotz der Endung auf '-a' im Italienischen maskulin: il clima."
  },
  {
    id: "N094",
    section: "Nomen",
    thema: "Genere",
    frage_de: "Wähle das passende Nomen: Devo assolutamente scrivere una ___ formale di scuse al rettore.",
    options_de: ["lettera", "lettere", "lettero", "letteri"],
    richtige_antwort: "lettera",
    erklaerung_de: "Der unbestimmte Artikel 'una' fordert das feminine Singular-Nomen 'lettera'."
  },
  {
    id: "N095",
    section: "Nomen",
    thema: "Genere",
    frage_de: "Wähle das passende Nomen: Hai comprato la ___ bianca per impastare la focaccia di stasera?",
    options_de: ["farina", "farine", "farino", "farini"],
    richtige_antwort: "farina",
    erklaerung_de: "Farina (Mehl) ist ein feminines Singular-Nomen im Italienischen."
  },
  {
    id: "P031",
    section: "Präpositionen",
    thema: "Posizione",
    frage_de: "Wähle die passende Präposition: Il gatto dorme sempre beatamente ___ letto dei miei genitori.",
    options_de: ["sul", "nel", "col", "dal"],
    richtige_antwort: "sul",
    erklaerung_de: "Auf dem Bett schlafen: 'sul letto' (Verschmelzung von su + il)."
  },
  {
    id: "P032",
    section: "Präpositionen",
    thema: "Strumento",
    frage_de: "Wähle die passende Präposition: Ieri sera ho parlato a lungo ___ telefono con mio zio a Milano.",
    options_de: ["al", "col", "sul", "per"],
    richtige_antwort: "al",
    erklaerung_de: "Am Telefon sprechen lautet standardmäßig 'parlare al telefono' (a + il)."
  },
  {
    id: "P033",
    section: "Präpositionen",
    thema: "Luogo",
    frage_de: "Wähle die passende Präposition: Abito felicemente ___ centro storico di Firenze da molti anni.",
    options_de: ["nel", "in", "al", "del"],
    richtige_antwort: "nel",
    erklaerung_de: "Im historischen Zentrum wohnen: 'nel centro' (Verschmelzung von in + il = nel)."
  },
  {
    id: "P034",
    section: "Präpositionen",
    thema: "Persone",
    frage_de: "Wähle die passende Präposition: Devo urgentemente andare ___ dentista oggi alle quattro del pomeriggio.",
    options_de: ["dal", "al", "nel", "con"],
    richtige_antwort: "dal",
    erklaerung_de: "Zu Personen gehen/sein erfordert die Präposition 'da' (da + il = dal)."
  },
  {
    id: "P035",
    section: "Präpositionen",
    thema: "Mezzo",
    frage_de: "Wähle die passende Präposition: Loro purtroppo sono appena partiti ___ treno regionale per Roma.",
    options_de: ["con il", "in", "per", "dal"],
    richtige_antwort: "in",
    erklaerung_de: "Verkehrsmittel ohne nähere Spezifizierung verlangen die Präposition 'in': 'in treno'."
  },
  {
    id: "P036",
    section: "Präpositionen",
    thema: "Origine",
    frage_de: "Wähle die passende Präposition: Ho preso cautamente questo vecchio libro ___ scaffale più in alto.",
    options_de: ["dallo", "dal", "alla", "sulla"],
    richtige_antwort: "dallo",
    erklaerung_de: "Vom Regal herabnehmen: 'dallo scaffale' (da + lo = dallo)."
  },
  {
    id: "P037",
    section: "Präpositionen",
    thema: "Stato in luogo",
    frage_de: "Wähle die passende Präposition: Noi andiamo sempre ___ vacanza in Italia meridionale ogni estate.",
    options_de: ["in", "a", "per", "da"],
    richtige_antwort: "in",
    erklaerung_de: "In den Urlaub fahren/im Urlaub sein heißt 'andare in vacanza'."
  },
  {
    id: "P038",
    section: "Präpositionen",
    thema: "Relazione",
    frage_de: "Wähle die passende Präposition: Il treno ad alta velocità passa costantemente ___ Milano e Torino.",
    options_de: ["tra", "in", "da", "con"],
    richtige_antwort: "tra",
    erklaerung_de: "Zwischen zwei Orten: 'tra/fra' (tra Milano e Torino)."
  },
  {
    id: "P039",
    section: "Präpositionen",
    thema: "Stato in luogo",
    frage_de: "Wähle die passende Präposition: Ho messo accuratamente le chiavi ___ borsa ieri sera.",
    options_de: ["nella", "alla", "della", "sulla"],
    richtige_antwort: "nella",
    erklaerung_de: "In die Handtasche hineinlegen: 'nella borsa' (in + la = nella)."
  },
  {
    id: "P040",
    section: "Präpositionen",
    thema: "Possesso",
    frage_de: "Wähle die passende Präposition: ___ chi è questo bellissimo ombrello rosso bagnato dimenticato qui?",
    options_de: ["Di", "Da", "A", "Con"],
    richtige_antwort: "Di",
    erklaerung_de: "Zugehörigkeit/Besitz erfragen mit 'di chi' (wessen)."
  },
  {
    id: "P041",
    section: "Präpositionen",
    thema: "Moto a luogo",
    frage_de: "Wähle die passende Präposition: Siamo andati tutti insieme ___ ristorante tipico sabato sera.",
    options_de: ["al", "in", "nel", "dal"],
    richtige_antwort: "al",
    erklaerung_de: "Ins Restaurant gehen: 'andare al ristorante' (a + il = al)."
  },
  {
    id: "P042",
    section: "Präpositionen",
    thema: "Materia",
    frage_de: "Wähle die passende Präposition: Questa solida sedia da pranzo è interamente fatta ___ legno massiccio.",
    options_de: ["di", "da", "con", "per"],
    richtige_antwort: "di",
    erklaerung_de: "Materialbeschreibungen mit der einfachen Präposition 'di' (di legno)."
  },
  {
    id: "P043",
    section: "Präpositionen",
    thema: "Esclusione",
    frage_de: "Wähle die passende Präposition: Mi piace molto gustare il caffè espresso ___ zucchero.",
    options_de: ["senza", "di", "da", "per"],
    richtige_antwort: "senza",
    erklaerung_de: "'Senza' bedeutet 'ohne' und schließt den Zusatz von Zucker aus."
  },
  {
    id: "P044",
    section: "Präpositionen",
    thema: "Moto a luogo",
    frage_de: "Wähle die passende Präposition: Loro vanno molto spesso ___ cinema la domenica pomeriggio.",
    options_de: ["al", "nel", "in", "col"],
    richtige_antwort: "al",
    erklaerung_de: "In das Kino gehen lautet 'andare al cinema' (a + il = al)."
  },
  {
    id: "P045",
    section: "Präpositionen",
    thema: "Stato in luogo",
    frage_de: "Wähle die passende Präposition: La maglietta pulita si trova ___ armadio in camera da letto.",
    options_de: ["nell'", "in", "sul", "all'"],
    richtige_antwort: "nell'",
    erklaerung_de: "Im Schrank: 'nell'armadio' (Verschmelzung von in + l' = nell')."
  },
  {
    id: "P046",
    section: "Präpositionen",
    thema: "Relazione",
    frage_de: "Wähle die passende Präposition: Penso costantemente e intensamente ___ mio futuro professionale in Europa.",
    options_de: ["al", "sul", "nel", "con"],
    richtige_antwort: "al",
    erklaerung_de: "An etwas denken lautet im Italienischen 'pensare a qualcosa' (a + il = al)."
  },
  {
    id: "P047",
    section: "Präpositionen",
    thema: "Stato in luogo",
    frage_de: "Wähle die passende Präposition: I bambini felici giocano spensierati ___ parco giochi sotto casa.",
    options_de: ["nel", "al", "in", "col"],
    richtige_antwort: "nel",
    erklaerung_de: "Im Park spielen lautet 'nel parco' (in + il = nel)."
  },
  {
    id: "P048",
    section: "Präpositionen",
    thema: "Moto da luogo",
    frage_de: "Wähle die passende Präposition: Usciamo solitamente ___ discoteca a mezzanotte in punto.",
    options_de: ["dalla", "in", "alla", "con"],
    richtige_antwort: "dalla",
    erklaerung_de: "Aus einem weiblichen Nomen (la discoteca) herausgehen: 'dalla' (da + la)."
  },
  {
    id: "P049",
    section: "Präpositionen",
    thema: "Agente",
    frage_de: "Wähle die passende Präposition: Il pacco importante è stato finalmente consegnato ___ corriere.",
    options_de: ["dal", "al", "del", "sul"],
    richtige_antwort: "dal",
    erklaerung_de: "Passiv-Umschreibung mit Handlungsurheber (von dem): 'dal' (da + il)."
  },
  {
    id: "P050",
    section: "Präpositionen",
    thema: "Posizione",
    frage_de: "Wähle die passende Präposition: I ragazzi abitano ___ secondo piano di questa palazzina.",
    options_de: ["al", "nel", "sul", "dal"],
    richtige_antwort: "al",
    erklaerung_de: "Im X-ten Stock wohnen lautet 'abitare al piano' (a + il = al)."
  },
  {
    id: "P051",
    section: "Präpositionen",
    thema: "Posizione",
    frage_de: "Wähle die passende Präposition: Abbiamo camminato divertiti sotto ___ pioggia per più di un'ora.",
    options_de: ["la", "alla", "della", "nella"],
    richtige_antwort: "la",
    erklaerung_de: "'Sotto la pioggia' (unter dem Regen/im Regen) erfordert hier nur den direkten Artikel."
  },
  {
    id: "P052",
    section: "Präpositionen",
    thema: "Posizione",
    frage_de: "Wähle die passende Präposition: Appoggia pure i bicchieri puliti ___ tavola per la cena.",
    options_de: ["sulla", "nella", "dalla", "alla"],
    richtige_antwort: "sulla",
    erklaerung_de: "Auf den Esstisch legen: 'sulla tavola' (su + la = sulla)."
  },
  {
    id: "P053",
    section: "Präpositionen",
    thema: "Tempo",
    frage_de: "Wähle die passende Präposition: Studio la lingua italiana con passione ___ tre anni ormai.",
    options_de: ["da", "in", "per", "tra"],
    richtige_antwort: "da",
    erklaerung_de: "Handlungen, die in der Vergangenheit begannen und andauern: 'da' (seit)."
  },
  {
    id: "P054",
    section: "Präpositionen",
    thema: "Luogo",
    frage_de: "Wähle die passende Präposition: Accompagnami alla stazione e salutiamo Luigi ___ binario.",
    options_de: ["al", "in", "nel", "dal"],
    richtige_antwort: "al",
    erklaerung_de: "Am Gleis: 'al binario' (a + il = al)."
  },
  {
    id: "P055",
    section: "Präpositionen",
    thema: "Moto a luogo",
    frage_de: "Wähle die passende Präposition: Penso di andare ___ Italia meridionale la settimana prossima.",
    options_de: ["in", "all'", "a", "per"],
    richtige_antwort: "in",
    erklaerung_de: "Ländernamen als Ziel werden mit 'in' eingeleitet (in Italia)."
  },
  {
    id: "P056",
    section: "Präpositionen",
    thema: "Tempo",
    frage_de: "Wähle die passende Präposition: Arriveremo in cima alla montagna ___ tre ore d'automobile.",
    options_de: ["in", "tra", "da", "per"],
    richtige_antwort: "in",
    erklaerung_de: "Zeitdauer für das Gesamtereignis ('in/innerhalb von'): 'in'."
  },
  {
    id: "P057",
    section: "Präpositionen",
    thema: "Posizione",
    frage_de: "Wähle die passende Präposition: L'esercizio corretto è scritto ___ quaderno blu di scuola.",
    options_de: ["sul", "nel", "col", "al"],
    richtige_antwort: "sul",
    erklaerung_de: "Auf dem Heft/im Heft aufgeschrieben: 'sul quaderno' (su + il = sul)."
  },
  {
    id: "P058",
    section: "Präpositionen",
    thema: "Moto a luogo",
    frage_de: "Wähle die passende Präposition: Vado subito ___ mia amica Marta per ripassare gli esami.",
    options_de: ["dalla", "alla", "con", "nella"],
    richtige_antwort: "dalla",
    erklaerung_de: "Zu einer Person (weiblich) gehen: 'dalla' (da + la = dalla)."
  },
  {
    id: "P059",
    section: "Präpositionen",
    thema: "Posizione",
    frage_de: "Wähle die passende Präposition: Il computer portatile è appoggiato ___ scrivania d'ufficio.",
    options_de: ["sulla", "nella", "col", "alla"],
    richtige_antwort: "sulla",
    erklaerung_de: "Auf dem Schreibtisch liegend: 'sulla scrivania' (su + la = sulla)."
  },
  {
    id: "P060",
    section: "Präpositionen",
    thema: "Compagnia",
    frage_de: "Wähle die passende Präposition: Devo parlare urgentemente ___ direttore dell'hotel stamattina.",
    options_de: ["col", "al", "del", "dal"],
    richtige_antwort: "col",
    erklaerung_de: "Mit jemandem sprechen: 'parlare col' (con + il = col)."
  },
  {
    id: "P061",
    section: "Präpositionen",
    thema: "Origine",
    frage_de: "Wähle die passende Präposition: Questo treno ad alta velocità parte ___ binario cinque della stazione.",
    options_de: ["dal", "al", "del", "sul"],
    richtige_antwort: "dal",
    erklaerung_de: "Ausgangspunkt der Bewegung von einem Ort: 'dal binario' (da + il = dal)."
  },
  {
    id: "P062",
    section: "Präpositionen",
    thema: "Stato in luogo",
    frage_de: "Wähle die passende Präposition: Ho fortunatamente trovato quel vecchissimo quadro ___ soffitta di casa.",
    options_de: ["in", "nella", "alla", "dal"],
    richtige_antwort: "in",
    erklaerung_de: "Ort ohne bestimmten Artikel dahinter (auf dem Dachboden): 'in soffitta'."
  },
  {
    id: "P063",
    section: "Präpositionen",
    thema: "Posizione",
    frage_de: "Wähle die passende Präposition: Il cane di famiglia dorme pacificamente ___ sedia rossa del salone.",
    options_de: ["sulla", "nella", "all'", "della"],
    richtige_antwort: "sulla",
    erklaerung_de: "Auf dem roten Stuhl liegend: 'sulla sedia' (su + la = sulla)."
  },
  {
    id: "P064",
    section: "Präpositionen",
    thema: "Fine",
    frage_de: "Wähle die passende Präposition: Siete finalmente pronti ___ uscire stasera con noi?",
    options_de: ["per", "a", "di", "da"],
    richtige_antwort: "per",
    erklaerung_de: "Zweck oder Zielrichtung ('bereit zu/für'): 'per'."
  },
  {
    id: "P065",
    section: "Präpositionen",
    thema: "Materia",
    frage_de: "Wähle die passende Präposition: Quella bellissima giacca elegante deve essere ___ pelle marrone.",
    options_de: ["di", "da", "con", "per"],
    richtige_antwort: "di",
    erklaerung_de: "Materialangaben werden im Italienischen mit 'di' eingeleitet (di pelle)."
  },
  {
    id: "P066",
    section: "Präpositionen",
    thema: "Stato in luogo",
    frage_de: "Wähle die passende Präposition: Mi piace immensamente camminare ___ spiaggia al tramonto estivo.",
    options_de: ["sulla", "nella", "alla", "dalla"],
    richtige_antwort: "sulla",
    erklaerung_de: "Auf dem Strand laufen: 'sulla spiaggia' (su + la = sulla)."
  },
  {
    id: "P067",
    section: "Präpositionen",
    thema: "Relazione",
    frage_de: "Wähle die passende Präposition: La farmacia di turno si trova proprio ___ supermercato all'angolo.",
    options_de: ["accanto al", "davanti", "vicino", "con"],
    richtige_antwort: "accanto al",
    erklaerung_de: "Neben dem Supermarkt liegen lautet 'accanto al' (accanto + a + il)."
  },
  {
    id: "P068",
    section: "Präpositionen",
    thema: "Moto da luogo",
    frage_de: "Wähle die passende Präposition: Loro provengono ___ Germania settentrionale o dall'Austria?",
    options_de: ["dalla", "in", "con", "per"],
    richtige_antwort: "dalla",
    erklaerung_de: "Herkunft aus einem Land (weiblich): 'dalla Germania' (da + la)."
  },
  {
    id: "P069",
    section: "Präpositionen",
    thema: "Materia",
    frage_de: "Wähle die passende Präposition: Molti compiti di matematica si fanno ___ matita alle elementari.",
    options_de: ["a", "di", "con", "da"],
    richtige_antwort: "a",
    erklaerung_de: "Mit Bleistift schreiben/zeichnen lautet im Italienischen 'scrivere a matita'."
  },
  {
    id: "P070",
    section: "Präpositionen",
    thema: "Stato in luogo",
    frage_de: "Wähle die passende Präposition: La nostra nuova macchina è comodamente parcheggiata ___ garage.",
    options_de: ["nel", "in", "sul", "al"],
    richtige_antwort: "nel",
    erklaerung_de: "Im Garage parken: 'nel garage' (in + il = nel)."
  },
  {
    id: "P071",
    section: "Präpositionen",
    thema: "Fine",
    frage_de: "Wähle die passende Präposition: Ho già acquistato d'anticipo i biglietti d'ingresso ___ concerto di domani.",
    options_de: ["per il", "al", "del", "col"],
    richtige_antwort: "per il",
    erklaerung_de: "Für das Konzert: 'per il' (Verbindung aus per + il)."
  },
  {
    id: "P072",
    section: "Präpositionen",
    thema: "Tempo",
    frage_de: "Wähle die passende Präposition: Mi sveglio puntualmente ___ sette di ogni mattina lavorativa.",
    options_de: ["alle", "nelle", "le", "da"],
    richtige_antwort: "alle",
    erklaerung_de: "Uhrzeitangaben im Plural werden mit 'alle' eingeleitet (a + le = alle)."
  },
  {
    id: "P073",
    section: "Präpositionen",
    thema: "Moto a luogo",
    frage_de: "Wähle die passende Präposition: Devo andare urgentemente ___ posta della via centrale a spedire una lettera.",
    options_de: ["alla", "in", "nella", "dalla"],
    richtige_antwort: "alla",
    erklaerung_de: "Zur Post gehen lautet im Italienischen 'andare alla posta' (a + la = alla)."
  },
  {
    id: "P074",
    section: "Präpositionen",
    thema: "Contenuto",
    frage_de: "Wähle die passende Präposition: Questo interessante libro scolastico parla interamente ___ storia di Roma antica.",
    options_de: ["della", "alla", "sulla", "dalla"],
    richtige_antwort: "della",
    erklaerung_de: "Über ein Thema (von der Geschichte): 'della' (di + la = della)."
  },
  {
    id: "P075",
    section: "Präpositionen",
    thema: "Posizione",
    frage_de: "Wähle die passende Präposition: Il pane fresco è sul ___ tavolo della cucina.",
    options_de: ["sul", "nel", "col", "al"],
    richtige_antwort: "sul",
    erklaerung_de: "Hier redundant verwendet für 'auf dem': 'sul' (su + il = sul)."
  },
  {
    id: "P076",
    section: "Präpositionen",
    thema: "Mezzo",
    frage_de: "Wähle die passende Präposition: Luca viaggerà sicuramente ___ treno stasera per raggiungerci.",
    options_de: ["in", "col", "con", "per"],
    richtige_antwort: "in",
    erklaerung_de: "Mit dem Zug reisen lautet standardmäßig 'andare in treno'."
  },
  {
    id: "P077",
    section: "Präpositionen",
    thema: "Tempo",
    frage_de: "Wähle die passende Präposition: Noi ceniamo festosamente sempre ___ otto di sera.",
    options_de: ["alle", "nelle", "le", "sulle"],
    richtige_antwort: "alle",
    erklaerung_de: "Uhrzeiten werden mit 'alle' eingeleitet: 'alle otto' (a + le)."
  },
  {
    id: "P078",
    section: "Präpositionen",
    thema: "Fine",
    frage_de: "Wähle die passende Präposition: Ho intenzione di acquistare un bel regalo ___ compleanno di papà.",
    options_de: ["per il", "al", "del", "dal"],
    richtige_antwort: "per il",
    erklaerung_de: "Für den Geburtstag: 'per il' (per + il)."
  },
  {
    id: "P079",
    section: "Präpositionen",
    thema: "Moto a luogo",
    frage_de: "Wähle die passende Präposition: Vado spesso ___ biblioteca comunale a consultare libri antichi.",
    options_de: ["in", "alla", "nella", "dalla"],
    richtige_antwort: "in",
    erklaerung_de: "In die Bibliothek gehen: 'andare in biblioteca' (ohne Artikel)."
  },
  {
    id: "P080",
    section: "Präpositionen",
    thema: "Tempo",
    frage_de: "Wähle die passende Präposition: Arriverò a casa ___ venti minuti, per favore aspettami!",
    options_de: ["tra", "in", "da", "con"],
    richtige_antwort: "tra",
    erklaerung_de: "Zukünftiger Zeitpunkt della Frist ('in 20 Minuten'): 'tra/fra'."
  },
  {
    id: "A026",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle den passenden Artikel: Ho comprato ___ specchio antico ieri in quel piccolo mercato delle pulci.",
    options_de: ["uno", "un", "una", "un'"],
    richtige_antwort: "uno",
    erklaerung_de: "Männliche Nomen, die mit s + Konsonant beginnen, verlangen den unbestimmten Artikel 'uno'."
  },
  {
    id: "A027",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle den passenden Artikel: ___ psicologo ha saputo dare ottimi insegnamenti e preziosi consigli terapeutici.",
    options_de: ["lo", "il", "l'", "i"],
    richtige_antwort: "lo",
    erklaerung_de: "Männliche Nomen, die mit 'ps' anlauten, verlangen im Singular den bestimmten Artikel 'lo'."
  },
  {
    id: "A028",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle den passenden Artikel: Nel pomeriggio Maria mangia sempre ___ arancia fresca e succosa.",
    options_de: ["un'", "un", "una", "uno"],
    richtige_antwort: "un'",
    erklaerung_de: "Weibliche Nomen vor Vokal verlangen im Singular den unbestimmten Artikel mit Apostroph ('un'')."
  },
  {
    id: "A029",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle den passenden Artikel: ___ zia affettuosa di Francesca vive stabilmente a Napoli da qualche mese.",
    options_de: ["la", "l'", "lo", "le"],
    richtige_antwort: "la",
    erklaerung_de: "Zia ist weiblich Singular und verlangt den bestimmten Artikel 'la'."
  },
  {
    id: "A030",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle den passenden Artikel: C'è ___ zaino nero buttato caoticamente per terra vicino alla porta.",
    options_de: ["uno", "un", "una", "un'"],
    richtige_antwort: "uno",
    erklaerung_de: "Männliche Nomen, die mit 'z' beginnen, verlangen im Singular den unbestimmten Artikel 'uno'."
  },
  {
    id: "A031",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle den passenden Artikel: ___ gatti giocherelloni del vicino corrono tutto il tempo nel prato.",
    options_de: ["i", "gli", "le", "lo"],
    richtige_antwort: "i",
    erklaerung_de: "Männliche Nomen im Plural vor normalem Konsonant verlangen den bestimmten Artikel 'i'."
  },
  {
    id: "A032",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle den passenden Artikel: Il barista mi ha preparato ___ cappuccino ben caldo e decorato.",
    options_de: ["un", "uno", "una", "un'"],
    richtige_antwort: "un",
    erklaerung_de: "Männliche Nomen im Singular vor normalem Konsonant verlangen den unbestimmten Artikel 'un'."
  },
  {
    id: "A033",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle den passenden Artikel: ___ stivali neri di cuoio lucido appartengono tutti a Luca.",
    options_de: ["gli", "i", "le", "lo"],
    richtige_antwort: "gli",
    erklaerung_de: "Maskulin Plural vor s + Konsonant verlangt den bestimmten Artikel 'gli'."
  },
  {
    id: "A034",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle den passenden Artikel: Vorrei fare ___ escursione tranquilla in montagna durante il fine settimana.",
    options_de: ["un'", "un", "una", "uno"],
    richtige_antwort: "un'",
    erklaerung_de: "Das feminine Nomen 'escursione' beginnt mit Vokal, also wird 'un'' mit Apostroph verwendet."
  },
  {
    id: "A035",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle den passenden Artikel: Non trovo più ___ chiavi della macchina, le avevo lasciate qui.",
    options_de: ["le", "i", "gli", "la"],
    richtige_antwort: "le",
    erklaerung_de: "Femininer Plural verlangt im Italienischen immer den bestimmten Artikel 'le'."
  },
  {
    id: "A036",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle den passenden Artikel: Abbiamo fortunatamente affittato ___ appartamento grazioso vicino al mare.",
    options_de: ["un", "un'", "uno", "una"],
    richtige_antwort: "un",
    erklaerung_de: "Männliche Nomen vor Vokalanlaut erhalten im Singular den unbestimmten Artikel 'un' OHNE Apostroph."
  },
  {
    id: "A037",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle den passenden Artikel: ___ zucchero bianco è posizionato all'interno della credenza in cucina.",
    options_de: ["lo", "il", "l'", "i"],
    richtige_antwort: "lo",
    erklaerung_de: "Männliche Nomen, die mit 'z' anlauten, erfordern im Singular den bestimmten Artikel 'lo'."
  },
  {
    id: "A038",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle den passenden Artikel: C'è ___ albergo abbastanza economico e pulito in questa bella zona?",
    options_de: ["un", "un'", "uno", "una"],
    richtige_antwort: "un",
    erklaerung_de: "Albergo ist männlich Singular und beginnt mit Vokal, verlangt folglich unregelmäßig 'un' (kein Apostroph)."
  },
  {
    id: "A039",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle den passenden Artikel: ___ amica simpatica di Silvia studia con grande successo medicina.",
    options_de: ["l'", "la", "una", "le"],
    richtige_antwort: "l'",
    erklaerung_de: "Weibliche Nomen im Singular vor Vokalanlaut werden mit 'l'' abgekürzt (l'amica)."
  },
  {
    id: "A040",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle den passenden Artikel: Hai ___ idea migliore e meno dispendiosa per il weekend?",
    options_de: ["un'", "un", "una", "uno"],
    richtige_antwort: "un'",
    erklaerung_de: "Weibliche Nomen im Singular vor Vokal verlangen den unbestimmten Artikel 'un''."
  },
  {
    id: "A041",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle den passenden Artikel: ___ spumante italiano è conservato in fresco nel frigorifero largo.",
    options_de: ["lo", "il", "l'", "gli"],
    richtige_antwort: "lo",
    erklaerung_de: "Maskulinum Singular vor s + Konsonant verlangt den bestimmten Artikel 'lo'."
  },
  {
    id: "A042",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle den passenden Artikel: Vorrei mangiare ___ saporito panino fresco con prosciutto di Parma.",
    options_de: ["un", "uno", "una", "un'"],
    richtige_antwort: "un",
    erklaerung_de: "'Saporito' beginnt mit s + Vokal, daher gilt die Standardform 'un'."
  },
  {
    id: "A043",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle den passenden Artikel: ___ splendide isole della Grecia sono mete molto ambite dai turisti.",
    options_de: ["le", "gli", "i", "la"],
    richtige_antwort: "le",
    erklaerung_de: "Isola ist feminin Plural (isole) und verlangt das bestimmte 'le'."
  },
  {
    id: "A044",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle den passenden Artikel: Ho trovato ___ vecchio libro impolverato sul fondo della soffitta.",
    options_de: ["un", "uno", "una", "un'"],
    richtige_antwort: "un",
    erklaerung_de: "'Vecchio' beginnt mit normalem Konsonanten, folglich lautet der Artikel 'un' für Maskulinum Singular."
  },
  {
    id: "A045",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle den passenden Artikel: ___ zaino rosso di pelle di Marco pesa eccessivamente.",
    options_de: ["lo", "il", "l'", "gli"],
    richtige_antwort: "lo",
    erklaerung_de: "Männliche Nomen mit Z-Anlaut verlangen im Singular den Artikel 'lo'."
  },
  {
    id: "A046",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle den passenden Artikel: Francesco vive stabilmente in ___ casa colonica molto grande e soleggiata.",
    options_de: ["una", "un'", "un", "uno"],
    richtige_antwort: "una",
    erklaerung_de: "Weibliche Nomen vor Konsonant im Singular verlangen den regulären Artikel 'una'."
  },
  {
    id: "A047",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle den passenden Artikel: Non mi piacciono per nulla ___ spinaci bolliti senza sale.",
    options_de: ["gli", "i", "le", "lo"],
    richtige_antwort: "gli",
    erklaerung_de: "Männliche Nomen im Plural, die mit s + Konsonant beginnen, verlangen 'gli'."
  },
  {
    id: "A048",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle den passenden Artikel: Ho conosciuto ___ studente spagnolo simpatico durante il treno ieri.",
    options_de: ["uno", "un", "una", "un'"],
    richtige_antwort: "uno",
    erklaerung_de: "Männliche Nomen vor s + Konsonant verlangen im Singular 'uno'."
  },
  {
    id: "A049",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle den passenden Artikel: ___ studenti motivati ascoltano in silenzio il professore di storia.",
    options_de: ["gli", "i", "le", "lo"],
    richtige_antwort: "gli",
    erklaerung_de: "Männliche Nomen im Plural vor s + Konsonant erfordern den bestimmten Artikel 'gli'."
  },
  {
    id: "A050",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle den passenden Artikel: C'è ___ gatto nero arrampicato sul balcone della terrazza.",
    options_de: ["un", "uno", "una", "un'"],
    richtige_antwort: "un",
    erklaerung_de: "Gatto ist maskulin Singular vor einfachem Konsonanten, daher 'un'."
  },
  {
    id: "A051",
    section: "Artikel",
    thema: "Partitivo",
    frage_de: "Wähle den passenden Artikel: Per dare sapore, mettiamo ___ aglio tritato nel sugo stellare?",
    options_de: ["dell'", "del", "dello", "degli"],
    richtige_antwort: "dell'",
    erklaerung_de: "Partitiv für maskuline Nomen vor Vokal im Singular lautet 'dell'' (di + l')."
  },
  {
    id: "A052",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle den passenden Artikel: ___ uva matura che cresce in vigna è dolce e croccante.",
    options_de: ["l'", "la", "lo", "le"],
    richtige_antwort: "l'",
    erklaerung_de: "Uva ist feminin Singular vor Vokal, verlangt den abgekürzten Artikel 'l''."
  },
  {
    id: "A053",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle den passenden Artikel: Ha finalmente preso ___ bella decisione ponderata per la sua vita futura.",
    options_de: ["una", "un'", "un", "uno"],
    richtige_antwort: "una",
    erklaerung_de: "Decisione ist f. Singular vor Konsonant, daher unbestimmter Artikel 'una'."
  },
  {
    id: "A054",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle den passenden Artikel: ___ aranciata fresca deve essere rigorosamente servita con ghiaccio.",
    options_de: ["l'", "la", "le", "lo"],
    richtige_antwort: "l'",
    erklaerung_de: "Aranciata ist feminin im Singular vor Vokal: 'l'aranciata'."
  },
  {
    id: "A055",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle den passenden Artikel: Sabato scorso abbiamo giocato ___ partita a tennis fantastica.",
    options_de: ["una", "un'", "un", "uno"],
    richtige_antwort: "una",
    erklaerung_de: "'Partita' ist weiblich Singular, verlangt folglich den Artikel 'una'."
  },
  {
    id: "A056",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle den passenden Artikel: ___ scontrino fiscale è stato lasciato sopra il bancone del bar di fronte.",
    options_de: ["lo", "il", "l'", "gli"],
    richtige_antwort: "lo",
    erklaerung_de: "Männliche Nomen vor s + Konsonant verlangen im Singular den bestimmten Artikel 'lo'."
  },
  {
    id: "A057",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle den passenden Artikel: Mio zio milanese possiede ___ bella barca a vela ormeggiata in porto.",
    options_de: ["una", "un", "un'", "uno"],
    richtige_antwort: "una",
    erklaerung_de: "Umgangssprachlich bei weiblichen Substantiven vor Konsonanten: 'una'."
  },
  {
    id: "A058",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle den passenden Artikel: ___ penne nere automatiche sono riposte ordinatamente nell'astuccio.",
    options_de: ["le", "i", "gli", "la"],
    richtige_antwort: "le",
    erklaerung_de: "Plural feminin (penne) erfordert den bestimmten Artikel 'le'."
  },
  {
    id: "A059",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle den passenden Artikel: I miei genitori hanno appena comprato ___ televisore enorme per il salone.",
    options_de: ["un", "uno", "una", "un'"],
    richtige_antwort: "un",
    erklaerung_de: "Televisore ist maskulin im Singular, verlangt den unbestimmten Artikel 'un'."
  },
  {
    id: "A060",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle den passenden Artikel: ___ yogurt greco è particolarmente famoso per essere molto denso.",
    options_de: ["lo", "il", "l'", "i"],
    richtige_antwort: "lo",
    erklaerung_de: "Männliche Nomen, die mit dem Halbvokal 'y' beginnen, verlangen den Artikel 'lo'."
  },
  {
    id: "A061",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle den passenden Artikel: Cerco ___ albergo non troppo lontano dal centro storico di Roma.",
    options_de: ["un", "un'", "uno", "una"],
    richtige_antwort: "un",
    erklaerung_de: "Albergo (m. Sg.) vor Vokalanlaut verlangt 'un' OHNE Apostroph."
  },
  {
    id: "A062",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle den passenden Artikel: ___ zii intraprendenti di Luigi viaggiano spesso in giro per l'Asia.",
    options_de: ["gli", "i", "le", "lo"],
    richtige_antwort: "gli",
    erklaerung_de: "Männliche Nomen im Plural, die mit 'z' anlauten, erfordern den Artikel 'gli'."
  },
  {
    id: "A063",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle den passenden Artikel: Maria ha ___ zio molto anziano che abita in periferia a Roma.",
    options_de: ["uno", "un", "una", "un'"],
    richtige_antwort: "uno",
    erklaerung_de: "Forderung bei maskulinen Nomen vor 'z' im Singular: 'uno'."
  },
  {
    id: "A064",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle den passenden Artikel: ___ borsa rossa che indossi è fatta di ottima pelle italiana.",
    options_de: ["la", "il", "l'", "lo"],
    richtige_antwort: "la",
    erklaerung_de: "Borsa ist weiblich Singular, verlangt folglich den bestimmten Artikel 'la'."
  },
  {
    id: "A065",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle den passenden Artikel: Quel bellissimo parco naturale è ___ oasi protetta nel deserto.",
    options_de: ["un'", "un", "una", "uno"],
    richtige_antwort: "un'",
    erklaerung_de: "Oasi ist feminin im Singular und beginnt mit Vokal, verlangt 'un''."
  },
  {
    id: "A066",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle den passenden Artikel: ___ giornale quotidiano di oggi parla ampiamente della conferenza stampa.",
    options_de: ["il", "lo", "la", "i"],
    richtige_antwort: "il",
    erklaerung_de: "Giornale (m. Singular) vor einfachem Konsonanten verlangt 'il'."
  },
  {
    id: "A067",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle den passenden Artikel: Vorrei bere ___ tazza fumante di latte caldo prima di dormire.",
    options_de: ["una", "un'", "un", "uno"],
    richtige_antwort: "una",
    erklaerung_de: "Tazza ist weiblich im Singular, verlangt im Unbestimmten 'una'."
  },
  {
    id: "A068",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle den passenden Artikel: ___ dita corte della mano sono tutte fredde per il maltempo.",
    options_de: ["le", "i", "gli", "la"],
    richtige_antwort: "le",
    erklaerung_de: "Das Wort 'dito' (Finger, maskulin) bildet unregelmäßig den femininen Plural 'le dita'."
  },
  {
    id: "A069",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle den passenden Artikel: Cerco ___ spazzolino nuovo con setole molto morbide.",
    options_de: ["uno", "un", "una", "un'"],
    richtige_antwort: "uno",
    erklaerung_de: "Spazzolino (m. Sg.) beginnt mit s + Konsonant, verlangt somit 'uno'."
  },
  {
    id: "A070",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle den passenden Artikel: ___ penna blu che ti ho imprestato non scrive più bene.",
    options_de: ["la", "il", "l'", "lo"],
    richtige_antwort: "la",
    erklaerung_de: "Penna (Kugelschreiber) ist feminin im Singular, erfordert 'la'."
  },
  {
    id: "A071",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle den passenden Artikel: Passami ___ foglio bianco di carta per favore, devo scrivere una nota.",
    options_de: ["un", "uno", "una", "un'"],
    richtige_antwort: "un",
    erklaerung_de: "Foglio ist männlich im Singular vor normalem Konsonanten, daher 'un'."
  },
  {
    id: "A072",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle den passenden Artikel: Non riesco proprio più a trovare ___ occhiali da vista nuovi.",
    options_de: ["gli", "i", "le", "lo"],
    richtige_antwort: "gli",
    erklaerung_de: "Occhiali ist maskulin Plural und beginnt vor Vokalanlaut, verlangt daher 'gli'."
  },
  {
    id: "A073",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle den passenden Artikel: Ieri pomeriggio ho comprato ___ nuovo paio di comode scarpe da tennis.",
    options_de: ["un", "uno", "una", "un'"],
    richtige_antwort: "un",
    erklaerung_de: "Nuovo beginnt mit einfachem Konsonanten, daher männlich Singular 'un'."
  },
  {
    id: "A074",
    section: "Artikel",
    thema: "Bestimmt",
    frage_de: "Wähle den passenden Artikel: ___ gatta della zia dorme sempre acciambellata sulla poltrona calda.",
    options_de: ["la", "il", "l'", "lo"],
    richtige_antwort: "la",
    erklaerung_de: "Gatta ist weiblich im Singular, verlangt daher den bestimmten Artikel 'la'."
  },
  {
    id: "A075",
    section: "Artikel",
    thema: "Unbestimmt",
    frage_de: "Wähle den passenden Artikel: Credo di aver fatto ___ errore stupido di distrazione all'esame.",
    options_de: ["un", "un'", "uno", "una"],
    richtige_antwort: "un",
    erklaerung_de: "Errore ist maskulin Singular und beginnt mit Vokal, verlangt daher 'un'."
  }
];
