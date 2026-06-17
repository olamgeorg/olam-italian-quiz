/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type SectionId = 'vocabulary' | 'grammar' | 'dialogues' | 'culture';

export interface SectionInfo {
  id: SectionId;
  title: string;
  description: string;
  italianLabel: string;
}

export interface Question {
  id: string;
  section: SectionId;
  level: 'A1' | 'A2';
  questionText: string; // The phrase to translate or answer
  questionContext?: string; // Optional context (Italian dialogue or reading text)
  options: string[];
  correctAnswerIndex: number;
  explanation: string; // Explanation in German why it's correct
  translation?: string; // German translation of the Italian question
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
