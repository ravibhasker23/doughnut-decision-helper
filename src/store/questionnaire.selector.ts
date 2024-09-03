import { IQuestionResponse, IQuestionnaireState } from './questionnaire-state.model';
import { createSelector } from '@ngrx/store';

export const questionnaireSelectFeature = (state: IQuestionResponse) => state.questionnaire;

//selector for fetching the posts
export const pageSelector = createSelector(
  questionnaireSelectFeature,
  (state: IQuestionnaireState) => state.page
);
