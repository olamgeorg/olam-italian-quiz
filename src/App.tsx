/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { UserStats, QuizMode, Question, SectionId } from './types';
import { QUESTIONS, SECTIONS } from './questions';
import { THEMES } from './lib/themes';
import { getAudioMuted, setAudioMuted } from './lib/audio';
import { AudioToggle } from './components/AudioToggle';
import { ThemeSelector } from './components/ThemeSelector';
import { StatsDashboard } from './components/StatsDashboard';
import { ReviewList } from './components/ReviewList';
import { QuizSession } from './components/QuizSession';
import {
  Award,
  BookOpen,
  CheckCircle,
  Clock,
  Home,
  Play,
  RotateCcw,
  Sparkles,
  Trophy,
  XCircle,
  GraduationCap,
  BookOpenCheck,
  ChevronRight,
  AlertCircle
} from 'lucide-react';

const STORAGE_STATS_KEY = 'olamgeorg_italian_quiz_stats';
const STORAGE_THEME_KEY = 'olamgeorg_italian_quiz_theme';
const STORAGE_MUTED_KEY = 'olamgeorg_italian_quiz_muted';
const STORAGE_STYLE_KEY = 'olamgeorg_italian_quiz_style';

const defaultStats: UserStats = {
  quizzesTaken: 0,
  examHighscore: 0,
  totalQuestionsAnswered: 0,
  correctAnswersCount: 0,
  masteryBySection: {
    vocabulary: { answered: 0, correct: 0 },
    grammar: { answered: 0, correct: 0 },
    dialogues: { answered: 0, correct: 0 },
    culture: { answered: 0, correct: 0 }
  },
  incorrectQuestionIds: []
};

