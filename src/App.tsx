import React, { useState, useEffect, useRef } from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  Clock,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Home,
  Check,
  AlertCircle,
  Download,
  Info,
  ChevronRight,
  Mail,
  Smartphone,
  Sparkles,
  Volume2,
  Settings,
  HelpCircle,
  Flame,
  CheckSquare,
  Sliders,
  Lightbulb
} from 'lucide-react';
import { Question, QuizMode } from './types';
import { playSound } from './audio';
import de from './lang/de.json';

// Global translation lookup helper
const t = (key: string, variables?: Record<string, string | number>): string => {
  const parts = key.split('.');
  let current: any = de;
  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = current[part];
    } else {
      return key;
    }
  }
  if (typeof current !== 'string') return key;
  if (variables) {
    let result = current;
    for (const [k, v] of Object.entries(variables)) {
      result = result.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
    }
    return result;
  }
  return current;
};

// Generic Fisher-Yates array shuffling helper
function shuffleFisherYatesGeneric<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function cleanQuestionText(text: string): string {
  if (!text) return '';
  let cleaned = text;

  // 1. Remove parentheticals containing German keywords or translations
  cleaned = cleaned.replace(/\s*\([^)]*\)/g, (match) => {
    const content = match.slice(1, -1).trim();
    const lower = content.toLowerCase();
    
    if (lower.startsWith('verbo:')) {
      const parts = content.split(',');
      return ` (${parts[0].trim()})`;
    }
    
    const isGerman = /ä|ö|ü|ß|oder|und|von|für|auf|im|wer|wie|was|wo|ihm|ihr|ihnen|an|zu|nach|in|herkunft|gewohnheit|aufforderung|befehl|wunsch|zahlen|kategorie|bestimmter|unbestimmter|bestimmte|unbestimmte|mehrzahl|singular|konjugation|gegenwart|vergangenheit|zukunft|konditional|perfekt|buch|tisch|junge|kaffee|zug|hund|onkel|rucksack|student|spiegel|freund|baum|uhr|flughafen|haus|stuhl|tür|auto|schlüssel|freundin|orange|insel|klassenzimmer/i.test(lower) ||
                     !(lower.includes('verbo') || lower === 'io' || lower === 'tu' || lower === 'lui/lei' || lower === 'noi' || lower === 'voi' || lower === 'loro');
    
    return isGerman ? '' : match;
  });

  // 2. Remove standard brackets [ ] containing German
  cleaned = cleaned.replace(/\s*\[[^\]]*\]/g, (match) => {
    const content = match.slice(1, -1).trim();
    const lower = content.toLowerCase();
    const isGerman = /ä|ö|ü|ß|oder|und|von|für|auf|im|wer|wie|was|wo|ihm|ihr|ihnen|an|zu|nach|in|herkunft|gewohnheit|aufforderung|befehl|wunsch|zahlen|kategorie|bestimmter|unbestimmter|bestimmte|unbestimmte|mehrzahl|singular|konjugation|gegenwart|vergangenheit|zukunft|konditional|perfekt/i.test(lower);
    return isGerman ? '' : match;
  });

  return cleaned.replace(/\s+/g, ' ').replace(/\s+:/g, ':').trim();
}

interface MappedOption {
  text: string;
  isCorrect: boolean;
}

interface ExamAnswer {
  questionId: number;
  questionText: string;
  selectedOptionText: string;
  correctOptionText: string;
  isCorrect: boolean;
  explanation: string;
}

const EXAM_SIZE = 10;

// High-fidelity CSS rendered Italian Flag icon
function ItalianFlag({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'h-3.5 w-5 rounded-sm',
    md: 'h-5 w-7 rounded',
    lg: 'h-7 w-12 rounded-md'
  };
  return (
    <div className={`inline-flex overflow-hidden shadow-sm border border-slate-200/80 shrink-0 ${sizeClasses[size]}`}>
      <div className="bg-[#009246] w-1/3 h-full"></div>
      <div className="bg-[#f1f2f1] w-1/3 h-full"></div>
      <div className="bg-[#ce2b37] w-1/3 h-full"></div>
    </div>
  );
}

// Course categories / Grammatical modules
const CATEGORIES: Record<string, { name: string; desc: string; icon: string }> = {
  all: {
    name: "Alle Übungen (Gemischt)",
    desc: "Bunter Mix aus allen Grammatik- & Wortschatzthemen der Niveaustufe.",
    icon: "GraduationCap"
  },
  praesens_modal: {
    name: "Verben: Gegenwart / Präsens",
    desc: "Konjugation von Verben (are/ere/ire, essere, avere, fare, potere, volere...).",
    icon: "BookOpen"
  },
  vergangenheit: {
    name: "Verben: Passato Prossimo",
    desc: "Bildung des Perfekts mit den Hilftsverben 'avere' oder 'essere' im Rückblicksdrills.",
    icon: "Clock"
  },
  zukunft_konditional: {
    name: "Zukunft, Imperativ & Konditional",
    desc: "Pläne im Futuro Semplice, Bitten im Condizionale und Höflichkeitsanweisungen.",
    icon: "Award"
  },
  nomen_artikel: {
    name: "Substantive & Artikel",
    desc: "Bestimmter/Unbestimmter Artikel (il, lo, la, i, gli, le...) und Grammatik der Mehrzahl.",
    icon: "Check"
  },
  praepositionen: {
    name: "Präpositionen (A1 & Articolate)",
    desc: "Verschmelzungen und Verwendungen von di, da, in, a, su, con, per.",
    icon: "Info"
  },
  adjektive_pronomen: {
    name: "Adjektive, Pronomen & Steigerung",
    desc: "Possessivbegleiter sowie direkte/indirekte Artikelpronomen (lo, la, ci...).",
    icon: "HelpCircle"
  },
  wortschatz_alltag: {
    name: "Wortschatz, Uhrzeit & Alltag",
    desc: "Zahlen, Essen & Getränke, Familie, Wochentage, Monate, Begrüßungen im Alltag.",
    icon: "Sparkles"
  }
};

