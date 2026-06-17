/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { UserStats } from '../types';
import { SECTIONS } from '../questions';
import { Award, BookOpen, CheckCircle, RefreshCw, Star, Trophy, GraduationCap, ArrowRight } from 'lucide-react';

interface StatsDashboardProps {
  stats: UserStats;
  totalQuestionsAvailable: number;
  onResetStats: () => void;
  onSelectTab: (tab: 'quiz' | 'review' | 'stats') => void;
  onStartCategoryQuiz: (sectionId: string) => void;
  designStyle?: 'neobrutalist' | 'modern';
}

export const StatsDashboard: React.FC<StatsDashboardProps> = ({
  stats,
  totalQuestionsAvailable,
  onResetStats,
  onSelectTab,
  onStartCategoryQuiz,
  designStyle = 'neobrutalist'
}) => {
  const isN = designStyle === 'neobrutalist';
  const totalAnswered = stats.totalQuestionsAnswered;
  const accuracy = totalAnswered > 0 ? Math.round((stats.correctAnswersCount / totalAnswered) * 100) : 0;

  // Determine Italian Integration Milestone Rank
  let milestoneBadge = 'Dilettante (Anfänger)';
  let milestoneDesc = 'Beginnen Sie Ihre Lernreise für den italienischen Integrationstest!';
  let badgeColor = isN 
    ? 'bg-white text-[#4D3B3B] border-4 border-[#4D3B3B]' 
    : 'bg-slate-100 text-slate-700 shadow-sm border border-slate-200';

  if (accuracy >= 90 && totalAnswered >= 15) {
    milestoneBadge = 'Veritabile Italiano (Integration-Meister)';
    milestoneDesc = 'Exzellente Kenntnisse! Sie sind bestens auf die Prüfung und das Alltagsleben in Italien vorbereitet!';
    badgeColor = isN 
      ? 'bg-[#FFD93D] text-[#4D3B3B] border-4 border-[#4D3B3B] shadow-[2px_2px_0px_#4D3B3B]'
      : 'bg-amber-100 text-amber-800 border border-amber-200 shadow-sm font-extrabold';
  } else if (accuracy >= 70 && totalAnswered >= 10) {
    milestoneBadge = 'Candidato A2 (Fortgeschritten)';
    milestoneDesc = 'Gute Kenntnisse der grammatikalischen Strukturen und der Landeskunde auf dem Niveau A2.';
    badgeColor = isN 
      ? 'bg-[#4ECDC4] text-white border-4 border-[#4D3B3B] shadow-[2px_2px_0px_#4D3B3B]'
      : 'bg-emerald-100 text-emerald-850 border border-emerald-250 shadow-sm font-extrabold';
  } else if (accuracy >= 40 && totalAnswered >= 5) {
    milestoneBadge = 'Superstite A1 (Überlebender A1)';
    milestoneDesc = 'Sie verstehen grundlegende Phrasen und soziale Strukturen im italienischen Alltag.';
    badgeColor = isN 
      ? 'bg-[#E1F5FE] text-[#4D3B3B] border-4 border-[#4D3B3B] shadow-[2px_2px_0px_#4D3B3B]'
      : 'bg-sky-100 text-sky-800 border border-sky-200 shadow-sm font-extrabold';
  }

  const handleResetConfirm = () => {
    if (window.confirm('Möchten Sie Ihren gesamten Lernfortschritt wirklich auf Null zurücksetzen? Dies kann nicht rückgängig gemacht werden.')) {
      onResetStats();
    }
  };

  return (
    <div className="space-y-6">
      {/* Primary Highlights Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Quizzes Card */}
        <div 
          className={`flex items-center justify-between p-5 transition-all duration-300 ${
            isN
              ? 'bg-white border-4 border-[#4D3B3B] rounded-[24px] shadow-[6px_6px_0px_#4D3B3B] text-[#4D3B3B]'
              : 'bg-white/90 backdrop-blur-md border border-slate-200/40 rounded-3xl shadow-lg shadow-slate-100/50 text-slate-800'
          }`}
        >
          <div>
            <span className={`text-xs uppercase tracking-wider font-extrabold font-mono ${isN ? 'text-[#4D3B3B]/70' : 'text-slate-405'}`}>Absolvierte Tests</span>
            <h4 className="text-4xl font-black mt-1 text-[#4D3B3B]">{stats.quizzesTaken}</h4>
            <p className="text-xs text-[#4D3B3B]/60 mt-1 font-bold">Sitzungen insgesamt</p>
          </div>
          <div 
            className={`p-3 rounded-2xl ${
              isN
                ? 'bg-[#6C5CE7] text-white border-4 border-[#4D3B3B] shadow-[3px_3px_0px_#4D3B3B]'
                : 'bg-indigo-50 text-indigo-600 border border-indigo-100 shadow-sm'
            }`}
          >
            <Trophy className="w-6 h-6 stroke-[2]" />
          </div>
        </div>

        {/* Global Accuracy Card */}
        <div 
          className={`flex items-center justify-between p-5 transition-all duration-300 ${
            isN
              ? 'bg-white border-4 border-[#4D3B3B] rounded-[24px] shadow-[6px_6px_0px_#4D3B3B] text-[#4D3B3B]'
              : 'bg-white/90 backdrop-blur-md border border-slate-200/40 rounded-3xl shadow-lg shadow-slate-100/50 text-slate-800'
          }`}
        >
          <div>
            <span className={`text-xs uppercase tracking-wider font-extrabold font-mono ${isN ? 'text-[#4D3B3B]/70' : 'text-slate-405'}`}>Gesamtgenauigkeit</span>
            <h4 className="text-4xl font-black mt-1 text-[#4D3B3B]">{accuracy}%</h4>
            <p className="text-xs text-[#4D3B3B]/60 mt-1 font-bold">{stats.correctAnswersCount} von {totalAnswered} gelöst</p>
          </div>
          <div 
            className={`p-3 rounded-2xl ${
              isN
                ? 'bg-[#4ECDC4] text-white border-4 border-[#4D3B3B] shadow-[3px_3px_0px_#4D3B3B]'
                : 'bg-teal-50 text-teal-600 border border-teal-100 shadow-sm'
            }`}
          >
            <CheckCircle className="w-6 h-6 stroke-[2]" />
          </div>
        </div>

        {/* Exam Highscore Card */}
        <div 
          className={`flex items-center justify-between p-5 transition-all duration-300 ${
            isN
              ? 'bg-white border-4 border-[#4D3B3B] rounded-[24px] shadow-[6px_6px_0px_#4D3B3B] text-[#4D3B3B]'
              : 'bg-white/90 backdrop-blur-md border border-slate-200/40 rounded-3xl shadow-lg shadow-slate-100/50 text-slate-800'
          }`}
        >
          <div>
            <span className={`text-xs uppercase tracking-wider font-extrabold font-mono ${isN ? 'text-[#4D3B3B]/70' : 'text-slate-405'}`}>Prüfungs-Rekord</span>
            <h4 className="text-4xl font-black mt-1 text-[#4D3B3B]">{stats.examHighscore}%</h4>
            <p className="text-xs text-[#4D3B3B]/60 mt-1 font-bold">Beste Prüfungsleistung</p>
          </div>
          <div 
            className={`p-3 rounded-2xl ${
              isN
                ? 'bg-[#FFD93D] text-[#4D3B3B] border-4 border-[#4D3B3B] shadow-[3px_3px_0px_#4D3B3B]'
                : 'bg-amber-50 text-amber-700 border border-amber-100 shadow-sm'
            }`}
          >
            <Award className="w-6 h-6 stroke-[2]" />
          </div>
        </div>

        {/* Incorrect Review Bag Card */}
        <div 
          onClick={() => onSelectTab('review')}
          className={`flex items-center justify-between p-5 cursor-pointer transition-all duration-350 ${
            isN
              ? 'bg-white border-4 border-[#4D3B3B] rounded-[24px] shadow-[6px_6px_0px_#4D3B3B] text-[#4D3B3B] hover:bg-[#FFF8E1] hover:translate-y-0.5 hover:shadow-[4px_4px_0px_#4D3B3B]'
              : 'bg-white/90 backdrop-blur-md border border-slate-200/40 rounded-3xl shadow-lg shadow-slate-100/50 text-slate-800 hover:scale-[1.01] hover:shadow-xl'
          }`}
        >
          <div>
            <span className={`text-xs uppercase tracking-wider font-extrabold font-mono ${isN ? 'text-[#4D3B3B]/70' : 'text-slate-405'}`}>Falsche Antworten</span>
            <h4 className="text-4xl font-black mt-1 text-red-500">{stats.incorrectQuestionIds.length}</h4>
            <p className="text-xs text-red-650 font-extrabold mt-1 hover:underline flex items-center gap-1">Jetzt korrigieren &rarr;</p>
          </div>
          <div 
            className={`p-3 rounded-2xl ${
              isN
                ? 'bg-[#FF6B6B] text-white border-4 border-[#4D3B3B] shadow-[3px_3px_0px_#4D3B3B]'
                : 'bg-red-50 text-red-600 border border-red-100 shadow-sm'
            }`}
          >
            <BookOpen className="w-6 h-6 stroke-[2]" />
          </div>
        </div>
      </div>

      {/* Integration Milestone Badge Section */}
      <div 
        className={`p-6 transition-all duration-300 ${
          isN
            ? 'bg-white border-4 border-[#4D3B3B] rounded-[24px] shadow-[6px_6px_0px_#4D3B3B] text-[#4D3B3B]'
            : 'bg-white/95 backdrop-blur-md border border-slate-200/50 rounded-3xl shadow-lg shadow-slate-100/50 text-slate-800'
        }`}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div 
            className={`p-4 shrink-0 rounded-2xl ${
              isN
                ? 'bg-[#FFD93D] text-[#4D3B3B] border-4 border-[#4D3B3B] shadow-[4px_4px_0px_#4D3B3B]'
                : 'bg-amber-50 border border-amber-100 text-amber-600 shadow-sm'
            }`}
          >
            <GraduationCap className="w-8 h-8 stroke-[2]" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex flex-wrap items-center gap-3">
              <span className={`text-sm font-bold tracking-wide uppercase font-mono ${isN ? 'text-[#4D3B3B]/80' : 'text-slate-400'}`}>Ihr Integrations-Status:</span>
              <span className={`px-3 py-1 rounded-xl text-xs font-black uppercase tracking-wide ${badgeColor}`}>
                {milestoneBadge}
              </span>
            </div>
            <p className="text-xl sm:text-2xl font-black text-[#4D3B3B]">Lernfortschritt & Integrationseignung</p>
            <p className={`text-sm sm:text-base font-semibold ${isN ? 'text-[#4D3B3B]/90' : 'text-slate-600'}`}>{milestoneDesc}</p>
          </div>
        </div>
      </div>

      {/* Section-by-Section Mastery Progress */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          className={`p-6 space-y-6 transition-all duration-300 ${
            isN
              ? 'bg-white border-4 border-[#4D3B3B] rounded-[24px] shadow-[6px_6px_0px_#4D3B3B] text-[#4D3B3B]'
              : 'bg-white/95 backdrop-blur-md border border-slate-200/50 rounded-3xl shadow-lg shadow-slate-100/50 text-slate-800'
          }`}
        >
          <h3 
            className={`text-xl sm:text-2xl font-black pb-3 flex items-center gap-2 ${
              isN ? 'border-b-4 border-[#4D3B3B]' : 'border-b border-slate-100'
            }`}
          >
            <Star className={`w-6 h-6 ${isN ? 'text-[#FFD93D] fill-[#FFD93D]' : 'text-amber-500 fill-amber-300'}`} />
            Fortschritt nach Themenbereichen
          </h3>
          
          <div className="space-y-5">
            {SECTIONS.map((section) => {
              const sectionProgress = stats.masteryBySection[section.id] || { answered: 0, correct: 0 };
              const secAccuracy = sectionProgress.answered > 0
                ? Math.round((sectionProgress.correct / sectionProgress.answered) * 100)
                : 0;

              return (
                <div 
                  key={section.id} 
                  className={`space-y-2 pb-3 last:border-b-0 last:pb-0 ${
                    isN ? 'border-b-2 border-[#4d3b3b15]' : 'border-b border-slate-100'
                  }`}
                >
                  <div className="flex justify-between items-start text-sm">
                    <div>
                      <p className="font-extrabold text-base text-[#4D3B3B]">{section.title}</p>
                      <p className={`text-xs font-bold font-mono tracking-wide italic ${isN ? 'text-[#4D3B3B]/70' : 'text-slate-400'}`}>{section.italianLabel}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono font-black text-emerald-600">{secAccuracy}% Richtig</p>
                      <p className={`text-xs font-bold font-mono ${isN ? 'text-[#4D3B3B]/60' : 'text-slate-400'}`}>
                        {sectionProgress.correct}/{sectionProgress.answered} Beantwortet
                      </p>
                    </div>
                  </div>

                  <div 
                    className={`relative w-full h-5 overflow-hidden ${
                      isN 
                        ? 'bg-[#FFF] rounded-full border-4 border-[#4D3B3B]' 
                        : 'bg-slate-100 rounded-full h-3 border-0'
                    }`}
                  >
                    <div
                      className={`absolute top-0 left-0 h-full bg-[#4ECDC4] transition-all duration-500 ease-out ${
                        isN ? 'border-r-4 border-[#4D3B3B]' : 'rounded-full'
                      }`}
                      style={{ width: `${secAccuracy}%` }}
                    />
                  </div>

                  {/* Quick Play Study Mode button for parents */}
                  <div className="flex justify-end pt-1">
                    <button
                      id={`btn-start-${section.id}`}
                      onClick={() => onStartCategoryQuiz(section.id)}
                      className={`text-xs sm:text-sm flex items-center gap-1.5 font-black transition-colors cursor-pointer ${
                        isN
                          ? 'text-[#6C5CE7] hover:text-[#4d3b3b]'
                          : 'text-indigo-600 hover:text-indigo-805'
                      }`}
                    >
                      Dieses Thema trainieren <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Helpful stats analysis and instruction info */}
        <div 
          className={`p-6 flex flex-col justify-between transition-all duration-300 ${
            isN
              ? 'bg-white border-4 border-[#4D3B3B] rounded-[24px] shadow-[6px_6px_0px_#4D3B3B] text-[#4D3B3B]'
              : 'bg-white/95 backdrop-blur-md border border-slate-200/50 rounded-3xl shadow-lg shadow-slate-100/50 text-slate-800'
          }`}
        >
          <div className="space-y-4">
            <h3 
              className={`text-xl sm:text-2xl font-black pb-3 ${
                isN ? 'border-b-4 border-[#4D3B3B]' : 'border-b border-slate-100'
              }`}
            >
              Über den Italienertest (A1 & A2)
            </h3>
            <p className={`text-sm sm:text-base leading-relaxed font-semibold ${isN ? 'text-[#4D3B3B]/95' : 'text-slate-600'}`}>
              Dieser Kurs-Simulator bereitet Sie gezielt auf den staatlichen italienischen Sprachtest (A1/A2) und den Integrationsvereinbarungs-Simulator vor.
            </p>
            <ul className={`text-sm sm:text-base space-y-2 font-bold list-disc list-inside ${isN ? 'text-[#4D3B3B]/90' : 'text-slate-700'}`}>
              <li><strong className="text-[#FF6B6B]">Wortschatz:</strong> Wesentlich für Situationen des täglichen Lebens.</li>
              <li><strong className="text-[#6C5CE7]">Grammatik & Verben:</strong> Korrekte Satzbildung und Vergangenheitstempora.</li>
              <li><strong className="text-[#4ECDC4]">Alltagsdialoge:</strong> Souverän kommunizieren mit Ämtern, Ärzten und Geschäften.</li>
              <li><strong className="text-[#FFD93D] text-shadow">Bürgerkunde:</strong> Kulturelle und rechtliche Realität des Einwanderungslandes Italien.</li>
            </ul>
            
            <div 
              className={`p-3.5 rounded-2xl text-xs sm:text-sm space-y-1 ${
                isN
                  ? 'bg-[#FFF8E1] border-4 border-[#4D3B3B]'
                  : 'bg-amber-50/50 border border-amber-100/80 text-slate-755'
              }`}
            >
              <span className="font-extrabold text-[#FF6B6B] text-sm flex items-center gap-1">💡 Tipp für deutsche Muttersprachler:</span>
              <p className="font-semibold leading-relaxed">
                Konzentrieren Sie sich auf das <strong>Passato Prossimo</strong> im Grammatikteil. Die Wahl zwischen 'essere' und 'avere' weicht oft von den deutschen Hilfsverben 'sein' und 'haben' ab!
              </p>
            </div>
          </div>

          <div 
            className={`mt-6 pt-6 flex flex-col sm:flex-row gap-3 items-center justify-between ${
              isN ? 'border-t-4 border-[#4D3B3B]' : 'border-t border-slate-100'
            }`}
          >
            <span className={`text-xs font-semibold ${isN ? 'text-[#4D3B3B]/60' : 'text-slate-400'}`}>Zurücksetzen löscht alle lokalen Cookies und Statistiken</span>
            <button
              id="btn-reset-stats"
              onClick={handleResetConfirm}
              className={`w-full sm:w-auto px-4 py-2 text-xs sm:text-sm font-extrabold flex items-center justify-center gap-1.5 cursor-pointer transition-all duration-200 ${
                isN
                  ? 'bg-[#FFF5F5] hover:bg-[#FFD2D2] border-4 border-[#4D3B3B] rounded-xl text-[#FF6B6B] hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_#4D3B3B]'
                  : 'bg-rose-50 hover:bg-rose-100/80 text-rose-600 rounded-xl border border-rose-200/50 hover:scale-[1.02] active:scale-[0.98]'
              }`}
            >
              <RefreshCw className="w-3.5 h-3.5 stroke-[2]" /> Statistiken zurücksetzen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
