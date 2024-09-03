import { ActionTypes } from "./questionnaire.actions";
import { IAction, IQuestionnaireState } from "./questionnaire-state.model";

export const initState: IQuestionnaireState = {
    loading: false,
    error: null,
    doughnutCategory: '',
    page: null,
}

export function questionnaireReducer(
    state = initState,
    action: IAction
): IQuestionnaireState{
    switch(action.type){
        case ActionTypes.FETCH_INIT_QUESTIONNAIRE: {
            state = initState;
            return {
                ...state,
                loading: true,
                error: null,
                page: null,
            }
        }
        case ActionTypes.FETCH_INIT_QUESTIONNAIRE_SUCCESS: {
            console.log('here')
            state = initState;
            return {
                ...state,
                loading: false,
                error: null,
                page: action.payload.page,
            }
        }
        case ActionTypes.FETCH_INIT_QUESTIONNAIRE_ERROR: {
            state = initState;
            return {
                ...state,
                loading: false,
                error: action.payload,
                page: null,
            }
        }
        default:
            return state;
    }
}