// Dynamic local categorizer function
export function getQuestionCategory(q: Question): string {
  const qStr = q.question.toLowerCase();
  const expl = q.explanation.toLowerCase();
  
  if (
    expl.includes("passato prossimo") ||
    expl.includes("imperfetto") ||
    expl.includes("vergangenheit") ||
    expl.includes("ausiliare") ||
    expl.includes("partizip") ||
    expl.includes("participio") ||
    expl.includes("perfekt")
  ) {
    return "vergangenheit";
  }
  
  if (
    expl.includes("futuro") ||
    expl.includes("zukunft") ||
    expl.includes("condizionale") ||
    expl.includes("konditional") ||
    expl.includes("imperativo") ||
    expl.includes("aufforderung")
  ) {
    return "zukunft_konditional";
  }
  
  if (
    expl.includes("präsens") ||
    expl.includes("konjugation") ||
    expl.includes("endung für") ||
    expl.includes("verbo:") ||
    expl.includes("verbi") ||
    expl.includes("modalverben") ||
    expl.includes("essere") ||
    expl.includes("avere") ||
    expl.includes("fare") ||
    expl.includes("andare") ||
    expl.includes("potere") ||
    expl.includes("volere") ||
    expl.includes("dovere") ||
    expl.includes("dire") ||
    expl.includes("sapere") ||
    expl.includes("uscire")
  ) {
    return "praesens_modal";
  }

  if (
    expl.includes("präposition") ||
    expl.includes("preposizione") ||
    expl.includes("preposizioni") ||
    expl.includes("verschmilzt") ||
    expl.includes("verschmelzung") ||
    qStr.includes("preposizione")
  ) {
    return "praepositionen";
  }

  if (
    qStr.includes("articolo") ||
    expl.includes("artikel") ||
    expl.includes("singular von") ||
    expl.includes("plural von") ||
    expl.includes("nomen im") ||
    expl.includes("substantiv")
  ) {
    return "nomen_artikel";
  }

  if (
    expl.includes("adjektiv") ||
    expl.includes("adjektive") ||
    expl.includes("pronomen") ||
    expl.includes("pronome") ||
    expl.includes("pronomi") ||
    expl.includes("possessiv") ||
    expl.includes("superlative") ||
    expl.includes("komparative") ||
    qStr.includes("pronome") ||
    qStr.includes("aggettivo")
  ) {
    return "adjektive_pronomen";
  }

  return "wortschatz_alltag";
}

