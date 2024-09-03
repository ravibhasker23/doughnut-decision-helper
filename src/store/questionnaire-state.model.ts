import { Action } from '@ngrx/store';

//initial response
export interface IQuestionResponse {
  questionnaire: IQuestionnaireState;
}

//complete questionnaire state
export interface IQuestionnaireState {
  doughnutCategory: string;
  loading: boolean;
  error: IError | null;
  page: IPage | null;
  answers: IAnswers[];
}

//has controls for next set of action
export interface IPage {
  controls: IControl;
}

//Maintaining the answers state
export interface IAnswers {
  controls: IControl;
  answerId: string;
  answers: string;
}

//controls for a particular question
export interface IControl {
  qId: string;
  parent: boolean;
  label: string;
  options: IOptions[];
}

//options to show the radio buttons
export interface IOptions {
  label: string;
  value: string;
  controls: IControl;
}

//error handling interface
export interface IError {
  errorMsg: string;
  errorCode: string;
}

export interface IAction extends Action {
  payload?: any;
}
