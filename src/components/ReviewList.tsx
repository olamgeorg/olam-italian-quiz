/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Question } from '../types';
import { QUESTIONS } from '../questions';
import { BookOpen, BookOpenCheck, Check, Play, Smile, Trash2 } from 'lucide-react';

interface ReviewListProps {
  incorrectQuestionIds: string[];
  onStartRemedialQuiz: () => void;
  onRemoveFromIncorrect: (questionId: string) => void;
  designStyle?: 'neobrutalist' | 'modern';
}

export const ReviewList: React.FC<ReviewListProps> = ({
  incorrectQuestionIds,
  onStartRemedialQuiz,
  onRemoveFromIncorrect,
  designStyle = 'neobrutalist'
}) => {
  const isN = designStyle === 'neobrutalist';

  // Grab the actual Question objects from the database
  const incorrectQuestions = incorrectQuestionIds
    .map(id => QUESTIONS.find(q => q.id === id))
    .filter((q): q is Question => q !== undefined);

  if (incorrectQuestions.length === 0) {
    return (
      <div 
        className={`text-center space-y-6 max-w-lg mx-auto transition-all duration-300 ${
          isN 
            ? 'bg-white border-4 border-[#4D3B3B] rounded-[24px] p-8 shadow-[6px_6px_0px_#4D3B3B] text-[#4D3B3B]' 
            : 'bg-white/90 backdrop-blur-md border border-slate-200/50 rounded-3xl p-8 shadow-xl shadow-slate-100 text-slate-800'
        }`}
      >
        <div 
          className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto text-4xl animate-bounce ${
            isN
              ? 'bg-[#E8F5E9] text-[#4ECDC4] border-4 border-[#4D3B3B] shadow-[4px_4px_0px_#4D3B3B]'
              : 'bg-teal-50 text-[#4ECDC4] shadow-sm shadow-teal-100'
          }`}
        >
          <Smile className="w-12 h-12 text-[#4ECDC4] stroke-[2.5]" />
        </div>
        <div className="space-y-2">
          <h3 className={`text-2xl font-black tracking-wide ${isN ? 'text-[#4D3B3B]' : 'text-slate-800'}`}>
            Alles fehlerfrei!
          </h3>
          <p className={`leading-relaxed text-base font-semibold ${isN ? 'text-[#4D3B3B]/85' : 'text-slate-600'}`}>
            Herzlichen Glückwunsch! Sie haben im Moment keine fälschlicherweise beantworteten Fragen in Ihrer Merkliste und Kursübersicht.
          </p>
          <p className={`text-sm font-bold ${isN ? 'text-[#4D3B3B]/60' : 'text-slate-400'}`}>
            Machen Sie ein komplettes Übungsquiz oder starten Sie eine echte Prüfung, um Ihr Wissen weiter auf die Probe zu stellen!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Informational & Action Header */}
      <div 
        className={`flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 transition-all duration-300 ${
          isN
            ? 'bg-[#FFF5F5] border-4 border-[#4D3B3B] rounded-[24px] shadow-[6px_6px_0px_#4D3B3B] text-[#4D3B3B]'
            : 'bg-rose-50/50 backdrop-blur-md border border-rose-100 rounded-3xl shadow-sm text-slate-800'
        }`}
      >
        <div className="space-y-1">
          <h3 className={`text-xl sm:text-2xl font-black flex items-center gap-2 ${isN ? 'text-[#4D3B3B]' : 'text-slate-800'}`}>
            <BookOpenCheck className="w-6 h-6 text-[#FF6B6B] animate-pulse stroke-[2.5]" />
            Fehler-Rückblick ({incorrectQuestions.length} Fragen)
          </h3>
          <p className={`text-sm sm:text-base font-semibold ${isN ? 'text-[#4D3B3B]/85' : 'text-slate-600'}`}>
            Hier sind alle Fragen aufgelistet, die Sie falsch beantwortet haben. Gehen Sie diese in Ruhe durch oder absolvieren Sie ein gezieltes Fehlertraining.
          </p>
        </div>

        <button
          id="btn-start-remedial"
          onClick={onStartRemedialQuiz}
          className={`cursor-pointer px-6 py-3.5 transition-all duration-200 font-extrabold rounded-xl flex items-center justify-center gap-2 text-base w-full md:w-auto ${
            isN
              ? 'bg-[#4ECDC4] text-white border-4 border-[#4D3B3B] shadow-[4px_4px_0px_#4D3B3B] hover:translate-y-0.5 hover:shadow-none'
              : 'bg-[#4ECDC4] hover:bg-[#3fb8af] text-white shadow-md shadow-teal-500/10 hover:scale-[1.02] active:scale-[0.98]'
          }`}
        >
          <Play className="w-5 h-5 fill-current" />
          Fehlertraining starten
        </button>
      </div>

      {/* List of Incorrect questions */}
      <div className="space-y-6">
        {incorrectQuestions.map((q, index) => {
          const correctOption = q.options[q.correctAnswerIndex];

          return (
            <div
              key={q.id}
              className={`p-5 sm:p-6 space-y-4 leading-normal transition-all duration-300 ${
                isN
                  ? 'bg-white border-4 border-[#4D3B3B] rounded-[24px] shadow-[6px_6px_0px_#4D3B3B] text-[#4D3B3B]'
                  : 'bg-white/90 backdrop-blur-md border border-slate-200/40 rounded-3xl shadow-lg shadow-slate-100/50 text-slate-800'
              }`}
            >
              {/* Header inside and metadata */}
              <div 
                className={`flex flex-wrap items-center justify-between gap-2 pb-3 ${
                  isN ? 'border-b-4 border-[#4D3B3B]' : 'border-b border-slate-100'
                }`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span 
                    className={`px-2.5 py-0.5 text-xs font-black uppercase tracking-wide rounded ${
                      isN
                        ? 'bg-[#FF6B6B] text-white border-2 border-[#4D3B3B] shadow-[1px_1px_0px_#4D3B3B]'
                        : 'bg-rose-100 text-rose-700 font-semibold'
                    }`}
                  >
                    Fehler {index + 1}
                  </span>
                  
                  <span 
                    className={`px-2.5 py-0.5 text-xs font-black uppercase tracking-wide rounded ${
                      isN
                        ? 'bg-[#E1F5FE] text-[#4D3B3B] border-2 border-[#4D3B3B] shadow-[1px_1px_0px_#4D3B3B]'
                        : 'bg-slate-100 text-slate-600 font-semibold'
                    }`}
                  >
                    {q.section === 'vocabulary' ? 'Wortschatz' : q.section === 'grammar' ? 'Grammatik' : q.section === 'dialogues' ? 'Dialoge' : 'Kultur'}
                  </span>
                  
                  <span 
                    className={`px-2 py-0.5 text-xs font-black uppercase rounded font-mono ${
                      isN
                        ? 'bg-[#FFD93D] text-[#4D3B3B] border-2 border-[#4D3B3B] shadow-[1px_1px_0px_#4D3B3B]'
                        : 'bg-amber-100 text-amber-700 font-semibold'
                    }`}
                  >
                    {q.level}
                  </span>
                </div>

                <button
                  id={`btn-remove-error-${q.id}`}
                  onClick={() => onRemoveFromIncorrect(q.id)}
                  className={`p-2 rounded-xl transition-all cursor-pointer ${
                    isN
                      ? 'text-[#4D3B3B]/60 hover:text-red-500 hover:bg-[#FFF5F5] border-2 border-transparent hover:border-[#4D3B3B]'
                      : 'text-slate-400 hover:text-red-500 hover:bg-red-50/50'
                  }`}
                  title="Aus der Merkliste entfernen"
                  aria-label="Aus Merkliste löschen"
                >
                  <Trash2 className="w-5 h-5 stroke-[2]" />
                </button>
              </div>

              {/* Question Text in Italian */}
              <div className="space-y-1">
                {q.questionContext && (
                  <p 
                    className={`p-3 rounded-xl italic whitespace-pre-line text-sm font-semibold ${
                      isN
                        ? 'text-[#4D3B3B]/85 bg-[#FFF8E1] border-2 border-[#4D3B3B]'
                        : 'text-slate-700 bg-slate-50 border border-slate-100'
                    }`}
                  >
                    {q.questionContext}
                  </p>
                )}
                
                <h4 className={`text-lg sm:text-2xl font-black tracking-tight ${isN ? 'text-[#4D3B3B]' : 'text-slate-800'}`}>
                  {q.questionText}
                </h4>
                
                {q.translation && (
                  <p className={`text-xs sm:text-sm font-bold italic ${isN ? 'text-[#FF6B6B]' : 'text-rose-500'}`}>
                    Übersetzung: "{q.translation}"
                  </p>
                )}
              </div>

              {/* Answers and Explanations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {q.options.map((opt, oIndex) => {
                  const isCorrect = oIndex === q.correctAnswerIndex;
                  return (
                    <div
                      key={opt}
                      className={`p-3 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2.5 transition-all duration-300 ${
                        isN
                          ? isCorrect
                            ? 'bg-[#E8F5E9] border-[#4D3B3B] text-[#4D3B3B] border-4 shadow-[2px_2px_0px_#4D3B3B]'
                            : 'bg-white border-[#4d3b3b20] text-[#4D3B3B]/80 border-4'
                          : isCorrect
                            ? 'bg-emerald-50 border border-emerald-200 text-emerald-900 shadow-sm'
                            : 'bg-white border border-slate-200/60 text-slate-500 shadow-sm'
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black border-2 ${
                          isN
                            ? isCorrect
                              ? 'bg-[#4ECDC4] text-white border-[#4D3B3B] shadow-[1px_1px_0px_#4D3B3B]'
                              : 'bg-[#FFF] text-[#4D3B3B] border-[#4D3B3B]'
                            : isCorrect
                              ? 'bg-emerald-500 text-white border-transparent'
                              : 'bg-slate-100 text-slate-500 border-slate-200'
                        }`}
                      >
                        {isCorrect ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : String.fromCharCode(65 + oIndex)}
                      </div>
                      <span className="font-sans font-extrabold">{opt}</span>
                    </div>
                  );
                })}
              </div>

              {/* Pedagogical Explanation */}
              <div 
                className={`p-4 rounded-xl space-y-1 shadow-sm ${
                  isN
                    ? 'bg-[#FFF8E1] border-[#4D3B3B] border-4'
                    : 'bg-amber-50/50 border border-amber-100 text-slate-800'
                }`}
              >
                <span className={`text-xs font-black uppercase tracking-wider font-mono ${isN ? 'text-[#FF6B6B]' : 'text-amber-700'}`}>
                  Erklärung auf Deutsch:
                </span>
                <p className={`text-sm sm:text-base leading-relaxed font-black ${isN ? 'text-[#4D3B3B]' : 'text-slate-800'}`}>
                  {q.explanation}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