export default function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState<'main' | 'quiz_session' | 'stats' | 'review' | 'finished_overview'>('main');

  // Theme, Sound & Style Configuration
  const [currentThemeId, setCurrentThemeId] = useState<string>('coral-sunset');
  const [designStyle, setDesignStyle] = useState<'neobrutalist' | 'modern'>('neobrutalist');
  const [audioMuted, setAudioMutedState] = useState<boolean>(false);

  // Stats Database State
  const [stats, setStats] = useState<UserStats>(defaultStats);

  // Active Game State
  const [activeQuizMode, setActiveQuizMode] = useState<QuizMode | 'remedial'>('practice');
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [lastSessionResult, setLastSessionResult] = useState<{
    totalQuestions: number;
    correctCount: number;
    answers: Record<string, number>;
    incorrectIds: string[];
    mode: QuizMode | 'remedial';
  } | null>(null);

  // Load configuration and statistics from localStorage on boot
  useEffect(() => {
    // Stats loading
    try {
      const persistedStats = localStorage.getItem(STORAGE_STATS_KEY);
      if (persistedStats) {
        const parsed = JSON.parse(persistedStats);
        // Safely extend in case keys ever change
        setStats({ ...defaultStats, ...parsed });
      }
    } catch (e) {
      console.warn('Could not load stats from localStorage', e);
    }

    // Theme loading
    try {
      const persistedTheme = localStorage.getItem(STORAGE_THEME_KEY);
      if (persistedTheme) {
        setCurrentThemeId(persistedTheme);
      }
    } catch (e) {
      console.warn('Could not load theme', e);
    }

    // Design structure style loading
    try {
      const persistedStyle = localStorage.getItem(STORAGE_STYLE_KEY);
      if (persistedStyle === 'modern' || persistedStyle === 'neobrutalist') {
        setDesignStyle(persistedStyle);
      }
    } catch (e) {
      console.warn('Could not load style', e);
    }

    // Audio muted loading
    try {
      const persistedMuted = localStorage.getItem(STORAGE_MUTED_KEY);
      if (persistedMuted) {
        const isMuted = JSON.parse(persistedMuted);
        setAudioMutedState(isMuted);
        setAudioMuted(isMuted);
      }
    } catch (e) {
      console.warn('Could not load audio state', e);
    }
  }, []);

  // Sync statistics to localStorage
  const saveStats = (newStats: UserStats) => {
    setStats(newStats);
    try {
      localStorage.setItem(STORAGE_STATS_KEY, JSON.stringify(newStats));
    } catch (e) {
      console.warn('Could not save stats to localStorage', e);
    }
  };

  // Theme handling
  const handleSelectTheme = (themeId: string) => {
    setCurrentThemeId(themeId);
    try {
      localStorage.setItem(STORAGE_THEME_KEY, themeId);
    } catch (e) {
      console.warn('Could not save theme', e);
    }
  };

  // Design style selection
  const handleSelectDesignStyle = (style: 'neobrutalist' | 'modern') => {
    setDesignStyle(style);
    try {
      localStorage.setItem(STORAGE_STYLE_KEY, style);
    } catch (e) {
      console.warn('Could not save design style', e);
    }
  };

  // Audio handling
  const handleAudioToggle = () => {
    const nextMuted = !audioMuted;
    setAudioMutedState(nextMuted);
    try {
      localStorage.setItem(STORAGE_MUTED_KEY, JSON.stringify(nextMuted));
    } catch (e) {
      console.warn('Could not save muted configuration', e);
    }
  };

  // Clear/Reset statistics
  const handleResetStats = () => {
    saveStats(defaultStats);
  };

  // Start a new basic category practice (e.g. 5 questions only to train a weakness)
  const handleStartCategoryQuiz = (sectionId: string) => {
    const filtered = QUESTIONS.filter((q) => q.section === sectionId);
    // Shuffle the matching ones and pick max 5
    const shuffled = [...filtered].sort(() => 0.5 - Math.random()).slice(0, 5);

    setActiveQuizMode('practice');
    setActiveQuestions(shuffled);
    setActiveTab('quiz_session');
  };

  // Start a Standard General Practice Quiz (10 questions chosen randomly)
  const handleStartGeneralPractice = () => {
    const shuffled = [...QUESTIONS].sort(() => 0.5 - Math.random()).slice(0, 10);
    setActiveQuizMode('practice');
    setActiveQuestions(shuffled);
    setActiveTab('quiz_session');
  };

  // Start custom Exam Mode (20 questions balanced across categories to match true syllabus mock, timed conditions)
  const handleStartExamSimulation = () => {
    // Select 5 questions from each of the 4 sections
    const idsBySection: Record<SectionId, Question[]> = {
      vocabulary: [],
      grammar: [],
      dialogues: [],
      culture: []
    };

    QUESTIONS.forEach((q) => {
      idsBySection[q.section].push(q);
    });

    const selectedExamSet: Question[] = [];
    Object.keys(idsBySection).forEach((key) => {
      const shuffledSection = [...idsBySection[key as SectionId]].sort(() => 0.5 - Math.random());
      // Pull 5 questions from each category (yields 20 questions total)
      selectedExamSet.push(...shuffledSection.slice(0, 5));
    });

    // Final global shuffle of exam questions
    selectedExamSet.sort(() => 0.5 - Math.random());

    setActiveQuizMode('exam');
    setActiveQuestions(selectedExamSet);
    setActiveTab('quiz_session');
  };

  // Start Fehlertraining (remedial on missed question index)
  const handleStartRemedialQuiz = () => {
    if (stats.incorrectQuestionIds.length === 0) return;

    // Grab actual questions
    const remedialSet = stats.incorrectQuestionIds
      .map(id => QUESTIONS.find((q) => q.id === id))
      .filter((q): q is Question => q !== undefined);

    setActiveQuizMode('remedial');
    setActiveQuestions(remedialSet);
    setActiveTab('quiz_session');
  };

  // Manual elimination of items from error log
  const handleRemoveFromIncorrect = (qId: string) => {
    const updatedIds = stats.incorrectQuestionIds.filter((id) => id !== qId);
    saveStats({
      ...stats,
      incorrectQuestionIds: updatedIds
    });
  };

  // Handle Quiz completion
  const handleQuizFinished = (results: {
    totalQuestions: number;
    correctCount: number;
    answers: Record<string, number>;
    incorrectIds: string[];
  }) => {
    const { totalQuestions, correctCount, answers, incorrectIds } = results;
    const sessionAccuracy = Math.round((correctCount / totalQuestions) * 100);

    // Build the new user stats
    let totalQuizzesTaken = stats.quizzesTaken + 1;
    let highscore = stats.examHighscore;

    if (activeQuizMode === 'exam') {
      highscore = Math.max(stats.examHighscore, sessionAccuracy);
    }

    // Merge mastery by section
    const sectionMasteryMerge = { ...stats.masteryBySection };
    activeQuestions.forEach((q) => {
      const isCorrect = answers[q.id] === q.correctAnswerIndex;
      if (!sectionMasteryMerge[q.section]) {
        sectionMasteryMerge[q.section] = { answered: 0, correct: 0 };
      }
      sectionMasteryMerge[q.section].answered += 1;
      if (isCorrect) {
        sectionMasteryMerge[q.section].correct += 1;
      }
    });

    // Recompute the correct/incorrect IDs tracking pool
    // In remedial mode: if correctly answered, remove from historical pool. If still wrong, keep it.
    // In regular mode: if wrong, add to pool. If correct, remove from pool if it was there before.
    let updatedIncorrectPool = [...stats.incorrectQuestionIds];
    
    activeQuestions.forEach((q) => {
      const isCorrect = answers[q.id] === q.correctAnswerIndex;
      if (isCorrect) {
        // Remove from error pool if it exists
        updatedIncorrectPool = updatedIncorrectPool.filter((id) => id !== q.id);
      } else {
        // Add to error pool if not already present
        if (!updatedIncorrectPool.includes(q.id)) {
          updatedIncorrectPool.push(q.id);
        }
      }
    });

    const newStats: UserStats = {
      ...stats,
      quizzesTaken: totalQuizzesTaken,
      examHighscore: highscore,
      totalQuestionsAnswered: stats.totalQuestionsAnswered + totalQuestions,
      correctAnswersCount: stats.correctAnswersCount + correctCount,
      masteryBySection: sectionMasteryMerge,
      incorrectQuestionIds: updatedIncorrectPool
    };

    saveStats(newStats);

    setLastSessionResult({
      totalQuestions,
      correctCount,
      answers,
      incorrectIds,
      mode: activeQuizMode
    });

    setActiveTab('finished_overview');
  };

  // Find css styles based on selected dynamic background
  const activeTheme = THEMES.find((theme) => theme.id === currentThemeId) || THEMES[0];
  const isN = designStyle === 'neobrutalist';

  return (
    <div
      className={`min-h-screen transition-all duration-350 p-3 sm:p-6 md:p-8 flex flex-col font-sans ${activeTheme.cssClass}`}
    >
      {/* GLOBAL WATERMARK HEADER & NAVIGATION BAR */}
      <header 
        className={`max-w-6xl w-full mx-auto mb-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 transition-all duration-300 ${
          isN
            ? 'bg-white rounded-[24px] border-4 border-[#4D3B3B] shadow-[6px_6px_0px_#4D3B3B]'
            : 'bg-white/90 backdrop-blur-md rounded-3xl border border-slate-200/50 shadow-md shadow-slate-100/30'
        }`}
      >
        <div className="flex items-center gap-3">
          <div 
            className={`w-12 h-12 rounded-xl p-0.5 flex items-center justify-center transition-all ${
              isN
                ? 'bg-[#FFD93D] border-4 border-[#4D3B3B] shadow-[2px_2px_0px_#4D3B3B]'
                : 'bg-indigo-500 text-white'
            }`}
          >
            <div className={`text-xl font-black ${isN ? 'text-[#4D3B3B]' : 'text-white'}`}>
              IT
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className={`text-[10px] font-black uppercase tracking-wider font-mono ${isN ? 'text-[#4D3B3B]/80' : 'text-[#6C5CE7]'}`}>
                Italien-Integrationskurs
              </span>
              <span 
                className={`px-1.5 py-0.1 text-[9px] font-black rounded uppercase ${
                  isN
                    ? 'bg-[#E1F5FE] text-[#4D3B3B] border-2 border-[#4D3B3B]'
                    : 'bg-sky-50 text-sky-700 border border-sky-200'
                }`}
              >
                A1-A2 Syllabus
              </span>
            </div>
            <h1 className={`text-lg sm:text-2xl font-black tracking-tight flex items-center gap-2 ${isN ? 'text-[#4D3B3B]' : 'text-slate-800'}`}>
              Italienisch-Prüfungsportal
            </h1>
          </div>
        </div>

        {/* Customized link as OlamGeorg Creator Badge */}
        <div 
          className={`flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 ${
            isN ? 'border-t-4 sm:border-t-0 border-[#4D3B3B]' : 'border-t sm:border-t-0 border-slate-100'
          }`}
        >
          <a
            id="curator-link-olamgeorg"
            href="https://github.com/OlamGeorg"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-black transition-all text-center select-none ${
              isN
                ? 'bg-white rounded-full border-4 border-[#4D3B3B] text-[#4D3B3B] shadow-[2px_2px_0px_#4D3B3B] hover:translate-y-0.5 hover:shadow-none'
                : 'bg-slate-50 hover:bg-slate-100 rounded-full border border-slate-200 text-slate-600 hover:scale-[1.02] active:scale-[0.98]'
            }`}
          >
            <span>Studien-Leitung:</span>
            <span className={`underline font-black font-sans ${isN ? 'text-[#FF6B6B]' : 'text-indigo-600'}`}>OlamGeorg</span>
          </a>

          <AudioToggle onToggle={handleAudioToggle} muted={audioMuted} designStyle={designStyle} />
        </div>
      </header>

      {/* THREE TABS TOP-LEVEL COMPASS SYSTEM FOR MOBILES (FULL WIDTH BUTTON STACK ON SMALL, INLINE ROW ON DESKTOP) */}
      {activeTab !== 'quiz_session' && (
        <nav className="max-w-6xl w-full mx-auto mb-6">
          <div 
            className={`grid grid-cols-1 sm:grid-cols-3 gap-3 p-2 transition-all duration-305 ${
              isN
                ? 'bg-[#FFF8E1] rounded-[24px] border-4 border-[#4D3B3B] shadow-[4px_4px_0px_#4D3B3B]'
                : 'bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/50 shadow-sm'
            }`}
          >
            <button
              id="nav-tab-main"
              onClick={() => setActiveTab('main')}
              className={`w-full py-3.5 px-4 font-black text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer ${
                isN
                  ? `rounded-xl border-4 ${
                      activeTab === 'main'
                        ? 'bg-[#4ECDC4] border-[#4D3B3B] text-white shadow-[4px_4px_0px_#4D3B3B] -translate-y-0.5'
                        : 'border-transparent text-[#4D3B3B] hover:bg-white/50'
                    }`
                  : `rounded-xl ${
                      activeTab === 'main'
                        ? 'bg-[#6C5CE7] text-white font-extrabold shadow-sm'
                        : 'text-slate-600 hover:bg-slate-100/70 hover:text-slate-800'
                    }`
              }`}
            >
              <Play className="w-5 h-5 fill-current" /> Start-Zentrale
            </button>

            <button
              id="nav-tab-review"
              onClick={() => setActiveTab('review')}
              className={`w-full py-3.5 px-4 font-black text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer relative ${
                isN
                  ? `rounded-xl border-4 ${
                      activeTab === 'review'
                        ? 'bg-[#FF6B6B] border-[#4D3B3B] text-white shadow-[4px_4px_0px_#4D3B3B] -translate-y-0.5'
                        : 'border-transparent text-[#4D3B3B] hover:bg-white/50'
                    }`
                  : `rounded-xl ${
                      activeTab === 'review'
                        ? 'bg-rose-500 text-white font-extrabold shadow-sm'
                        : 'text-slate-600 hover:bg-slate-100/70 hover:text-slate-800'
                    }`
              }`}
            >
              <BookOpenCheck className="w-5 h-5" /> Fehler-Merkliste
              {stats.incorrectQuestionIds.length > 0 && (
                <span 
                  className={`absolute top-1.5 right-3 px-2 py-0.5 text-[10px] font-black rounded-full animate-bounce ${
                    isN
                      ? 'bg-[#FFD93D] text-[#4D3B3B] border-2 border-[#4D3B3B] shadow-[1px_1px_0px_#4D3B3B]'
                      : 'bg-rose-100 text-rose-700 border border-rose-200'
                  }`}
                >
                  {stats.incorrectQuestionIds.length}
                </span>
              )}
            </button>

            <button
              id="nav-tab-stats"
              onClick={() => setActiveTab('stats')}
              className={`w-full py-3.5 px-4 font-black text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer ${
                isN
                  ? `rounded-xl border-4 ${
                      activeTab === 'stats'
                        ? 'bg-[#6C5CE7] border-[#4D3B3B] text-white shadow-[4px_4px_0px_#4D3B3B] -translate-y-0.5'
                        : 'border-transparent text-[#4D3B3B] hover:bg-white/50'
                    }`
                  : `rounded-xl ${
                      activeTab === 'stats'
                        ? 'bg-emerald-500 text-white font-extrabold shadow-sm'
                        : 'text-slate-600 hover:bg-slate-100/70 hover:text-slate-800'
                    }`
              }`}
            >
              <Trophy className="w-5 h-5" /> Statistiken & Fortschritt
            </button>
          </div>
        </nav>
      )}

      {/* CORE DISPLAY ROUTER VIEWS */}
      <main className="max-w-6xl w-full mx-auto flex-1 flex flex-col justify-center">        {activeTab === 'main' && (
          <div className="space-y-6">
            {/* WELCOME BANNER SCREEN */}
            <div 
              className={`p-6 sm:p-10 space-y-6 text-center sm:text-left transition-all duration-300 ${
                isN 
                  ? 'bg-white border-4 border-[#4D3B3B] rounded-[32px] shadow-[8px_8px_0px_#4D3B3B] text-[#4D3B3B]' 
                  : 'bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200/50 shadow-xl text-slate-800'
              }`}
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
                <div className="space-y-4 flex-1">
                  <span 
                    className={`inline-block px-3 py-1 text-xs font-black font-mono rounded-full uppercase ${
                      isN 
                        ? 'bg-[#FFF8E1] text-[#4D3B3B] border-2 border-[#4D3B3B] shadow-[1.5px_1.5px_0px_#4D3B3B]' 
                        : 'bg-indigo-50 text-indigo-750'
                    }`}
                  >
                    Offizieller Lehrplan (Italienischer Integrationstest)
                  </span>
                  <h2 className={`text-2xl sm:text-5xl font-black tracking-tight leading-none ${isN ? 'text-[#4D3B3B]' : 'text-slate-850'}`}>
                    Meistern Sie Italienisch <br className="hidden sm:inline" /> für die Niveaus A1 & A2!
                  </h2>
                  <p className={`text-base sm:text-lg leading-relaxed max-w-2xl font-bold ${isN ? 'text-[#4D3B3B]/95' : 'text-slate-600'}`}>
                    Bereiten Sie sich auf soziale Interaktionen, Grammatikfeinheiten und bürgerliche Pflichten
                    in ganz Italien vor. Entwickelt für deutschsprachige Lerner mit authentischen Fragen.
                  </p>
                </div>
                
                <div 
                  className={`p-6 rounded-[24px] hidden lg:block shrink-0 select-none transition-all duration-300 ${
                    isN 
                      ? 'bg-[#FFD93D] text-[#4D3B3B] border-4 border-[#4D3B3B] shadow-[4px_4px_0px_#4D3B3B]' 
                      : 'bg-slate-50 border border-slate-200 shadow-inner'
                  }`}
                >
                  <div className="text-center">
                    <span className={`text-[10px] font-mono tracking-wider uppercase font-black block ${isN ? 'text-[#4D3B3B]/80' : 'text-slate-400'}`}>Fragen im Pool</span>
                    <span className={`text-5xl font-black font-mono ${isN ? 'text-[#4D3B3B]' : 'text-indigo-650'}`}>{QUESTIONS.length}</span>
                    <span className={`text-xs font-black block mt-1 ${isN ? 'text-[#4D3B3B]' : 'text-slate-500'}`}>100% Akkreditiert</span>
                  </div>
                </div>
              </div>

              {/* CORE MODE SELECTOR FOR DRILLS: Vertically stacked on mobile, full width buttons */}
              <div 
                className={`grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 ${
                  isN ? 'border-t-4 border-[#4D3B3B]' : 'border-t border-slate-100'
                }`}
              >
                {/* PRACTICE MODE CARD */}
                <div 
                  className={`p-6 space-y-4 hover:translate-y-0.5 hover:shadow-none transition-all flex flex-col justify-between ${
                    isN 
                      ? 'bg-[#E8F5E9] rounded-[24px] border-4 border-[#4D3B3B] shadow-[4px_4px_0px_#4D3B3B]' 
                      : 'bg-emerald-50/40 rounded-3xl border border-emerald-100'
                  }`}
                >
                  <div className="space-y-2 text-center sm:text-left">
                    <div 
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                        isN 
                          ? 'bg-[#4ECDC4] text-white border-4 border-[#4D3B3B] shadow-[2px_2px_0px_#4D3B3B] mx-auto sm:mx-0' 
                          : 'bg-teal-500 text-white shadow-sm shadow-teal-200 mx-auto sm:mx-0'
                      }`}
                    >
                      <BookOpen className="w-5 h-5 stroke-[2]" />
                    </div>
                    <h3 className={`text-xl sm:text-2xl font-black ${isN ? 'text-[#4D3B3B]' : 'text-slate-800'}`}>Unbegrenzter Übungsmodus</h3>
                    <p className={`text-sm sm:text-base font-semibold leading-normal ${isN ? 'text-[#4D3B3B]/85' : 'text-slate-600'}`}>
                      Lernen Sie im eigenen Tempo. Erhalten Sie sofortiges deutsches Feedback und verständliche
                      Erklärungen zu jeder Antwort. Perfekt zum Vertiefen.
                    </p>
                  </div>

                  <button
                    id="btn-trigger-practice"
                    onClick={handleStartGeneralPractice}
                    className={`cursor-pointer w-full py-4 font-black rounded-2xl flex items-center justify-center gap-2 text-base sm:text-lg transition-all ${
                      isN
                        ? 'bg-[#4ECDC4] text-white border-4 border-[#4D3B3B] shadow-[4px_4px_0px_#4D3B3B]'
                        : 'bg-teal-500 hover:bg-[#3dbdb5] text-white shadow-md shadow-teal-500/10 hover:scale-[1.01] active:scale-[0.99] border-0'
                    }`}
                  >
                    Übungsquiz starten (10 Fragen)
                  </button>
                </div>

                {/* EXAM SIMULATION CARD */}
                <div 
                  className={`p-6 space-y-4 hover:translate-y-0.5 hover:shadow-none transition-all flex flex-col justify-between ${
                    isN 
                      ? 'bg-[#FFF5F5] rounded-[24px] border-4 border-[#4D3B3B] shadow-[4px_4px_0px_#4D3B3B]' 
                      : 'bg-rose-50/40 rounded-3xl border border-rose-100'
                  }`}
                >
                  <div className="space-y-2 text-center sm:text-left">
                    <div 
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                        isN 
                          ? 'bg-[#FF6B6B] text-white border-4 border-[#4D3B3B] shadow-[2px_2px_0px_#4D3B3B] mx-auto sm:mx-0' 
                          : 'bg-rose-500 text-white shadow-sm shadow-rose-200 mx-auto sm:mx-0'
                      }`}
                    >
                      <Clock className="w-5 h-5 stroke-[2]" />
                    </div>
                    <h3 className={`text-xl sm:text-2xl font-black ${isN ? 'text-[#4D3B3B]' : 'text-slate-800'}`}>Offizielle Prüfungssimulation</h3>
                    <p className={`text-sm sm:text-base font-semibold leading-normal ${isN ? 'text-[#4D3B3B]/85' : 'text-slate-600'}`}>
                      Simulieren Sie den echten A1-A2 Integrations- und Einbürgerungstest. 20 zufällige Fragen,
                      15-Minuten-Zeitlimit, Auswertung am Ende.
                    </p>
                  </div>

                  <button
                    id="btn-trigger-exam"
                    onClick={handleStartExamSimulation}
                    className={`cursor-pointer w-full py-4 font-black rounded-2xl flex items-center justify-center gap-2 text-base sm:text-lg transition-all ${
                      isN
                        ? 'bg-[#FF6B6B] border-4 border-[#4D3B3B] text-white shadow-[4px_4px_0px_#4D3B3B]'
                        : 'bg-rose-500 hover:bg-rose-600 text-white shadow-md shadow-rose-500/10 hover:scale-[1.01] active:scale-[0.99] border-0'
                    }`}
                  >
                    Prüfungssimulation beginnen (A1-A2)
                  </button>
                </div>
              </div>
            </div>

            {/* ERROR STUDY LINK REDIRECT IN MAIN MENUS */}
            {stats.incorrectQuestionIds.length > 0 && (
              <div 
                className={`p-5 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-300 ${
                  isN 
                    ? 'bg-[#FFF5F5] border-4 border-[#4D3B3B] rounded-[24px] shadow-[6px_6px_0px_#4D3B3B] text-[#4D3B3B]' 
                    : 'bg-rose-50/80 border border-rose-200/50 rounded-2xl shadow-sm text-slate-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-black animate-pulse ${
                      isN 
                        ? 'bg-[#FF6B6B] text-white border-2 border-[#4D3B3B]' 
                        : 'bg-rose-500 text-white'
                    }`}
                  >
                    !
                  </div>
                  <div>
                    <h4 className={`font-extrabold text-base sm:text-lg ${isN ? 'text-[#4D3B3B]' : 'text-slate-800'}`}>Gezielte Schwächen-Behandlung:</h4>
                    <p className={`text-sm sm:text-base font-bold ${isN ? 'text-[#4D3B3B]/80' : 'text-slate-600'}`}>
                      Sie haben derzeit {stats.incorrectQuestionIds.length} fälschlicherweise beantwortete Fragen in Ihrer Lernliste.
                    </p>
                  </div>
                </div>

                <button
                  id="btn-main-start-remedial"
                  onClick={handleStartRemedialQuiz}
                  className={`cursor-pointer font-black px-6 py-3.5 rounded-2xl text-sm sm:text-base transition-all w-full sm:w-auto text-center ${
                    isN 
                      ? 'bg-[#FF6B6B] text-white border-4 border-[#4D3B3B] shadow-[3px_3px_0px_#4D3B3B] hover:translate-y-0.5 hover:shadow-none' 
                      : 'bg-rose-500 hover:bg-rose-600 text-white shadow-md shadow-rose-550/10 hover:scale-[1.01]'
                  }`}
                >
                  Fehlertraining starten
                </button>
              </div>
            )}

            {/* THEME SELECTOR CONTAINER (VIBRANT PALETTE REQS) */}
            <ThemeSelector 
              currentThemeId={currentThemeId} 
              onSelectTheme={handleSelectTheme} 
              designStyle={designStyle}
              onSelectDesignStyle={handleSelectDesignStyle}
            />

            {/* THEMATIC SUMMARY OF Italian Syllabus Course info */}
            <div className="bg-white border-4 border-[#4D3B3B] rounded-[24px] p-6 shadow-[6px_6px_0px_#4D3B3B] text-[#4D3B3B] space-y-4">
              <h3 className="text-lg sm:text-2xl font-black flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-[#FFD93D] fill-[#FFD93D] stroke-[2.5]" />
                Inhalte des A1 & A2 Integrationskurses (Syllabus)
              </h3>
              <p className="text-sm sm:text-base text-[#4D3B3B]/85 leading-relaxed font-bold">
                Der Kurs entspricht den Richtlinien des italienischen Innenministeriums für den Nachweis von Sprachkenntnissen
                gemäß dem Integrationsabkommen (Accordo di Integrazione). Es wird ein fundiertes Verständnis der sozialen Gegebenheiten gefordert:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                <div className="p-4 bg-[#FFF8E1] rounded-xl border-4 border-[#4D3B3B] shadow-[2px_2px_0px_#4D3B3B] text-xs space-y-1">
                  <p className="font-black text-[#FF6B6B] uppercase text-sm">1. Wortschatz (Vocabolario)</p>
                  <p className="text-[#4D3B3B] font-extrabold leading-normal">Reisegespräche, Essen, Uhrzeiten, Familie, wichtige Verkehrs- & Wegbeschreibungen.</p>
                </div>
                <div className="p-4 bg-[#E8F5E9] rounded-xl border-4 border-[#4D3B3B] shadow-[2px_2px_0px_#4D3B3B] text-xs space-y-1">
                  <p className="font-black text-[#4ECDC4] uppercase text-sm">2. Grammatik (Grammatica)</p>
                  <p className="text-[#4D3B3B] font-extrabold leading-normal">Hilfsverben (essere/avere), Reflexivpronomina, direkte Satzpronomina, passato prossimo Präteritum.</p>
                </div>
                <div className="p-4 bg-[#E1F5FE] rounded-xl border-4 border-[#4D3B3B] shadow-[2px_2px_0px_#4D3B3B] text-xs space-y-1">
                  <p className="font-black text-[#2196F3] uppercase text-sm">3. Alltagsgespräche (Dialoghi)</p>
                  <p className="text-[#4D3B3B] font-extrabold leading-normal">Arztgepflogenheiten, administrative Amtsgänge, Höflichkeitscodices (dare del Lei) und Einkaufen.</p>
                </div>
                <div className="p-4 bg-[#F3E5F5] rounded-xl border-4 border-[#4D3B3B] shadow-[2px_2px_0px_#4D3B3B] text-xs space-y-1">
                  <p className="font-black text-[#6C5CE7] uppercase text-sm">4. Bürgerkunde (Civiltà)</p>
                  <p className="text-[#4D3B3B] font-extrabold leading-normal">Nutzung von Codice Fiscale, Tessera Sanitaria, Steuerpflichten, Verfassungsrecht und Meldeämter.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ACTIVE DRILLS SCREEN */}
        {activeTab === 'quiz_session' && (
          <QuizSession
            questions={activeQuestions}
            mode={activeQuizMode}
            onFinished={handleQuizFinished}
            onQuit={() => setActiveTab('main')}
            designStyle={designStyle}
          />
        )}

        {/* INCORRECT ANSWERS REVIEW LIST */}
        {activeTab === 'review' && (
          <ReviewList
            incorrectQuestionIds={stats.incorrectQuestionIds}
            onStartRemedialQuiz={handleStartRemedialQuiz}
            onRemoveFromIncorrect={handleRemoveFromIncorrect}
            designStyle={designStyle}
          />
        )}

        {/* DETAILED USER STATS */}
        {activeTab === 'stats' && (
          <StatsDashboard
            stats={stats}
            totalQuestionsAvailable={QUESTIONS.length}
            onResetStats={handleResetStats}
            onSelectTab={setActiveTab}
            onStartCategoryQuiz={handleStartCategoryQuiz}
            designStyle={designStyle}
          />
        )}

        {/* DETAILED GAME EVALUATION SCREEN (FINISHED SESSION VIEW) */}
        {activeTab === 'finished_overview' && lastSessionResult && (
          <div className="space-y-6">
            {/* Main Score Feedback Card */}
            <div 
              className={`p-6 sm:p-8 text-center space-y-6 transition-all duration-305 ${
                isN 
                  ? 'bg-white border-4 border-[#4D3B3B] rounded-[24px] shadow-[8px_8px_0px_#4D3B3B] text-[#4D3B3B]' 
                  : 'bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200/50 shadow-xl text-slate-800'
              }`}
            >
              <div className="space-y-2">
                <span className={`text-xs uppercase font-black tracking-widest font-mono ${isN ? 'text-[#FF6B6B]' : 'text-indigo-600'}`}>
                  Runde beendet ({lastSessionResult.mode === 'exam' ? 'Prüfungssimulation 📝' : lastSessionResult.mode === 'remedial' ? 'Fehlertraining 📖' : 'Übungsrunde 🎯'})
                </span>
                <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${isN ? 'text-[#4D3B3B]' : 'text-slate-800'}`}>Ergebnis-Auswertung</h2>
              </div>

              {/* Core Radial Score representation */}
              <div 
                className={`relative w-40 h-40 rounded-full flex items-center justify-center mx-auto transition-all duration-300 ${
                  isN 
                    ? 'bg-white border-4 border-[#4D3B3B] shadow-[4px_4px_0px_#4D3B3B]' 
                    : 'bg-indigo-50/50 border-2 border-indigo-500/30 shadow-inner'
                }`}
              >
                <div className="text-center">
                  <span className={`text-5xl font-black font-mono ${isN ? 'text-[#4D3B3B]' : 'text-indigo-650'}`}>
                    {Math.round((lastSessionResult.correctCount / lastSessionResult.totalQuestions) * 100)}%
                  </span>
                  <p className={`text-xs mt-1 font-black ${isN ? 'text-[#4D3B3B]/60' : 'text-slate-500'}`}>
                    {lastSessionResult.correctCount} von {lastSessionResult.totalQuestions} richtig
                  </p>
                </div>
              </div>

              {/* Pedagogical Rating Translation */}
              <div className="space-y-2 max-w-lg mx-auto">
                {Math.round((lastSessionResult.correctCount / lastSessionResult.totalQuestions) * 100) >= 90 ? (
                  <div 
                    className={`p-4 rounded-xl transition-all ${
                      isN 
                        ? 'bg-[#FFF8E1] border-4 border-[#4D3B3B] shadow-[3px_3px_0px_#4D3B3B]' 
                        : 'bg-amber-55/60 border border-amber-200 text-amber-900 shadow-sm'
                    }`}
                  >
                    <p className="font-black text-rose-500 text-lg sm:text-xl">Eccellente! Unglaubliche Leistung! 🏆</p>
                    <p className="text-sm sm:text-base font-bold mt-1 text-inherit">Sie beherrschen die Fragen meisterhaft und sind perfekt für den Integrationstest gerüstet!</p>
                  </div>
                ) : Math.round((lastSessionResult.correctCount / lastSessionResult.totalQuestions) * 100) >= 70 ? (
                  <div 
                    className={`p-4 rounded-xl transition-all ${
                      isN 
                        ? 'bg-[#E8F5E9] border-4 border-[#4D3B3B] shadow-[3px_3px_0px_#4D3B3B]' 
                        : 'bg-emerald-55/60 border border-emerald-200 text-emerald-900 shadow-sm'
                    }`}
                  >
                    <p className="font-black text-emerald-600 text-lg sm:text-xl">Bestanden! (Promosso) 🟢</p>
                    <p className="text-sm sm:text-base font-bold mt-1 text-inherit">Sehr gut, Sie erfüllen die offiziell geforderten Kriterien für das Sprachniveau A1/A2!</p>
                  </div>
                ) : (
                  <div 
                    className={`p-4 rounded-xl transition-all ${
                      isN 
                        ? 'bg-[#FFF5F5] border-4 border-[#4D3B3B] shadow-[3px_3px_0px_#4D3B3B]' 
                        : 'bg-rose-55/60 border border-rose-200 text-rose-900 shadow-sm'
                    }`}
                  >
                    <p className="font-extrabold text-rose-500 text-lg sm:text-xl">Leider nicht bestanden (Ripetere) 🔴</p>
                    <p className="text-sm sm:text-base font-bold mt-1 text-inherit">Es reicht noch nicht ganz zur Bestehensgrenze von 70%. Nutzen Sie das gezielte Fehlertraining!</p>
                  </div>
                )}
              </div>

              {/* Navigation Options inside Finished Screen */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 max-w-md mx-auto">
                <button
                  id="finished-btn-home"
                  onClick={() => setActiveTab('main')}
                  className={`cursor-pointer w-full px-6 py-4 font-black rounded-xl text-base sm:text-lg transition-all ${
                    isN 
                      ? 'bg-[#4ECDC4] text-white border-4 border-[#4D3B3B] shadow-[4px_4px_0px_#4D3B3B] hover:translate-y-0.5 hover:shadow-none' 
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800 shadow-sm border border-slate-200/50'
                  }`}
                >
                  Hauptmenü
                </button>

                {lastSessionResult.incorrectIds.length > 0 ? (
                  <button
                    id="finished-btn-train-errors"
                    onClick={handleStartRemedialQuiz}
                    className={`cursor-pointer w-full px-6 py-4 font-black rounded-xl text-base sm:text-lg transition-all ${
                      isN 
                        ? 'bg-[#FF6B6B] border-4 border-[#4D3B3B] text-white shadow-[4px_4px_0px_#4D3B3B] hover:translate-y-0.5 hover:shadow-none' 
                        : 'bg-rose-500 hover:bg-rose-600 text-white shadow-md shadow-rose-500/10'
                    }`}
                  >
                    Falsche korrigieren
                  </button>
                ) : (
                  <button
                    id="finished-btn-retry"
                    onClick={handleStartGeneralPractice}
                    className={`cursor-pointer w-full px-6 py-4 font-black rounded-xl text-base sm:text-lg transition-all ${
                      isN 
                        ? 'bg-[#FFD93D] border-4 border-[#4D3B3B] text-[#4D3B3B] shadow-[4px_4px_0px_#4D3B3B] hover:translate-y-0.5 hover:shadow-none' 
                        : 'bg-teal-500 hover:bg-[#39bcae] text-white shadow-md shadow-teal-500/10'
                    }`}
                  >
                    Anderes Übungsquiz
                  </button>
                )}
              </div>
            </div>

            {/* DETAILED QUESTION REVIEW TABLE: Lists all answers from active session with translations and German explanations */}
            <div 
              className={`p-6 space-y-4 transition-all duration-300 ${
                isN 
                  ? 'bg-white border-4 border-[#4D3B3B] rounded-[24px] shadow-[6px_6px_0px_#4D3B3B] text-[#4D3B3B]' 
                  : 'bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200/50 shadow-md shadow-slate-100/50'
              }`}
            >
              <h3 className={`text-xl sm:text-2xl font-black pb-3 ${isN ? 'border-b-4 border-[#4D3B3B]' : 'border-b border-slate-100 text-slate-800'}`}>Detaillierter Prüfungs-Rückblick</h3>
              
              <div className="space-y-4">
                {activeQuestions.map((q, index) => {
                  const userAnswerIndex = lastSessionResult.answers[q.id];
                  const isCorrect = userAnswerIndex === q.correctAnswerIndex;

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-2xl transition-all duration-300 ${
                        isN
                          ? `border-4 ${
                              isCorrect
                                ? 'bg-[#E8F5E9] border-[#4D3B3B] shadow-[2px_2px_0px_#4D3B3B]'
                                : 'bg-[#FFF5F5] border-[#4D3B3B] shadow-[2px_2px_0px_#4D3B3B]'
                            }`
                          : `border ${
                              isCorrect
                                ? 'bg-emerald-50/20 border-emerald-100 shadow-sm'
                                : 'bg-rose-50/20 border-rose-100 shadow-sm'
                            }`
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs uppercase font-mono font-black text-slate-500">
                          Aufgabe {index + 1}
                        </span>
                        
                        <span 
                          className={`px-2.5 py-0.5 rounded text-xs font-black transition-all ${
                            isN
                              ? `border-2 border-[#4D3B3B] ${
                                  isCorrect
                                    ? 'bg-[#4ECDC4] text-white shadow-[1px_1px_0px_#4D3B3B]'
                                    : 'bg-[#FF6B6B] text-white shadow-[1px_1px_0px_#4D3B3B]'
                                }`
                              : `${
                                  isCorrect
                                    ? 'bg-emerald-100 text-emerald-700'
                                    : 'bg-rose-100 text-rose-700'
                                }`
                          }`}
                        >
                          {isCorrect ? 'Richtig' : 'Falsch'}
                        </span>
                      </div>

                      <h4 className={`text-lg font-black leading-snug ${isN ? 'text-[#4D3B3B]' : 'text-slate-800'}`}>{q.questionText}</h4>
                      {q.translation && (
                        <p className="text-xs sm:text-sm text-[#FF6B6B] italic font-bold mb-3">"{q.translation}"</p>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                        <div 
                          className={`p-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                            isN 
                              ? 'bg-white border-2 border-[#4D3B3B]' 
                              : 'bg-slate-50/80 border border-slate-100'
                          }`}
                        >
                          <span className="text-[10px] uppercase font-black tracking-wider text-[#FF6B6B] block">Ihre Antwort:</span>
                          <p className={`font-sans font-black mt-0.5 ${isN ? 'text-[#4D3B3B]/90' : 'text-slate-700'}`}>
                            {userAnswerIndex !== undefined ? q.options[userAnswerIndex] : 'Keine Antwort'}
                          </p>
                        </div>
                        <div 
                          className={`p-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                            isN 
                              ? 'bg-[#E8F5E9] border-2 border-[#4D3B3B]' 
                              : 'bg-emerald-50 border border-emerald-100'
                          }`}
                        >
                          <span className="text-[10px] uppercase font-black tracking-wider text-[#4ECDC4] block">Richtige Antwort:</span>
                          <p className="font-sans font-black mt-0.5 text-[#4ECDC4]">
                            {q.options[q.correctAnswerIndex]}
                          </p>
                        </div>
                      </div>

                      <p 
                        className={`text-xs sm:text-sm p-3 rounded-xl mt-3 font-semibold leading-relaxed transition-all ${
                          isN 
                            ? 'bg-[#FFF8E1] border-2 border-[#4D3B3B] text-[#4D3B3B]' 
                            : 'bg-amber-50/60 border border-amber-100 text-slate-700'
                        }`}
                      >
                        <strong className="text-rose-500 font-extrabold">Lernhinweis:</strong> {q.explanation}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* COMPLIANT PROFESSIONAL FOOTER */}
      <footer 
        className={`max-w-6xl w-full mx-auto mt-8 pt-6 text-center space-y-2 select-none transition-all ${
          isN 
            ? 'border-t-4 border-[#4D3B3B] text-[#4D3B3B]/70 font-semibold' 
            : 'border-t border-slate-200 text-slate-400 font-medium'
        }`}
      >
        <p className="text-xs leading-normal font-sans">
          Accordo di Integrazione • Italienisches Einwanderungs- und Integrationsförderungsportal
        </p>
        <p className="text-[10px] font-mono tracking-wide uppercase">
          Kuratiert und implementiert von <span className={`font-sans font-black ${isN ? 'text-[#FF6B6B]' : 'text-indigo-600'}`}>OlamGeorg</span> • Stand Juni 2026
        </p>
      </footer>
    </div>
  );
}