export default function App() {
  // Application routing / screen state
  const [screen, setScreen] = useState<'loading' | 'level_select' | 'category_select' | 'mode_select' | 'quiz' | 'result_screen'>('loading');
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<'A1' | 'A2'>('A1');
  const [quizMode, setQuizMode] = useState<QuizMode>('practice');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [difficulty, setDifficulty] = useState<'easy' | 'normal' | 'hard'>('normal');

  // Senior Accessibility State Attributes
  const [textSize, setTextSize] = useState<'normal' | 'groß' | 'extra-groß'>('groß'); // Default to 'groß' (large text) for old German users
  const [speechRate, setSpeechRate] = useState<number>(0.75); // Slow-paced comfortable listening speed for older learners
  const [showAccessibilityPanel, setShowAccessibilityPanel] = useState<boolean>(false);

  // AI-Powered Translations and lerntipps states
  const [aiTranslation, setAiTranslation] = useState<string>('');
  const [aiTip, setAiTip] = useState<string>('');
  const [loadingAi, setLoadingAi] = useState<boolean>(false);

  // Persistent seen questions state to avoid duplicates
  const [seenQuestionIds, setSeenQuestionIds] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('seen_question_ids_v3');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Active quiz session values
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<MappedOption[]>([]);
  const [answered, setAnswered] = useState<boolean>(false);
  const [clickedOptionIndex, setClickedOptionIndex] = useState<number | null>(null);

  // Practice session statistics counters
  const [practiceCorrectCount, setPracticeCorrectCount] = useState<number>(0);
  const [practiceTotalCount, setPracticeTotalCount] = useState<number>(0);

  // Exam session values
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [examIndex, setExamIndex] = useState<number>(0);
  const [examAnswers, setExamAnswers] = useState<ExamAnswer[]>([]);

  // Timer controls
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const telemetryVersion = 'M615-PWA-TTS';
  const startTimeRef = useRef<number>(0);

  // PWA Prompt Support
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBtn, setShowInstallBtn] = useState<boolean>(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBtn(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const triggerNativeInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`Native install selection outcome: ${outcome}`);
    setDeferredPrompt(null);
    setShowInstallBtn(false);
  };

  // Load questions database on mount
  useEffect(() => {
    fetch('/questions.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Fehler beim Laden von questions.json');
        }
        return res.json();
      })
      .then((data: Question[]) => {
        const cleanedData = data.map(q => ({
          ...q,
          question: cleanQuestionText(q.question)
        }));

        // Deduplicate compiled questions on exact matching text and level
        const uniqueQuestions: Question[] = [];
        const seenQuestions = new Set<string>();

        for (const q of cleanedData) {
          const key = `${q.level}:${q.question.trim().toLowerCase()}`;
          if (!seenQuestions.has(key)) {
            seenQuestions.add(key);
            uniqueQuestions.push(q);
          }
        }

        // Shuffle the loaded database initially so each run feels completely randomized
        const shuffledList = shuffleFisherYatesGeneric<Question>(uniqueQuestions);

        setAllQuestions(shuffledList);
        setScreen('level_select');
      })
      .catch((err) => {
        console.error("Datenbankfehler:", err);
        setScreen('level_select');
      });
  }, []);

  // Update persistent seen list
  const markAsSeen = (id: number) => {
    setSeenQuestionIds((prev) => {
      const nextSeen = [...new Set([...prev, id])];
      try {
        localStorage.setItem('seen_question_ids_v3', JSON.stringify(nextSeen));
      } catch (e) {
        console.error(e);
      }
      return nextSeen;
    });
  };

  // Fisher-Yates mapping configuration so option buttons are dynamically scrambled with exactly A, B, C, D choices
  const mapAndShuffleOptions = (q: Question) => {
    const correctOption = {
      text: q.options[q.correctIndex],
      isCorrect: true
    };
    
    const wrongOptions = q.options
      .map((opt, idx) => ({ text: opt, isCorrect: idx === q.correctIndex }))
      .filter(o => !o.isCorrect);

    // Dynamic shuffle of wrong answers
    const shuffledWrong = shuffleFisherYatesGeneric(wrongOptions);

    // Always keep all 4 options (A-D)
    const finalOptions = [correctOption, ...shuffledWrong];

    return shuffleFisherYatesGeneric(finalOptions);
  };

  // Speaks complete Italian sentence using Browser SpeechSynthesis
  const readSentenceAloud = (sentence: string, fillWord?: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop any pending reading
      
      // If there is a blank, substitute with correct answer or placeholder
      const textToSpeak = sentence.includes("___") && fillWord 
        ? sentence.replace("___", fillWord) 
        : sentence;

      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = 'it-IT';
      utterance.rate = speechRate; // Slower rate tailored for older seniors
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Sprachausgabe wird in diesem Browser leider nicht unterstützt.");
    }
  };

  // Fetch AI Translation & Grammar Lerntipp on background from full-stack Gemini service
  const retrieveAiTranslation = async (q: Question) => {
    // No-op: Removed Gemini API translation loader to honor offline-first local Erläuterung
  };

  // Fetch list of matching questions based on Level + Category filter without duplicates
  const getFilteredQuestionsPool = (level: 'A1' | 'A2', categoryKey: string) => {
    const levelOnly = allQuestions.filter((q) => q.level === level);
    if (categoryKey === 'all') return levelOnly;
    return levelOnly.filter((q) => getQuestionCategory(q) === categoryKey);
  };

  // Select next question for Practice Mode
  const handleNextPracticeQuestion = () => {
    setAnswered(false);
    setClickedOptionIndex(null);

    const activePool = getFilteredQuestionsPool(selectedLevel, selectedCategory);
    if (activePool.length === 0) return;

    // Filter out seen ones
    let unseen = activePool.filter((q) => !seenQuestionIds.includes(q.id));

    if (unseen.length === 0) {
      // Recycle seen database for this specific module
      const poolIds = activePool.map((q) => q.id);
      const updatedSeen = seenQuestionIds.filter((id) => !poolIds.includes(id));
      setSeenQuestionIds(updatedSeen);
      try {
        localStorage.setItem('seen_question_ids_v3', JSON.stringify(updatedSeen));
      } catch {}
      unseen = [...activePool];
    }

    const nextQ = unseen[Math.floor(Math.random() * unseen.length)];
    setCurrentQuestion(nextQ);
    setShuffledOptions(mapAndShuffleOptions(nextQ));
    markAsSeen(nextQ.id);

    // Call Gemini API translation on background
    retrieveAiTranslation(nextQ);
  };

  // Start Practice quiz
  const handleStartPractice = () => {
    setQuizMode('practice');
    setScreen('quiz');
    setAnswered(false);
    setClickedOptionIndex(null);

    const activePool = getFilteredQuestionsPool(selectedLevel, selectedCategory);
    if (activePool.length === 0) return;

    let unseen = activePool.filter((q) => !seenQuestionIds.includes(q.id));
    if (unseen.length === 0) {
      const poolIds = activePool.map((q) => q.id);
      const updatedSeen = seenQuestionIds.filter((id) => !poolIds.includes(id));
      setSeenQuestionIds(updatedSeen);
      try {
        localStorage.setItem('seen_question_ids_v3', JSON.stringify(updatedSeen));
      } catch {}
      unseen = [...activePool];
    }

    const nextQ = unseen[Math.floor(Math.random() * unseen.length)];
    setCurrentQuestion(nextQ);
    setShuffledOptions(mapAndShuffleOptions(nextQ));
    markAsSeen(nextQ.id);

    // Trigger AI translation
    retrieveAiTranslation(nextQ);
  };

  // Start Exam quiz
  const handleStartExam = () => {
    setQuizMode('exam');
    setScreen('quiz');
    setAnswered(false);
    setClickedOptionIndex(null);

    const activePool = getFilteredQuestionsPool(selectedLevel, selectedCategory);
    if (activePool.length === 0) return;

    const examCount = Math.min(activePool.length, EXAM_SIZE);
    let unseen = activePool.filter((q) => !seenQuestionIds.includes(q.id));

    let examSet: Question[] = [];
    if (unseen.length >= examCount) {
      examSet = unseen.slice(0, examCount);
    } else {
      examSet = [...unseen];
      const needed = examCount - unseen.length;

      const poolIds = activePool.map((q) => q.id);
      const updatedSeen = seenQuestionIds.filter((id) => !poolIds.includes(id));
      setSeenQuestionIds(updatedSeen);
      try {
        localStorage.setItem('seen_question_ids_v3', JSON.stringify(updatedSeen));
      } catch {}

      const recycled = activePool.filter((q) => !examSet.some((u) => u.id === q.id));
      const shuffledRecycled = shuffleFisherYatesGeneric<Question>(recycled);
      examSet.push(...shuffledRecycled.slice(0, needed));
    }

    const finalSet = shuffleFisherYatesGeneric(examSet);
    setExamQuestions(finalSet);
    setExamIndex(0);
    setExamAnswers([]);

    const firstQ = finalSet[0];
    setCurrentQuestion(firstQ);
    setShuffledOptions(mapAndShuffleOptions(firstQ));
    markAsSeen(firstQ.id);

    // Fetch AI translation in the background for exam summary context
    retrieveAiTranslation(firstQ);
  };

  // Handle option click behavior with direct Audio synthesis connection
  const handleOptionClick = (idx: number) => {
    if (answered) return;
    
    // Play option tick click
    playSound('click');

    setClickedOptionIndex(idx);
    setAnswered(true);

    const isOptionCorrect = shuffledOptions[idx].isCorrect;
    
    // Trigger instant responsive feedback sound
    if (isOptionCorrect) {
      playSound('correct');
      if (quizMode === 'practice') {
        setPracticeCorrectCount((prev) => prev + 1);
      }
    } else {
      playSound('incorrect');
    }
    
    if (quizMode === 'practice') {
      setPracticeTotalCount((prev) => prev + 1);
    }

    if (quizMode === 'exam') {
      const currentQ = examQuestions[examIndex];
      const selectedOpt = shuffledOptions[idx];
      const correctOpt = shuffledOptions.find((o) => o.isCorrect);

      setExamAnswers((prev) => [
        ...prev,
        {
          questionId: currentQ.id,
          questionText: currentQ.question,
          selectedOptionText: selectedOpt.text,
          correctOptionText: correctOpt?.text || '',
          isCorrect: selectedOpt.isCorrect,
          explanation: currentQ.explanation
        }
      ]);

      // Move forward automatically after 1200ms for Exam conditions
      setTimeout(() => {
        advanceExam();
      }, 1200);
    }
  };

  // Timeout triggers automatically when timer runs to 0 on Exam
  const handleExamTimeout = () => {
    if (answered) return;
    playSound('incorrect'); // play buzz tone on timeout

    setClickedOptionIndex(-1);
    setAnswered(true);

    const currentQ = examQuestions[examIndex];
    const correctOpt = shuffledOptions.find((o) => o.isCorrect);

    setExamAnswers((prev) => [
      ...prev,
      {
        questionId: currentQ.id,
        questionText: currentQ.question,
        selectedOptionText: '[Zeit abgelaufen ⏱️]',
        correctOptionText: correctOpt?.text || '',
        isCorrect: false,
        explanation: currentQ.explanation
      }
    ]);

    setTimeout(() => {
      advanceExam();
    }, 1200);
  };

  const advanceExam = () => {
    setAnswered(false);
    setClickedOptionIndex(null);

    if (examIndex < examQuestions.length - 1) {
      const nextIdx = examIndex + 1;
      setExamIndex(nextIdx);

      const nextQ = examQuestions[nextIdx];
      setCurrentQuestion(nextQ);
      setShuffledOptions(mapAndShuffleOptions(nextQ));
      markAsSeen(nextQ.id);

      // Fetch translation
      retrieveAiTranslation(nextQ);
    } else {
      setScreen('result_screen');
    }
  };

  // Exam Countdown clock interval (UTC Milliseconds calculation)
  useEffect(() => {
    if (quizMode !== 'exam' || screen !== 'quiz') return;

    let baseLimit = selectedLevel === 'A1' ? 60 : 45;
    if (difficulty === 'easy') {
      baseLimit = Math.round(baseLimit * 1.5);
    } else if (difficulty === 'hard') {
      baseLimit = Math.round(baseLimit * 0.5);
    }

    setTimeLeft(baseLimit);
    startTimeRef.current = Date.now();

    const interval = setInterval(() => {
      const elapsedSeconds = Math.floor((Date.now() - startTimeRef.current) / 1000);
      const remaining = Math.max(0, baseLimit - elapsedSeconds);
      setTimeLeft(remaining);

      if (remaining <= 0) {
        clearInterval(interval);
        handleExamTimeout();
      }
    }, 250);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [examIndex, screen, quizMode, selectedLevel, difficulty]);

  // Back home behavior
  const handleGoHome = () => {
    setScreen('level_select');
    setPracticeCorrectCount(0);
    setPracticeTotalCount(0);
  };

  // Calculate progress metric values
  const getSessionProgressPercent = () => {
    if (quizMode === 'exam') {
      return ((examIndex + 1) / EXAM_SIZE) * 100;
    }
    const currentPool = getFilteredQuestionsPool(selectedLevel, selectedCategory);
    const seenCount = seenQuestionIds.filter(id => currentPool.some(q => q.id === id)).length;
    const totalCount = Math.max(1, currentPool.length);
    return (seenCount / totalCount) * 100;
  };

  // Return categories that contain at least one question for the chosen level
  const availableCategories = Object.keys(CATEGORIES).filter(catKey => {
    if (catKey === 'all') return true;
    return allQuestions.some(q => q.level === selectedLevel && getQuestionCategory(q) === catKey);
  });

  // Typography scaling helpers optimized for older senior German readers (with larger, phone-responsive defaults, minimum base 18-19px e.g. text-lg)
  const getQuestionTextSizeClass = () => {
    if (textSize === 'groß') return 'text-3xl md:text-4xl';
    if (textSize === 'extra-groß') return 'text-4xl md:text-5xl';
    return 'text-2xl md:text-3xl'; // Enhanced default for senior legibility on phones
  };

  const getBodyTextSizeClass = () => {
    if (textSize === 'groß') return 'text-xl md:text-2xl';
    if (textSize === 'extra-groß') return 'text-2xl md:text-3xl';
    return 'text-lg md:text-xl'; // Enhanced default for senior legibility on phones (text-lg is 18px, text-xl is 20px)
  };

  const getSubtleTextSizeClass = () => {
    if (textSize === 'groß') return 'text-lg md:text-xl';
    if (textSize === 'extra-groß') return 'text-xl md:text-2xl';
    return 'text-base md:text-lg'; // Enhanced default for senior legibility on phones
  };

  function getIconFromKey(iconName: string) {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-emerald-600 shrink-0" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-emerald-600 shrink-0" />;
      case 'Clock': return <Clock className="w-6 h-6 text-emerald-600 shrink-0" />;
      case 'Award': return <Award className="w-6 h-6 text-emerald-600 shrink-0" />;
      case 'Check': return <Check className="w-6 h-6 text-emerald-600 shrink-0" />;
      case 'Info': return <Info className="w-6 h-6 text-emerald-600 shrink-0" />;
      case 'HelpCircle': return <HelpCircle className="w-6 h-6 text-emerald-600 shrink-0" />;
      default: return <Sparkles className="w-6 h-6 text-emerald-600 shrink-0" />;
    }
  }

  return (
    <div className="flex-1 flex flex-col justify-between max-w-4xl w-full mx-auto p-4 md:p-8 min-h-screen bg-[#F4FAF6] text-slate-900 border-x-4 border-emerald-600">
      
      {/* ACCESS PRECISE STYLINGS & UPPER DECK BRAND HEADER */}
      <header className="py-4 mb-4 border-b-2 border-emerald-500">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#009246] via-[#FFD100] to-[#ce2b37] p-[3px] flex items-center justify-center shrink-0 shadow-md">
              <div className="w-full h-full bg-white rounded-[9px] flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[#009246]" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 id="brand-title" className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">{t('app.title')}</h1>
                <ItalianFlag size="md" />
              </div>
              <p className="text-xs text-slate-550 font-bold">{t('app.subtitle')}</p>
            </div>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
            {/* SENIOR ACCESSIBILITY ASSISTANCE PANEL TOGGLER */}
            <button
              onClick={() => {
                playSound('click');
                setShowAccessibilityPanel(!showAccessibilityPanel);
              }}
              title="Bedienungshilfe & Schriftgröße"
              className={`p-2 rounded-xl border transition-all flex items-center gap-2 cursor-pointer text-xs font-bold ${
                showAccessibilityPanel 
                  ? 'bg-emerald-100 border-emerald-400 text-emerald-900 shadow-sm'
                  : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
              }`}
            >
              <Settings className="w-4 h-4 text-emerald-700 animate-spin-hover" />
              <span className="hidden sm:inline">Bedienungshilfe (A+)</span>
            </button>
            <div className="h-3 w-3 rounded-full bg-[#009246] animate-pulse" title="Satzdatenbank Synchronisiert"></div>
          </div>
        </div>

        {/* ACCESSIBILITY PANEL CONTENT (Tailored for Seniors) */}
        {showAccessibilityPanel && (
          <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-4 animate-slideDown">
            <div className="flex items-center gap-2 border-b border-emerald-200/50 pb-2">
              <Sparkles className="w-4 h-4 text-emerald-700 fill-emerald-100" />
              <h3 className="text-xs font-black uppercase text-emerald-950 tracking-wider">Altengerechte Bedienungshilfen & Einstellungen</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Size Modifier Option Buttons */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-emerald-900 block">Optimale Schriftgröße für leichtes Lesen:</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(['normal', 'groß', 'extra-groß'] as const).map((sz) => (
                    <button
                      key={sz}
                      onClick={() => {
                        playSound('click');
                        setTextSize(sz);
                      }}
                      className={`py-2 px-3 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                        textSize === sz
                          ? 'bg-emerald-700 border-emerald-700 text-white shadow-sm'
                          : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      {sz === 'normal' && 'Normal (A)'}
                      {sz === 'groß' && 'Groß (A+)'}
                      {sz === 'extra-groß' && 'Sehr Groß (A++)'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Speech Rates speed customization buttons */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-emerald-900 block">Sprechgeschwindigkeit des Vorlesers (IT):</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[[0.9, 'Normal'], [0.75, 'Langsam'], [0.6, 'Deutlich']].map(([rate, label]) => (
                    <button
                      key={rate as number}
                      onClick={() => {
                        playSound('click');
                        setSpeechRate(rate as number);
                      }}
                      className={`py-2 px-3 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                        speechRate === rate
                          ? 'bg-emerald-700 border-emerald-700 text-white shadow-sm'
                          : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      {label as string}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Difficulty Level Buttons */}
              <div className="space-y-1.5 col-span-1 lg:col-span-2 pt-1 animate-fadeIn">
                <span className="text-xs font-bold text-emerald-900 block flex items-center gap-1">
                  <Sliders className="w-3.5 h-3.5" /> Schwierigkeit & Fragetiefe:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { val: 'easy', text: 'Einfach 🟢' },
                    { val: 'normal', text: 'Mittel 🟡' },
                    { val: 'hard', text: 'Schwer 🔴' }
                  ].map((lvl) => (
                    <button
                      key={lvl.val}
                      onClick={() => {
                        playSound('click');
                        setDifficulty(lvl.val as any);
                      }}
                      className={`py-2 px-3 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                        difficulty === lvl.val
                          ? 'bg-emerald-700 border-emerald-700 text-white shadow-sm'
                          : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      {lvl.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* VIEWPORT BODY DECK */}
      <main className="flex-1 flex flex-col justify-center py-2" id="main-deck">
        
        {screen === 'loading' && (
          <div className="text-center py-16 space-y-4">
            <div className="relative w-14 h-14 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>
              <div className="absolute inset-0 rounded-full border-4 border-t-[#009246] animate-spin"></div>
            </div>
            <p className="text-slate-600 text-base font-bold animate-pulse">Lade didaktische Fragendatenbank... Bitte warten.</p>
          </div>
        )}

        {/* SCREEN 1: LEVEL SELECTION */}
        {screen === 'level_select' && (
          <div className="space-y-6 max-w-2xl mx-auto w-full animate-fadeIn" id="screen-level-select">
            <div className="text-center flex flex-col items-center gap-4 mb-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full text-sm font-extrabold text-emerald-800 shadow-sm shrink-0 mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Amici d'Italia • Sprachkurs
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 leading-tight">
                {t('home.welcome')}
              </h2>
              <p className="text-slate-750 font-extrabold text-lg sm:text-xl leading-normal">
                {t('home.select_level')}
              </p>
            </div>

            {/* A1 / A2 SELECTION BUTTONS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              <button
                id="btn-level-a1"
                onClick={() => {
                  playSound('click');
                  setSelectedLevel('A1');
                  setSelectedCategory('all');
                  setScreen('category_select');
                }}
                className="group p-6 bg-white border-2 border-slate-200 hover:border-[#009246] hover:shadow-lg rounded-2xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between gap-4 min-h-[220px] shadow-sm"
              >
                <div className="space-y-3 w-full">
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-black text-xl group-hover:bg-[#009246] group-hover:text-white transition-colors shadow-inner">
                      A1
                    </div>
                    <ItalianFlag size="sm" />
                  </div>
                  <h3 id="lvl-title-a1" className="text-2xl font-black text-slate-900 group-hover:text-[#009246] transition-colors leading-tight">
                    {t('home.level_a1')} (Anfänger)
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed break-words">
                    Einführung & Grundfertigkeiten. Bestimmte Artikel, einfache Hilfsverben im Präsens, Uhrzeit-Wochentage-Set und Vokabular für Reise und Begrüßungen.
                  </p>
                </div>
                <div className="text-sm font-black text-emerald-800 flex items-center gap-1.5 mt-2 group-hover:translate-x-1.5 transition-transform">
                  Module ansehen <ArrowRight className="w-4 h-4" />
                </div>
              </button>

              <button
                id="btn-level-a2"
                onClick={() => {
                  playSound('click');
                  setSelectedLevel('A2');
                  setSelectedCategory('all');
                  setScreen('category_select');
                }}
                className="group p-6 bg-white border-2 border-slate-200 hover:border-[#009246] hover:shadow-lg rounded-2xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between gap-4 min-h-[220px] shadow-sm"
              >
                <div className="space-y-3 w-full">
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-850 flex items-center justify-center font-black text-xl group-hover:bg-[#009246] group-hover:text-white transition-colors shadow-inner">
                      A2
                    </div>
                    <div className="flex gap-1">
                      <ItalianFlag size="sm" />
                    </div>
                  </div>
                  <h3 id="lvl-title-a2" className="text-2xl font-black text-slate-900 group-hover:text-[#009246] transition-colors leading-tight">
                    {t('home.level_a2')} (Fortgeschrittene)
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed break-words">
                    Fortgeschrittene Grammatik. Das Passato Prossimo, reflexiv & direkte Pronomen, unregelmäßige Futurstudien, zusammengesetzte Präpositionen und Alltagssätze.
                  </p>
                </div>
                <div className="text-sm font-black text-emerald-800 flex items-center gap-1.5 mt-2 group-hover:translate-x-1.5 transition-transform">
                  Module ansehen <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </div>

            {/* PWA INSTALLATION ADVICE BLOCK */}
            <div id="pwa-guide-card" className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-2xl p-6 shadow-md border border-emerald-800 space-y-4">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-300 shrink-0">
                  <Smartphone className="w-7 h-7" />
                </div>
                <div className="space-y-1.5 flex-1 min-w-0">
                  <h3 className="text-xl font-black text-emerald-250 leading-snug">Italiano als App auf Ihrem Gerät installieren</h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-semibold break-words">
                    Lerne unabhängig von Internet oder mobilem Datenvolumen. Die App startet blitzschnell und ist perfekt auf die Bedürfnisse älterer Lerner abgestimmt.
                  </p>
                </div>
              </div>

              {/* Install Trigger Button */}
              {showInstallBtn && (
                <button
                  onClick={triggerNativeInstall}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-5 bg-[#009246] hover:bg-emerald-500 active:bg-emerald-700 rounded-xl text-sm font-black transition-colors cursor-pointer text-white shadow-sm shadow-emerald-900"
                >
                  <Download className="w-5 h-5 animate-bounce" /> Jetzt App laden ("Italiano")
                </button>
              )}

              {/* General Manual Installation Instructions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-emerald-800/60 text-xs sm:text-sm">
                <div className="space-y-1 bg-black/10 p-3 rounded-xl">
                  <p className="font-extrabold text-emerald-300 flex items-center gap-1 text-sm sm:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Android & Chrome
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    Tippe oben rechts im Chrome-Browser auf die <strong className="text-white">drei Punkte (⋮)</strong> und wähle <strong className="text-white">"App installieren"</strong> oder drücke den Installationspfeil in der Suchleiste.
                  </p>
                </div>
                <div className="space-y-1 bg-black/10 p-3 rounded-xl">
                  <p className="font-extrabold text-emerald-300 flex items-center gap-1 text-sm sm:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> iPhone/iPad (Safari)
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    Tippe unten in der Safari-Steuerung auf das <strong className="text-white">Teilen-Symbol (↑)</strong> und wähle im Menü den Punkt <strong className="text-white">"Zum Home-Bildschirm"</strong> aus.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-center text-sm sm:text-base text-slate-500 font-extrabold pb-8">
              {t('home.footer_credit')}
            </p>
          </div>
        )}

        {/* SCREEN 2: SECTIONALIZED THEMEN- / KATEGORIEAUSWAHL */}
        {screen === 'category_select' && (
          <div className="space-y-6 max-w-3xl mx-auto w-full animate-fadeIn" id="screen-category-select">
            <div className="text-center flex flex-col items-center gap-4 mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full text-sm font-extrabold text-emerald-800 shadow-sm shrink-0 mb-2">
                <ItalianFlag size="sm" /> Niveau {selectedLevel}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Wählen Sie einen Übungsbereich
              </h2>
              <p className="text-slate-700 font-semibold text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Drücken Sie auf einen Bereich, um gezielt grammatikalische oder Wortschatz-Kapitel ohne Dopplungen zu lernen.
              </p>
            </div>

            {/* Grid list of categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5 pt-2">
              {availableCategories.map((catKey) => {
                const info = CATEGORIES[catKey];
                const poolSize = getFilteredQuestionsPool(selectedLevel, catKey).length;
                
                return (
                  <button
                    key={catKey}
                    onClick={() => {
                      playSound('click');
                      setSelectedCategory(catKey);
                      setScreen('mode_select');
                    }}
                    className="p-5 bg-white border-2 border-slate-200 hover:border-[#009246] hover:shadow-md rounded-2xl text-left transition-all cursor-pointer flex flex-col sm:flex-row gap-4 items-start group shadow-sm w-full min-h-[120px]"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 group-hover:bg-[#009246] group-hover:text-white transition-all shadow-inner">
                      {getIconFromKey(info.icon)}
                    </div>
                    <div className="space-y-2 flex-1 min-w-0 w-full">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-1 w-full">
                        <h4 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-[#009246] transition-colors break-words leading-tight">
                          {info.name}
                        </h4>
                        <span className="text-xs font-black uppercase text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full shrink-0">
                          {poolSize} Fragen
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-semibold break-words">
                        {info.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="text-center pt-4">
              <button
                onClick={() => {
                  playSound('click');
                  setScreen('level_select');
                }}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-350 rounded-xl text-sm font-black text-slate-700 transition-colors cursor-pointer shadow-sm"
              >
                Zurück zur Niveau-Auswahl
              </button>
            </div>
          </div>
        )}

        {/* SCREEN 3: CHOOSE LERNMODUS */}
        {screen === 'mode_select' && (
          <div className="space-y-6 max-w-2xl mx-auto w-full animate-fadeIn" id="screen-mode-select">
            <div className="text-center flex flex-col items-center gap-4 mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full text-sm font-extrabold text-emerald-800 shadow-sm shrink-0 mb-2">
                <ItalianFlag size="sm" /> Niveau {selectedLevel} • {CATEGORIES[selectedCategory]?.name}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {t('mode.title')}
              </h2>
              <p className="text-slate-705 font-semibold text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-normal">
                Wählen Sie, ob Sie im entspannten Übungsmodus lernen oder Ihr Wissen prüfen möchten.
              </p>
            </div>

            {/* HIGHLY INTERACTIVE VIBRANT DIFFICULTY SELECTOR CARD */}
            <div className="bg-emerald-50/40 border-2 border-emerald-500/20 rounded-2xl p-5 sm:p-6 shadow-xs space-y-3.5">
              <div className="flex items-center gap-2">
                <Sliders className="w-5 h-5 text-emerald-600" />
                <h3 className="text-base font-black text-slate-900 uppercase tracking-wide">Schwierigkeitsgrad wählen</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-600 font-semibold leading-relaxed break-words">
                Bestimmt das Zeitlimit für den Prüfungsmodus (Einfach = Extra Zeit, Mittel = Standard, Schwer = Turbo-Zeit).
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                {[
                  { key: 'easy', label: 'Einfach 🟢', desc: 'A-D Wahl • Extra Zeit' },
                  { key: 'normal', label: 'Mittel 🟡', desc: 'A-D Wahl • Standard' },
                  { key: 'hard', label: 'Schwer 🔴', desc: 'A-D Wahl • Turbo' }
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => {
                      playSound('click');
                      setDifficulty(item.key as any);
                    }}
                    className={`p-4 rounded-xl border-2 text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 min-h-[72px] ${
                      difficulty === item.key
                        ? 'bg-emerald-600 border-emerald-700 text-white shadow-md font-black scale-[1.02]'
                        : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800 hover:border-emerald-600/50'
                    }`}
                  >
                    <span className="text-sm sm:text-base font-black">{item.label}</span>
                    <span className={`text-[11px] font-bold leading-tight ${difficulty === item.key ? 'text-emerald-100' : 'text-slate-500'}`}>{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {/* Practice Mode */}
              <button
                id="btn-mode-practice"
                onClick={() => {
                  playSound('click');
                  handleStartPractice();
                }}
                className="w-full p-6 bg-white border-2 border-slate-200 hover:border-[#009246] rounded-2xl text-left transition-all hover:shadow-md cursor-pointer flex flex-col sm:flex-row items-start gap-4 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="space-y-1.5 flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                    {t('mode.practice_btn')}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-semibold break-words">
                    Sofortige Übersetzung und Hilfe nach jedem Klick. Perfekt für Senioren, um Vokabeln und Sätze zu verinnerlichen.
                  </p>
                </div>
              </button>

              {/* Exam Mode */}
              <button
                id="btn-mode-exam"
                onClick={() => {
                  playSound('click');
                  handleStartExam();
                }}
                className="w-full p-6 bg-white border-2 border-slate-200 hover:border-[#ce2b37] rounded-2xl text-left transition-all hover:shadow-md cursor-pointer flex flex-col sm:flex-row items-start gap-4 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-800 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="space-y-1.5 flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                    {t('mode.exam_btn')} (10 Fragen Auswertung)
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-semibold break-words">
                    {selectedLevel === 'A1' ? '60 Sekunden Zeitlimit pro Frage.' : '45 Sekunden Zeitlimit pro Frage.'} Keine Sofortkorrekturen. Auswertung am Ende.
                  </p>
                </div>
              </button>
            </div>

            <div className="text-center pt-4">
              <button
                onClick={() => {
                  playSound('click');
                  setScreen('category_select');
                }}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-350 rounded-xl text-sm font-black text-slate-700 transition-colors cursor-pointer shadow-sm"
              >
                Zurück zur Modulauswahl
              </button>
            </div>
          </div>
        )}

        {/* SCREEN 4: ACTIVE QUIZ DISPLAY */}
        {screen === 'quiz' && currentQuestion && (
          <div className="space-y-5 max-w-2xl mx-auto w-full animate-fadeIn" id="screen-quiz">
            
            {/* PROGRESS & LEVEL METADATA BAR */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-black text-[#009246] uppercase tracking-wider flex items-center gap-1">
                      <span>🇮🇹</span>
                      <span>{quizMode === 'practice' ? 'Übungsmodus' : 'Prüfungsmodus'}</span>
                      <span>•</span>
                      <span>{CATEGORIES[selectedCategory]?.name}</span>
                    </p>
                  </div>
                  <p className={`font-extrabold text-slate-800 ${getBodyTextSizeClass()}`}>
                    {quizMode === 'practice' 
                      ? `Übungssitzung: ${seenQuestionIds.filter(id => getFilteredQuestionsPool(selectedLevel, selectedCategory).some(q => q.id === id)).length} von ${getFilteredQuestionsPool(selectedLevel, selectedCategory).length} Begriffen gelöst`
                      : t('quiz.question_counter', {
                          current: examIndex + 1,
                          total: examQuestions.length
                        })}
                  </p>
                </div>

                {/* TIMERS ONLY ACTIVE ON EXAM MODE */}
                {quizMode === 'exam' && (
                  <div className="flex items-center gap-2 bg-rose-50 border border-rose-100 px-3 py-1.5 rounded-xl text-rose-700 font-bold shrink-0">
                    <Clock className="w-4 h-4 shrink-0" />
                    <span className="text-xs font-black font-mono">
                      {t('quiz.timer_prefix')} {t('quiz.timer_seconds', { seconds: timeLeft })}
                    </span>
                  </div>
                )}
              </div>

              {/* PROGRESS BAR RATIO */}
              <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden" id="quiz-progress-outer">
                <div
                  id="quiz-progress-inner"
                  className={`h-full transition-all duration-300 ${quizMode === 'practice' ? 'bg-[#009246]' : 'bg-rose-600'}`}
                  style={{ width: `${getSessionProgressPercent()}%` }}
                ></div>
              </div>
            </div>

            {/* MAIN QUESTION DISPLAY CARD */}
            <div className="bg-white border-2 border-slate-250/70 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-black bg-slate-100 text-slate-600 border border-slate-200 px-2 py-0.5 rounded-md">
                    {currentQuestion.level} • {CATEGORIES[getQuestionCategory(currentQuestion)]?.name || 'Grammatik'} • Frage #{currentQuestion.id}
                  </span>
                  
                  {/* TTS Voice Reader trigger button */}
                  <button
                    onClick={() => {
                      playSound('click');
                      readSentenceAloud(currentQuestion.question, currentQuestion.options[currentQuestion.correctIndex]);
                    }}
                    title="Den italienischen Satz vorgelesen anhören"
                    className="inline-flex items-center gap-1 py-1.5 px-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl hover:bg-emerald-100 transition-colors cursor-pointer text-xs font-bold shrink-0"
                  >
                    <Volume2 className="w-4 h-4 text-emerald-800" />
                    <span>Satz anhören (Aussprache)</span>
                  </button>
                </div>

                <div className="py-2.5">
                  <p className={`font-black text-slate-950 leading-normal ${getQuestionTextSizeClass()}`}>
                    {currentQuestion.question}
                  </p>
                </div>
              </div>

              {/* SHUFFLED OPTIONS TARGET DECK */}
              <div className="grid grid-cols-1 gap-3 pt-1" id="options-deck">
                {shuffledOptions.map((opt, idx) => {
                  const isCh = idx === clickedOptionIndex;
                  return (
                    <button
                      key={idx}
                      id={`option-${idx}`}
                      disabled={answered}
                      onClick={() => handleOptionClick(idx)}
                      style={{ opacity: answered && !isCh && (!opt.isCorrect || quizMode === 'exam') ? 0.6 : 1 }}
                      className={`w-full p-4 border-2 text-left rounded-xl transition-all duration-150 cursor-pointer flex items-start justify-between gap-3 min-h-[56px] focus:outline-none ${
                        getBodyTextSizeClass()
                      } ${
                        !answered
                          ? 'bg-white hover:bg-slate-50 border-slate-200 text-slate-900 font-extrabold active:bg-slate-100 focus:border-emerald-600'
                          : quizMode === 'practice'
                            ? opt.isCorrect
                              ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-black shadow-sm'
                              : isCh
                                ? 'bg-rose-50 border-rose-500 text-rose-950 font-black'
                                : 'bg-slate-50 border-slate-200 text-slate-400'
                            : isCh // Exam mode locks click representation only
                              ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-black'
                              : 'bg-slate-50 border-slate-200 text-slate-400'
                      }`}
                    >
                      <span className="flex items-start gap-3 flex-1 min-w-0">
                        <span className={`w-7 h-7 rounded-lg border text-xs font-bold inline-flex items-center justify-center shrink-0 mt-0.5 ${
                          !answered 
                            ? 'bg-slate-100 border-slate-200 text-slate-600'
                            : opt.isCorrect && quizMode === 'practice'
                              ? 'bg-emerald-600 border-emerald-600 text-white'
                              : isCh && !opt.isCorrect && quizMode === 'practice'
                                ? 'bg-rose-600 border-rose-600 text-white'
                                : 'bg-slate-200 border-slate-200 text-slate-400'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="flex-1 min-w-0 break-words leading-tight">{opt.text}</span>
                      </span>
                      
                      {answered && quizMode === 'practice' && opt.isCorrect && (
                        <Check className="w-5 h-5 text-emerald-700 stroke-[3] shrink-0 mt-1" />
                      )}
                      {answered && quizMode === 'practice' && isCh && !opt.isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-700 shrink-0 mt-1" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* EXPANDED OFFLINE EXPLANATION - HIGHLY VIBRANT & SMART */}
              {quizMode === 'practice' && answered && (
                <div className="pt-2 border-t border-slate-200/40">
                  <div className="p-4 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border-2 border-emerald-500/20 rounded-2xl space-y-2 animate-fadeIn shadow-xs">
                    <p className="text-xs font-black text-emerald-950 uppercase tracking-widest flex items-center gap-1.5">
                      <Lightbulb className="w-4 h-4 text-emerald-700 fill-emerald-100" />
                      <span>didaktische Erklärung & Übersetzung:</span>
                    </p>
                    <p className={`text-slate-800 leading-relaxed font-bold ${getSubtleTextSizeClass()}`}>
                      {currentQuestion.explanation}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* ACTION FOOTER NAV CONTROLS */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 w-full">
              <button
                id="btn-abort-quiz"
                onClick={() => {
                  playSound('click');
                  handleGoHome();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-white border-2 border-slate-200 rounded-xl font-extrabold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer text-sm"
              >
                Übung abbrechen
              </button>

              {quizMode === 'practice' && answered && (
                <button
                  id="btn-next-question"
                  onClick={() => {
                    playSound('click');
                    handleNextPracticeQuestion();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#009246] hover:bg-emerald-600 text-white rounded-xl text-base font-black transition-colors cursor-pointer shadow-sm shadow-emerald-800"
                >
                  <span>{t('quiz.next_btn')}</span> <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Session statistics visualizer bar */}
            {quizMode === 'practice' && practiceTotalCount > 0 && (
              <div className="bg-slate-100 p-2.5 rounded-xl flex items-center justify-between text-xs text-slate-500 font-bold">
                <span className="flex items-center gap-1.5"><CheckSquare className="w-4 h-4 text-[#009246]" /> Heutige Erfolgsquote:</span>
                <span className="font-mono text-[#009246]">{practiceCorrectCount} richtig von {practiceTotalCount} Fragen ({Math.round((practiceCorrectCount/practiceTotalCount)*100)}%)</span>
              </div>
            )}
          </div>
        )}

        {/* SCREEN 5: EXAM SESSION RESULTS VIEW */}
        {screen === 'result_screen' && (
          <div className="space-y-6 max-w-3xl mx-auto w-full animate-fadeIn" id="screen-result">
            {/* SCORE HERO BANNER */}
            {(() => {
              const total = examQuestions.length;
              const correct = examAnswers.filter((a) => a.isCorrect).length;
              const percentage = Math.round((correct / total) * 100);
              const passed = percentage >= 60; // 60% requirement for language certificate passes

              return (
                <div className="space-y-6">
                  <div
                    className={`rounded-2xl p-6 text-center shadow-md border space-y-4 ${
                      passed
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                        : 'bg-rose-50 border-rose-300 text-rose-950'
                    }`}
                  >
                    <div className="w-14 h-14 rounded-full mx-auto flex items-center justify-center font-bold">
                      {passed ? (
                        <CheckCircle2 className="w-12 h-12 text-emerald-600" />
                      ) : (
                        <XCircle className="w-12 h-12 text-rose-600" />
                      )}
                    </div>

                    <div className="space-y-2">
                      <h2 className="text-2xl font-black tracking-tight">
                        {t('result.title')} ({selectedLevel})
                      </h2>
                      <div className="space-y-0.5">
                        <p className="text-sm font-semibold">{t('result.score_label')}</p>
                        <p className="text-4xl font-black font-mono text-[#009246]">
                          {t('result.score_percentage', { percentage })}
                        </p>
                      </div>
                      <p className="text-xs font-black uppercase tracking-wider text-slate-500">
                        {correct} von {total} Fragen richtig gelöst ({percentage}%)
                      </p>
                    </div>

                    <p className={`font-bold leading-normal max-w-lg mx-auto text-slate-700 ${getBodyTextSizeClass()}`}>
                      {passed ? t('result.passed') : t('result.failed')}
                    </p>
                  </div>

                  {/* ANSWER BREAKDOWN REVIEW */}
                  <div className="space-y-3.5">
                    <h3 className="text-base font-black text-slate-800 uppercase tracking-wider pl-1 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-emerald-600" />
                      <span>Ausführlicher Korrektur- & Grammatikbericht:</span>
                    </h3>

                    <div className="space-y-3">
                      {examAnswers.map((item, idx) => {
                        return (
                          <div
                            key={idx}
                            className={`p-4 rounded-xl border bg-white space-y-2 relative shadow-sm ${
                              item.isCorrect ? 'border-emerald-100' : 'border-rose-100'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-4">
                              <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                                Frage {idx + 1}
                              </span>
                              <span
                                className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                                  item.isCorrect
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : 'bg-rose-100 text-rose-800'
                                }`}
                              >
                                {item.isCorrect ? 'Richtig' : 'Falsch'}
                              </span>
                            </div>

                            <p className="text-sm font-extrabold text-slate-900 leading-relaxed">
                              {item.questionText}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-100">
                              <div>
                                <span className="text-slate-400 font-bold block">Ausgewählte Antwort:</span>
                                <span
                                  className={`font-black ${
                                    item.isCorrect ? 'text-emerald-700' : 'text-rose-700'
                                  }`}
                                >
                                  {item.selectedOptionText}
                                </span>
                              </div>
                              <div>
                                <span className="text-slate-400 font-bold block">Richtige Lösung:</span>
                                <span className="font-black text-emerald-700">
                                  {item.correctOptionText}
                                </span>
                              </div>
                            </div>

                            {item.explanation && (
                              <div className="mt-2 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-150">
                                <strong className="font-extrabold text-emerald-800">Grammatik-Lektion:</strong> {item.explanation}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* RETRY ACTIONS ROW */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      id="btn-retry-exam"
                      onClick={() => {
                        playSound('click');
                        handleStartExam();
                      }}
                      className="w-full sm:flex-1 py-3.5 px-5 bg-[#009246] hover:bg-emerald-600 text-white rounded-xl font-black flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm text-sm"
                    >
                      <RotateCcw className="w-4 h-4" /> {t('result.retry_btn')}
                    </button>
                    <button
                      id="btn-result-home"
                      onClick={() => {
                        playSound('click');
                        handleGoHome();
                      }}
                      className="w-full sm:flex-1 py-3.5 px-5 bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-700 rounded-xl font-black flex items-center justify-center gap-1.5 transition-colors cursor-pointer text-sm"
                    >
                      <Home className="w-4 h-4" /> {t('result.home_btn')}
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </main>

      {/* FOOTER ACCREDITATION (Updated to olamidegeorg with no links) */}
      <footer className="text-center py-4 mt-8 border-t-2 border-emerald-500 text-slate-500 space-y-1.5 bg-emerald-50/40 rounded-xl p-4">
        <p className="text-sm font-semibold text-slate-700">
          Developed by:{' '}
          <span className="font-black text-[#009246] bg-emerald-50 px-3 py-1.5 rounded-md border border-emerald-200 shadow-2xs">
            olamidegeorg
          </span>
        </p>
        <p className="text-[11px] font-bold text-slate-500 leading-relaxed max-w-lg mx-auto">
          🇮🇹 Italiano-App • Zertifiziertes Syllabus-Lernportal für Deutschsprachige © {new Date().getUTCFullYear()} • Entwickelt zur PWA-Offline-Eignung und optimalen barrierefreien Lesbarkeit für alle Altersklassen.
        </p>
      </footer>
    </div>
  );
}
