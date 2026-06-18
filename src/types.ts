export interface Question {
  id: number;
  level: 'A1' | 'A2';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export type QuizMode = 'practice' | 'exam';

export interface TranslationSchema {
  app: {
    title: string;
    subtitle: string;
  };
  home: {
    welcome: string;
    select_level: string;
    level_a1: string;
    level_a2: string;
    level_desc: string;
    footer_credit: string;
  };
  mode: {
    title: string;
    desc_a1: string;
    desc_a2: string;
    practice_btn: string;
    practice_desc: string;
    exam_btn: string;
    exam_desc_a1: string;
    exam_desc_a2: string;
    back_btn: string;
  };
  quiz: {
    question_counter: string;
    timer_seconds: string;
    timer_prefix: string;
    next_btn: string;
    practice_explanation_title: string;
    practice_correct: string;
    practice_incorrect: string;
    exam_warning: string;
  };
  result: {
    title: string;
    score_label: string;
    score_percentage: string;
    correct_answers: string;
    incorrect_answers: string;
    passed: string;
    failed: string;
    retry_btn: string;
    home_btn: string;
  };
}
