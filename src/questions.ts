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
  },
  // --- ZUSÄTZLICHE NEUE FRAGEN ---
  {
    id: 'voc_8',
    section: 'vocabulary',
    level: 'A1',
    questionText: 'Come si dice correttamente "Tschüss / Auf Wiedersehen" (informell) in italiano?',
    options: [
      'Ciao',
      'Arrivederci',
      'Grazie',
      'Prego'
    ],
    correctAnswerIndex: 0,
    translation: 'Wie sagt man korrekt "Tschüss / Auf Wiedersehen" (informell) auf Italienisch?',
    explanation: '"Ciao" kann sowohl als lockere Begreußung ("Hallo") als auch zur Verabschiedung ("Tschüss") im Kreis von Freunden und Bekannten benutzt werden. "Arrivederci" ist die formellere Höflichkeitsform.'
  },
  {
    id: 'voc_9',
    section: 'vocabulary',
    level: 'A1',
    questionText: 'Quale colore descrive tipicamente il cielo in una bella giornata di sole?',
    options: [
      'Rosso',
      'Verde',
      'Azzurro',
      'Giallo'
    ],
    correctAnswerIndex: 2,
    translation: 'Welche Farbe beschreibt typischerweise den Himmel an einem schönen sonnigen Tag?',
    explanation: '"Azzurro" bedeutet Himmelblau. Es ist auch die offizielle Farbe, die italienischen Nationalmannschaften ("Gli Azzurri") tragen. "Rosso" ist Rot, "Verde" ist Grün und "Giallo" ist Gelb.'
  },
  {
    id: 'voc_10',
    section: 'vocabulary',
    level: 'A1',
    questionText: 'Scegli la traduzione corretta per il pasto della sera in una famiglia italiana:',
    options: [
      'La colazione',
      'Il pranzo',
      'La cena',
      'La merenda'
    ],
    correctAnswerIndex: 2,
    translation: 'Wähle die richtige Übersetzung für das Abendessen in einer italienischen Familie:',
    explanation: '"La cena" ist das Abendessen. Im italienischen Alltag ist "la colazione" das Frühstück, "il pranzo" das Mittagessen und "la merenda" das Vesper / der Nachmittagssnack für Kinder.'
  },
  {
    id: 'voc_11',
    section: 'vocabulary',
    level: 'A2',
    questionText: 'Se una persona ha un forte "mal di denti", da quale specialista deve andare per curarsi?',
    options: [
      'Dall\'avvocato',
      'Dal dentista',
      'Dal meccanico',
      'Dal farmacista'
    ],
    correctAnswerIndex: 1,
    translation: 'Wenn eine Person starke Zahnschmerzen ("mal di denti") hat, zu welchem Facharzt muss sie gehen, um behandelt zu werden?',
    explanation: 'Bei Zahnschmerzen geht man zum Zahnarzt ("dal dentista"). "L\'avvocato" ist der Rechtsanwalt, "il meccanico" der Automechaniker und "il farmacista" der Apotheker.'
  },
  {
    id: 'voc_12',
    section: 'vocabulary',
    level: 'A2',
    questionText: 'Significato pratico del verbo "noleggare" (es. noleggare una vettura per le vacanze):',
    options: [
      'Ein Auto reparieren',
      'Ein Auto mit Freunden putzen',
      'Ein Auto mieten oder ausleihen',
      'Ein Auto als Geschenk erhalten'
    ],
    correctAnswerIndex: 2,
    translation: 'Praktische Bedeutung des Verbs "noleggare" (z.B. ein Fahrzeug für den Urlaub mieten):',
    explanation: '"Noleggare" bedeutet mieten oder leihen. Dies ist eine wichtige A2-Vokabel für Alltags- und Urlaubssituationen (z.B. Autovermietung: "autonoleggio").'
  },
  {
    id: 'voc_13',
    section: 'vocabulary',
    level: 'A2',
    questionText: 'Quale animale domestico viene tradotto in italiano con il termine "il gatto"?',
    options: [
      'Der treue Hund',
      'Die süße Katze',
      'Das schnelle Pferd',
      'Ein kleiner Kanarienvogel'
    ],
    correctAnswerIndex: 1,
    translation: 'Welches Haustier wird im Italienischen mit "il gatto" übersetzt?',
    explanation: '"Il gatto" ist die Katze. Der Hund heißt "il cane", das Pferd "il cavallo" und der Vogel "l\'uccello".'
  },
  {
    id: 'gra_8',
    section: 'grammar',
    level: 'A1',
    questionText: 'Completa la frase con la coniugazione corretta al presente: "Noi _______ di Roma."',
    options: [
      'sei',
      'siamo',
      'siete',
      'sono'
    ],
    correctAnswerIndex: 1,
    translation: 'Vervollständige den Satz mit der korrekten Präsenskonjugation: "Noi _______ di Roma."',
    explanation: 'Für "noi" (wir) lautet die Form des Verbs essere "siamo". Also lautet der Satz: "Noi siamo di Roma" (Wir sind aus Rom).'
  },
  {
    id: 'gra_9',
    section: 'grammar',
    level: 'A1',
    questionText: 'Qual è la forma corretta al singolare del nome plurale "i libri"?',
    options: [
      'il librom',
      'il libro',
      'la libra',
      'lo libro'
    ],
    correctAnswerIndex: 1,
    translation: 'Was ist die korrekte Singularform des pluralen Nomens "i libri" (die Bücher)?',
    explanation: '"Libri" ist der Plural von "libro", einem maskulinen Substantiv auf "-o". Der bestimmte Artikel im Singular ist "il". Somit heißt es: "il libro" (das Buch).'
  },
  {
    id: 'gra_10',
    section: 'grammar',
    level: 'A1',
    questionText: 'Scegli la preposizione articolata adatta per completare: "Le chiavi sono _______ (auf dem) tavolo."',
    options: [
      'nel',
      'sul',
      'al',
      'dal'
    ],
    correctAnswerIndex: 1,
    translation: 'Wähle die passende artikulierte Präposition: "Le chiavi sono _______ (auf dem) tavolo."',
    explanation: 'Die deutsche Bedeutung "auf dem" entspricht im Italienischen der Präposition "su" verschmolzen mit dem maskulinen Artikel "il", woraus "sul" entsteht. "Le chiavi sono sul tavolo" (Die Schlüssel liegen auf dem Tisch).'
  },
  {
    id: 'gra_11',
    section: 'grammar',
    level: 'A2',
    questionText: 'Qual è il participio passato corretto del verbo "scrivere"?',
    options: [
      'scrivuto',
      'scritato',
      'scritto',
      'scrivato'
    ],
    correctAnswerIndex: 2,
    translation: 'Was ist das korrekte Partizip Perfekt des Verbs "scrivere" (schreiben)?',
    explanation: 'Das Verb "scrivere" bildet ein unregelmäßiges Partizip Perfekt: "scritto". Konjugiert im Passato Prossimo heißt es: "Io ho scritto" (Ich habe geschrieben).'
  },
  {
    id: 'gra_12',
    section: 'grammar',
    level: 'A2',
    questionText: "Completa la lacuna con il verbo all'imperfetto indicativo per descrivere un'azione abituale passata: \"Quando ero piccolo/a, _______ (ich spielte) sempre a calcio.\"",
    options: [
      'ho giocato',
      'giocavo',
      'giocato',
      'giocare'
    ],
    correctAnswerIndex: 1,
    translation: 'Vervollständige die Lücke mit dem Imperfekt, um eine gewohnheitsmäßige Handlung in der Vergangenheit zu beschreiben: "Quando ero piccolo/a, _______ (ich spielte) sempre a calcio."',
    explanation: '"Giocavo" ist die erste Person Singular des Verbs "giocare" im Imperfetto. Das Imperfetto beschreibt gewohnheitsmäßige, sich wiederholende Handlungen oder Zustände in der Vergangenheit.'
  },
  {
    id: 'gra_13',
    section: 'grammar',
    level: 'A2',
    questionText: 'Scegli la preposizione articolata richiesta per tradurre correttamente: "Questo regalo è destinato _______ (für die) bambini (m. pl.)."',
    options: [
      'a i',
      'per i',
      'nei',
      'dai'
    ],
    correctAnswerIndex: 1,
    translation: 'Wähle die zusammengesetzte Präposition, um korrekt zu übersetzen: "Questo regalo è destinato _______ (für die) bambini (m. pl.)."',
    explanation: '"Für die" wird im Italienischen durch die Präposition "per" gefolgt von dem Artikel "i" ausgedrückt. Somit ergibt sich "per i bambini" (für die Kinder).'
  },
  {
    id: 'dia_6',
    section: 'dialogues',
    level: 'A1',
    questionContext: 'In un negozio di abbigliamento:\nCliente: "Scusi, posso provare questa camicia rossa?"\nCommesso: "_______"',
    questionText: 'Scegli la risposta più naturale dell\'operatore commerciale:',
    options: [
      'No, preferisco mangiare una mela.',
      'Certamente! I camerini sono in fondo a destra.',
      'Sì, costa esattamente cento litri di latte.',
      'Buonanotte, ci vediamo domani!'
    ],
    correctAnswerIndex: 1,
    translation: 'Wähle die natürlichste Antwort des Verkaufsmitarbeiters:',
    explanation: 'Auf die Frage nach dem Anprobieren eines Kleidungsstücks ist die einzig passende geschäftliche Floskel: "Certamente! I camerini sono in fondo a destra." (Sicher! Die Umkleidekabinen sind hinten rechts).'
  },
  {
    id: 'dia_7',
    section: 'dialogues',
    level: 'A1',
    questionText: 'Come si deve rispondere ed efficientemente alla domanda conoscitiva "Come ti chiami?"?',
    options: [
      'Sto benissimo, grazie mille.',
      'Ho venticinque anni di età.',
      'Mi chiamo Francesco e tu?',
      'Vengo dalla Germania.'
    ],
    correctAnswerIndex: 2,
    translation: 'Wie antwortet man höflich und flüssig auf die persönliche Frage "Wie heißt du?"?',
    explanation: 'Auf "Come ti chiami?" antwortet man im Italienischen mit "Mi chiamo ..." (Ich heiße). Somit ist Option 3 die einzig richtige Wahl.'
  },
  {
    id: 'dia_8',
    section: 'dialogues',
    level: 'A2',
    questionContext: 'Al telefono con un ambulatorio:\nSegretaria: "Studio Medico Rossi, buongiorno. In cosa posso aiutarla?"\nCittadino tedesco: "Buongiorno, _______."',
    questionText: 'Completa con la frase adatta e appropriata:',
    options: [
      'vorrei ordinare subito due pizze margherita da asporto',
      'vorrei fissare un appuntamento per una visita medica',
      'voglio comprare un biglietto aereo per Roma',
      'preferisco giocare a tennis con gli amici'
    ],
    correctAnswerIndex: 1,
    translation: 'Vervollständige mit dem passenden und angemessenen Satz:',
    explanation: 'In einer Arztpraxis ruft man an, um einen Untersuchungstermin zu beantragen: "vorrei fissare un appuntamento per una visita medica" (ich würde gerne einen Termin für eine medizinische Untersuchung vereinbaren).'
  },
  {
    id: 'dia_10',
    section: 'dialogues',
    level: 'A2',
    questionContext: 'Dialogo lavorativo:\nImpiegato: "Signor Direttore, qual è la mia mansione principale oggi?"\nDirettore: "_______"',
    questionText: 'Identifica la direttiva coerente:',
    options: [
      'Oggi devi inserire tutti i dati contabili nel computer.',
      'La mia stazione meteo dice che domani nevica forte.',
      'Il treno espresso parte puntualmente dal binario tre.',
      'La pasta è già cotta, prepariamo la salsa!'
    ],
    correctAnswerIndex: 0,
    translation: 'Finde die logisch zusammenhängende Arbeitsanweisung:',
    explanation: '"Mansione" bedeutet Arbeitsaufgabe/Tätigkeit. Der Direktor gibt auf die Frage nach der Aufgabe des Tages die passende Anweisung: "Oggi devi inserire tutti i dati contabili nel computer" (Heute musst du alle Buchungsdaten in den Computer eingeben).'
  },
  {
    id: 'cul_7',
    section: 'culture',
    level: 'A1',
    questionText: 'Qual è la storica e bellissima città capitale della Repubblica Italiana?',
    options: [
      'Venezia',
      'Milano',
      'Roma',
      'Napoli'
    ],
    correctAnswerIndex: 2,
    translation: 'Welche ist die historische und wunderschöne Hauptstadt der Italienischen Republik?',
    explanation: 'Rom (Roma) ist die Hauptstadt Italiens und das politische sowie historische Zentrum des Landes, in dem sich der Sitz von Parlament, Regierung und Staatspräsident befindet.'
  },
  {
    id: 'cul_8',
    section: 'culture',
    level: 'A1',
    questionText: 'Come viene indicata la copertura assicurativa obbligatoria di legge per i veicoli a motore in circolazione?',
    options: [
      'Poste Italiane SpA',
      'RC Auto (Responsabilità Civile)',
      'Istituto Nazionale di Statistica (Istat)',
      'Tessera d\'Imbarco'
    ],
    correctAnswerIndex: 1,
    translation: 'Wie wird die gesetzlich vorgeschriebene Kfz-Haftpflichtversicherung für Kraftfahrzeuge im Straßenverkehr bezeichnet?',
    explanation: 'Die Kfz-Haftpflichtversicherung wird in Italien "RC Auto" genannt (Responsabilità Civile Autoveicoli). Sie muss für jedes im öffentlichen Raum angemeldete und bewegte Kraftfahrzeug nachgewiesen werden.'
  },
  {
    id: 'cul_9',
    section: 'culture',
    level: 'A2',
    questionText: 'Quale ente governativo italiano amministra le pensioni pubbliche, i contributi previdenziali e l\'indennità di disoccupazione?',
    options: [
      'Il Ministero della Difesa',
      'L\'INPS (Istituto Nazionale Previdenza Sociale)',
      'La Prefettura locale',
      'La Questura competente'
    ],
    correctAnswerIndex: 1,
    translation: 'Welche italienische Behörde verwaltet die gesetzlichen Renten, die Sozialabgaben und das Arbeitslosengeld?',
    explanation: 'L\'INPS (Istituto Nazionale della Previdenza Sociale) ist das wichtigste Institut für soziale Vorsorge in Italien. Es ist zuständig für Rentenzahlungen, Krankengeld, Elternzeitgelder und Sozialhilfen.'
  },
  {
    id: 'cul_10',
    section: 'culture',
    level: 'A2',
    questionText: 'In conformità con la Costituzione, per quanti anni complessivi la legge stabilisce l\'obbligo scolastico (scuola dell\'obbligo) in Italia?',
    options: [
      'L\'obbligo dura solo 5 anni di scuola primaria.',
      'Non esiste Schulpflicht sul territorio italiano.',
      'Dura 10 anni in totale, fino al compimento dei 16 anni d\'età.',
      'L\'obbligo scolastico si estende per 13 anni fino all\'università.'
    ],
    correctAnswerIndex: 2,
    translation: 'Wie viele Jahre beträgt die gesetzliche Schulpflicht (scuola dell\'obbligo) in Italien laut Verfassung und Schulgesetzen?',
    explanation: 'Die allgemeine Schulpflicht ("scuola dell\'obbligo") in Italien erstreckt sich über insgesamt 10 Jahre (von 6 bis 16 Jahren) und umfasst die Grundschule, Sekundarstufe I und den Beginn der Sekundarstufe II.'
  }
];
