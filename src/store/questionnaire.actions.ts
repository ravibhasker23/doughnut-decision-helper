import { IAction, IError, IPage, IQuestionResponse } from './questionnaire-state.model';

export enum ActionTypes {
    FETCH_INIT_QUESTIONNAIRE = '[POSTS] Fetch init posts data',
    FETCH_INIT_QUESTIONNAIRE_SUCCESS = '[POSTS] Fetch init posts data success',
    FETCH_INIT_QUESTIONNAIRE_ERROR = '[POSTS] Fetch init posts data error',
}

export class FetchInitialQuestionnaire implements IAction {
    //Initial call for fetching the posts linked with a side effect fetchInitPosts$
    readonly type: ActionTypes = ActionTypes.FETCH_INIT_QUESTIONNAIRE;
}

export class FetchInitialQuestionnaireSuccess implements IAction {
    // Action for on completion of fetching the API data
    readonly type: ActionTypes = ActionTypes.FETCH_INIT_QUESTIONNAIRE_SUCCESS;
    constructor(public payload: IQuestionResponse){}
}

export class FetchInitialQuestionnaireError implements IAction {
    // Action for on error of fetching the API data
    readonly type: ActionTypes = ActionTypes.FETCH_INIT_QUESTIONNAIRE_ERROR;
    constructor(public payload: IError){}
}
