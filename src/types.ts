/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type SectionId = 'Verben' | 'Nomen' | 'Präpositionen' | 'Artikel';

export interface SectionInfo {
  id: SectionId;
  title: string;
  description: string;
  italianLabel: string;
}

export interface Question {
  id: string;
  section: SectionId;
  thema: string; // 'Presente' | 'Passato Prossimo' | 'Imperfetto' | 'Futuro' | 'Condizionale' | etc.
  frage_de: string;
  options_de: string[];
  richtige_antwort: string;
  erklaerung_de: string;
}

export type QuizMode = 'practice' | 'exam';

export interface UserStats {
  quizzesTaken: number;
  examHighscore: number; // Percentage
  totalQuestionsAnswered: number;
  correctAnswersCount: number;
  masteryBySection: Record<SectionId, { answered: number; correct: number }>;
  incorrectQuestionIds: string[]; // List of quiz question IDs currently marked as incorrect
}

export interface BackgroundTheme {
  id: string;
  name: string;
  cssClass: string;
  previewColor: string;
}
