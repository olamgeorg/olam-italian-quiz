/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Question, QuizMode } from '../types';
import { playCorrectTone, playIncorrectTone } from '../lib/audio';
import { Clock, CheckCircle, XCircle, ArrowRight, ArrowLeft, RotateCcw, Home, Smile, AlertTriangle, BookOpen, AlertCircle, HelpCircle } from 'lucide-react';

interface QuizSessionProps {
  questions: Question[];
  mode: QuizMode | 'remedial';
  onFinished: (
    results: {
      totalQuestions: number;
      correctCount: number;
      answers: Record<string, number>; // questionId -> selectedIndex
      incorrectIds: string[];
    }
  ) => void;
  onQuit: () => void;
  designStyle?: 'neobrutalist' | 'modern';
}

export const QuizSession: React.FC<QuizSessionProps> = ({
  questions,
  mode,
  onFinished,
  onQuit,
  designStyle = 'neobrutalist'
}) => {
  const isN = designStyle === 'neobrutalist';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  // In practice/remedial mode, we lock the answer after clicking
  const [committedAnswers, setCommittedAnswers] = useState<Record<string, boolean>>({});

  // Timer state for Exam Mode: 15 minutes = 900 seconds
  const [timeLeft, setTimeLeft] = useState(mode === 'exam' ? 900 : 0);
  const [isExamCompleted, setIsExamCompleted] = useState(false);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;

  // Clock Countdown effect
  useEffect(() => {
    if (mode !== 'exam' || timeLeft <= 0 || isExamCompleted) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleFinishExam(true); // Auto-finish on timeout
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [mode, timeLeft, isExamCompleted]);

  if (totalQuestions === 0) {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center text-white space-y-4">
        <AlertTriangle className="w-12 h-12 text-yellow-300 mx-auto" />
        <h3 className="text-xl font-bold">Keine Fragen verfügbar</h3>
        <p className="text-sm">Für diese Auswahl wurden keine Fragen gefunden.</p>
        <button
          onClick={onQuit}
          className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl text-white transition-all cursor-pointer font-bold"
        >
          Zurück zum Dashboard
        </button>
      </div>
    );
  }

  const isCurrentQuestionAnswered = selectedAnswers[currentQuestion.id] !== undefined;

  // Handles clicking an option
  const handleOptionClick = (optionIndex: number) => {
    const qId = currentQuestion.id;

    if (mode === 'practice' || mode === 'remedial') {
      // In practice/remedial mode, once answered, you can't re-click
      if (committedAnswers[qId]) return;

      setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIndex }));
      setCommittedAnswers((prev) => ({ ...prev, [qId]: true }));

      // Trigger respective audio buzzers immediately!
      if (optionIndex === currentQuestion.correctAnswerIndex) {
        playCorrectTone();
      } else {
        playIncorrectTone();
      }
    } else {
      // In Exam mode, you can change your answer freely until you submit
      setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIndex }));
    }
  };

  // Navigate forward/backward
  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Submit/Grade Exam
  const handleFinishExam = (isTimeout = false) => {
    setIsExamCompleted(true);
    let correctCount = 0;
    const incorrectIds: string[] = [];

    questions.forEach((q) => {
      const selectedOffset = selectedAnswers[q.id];
      if (selectedOffset === q.correctAnswerIndex) {
        correctCount++;
      } else {
        incorrectIds.push(q.id);
      }
    });

    if (isTimeout) {
      alert('Die Zeit ist abgelaufen! Ihre Prüfung wird nun ausgewertet.');
    }

    onFinished({
      totalQuestions,
      correctCount,
      answers: selectedAnswers,
      incorrectIds
    });
  };

  // Text helpers based on states
  const formatTime = (seconds: number) => {
    const mm = Math.floor(seconds / 60);
    const ss = seconds % 60;
    return `${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`;
  };

  const getPercentageString = (idx: number, total: number) => {
    return `${Math.round((idx / total) * 100)}%`;
  };

  return (
    <div className="space-y-6">
      {/* Quiz Top Action Bar */}
      <div 
        className={`flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 sm:px-6 transition-all duration-300 ${
          isN
            ? 'bg-white rounded-[24px] border-4 border-[#4D3B3B] shadow-[6px_6px_0px_#4D3B3B]'
            : 'bg-white/90 backdrop-blur-md border border-slate-200/50 rounded-3xl shadow-lg'
        }`}
      >
        {/* Progress & Title info */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (window.confirm('Möchten Sie dieses Quiz wirklich verlassen? Ihr aktueller Fortschritt in dieser Runde geht verloren.')) {
                onQuit();
              }
            }}
            className={`p-2.5 cursor-pointer transition-all ${
              isN
                ? 'bg-[#FFF5F5] border-2 border-[#4D3B3B] rounded-xl text-[#FF6B6B] hover:bg-[#FFD2D2] shadow-[1px_1px_0px_#4D3B3B]'
                : 'bg-rose-50 text-[#FF6B6B] hover:bg-rose-100 rounded-xl border border-[#4d3b3b10]'
            }`}
            title="Beenden"
          >
            <Home className="w-5 h-5 stroke-[2]" />
          </button>
          
          <div className="space-y-0.5">
            <span className={`text-xs uppercase font-mono font-black tracking-wider ${isN ? 'text-[#FF6B6B]' : 'text-indigo-600'}`}>
              {mode === 'practice' ? 'Übungsmodus 🎯' : mode === 'exam' ? 'Prüfungsmodus (A1/A2) 📝' : 'Fehlertraining 📖'}
            </span>
            <h3 className={`text-sm sm:text-base font-black ${isN ? 'text-[#4D3B3B]' : 'text-slate-800'}`}>
              Frage {currentIndex + 1} von {totalQuestions}
            </h3>
          </div>
        </div>

        {/* Dynamic visual indicator bar (percentage finished) */}
        <div className="flex-1 max-w-xs mx-4 hidden md:block">
          <div 
            className={`relative w-full overflow-hidden ${
              isN 
                ? 'h-4 bg-[#FFF] rounded-full border-4 border-[#4D3B3B]' 
                : 'h-2 bg-slate-100 rounded-full border-0'
            }`}
          >
            <div
              className={`absolute top-0 left-0 h-full transition-all duration-300 ${
                mode === 'exam' ? 'bg-[#6C5CE7]' : 'bg-[#4ECDC4]'
              } ${isN ? 'border-r-2 border-[#4D3B3B]' : 'rounded-full'}`}
              style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* Clock timer for Exam, or status pill for Practice */}
        <div className="flex items-center justify-between sm:justify-end gap-3 mt-2 sm:mt-0">
          {mode === 'exam' ? (
            <div 
              className={`flex items-center gap-2 px-3 py-1.5 font-mono font-black ${
                isN
                  ? 'bg-[#FF5F5F] text-white border-4 border-[#4D3B3B] rounded-2xl shadow-[2px_2px_0px_#4D3B3B]'
                  : 'bg-rose-500 text-white rounded-xl px-3 py-2 text-sm shadow-sm'
              }`}
            >
              <Clock className="w-4.5 h-4.5 animate-pulse" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          ) : (
            <div 
              className={`px-3 py-1.5 text-xs sm:text-sm font-black ${
                isN
                  ? 'bg-[#E8F5E9] border-4 border-[#4D3B3B] rounded-2xl text-[#4D3B3B] shadow-[2px_2px_0px_#4D3B3B]'
                  : 'bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-xl'
              }`}
            >
              Sofortiges Feedback
            </div>
          )}

          {/* Quick exit confirmation */}
          <button
            onClick={() => {
              if (window.confirm('Sind Sie sicher, dass Sie diese Sitzung abbrechen wollen?')) {
                onQuit();
              }
            }}
            className="text-xs sm:text-sm text-[#FF6B6B] hover:text-[#4d3b3b] underline font-black cursor-pointer"
          >
            Aufgeben
          </button>
        </div>
      </div>

      {/* Main Question Card container */}
      <div 
        className={`p-5 sm:p-8 space-y-6 leading-relaxed transition-all duration-300 ${
          isN
            ? 'bg-white border-4 border-[#4D3B3B] rounded-[24px] shadow-[8px_8px_0px_#4D3B3B] text-[#4D3B3B]'
            : 'bg-white/95 backdrop-blur-md border border-slate-200/50 rounded-3xl shadow-xl'
        }`}
      >
        
        {/* Meta badges: Category & Level */}
        <div className="flex flex-wrap items-center gap-2">
          <span 
            className={`px-3 py-1 text-[11px] font-black tracking-wider rounded-lg uppercase ${
              isN
                ? 'bg-[#E1F5FE] border-2 border-[#4D3B3B] text-[#4D3B3B] shadow-[1.5px_1.5px_0px_#4D3B3B]'
                : 'bg-sky-50 border border-sky-100 text-sky-700'
            }`}
          >
            {currentQuestion.section === 'vocabulary' ? 'Wortschatz' : currentQuestion.section === 'grammar' ? 'Grammatik' : currentQuestion.section === 'dialogues' ? 'Alltagsdialoge' : 'Integration & Bürgerkunde'}
          </span>
          
          <span 
            className={`px-3 py-1 text-[11px] font-black tracking-wider rounded-lg font-mono ${
              isN
                ? 'bg-[#FFD93D] border-2 border-[#4D3B3B] text-[#4D3B3B] shadow-[1.5px_1.5px_0px_#4D3B3B]'
                : 'bg-amber-100/70 border border-amber-200/60 text-amber-800'
            }`}
          >
            NIVEAU {currentQuestion.level}
          </span>
        </div>

        {/* Dialogue context wrapper if provided */}
        {currentQuestion.questionContext && (
          <div 
            className={`p-4 space-y-1.5 transition-all duration-300 ${
              isN
                ? 'bg-[#FFF8E1] rounded-[20px] border-4 border-[#4D3B3B] shadow-[3px_3px_0px_#4D3B3B]'
                : 'bg-slate-50 border border-slate-100 rounded-2xl shadow-inner'
            }`}
          >
            <span className={`text-[11px] font-black uppercase tracking-wider block font-mono ${isN ? 'text-[#FF6B6B]' : 'text-slate-405'}`}>
              Kontext / Gesprächs-Szenario:
            </span>
            <p className={`text-base sm:text-xl font-bold italic leading-relaxed whitespace-pre-line ${isN ? 'text-[#4D3B3B]' : 'text-slate-700'}`}>
              {currentQuestion.questionContext}
            </p>
          </div>
        )}

        {/* Primary Italian Question Text */}
        <div className="space-y-1.5">
          <h2 className={`text-xl sm:text-3xl font-black tracking-tight leading-tight ${isN ? 'text-[#4D3B3B]' : 'text-slate-850'}`}>
            {currentQuestion.questionText}
          </h2>
          {currentQuestion.translation && (mode === 'practice' || mode === 'remedial') && (
            <p className={`text-sm sm:text-base italic font-black ${isN ? 'text-[#6C5CE7]' : 'text-indigo-620'}`}>
              Auf Deutsch: "{currentQuestion.translation}"
            </p>
          )}
        </div>

        {/* Interactive Option Tapping Area: Vertical stack */}
        <div className="flex flex-col space-y-3 pt-2">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswers[currentQuestion.id] === index;
            const isCommitted = committedAnswers[currentQuestion.id];
            const isCorrectAnswer = index === currentQuestion.correctAnswerIndex;

            // Compute styling dynamically
            let optionStyle = '';
            let circleStyle = '';

            if (isN) {
              optionStyle = 'bg-white border-4 border-[#4D3B3B] text-[#4D3B3B] shadow-[3px_3px_0px_#4D3B3B] hover:translate-y-0.5 hover:shadow-none';
              circleStyle = 'border-2 border-[#4D3B3B] text-[#4D3B3B] bg-white';

              if (mode === 'practice' || mode === 'remedial') {
                if (isCommitted) {
                  if (isCorrectAnswer) {
                    optionStyle = 'bg-[#E8F5E9] border-4 border-[#4D3B3B] text-[#4D3B3B] shadow-[4px_4px_0px_#4D3B3B] scale-[1.01]';
                    circleStyle = 'bg-[#4ECDC4] text-white border-2 border-[#4D3B3B] shadow-[1px_1px_0px_#4D3B3B]';
                  } else if (isSelected) {
                    optionStyle = 'bg-[#FFF5F5] border-4 border-[#4D3B3B] text-[#FF6B6B] shadow-[4px_4px_0px_#4D3B3B]';
                    circleStyle = 'bg-[#FF6B6B] text-white border-2 border-[#4D3B3B] shadow-[1px_1px_0px_#4D3B3B]';
                  } else {
                    optionStyle = 'bg-white border-4 border-[#4D3B3B]/10 text-[#4D3B3B]/40 opacity-55 cursor-not-allowed';
                    circleStyle = 'border-2 border-[#4D3B3B]/10 text-[#4D3B3B]/20 bg-gray-50';
                  }
                } else if (isSelected) {
                  optionStyle = 'bg-[#FFD93D] border-4 border-[#4D3B3B] text-[#4D3B3B] shadow-[4px_4px_0px_#4D3B3B] -translate-y-0.5';
                  circleStyle = 'bg-white text-[#4D3B3B] border-2 border-[#4D3B3B]';
                }
              } else {
                if (isSelected) {
                  optionStyle = 'bg-[#FFD93D] border-4 border-[#4D3B3B] text-[#4D3B3B] shadow-[4px_4px_0px_#4D3B3B] -translate-y-0.5';
                  circleStyle = 'bg-white text-[#4D3B3B] border-2 border-[#4D3B3B]';
                }
              }
            } else {
              // Premium Glass Layout
              optionStyle = 'bg-white hover:bg-slate-50 border border-slate-255 text-slate-800 shadow-sm rounded-2xl hover:scale-[1.005] transition-all';
              circleStyle = 'bg-slate-100 text-slate-500 border border-slate-200';

              if (mode === 'practice' || mode === 'remedial') {
                if (isCommitted) {
                  if (isCorrectAnswer) {
                    optionStyle = 'bg-emerald-50 border-2 border-emerald-300 text-emerald-900 shadow-sm rounded-2xl scale-[1.005]';
                    circleStyle = 'bg-emerald-500 text-white border-transparent';
                  } else if (isSelected) {
                    optionStyle = 'bg-rose-50 border-2 border-rose-300 text-rose-900 shadow-sm rounded-2xl';
                    circleStyle = 'bg-rose-500 text-white border-transparent';
                  } else {
                    optionStyle = 'bg-white border border-slate-100 text-slate-400 opacity-60 rounded-2xl cursor-not-allowed';
                    circleStyle = 'bg-slate-50 text-slate-300 border-slate-100';
                  }
                } else if (isSelected) {
                  optionStyle = 'bg-indigo-50 border-2 border-indigo-300 text-indigo-900 shadow-md rounded-2xl scale-[1.005]';
                  circleStyle = 'bg-indigo-650 text-white border-transparent';
                }
              } else {
                if (isSelected) {
                  optionStyle = 'bg-indigo-50 border-2 border-indigo-300 text-indigo-900 shadow-md rounded-2xl scale-[1.005]';
                  circleStyle = 'bg-indigo-600 text-white border-transparent';
                }
              }
            }

            return (
              <button
                id={`btn-option-${currentQuestion.id}-${index}`}
                key={option}
                onClick={() => handleOptionClick(index)}
                disabled={isCommitted}
                className={`w-full text-left p-4 sm:p-5 rounded-2xl text-sm sm:text-lg font-extrabold transition-all duration-150 outline-none flex items-center gap-4 group cursor-pointer ${
                  isN ? 'border-4' : 'border'
                } ${optionStyle}`}
              >
                {/* Visual Circle index representing answers */}
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-black shrink-0 transition-colors ${circleStyle}`}
                >
                  {isCommitted && isCorrectAnswer ? (
                    <CheckCircle className="w-5 h-5 text-white stroke-[3.5]" />
                  ) : isCommitted && isSelected && !isCorrectAnswer ? (
                    <XCircle className="w-5 h-5 text-white stroke-[3.5]" />
                  ) : (
                    String.fromCharCode(65 + index)
                  )}
                </div>

                <span className="font-sans font-extrabold select-none flex-1 group-hover:translate-x-0.5 transition-transform">
                  {option}
                </span>
                
                {/* Mini translation preview if answered */}
                {isCommitted && isCorrectAnswer && (
                  <span 
                    className={`text-[11px] font-mono font-black tracking-wide text-white uppercase shrink-0 px-2 py-0.5 rounded ${
                      isN
                        ? 'bg-[#4ECDC4] border-2 border-[#4D3B3B] shadow-[1px_1px_0px_#4D3B3B]'
                        : 'bg-emerald-500 border-0 shadow-sm'
                    }`}
                  >
                    Richtig
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Pedagogical Explanation in practice and remedial modes */}
        {(mode === 'practice' || mode === 'remedial') && committedAnswers[currentQuestion.id] && (
          <div 
            className={`mt-6 p-5 rounded-2xl space-y-2 animate-fadeIn leading-relaxed transition-all duration-300 ${
              isN
                ? 'bg-[#FFF8E1] border-4 border-[#4D3B3B] shadow-[4px_4px_0px_#4D3B3B]'
                : 'bg-amber-50/60 border border-amber-200/80 text-amber-900 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-2">
              <CheckCircle className={`w-5 h-5 stroke-[2] ${isN ? 'text-[#FF6B6B]' : 'text-emerald-600'}`} />
              <span className={`text-xs sm:text-sm uppercase font-black tracking-widest font-mono ${isN ? 'text-[#FF6B6B]' : 'text-amber-800'}`}>
                Erklärung auf Deutsch 💡
              </span>
            </div>
            <p className={`text-sm sm:text-base font-bold font-sans ${isN ? 'text-[#4D3B3B]' : 'text-slate-700'}`}>
              {currentQuestion.explanation}
            </p>
          </div>
        )}

        {/* Navigation Action Area */}
        <div 
          className={`flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 ${
            isN ? 'border-t-4 border-[#4D3B3B]' : 'border-t border-slate-100'
          }`}
        >
          <div className="w-full sm:w-auto">
            <button
              id="quiz-btn-prev"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`w-full sm:w-auto px-5 py-3 font-black flex items-center justify-center gap-2 transition-all cursor-pointer text-sm sm:text-base ${
                isN
                  ? currentIndex === 0
                    ? 'border-[#4D3B3B]/10 text-[#4D3B3B]/30 bg-gray-50 cursor-not-allowed opacity-50 border-4 rounded-xl'
                    : 'border-[#4D3B3B] bg-white hover:bg-[#FFF8E1] text-[#4D3B3B] shadow-[2px_2px_0px_#4D3B3B] hover:translate-y-0.5 hover:shadow-none border-4 rounded-xl'
                  : currentIndex === 0
                    ? 'text-slate-300 bg-slate-50 border border-slate-100 cursor-not-allowed rounded-xl'
                    : 'bg-white hover:bg-slate-50 text-[#4D3B3B] border border-slate-200 rounded-xl hover:scale-[1.01] active:scale-[0.99] shadow-sm'
              }`}
            >
              <ArrowLeft className="w-4 h-4 stroke-[3]" /> Zurück
            </button>
          </div>

          {/* Exam Finish and Next Question Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto text-sm sm:text-base">
            {mode === 'exam' && (
              <button
                id="exam-btn-submit-early"
                onClick={() => {
                  const unansweredCount = questions.length - Object.keys(selectedAnswers).length;
                  const warningMsg = unansweredCount > 0
                    ? `Sie haben ${unansweredCount} unbeantwortete Frage(n). Möchten Sie die Prüfung dennoch beenden?`
                    : 'Möchten Sie die Prüfung beenden und Ihre Antworten abschicken?';
                  if (window.confirm(warningMsg)) {
                    handleFinishExam();
                  }
                }}
                className={`w-full sm:w-auto px-5 py-3 font-black rounded-xl text-white transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  isN
                    ? 'bg-[#FF6B6B] hover:bg-[#FF8A8A] border-4 border-[#4D3B3B] shadow-[2px_2px_0px_#4D3B3B] hover:translate-y-0.5 hover:shadow-none'
                    : 'bg-rose-500 hover:bg-rose-600 shadow-sm shadow-rose-200 hover:scale-[1.01] active:scale-[0.99]'
                }`}
              >
                Prüfung beenden
              </button>
            )}

            {currentIndex < totalQuestions - 1 ? (
              <button
                id="quiz-btn-next"
                onClick={handleNext}
                disabled={!isCurrentQuestionAnswered && (mode === 'practice' || mode === 'remedial')}
                className={`w-full sm:w-auto px-6 py-3.5 font-black transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isN
                    ? !isCurrentQuestionAnswered && (mode === 'practice' || mode === 'remedial')
                      ? 'bg-gray-100 text-[#4D3B3B]/35 border-[#4D3B3B]/10 cursor-not-allowed opacity-50 border-4 rounded-xl'
                      : 'bg-[#4ECDC4] text-white shadow-[4px_4px_0px_#4D3B3B] hover:translate-y-0.5 hover:shadow-none border-4 border-[#4D3B3B] rounded-xl'
                    : !isCurrentQuestionAnswered && (mode === 'practice' || mode === 'remedial')
                      ? 'bg-slate-50 text-slate-300 cursor-not-allowed border border-slate-100 rounded-xl'
                      : 'bg-[#4ECDC4] hover:bg-[#3dbdb5] text-white shadow-md shadow-teal-500/10 hover:scale-[1.01] active:scale-[0.99] border-0 rounded-xl'
                }`}
              >
                Nächste Frage <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            ) : (
              // Last question
              mode !== 'exam' && (
                <button
                  id="quiz-btn-finish"
                  onClick={() => handleFinishExam()}
                  disabled={!isCurrentQuestionAnswered && (mode === 'practice' || mode === 'remedial')}
                  className={`w-full sm:w-auto px-6 py-3.5 font-black transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isN
                      ? !isCurrentQuestionAnswered && (mode === 'practice' || mode === 'remedial')
                        ? 'bg-gray-100 text-[#4D3B3B]/35 border-[#4D3B3B]/10 cursor-not-allowed opacity-50 border-4 rounded-xl'
                        : 'bg-[#FFD93D] text-[#4D3B3B] shadow-[4px_4px_0px_#4D3B3B] hover:translate-y-0.5 hover:shadow-none border-4 border-[#4D3B3B] rounded-xl'
                      : !isCurrentQuestionAnswered && (mode === 'practice' || mode === 'remedial')
                        ? 'bg-slate-50 text-slate-300 cursor-not-allowed border border-slate-100 rounded-xl'
                        : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-md shadow-emerald-500/10 hover:scale-[1.01] active:scale-[0.99] border-0 rounded-xl'
                  }`}
                >
                  Sitzung abschließen
                </button>
              )
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
