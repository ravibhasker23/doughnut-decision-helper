import {
  IAction,
  IAnswers,
  IError,
  IPage,
  IQuestionResponse,
} from './questionnaire-state.model';

export enum ActionTypes {
  FETCH_INIT_QUESTIONNAIRE = '[QUESTIONNAIRE] Fetch init questionnaire data',
  FETCH_INIT_QUESTIONNAIRE_SUCCESS = '[QUESTIONNAIRE] Fetch init questionnaire data success',
  FETCH_INIT_QUESTIONNAIRE_ERROR = '[QUESTIONNAIRE] Fetch init questionnaire data error',

  SET_ANSWERS = '[QUESTIONNAIRE] set ansewers for the user selection',
}

export class FetchInitialQuestionnaire implements IAction {
  //Initial call for fetching the posts linked with a side effect fetchInitPosts$
  readonly type: ActionTypes = ActionTypes.FETCH_INIT_QUESTIONNAIRE;
}

export class FetchInitialQuestionnaireSuccess implements IAction {
  // Action for on completion of fetching the API data
  readonly type: ActionTypes = ActionTypes.FETCH_INIT_QUESTIONNAIRE_SUCCESS;
  constructor(public payload: IQuestionResponse) {}
}

export class FetchInitialQuestionnaireError implements IAction {
  // Action for on error of fetching the API data
  readonly type: ActionTypes = ActionTypes.FETCH_INIT_QUESTIONNAIRE_ERROR;
  constructor(public payload: IError) {}
}

export class SetAnswers implements IAction {
  // Action for on error of fetching the API data
  readonly type: ActionTypes = ActionTypes.SET_ANSWERS;
  constructor(public payload: IAnswers[]) {}
}
