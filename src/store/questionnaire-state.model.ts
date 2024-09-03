import { Action } from '@ngrx/store';

export interface IQuestionResponse {
  questionnaire: IQuestionnaireState;
}
export interface IQuestionnaireState {
  doughnutCategory: string;
  loading: boolean;
  error: IError | null;
  page: IPage | null;
  answers: IAnswers[];
}

export interface IPage {
  controls: IControl;
}

export interface IAnswers {
  controls: IControl;
  answerId: string;
  answers: string;
}

export interface IControl {
  qId: string;
  parent: boolean;
  label: string;
  options: IOptions[];
}

export interface IOptions {
  label: string;
  value: string;
  controls: IControl;
}

export interface IError {
  errorMsg: string;
  errorCode: string;
}

export interface IAction extends Action {
  payload?: any;
}
