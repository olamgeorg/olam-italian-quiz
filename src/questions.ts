/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SectionInfo, Question } from './types';

export const SECTIONS: SectionInfo[] = [
  {
    id: 'vocabulary',
    title: 'Wortschatz',
    italianLabel: 'Vocabolario (A1/A2)',
    description: 'Alltägliche Begriffe, Begrüßungen, Zahlen, Einkaufen und Notfälle.'
  },
  {
    id: 'grammar',
    title: 'Grammatik & Verben',
    italianLabel: 'Grammatica e Verbi (A1/A2)',
    description: 'Präsens, Passato Prossimo, Pronomen und Präpositionen für die Praxis.'
  },
  {
    id: 'dialogues',
    title: 'Alltagsdialoge',
    italianLabel: 'Dialoghi e Comunicazione',
    description: 'Formelle und informelle Gespräche, Arztbesuch und Behördenkontakte.'
  },
  {
    id: 'culture',
    title: 'Integration & Bürgerkunde',
    italianLabel: 'Integrazione e Civiltà',
    description: 'Codice Fiscale, Aufenthaltsrecht, Institutionen und italienischer Alltag.'
  }
];

export const QUESTIONS: Question[] = [
  // --- SECTION: VOCABULARY ---
  {
    id: 'voc_1',
    section: 'vocabulary',
    level: 'A1',
    questionText: 'Come si dice correttamente "Guten Morgen" in italiano?',
    options: [
      'Ciao, come stai?',
      'Buongiorno',
      'Buonasera',
      'Buonanotte'
    ],
    correctAnswerIndex: 1,
    translation: 'Wie sagt man korrekt "Guten Morgen" auf Italienisch?',
    explanation: '"Buongiorno" ist der standardmäßige Gruß für den Morgen und Vormittag. "Buonasera" wird ab dem Nachmittag verwendet, "Buonanotte" vor dem Schlafen und "Ciao" ist informell.'
  },
  {
    id: 'voc_2',
    section: 'vocabulary',
    level: 'A1',
    questionText: 'Quali sono i numeri italiani "undici", "dodici", "tredici" in cifre?',
    options: [
      '1, 2, 3',
      '10, 20, 30',
      '11, 12, 13',
      '21, 22, 23'
    ],
    correctAnswerIndex: 2,
    translation: 'Welche sind die italienischen Zahlen "undici", "dodici", "tredici" als Ziffern?',
    explanation: 'Undici = 11, Dodici = 12, Tredici = 13. Sie gehören zum Grundwortschatz des A1-Niveaus.'
  },
  {
    id: 'voc_3',
    section: 'vocabulary',
    level: 'A1',
    questionText: 'Come chiedi cortesemente il conto al cameriere in un ristorante?',
    options: [
      'Dammi i soldi!',
      'Voglio pagare subito!',
      'Il conto, per favore.',
      'Quanto costa il tavolo?'
    ],
    correctAnswerIndex: 2,
    translation: 'Wie bittest du im Restaurant höflich um die Rechnung beim Kellner?',
    explanation: 'Die höfliche Formel lautet: "Il conto, per favore" (Die Rechnung, bitte). "Dammi i soldi" bedeutet "Gib mir das Geld", was unhöflich und falsch ist.'
  },
  {
    id: 'voc_4',
    section: 'vocabulary',
    level: 'A2',
    questionText: 'Scegli il termine corretto per indicare "Apotheke" in italiano:',
    options: [
      'Il supermercato',
      'La farmacia',
      'La biblioteca',
      'L\'ospedale'
    ],
    correctAnswerIndex: 1,
    translation: 'Wähle den korrekten Begriff für "Apotheke" auf Italienisch:',
    explanation: '"La farmacia" ist die Apotheke. "Il supermercato" ist der Supermarkt, "la biblioteca" die Bibliothek und "l\'ospedale" das Krankenhaus.'
  },
  {
    id: 'voc_5',
    section: 'vocabulary',
    level: 'A2',
    questionText: 'Quale espressione significa "Lebensmittel im Supermarkt einkaufen"?',
    options: [
      'Fare la spesa',
      'Fare shopping',
      'Fare un viaggio',
      'Fare colazione'
    ],
    correctAnswerIndex: 0,
    translation: 'Welcher Ausdruck bedeutet "Lebensmittel im Supermarkt einkaufen"?',
    explanation: '"Fare la spesa" bezieht sich speziell auf den täglichen Lebensmitteleinkauf. "Fare shopping" wird eher für Kleidung oder Luxusgüter gebraucht, und "fare colazione" bedeutet frühstücken.'
  },
  {
    id: 'voc_6',
    section: 'vocabulary',
    level: 'A1',
    questionText: 'Quali sono i membri della famiglia tradotti con "fratello" e "sorella"?',
    options: [
      'Vater und Mutter',
      'Sohn und Tochter',
      'Bruder und Schwester',
      'Großvater und Großmutter'
    ],
    correctAnswerIndex: 2,
    translation: 'Welche Familienmitglieder werden mit "fratello" und "sorella" übersetzt?',
    explanation: '"Fratello" bedeutet Bruder und "sorella" bedeutet Schwester.'
  },
  {
    id: 'voc_7',
    section: 'vocabulary',
    level: 'A2',
    questionText: 'Cosa significa l\'annuncio stradale o ferroviario "Attenzione, il treno è in ritardo"?',
    options: [
      'Achtung, der Zug hat Verspätung.',
      'Achtung, der Zug fällt aus.',
      'Achtung, der Zug fährt gleich ab.',
      'Achtung, der Zug wechselt das Gleis.'
    ],
    correctAnswerIndex: 0,
    translation: 'Was bedeutet die Straßen- oder Bahnansage "Attenzione, il treno è in ritardo"?',
    explanation: '"Essere in ritardo" bedeutet Verspätung haben. Das ist ein wichtiger A2-Ausdruck für Reisende.'
  },

  // --- SECTION: GRAMMAR ---
  {
    id: 'gra_1',
    section: 'grammar',
    level: 'A2',
    questionText: 'Quale ausiliare si usa per coniugare il verbo "andare" (moto a luogo) al Passato Prossimo?',
    options: [
      'Avere (es. Io ho andato)',
      'Essere (es. Io sono andato)',
      'Fare (es. Io ho fatto andato)',
      'Doppio ausiliare opzionale'
    ],
    correctAnswerIndex: 1,
    translation: 'Welches Hilfsverb benutzt man, um das Verb "andare" (Bewegung zu einem Ort) im Passato Prossimo zu konjugieren?',
    explanation: 'Verben der Bewegung wie "andare" bilden das Passato Prossimo mit dem Hilfsverb "essere". Das Partizip passt sich dem Geschlecht/Zahl an (es. "sono andato" / "sono andata").'
  },
  {
    id: 'gra_2',
    section: 'grammar',
    level: 'A1',
    questionText: 'Scegli la preposizione corretta: "Vado _______ vacanza _______ Italia."',
    options: [
      'a / in',
      'in / in',
      'in / a',
      'di / in'
    ],
    correctAnswerIndex: 1,
    translation: 'Wähle die richtige Präposition: "Vado _______ vacanza _______ Italia."',
    explanation: 'Man sagt "in vacanza" (in den Urlaub) und "in Italia" (nach Italien - vor Ländernamen steht meist "in"). Richtig ist also: "Vado in vacanza in Italia."'
  },
  {
    id: 'gra_3',
    section: 'grammar',
    level: 'A1',
    questionText: 'Completa correttamente la frase: "Io _______ fame e _______ freddo."',
    options: [
      'sono / ho',
      'ho / ho',
      'sono / sono',
      'ho / sono'
    ],
    correctAnswerIndex: 1,
    translation: 'Vervollständige den Satz korrekt: "Io _______ fame e _______ freddo."',
    explanation: 'Im Italienischen drückt man Hunger ("fame") und Kälteempfinden ("freddo") mit dem Verb "avere" (haben) aus, nicht mit "essere" (sein). Richtig ist: "Io ho fame e ho freddo" (Ich habe Hunger und mir ist kalt).'
  },
  {
    id: 'gra_4',
    section: 'grammar',
    level: 'A2',
    questionText: 'Sostituisci con il pronome diretto corretto: "Compri la frutta?" -> "Sì, _______ compro."',
    options: [
      'lo',
      'la',
      'li',
      'le'
    ],
    correctAnswerIndex: 1,
    translation: 'Ersetze durch das richtige direkte Pronomen: "Compri la frutta?" -> "Sì, _______ compro."',
    explanation: '"La frutta" ist weiblich Singular (femminile singolare). Das entsprechende direkte Objektpronomen ist "la". "Sì, la compro" (Ja, ich kaufe sie).'
  },
  {
    id: 'gra_5',
    section: 'grammar',
    level: 'A2',
    questionText: 'Qual è la forma corretta del verbo riflessivo "lavarsi" al presente per la prima persona plurale "noi"?',
    options: [
      'noi vi lavate',
      'noi ci laviamo',
      'noi si lavano',
      'noi mi lavo'
    ],
    correctAnswerIndex: 1,
    translation: 'Was ist die richtige Form des reflexiven Verbs "lavarsi" im Präsens für die erste Person Plural "noi"?',
    explanation: 'Die reflexiven Pronomen sind mi, ti, si, ci, vi, si. Für "noi" lautet es "ci", gefolgt von der Verbendung "-iamo". Richtig ist "ci laviamo" (wir waschen uns).'
  },
  {
    id: 'gra_6',
    section: 'grammar',
    level: 'A1',
    questionText: 'Scegli la combinazione corretta degli articoli determinativi plurali per "amici" (m.) e "case" (f.):',
    options: [
      'gli / le',
      'i / le',
      'gli / l\'',
      'i / i'
    ],
    correctAnswerIndex: 0,
    translation: 'Wähle die richtige Kombination der pluralen bestimmten Artikel für "amici" (männlich pl.) und "case" (weiblich pl.):',
    explanation: 'Vor maskulinen Nomen im Plural, die mit einem Vokal beginnen, steht "gli" (gli amici). Vor femininen Nomen im Plural steht immer "le" (le case).'
  },
  {
    id: 'gra_7',
    section: 'grammar',
    level: 'A2',
    questionText: 'Identifica la frase con il corretto ordine sintattico e coniugazione del verbo dovere (müssen):',
    options: [
      'Dovere io andare subito via.',
      'Io devo andare via subito.',
      'Io via subito andare devo.',
      'Io devi andato via subito.'
    ],
    correctAnswerIndex: 1,
    translation: 'Finde den Satz mit korrekter Satzstellung und Konjugation des Verbs "dovere" (müssen):',
    explanation: '"Dovere" wird für "io" als "devo" konjugiert. Darauf folgt das Verb im Infinitiv ("andare"). Richtig ist: "Io devo andare via subito" (Ich muss sofort weggehen).'
  },

  // --- SECTION: DIALOGUES ---
  {
    id: 'dia_1',
    section: 'dialogues',
    level: 'A1',
    questionText: 'Durante una conversazione FORMALE (es. con un medico), quale frase è corretto usare per chiedere "Wie geht es Ihnen?"',
    options: [
      'Come stai?',
      'Come sta?',
      'Come state?',
      'Come stanno?'
    ],
    correctAnswerIndex: 1,
    translation: 'Welchen Satz benutzt man in einem FORMELLEN Gespräch (z.B. mit einem Arzt) für "Wie geht es Ihnen?"?',
    explanation: 'Im Formellen ("dare del Lei") verwendet man die 3. Person Singular: "Come sta?". "Come stai?" ist informell ("du") und "Come state?" bezieht sich auf mehrere Personen ("ihr").'
  },
  {
    id: 'dia_2',
    section: 'dialogues',
    level: 'A1',
    questionContext: 'Al panificio:\nCliente: "Scusi, quanto costa questo pezzo di formaggio?"\nCommesso: "_______"',
    questionText: 'Completa il dialogo con la risposta logica e grammaticalmente corretta:',
    options: [
      'Sì, costa molto caro.',
      'Sono tre euro e cinquanta, prego.',
      'Mi chiamo Luigi.',
      'No, non mi piace il formaggio.'
    ],
    correctAnswerIndex: 1,
    translation: 'Vervollständige den Dialog mit der logischen und grammatisch korrekten Antwort:',
    explanation: 'Auf die Frage nach dem Preis ("quanto costa?") antwortet der Verkäufer logischerweise mit einem Geldbetrag: "Sono tre euro e cinquanta, prego" (Das macht drei Euro fünfzig, bitte).'
  },
  {
    id: 'dia_3',
    section: 'dialogues',
    level: 'A2',
    questionContext: 'Alla posta o in banca:\nImpiegato: "Buongiorno, mi dà un documento d\'identità?"\nCittadino: "_______"',
    questionText: 'Scegli la risposta corretta per il cittadino:',
    options: [
      'No, non ho soldi.',
      'Va bene, scusi, a che ora chiude?',
      'Ecco la mia carta d\'identità, prego.',
      'Sì, mi piace la televisione.'
    ],
    correctAnswerIndex: 2,
    translation: 'Wähle die richtige Antwort für den Bürger:',
    explanation: 'Wenn der Beamte nach einem Ausweisdokument fragt ("mi dà un documento d\'identità?"), übergibt der Bürger dieses mit den Worten: "Ecco la mia carta d\'identità, prego" (Hier ist mein Personalausweis, bitte).'
  },
  {
    id: 'dia_4',
    section: 'dialogues',
    level: 'A2',
    questionContext: 'In un ufficio pubblico:\nCittadino: "Vorrei prenotare un appuntamento per il rinnovo del permesso di soggiorno."\nImpiegato: "_______"',
    questionText: 'Scegli l\'opzione logica della pubblica amministrazione:',
    options: [
      'Deve compilare questo modulo e firmarlo qui in basso.',
      'Andiamo al mare domani mattina.',
      'Il permesso è già scaduto dieci anni fa.',
      'Non fa niente, compri un gelato!'
    ],
    correctAnswerIndex: 0,
    translation: 'Wähle die logische Option für das Handeln der Behörde:',
    explanation: '"Deve compilare questo modulo e firmarlo qui in basso" bedeutet: "Sie müssen dieses Formular ausfüllen und hier unten unterschreiben." Das ist das typische Behördenvorgehen bei der Beantragung oder Verlängerung von Dokumenten.'
  },
  {
    id: 'dia_5',
    section: 'dialogues',
    level: 'A1',
    questionText: 'Come si risponde in maniera gentile a "Grazie mille" in Italia?',
    options: [
      'Buongiorno!',
      'Prego, di nulla!',
      'Molto male.',
      'Congratulazioni!'
    ],
    correctAnswerIndex: 1,
    translation: 'Wie antwortet man in Italien höflich auf "Grazie mille" (Vielen Dank)?',
    explanation: 'Die gängige und freundliche Antwort auf "Grazie" ist "Prego, di nulla!" (Bitte, keine Ursache / gern geschehen).'
  },

  // --- SECTION: CULTURE / INTEGRATION ---
  {
    id: 'cul_1',
    section: 'culture',
    level: 'A1',
    questionText: 'Che cos\'è la "Tessera Sanitaria" in Italia e a cosa serve?',
    options: [
      'Es ist eine Fahrkarte für Bus und Bahn.',
      'Es ist die italienische Krankenversicherungskarte, die auch als Steuernummerkarte (Codice Fiscale) dient.',
      'Es ist eine Kreditkarte der italienischen Post.',
      'Es ist ein Ausweis für die Bibliothek.'
    ],
    correctAnswerIndex: 1,
    translation: 'Was ist die "Tessera Sanitaria" in Italien und wozu dient sie?',
    explanation: 'Die "Tessera Sanitaria" ist die italienische Gesundheits-/Krankenversicherungskarte. Auf ihrer Rückseite befindet sich auch der Barcode der Steuernummer (Codice Fiscale). Sie wird beim Arzt, in der Apotheke oder im Krankenhaus benötigt.'
  },
  {
    id: 'cul_2',
    section: 'culture',
    level: 'A1',
    questionText: 'Quali sono i tre colori ufficiali della bandiera italiana (nell\'ordine da sinistra a destra)?',
    options: [
      'Rosso, Bianco, Verde',
      'Verde, Bianco, Rosso',
      'Blu, Bianco, Rosso',
      'Nero, Giallo, Rosso'
    ],
    correctAnswerIndex: 1,
    translation: 'Welche sind die drei offiziellen Farben der italienischen Flagge (in der Reihenfolge von links nach rechts)?',
    explanation: 'Die italienische Flagge (il Tricolore) besteht aus den vertikalen Streifen Grün (verde), Weiß (bianco) und Rot (rosso).'
  },
  {
    id: 'cul_3',
    section: 'culture',
    level: 'A2',
    questionText: 'Per registrare la propria residenza ("prendere la residenza") in un comune italiano, a quale ufficio bisogna rivolgersi?',
    options: [
      'All\'Ufficio Postale (Postamt)',
      'All\'Ufficio Anagrafe del Comune (Melderegisteramt)',
      'Alla Questura (Polizeipräsidium)',
      'All\'Agenzia delle Entrate (Finanzamt)'
    ],
    correctAnswerIndex: 1,
    translation: 'An welches Amt muss man sich wenden, um seinen Wohnsitz in einer italienischen Gemeinde anzumelden ("prendere la residenza")?',
    explanation: 'Das Meldewesen wird in Italien vom Einwohnermeldeamt ("Ufficio Anagrafe") des jeweiligen Rathauses (Comune) verwaltet. Die Questura ist für Aufenthaltsgenehmigungen zuständig, das Finanzamt für Steuersachen.'
  },
  {
    id: 'cul_4',
    section: 'culture',
    level: 'A1',
    questionText: 'Che cos\'è il "Codice Fiscale" in Italia?',
    options: [
      'Ein Rabattcode für Lebensmittelgeschäfte.',
      'Eine 16-stellige alphanumerische Steuernummer zur Identifikation von Personen bei Behörden, Verträgen oder Krankenkassen.',
      'Die Postleitzahl der Stadt Rom.',
      'Das geheime Kennwort für das öffentliche WLAN.'
    ],
    correctAnswerIndex: 1,
    translation: 'Was ist der "Codice Fiscale" in Italien?',
    explanation: 'Der "Codice Fiscale" ist die persönliche Steuernummer in Italien. Sie besteht aus 16 Zeichen (Kombination aus Name, Geburtsdatum, Geschlecht und Geburtsort) und wird für fast alle wichtigen Alltagsgeschäfte (Arbeitsvertrag, Handykauf, Wohnungsmiete, Arztbesuch) zwingend benötigt.'
  },
  {
    id: 'cul_5',
    section: 'culture',
    level: 'A2',
    questionText: 'Quale festa nazionale si celebra il 2 giugno in Italia?',
    options: [
      'La Festa della Repubblica (Tag der Republik)',
      'La Festa della Liberazione (Befreiungstag)',
      'La Festa del Lavoro (Tag der Arbeit)',
      'Il Capodanno (Neujahr)'
    ],
    correctAnswerIndex: 0,
    translation: 'Welcher Nationalfeiertag wird am 2. Juni in Italien gefeiert?',
    explanation: 'Am 2. Juni feiert Italien die "Festa della Repubblica" in Erinnerung an das institutionelle Referendum von 1946, bei dem die Italiener nach dem Zweiten Weltkrieg die Republik als Staatsform wählten.'
  },
  {
    id: 'cul_6',
    section: 'culture',
    level: 'A2',
    questionText: 'Qual è il limite massimo per ottenere la cittadinanza italiana per i figli di stranieri nati in Italia, qualora abbiano risieduto legalmente e ininterrottamente fino alla maggiore età?',
    options: [
      'Sie müssen einen Antrag innerhalb eines Jahres nach Vollendung des 18. Lebensjahres stellen.',
      'Sie müssen die Staatsbürgerschaft bereits mit 10 Jahren beantragen.',
      'Es gibt keinen Rechtsanspruch, man muss einen regulären Einbürgerungstext schreiben.',
      'Sie erhalten sie automatisch bei der Geburt, ohne Bedingungen zu erfüllen.'
    ],
    correctAnswerIndex: 0,
    translation: 'Welches ist die Frist zur Beantragung der italienischen Staatsbürgerschaft für in Italien geborene Kinder von Ausländern, die bis zur Volljährigkeit legal und ununterbrochen im Land gelebt haben?',
    explanation: 'Nach Artikel 4 Absatz 2 des italienischen Staatsangehörigkeitsgesetzes können in Italien geborene ausländische Kinder nach Vollendung des 18. Lebensjahres die Staatsbürgerschaft erklären, müssen dies jedoch vor Vollendung des 19. Lebensjahres (also innerhalb eines Jahres nach dem 18. Geburtstag) tun.'
  }
];
