import { IError, IQuestionResponse } from './questionnaire-state.model';
import * as questionnaireActions from './questionnaire.actions';

describe('FetchInitialQuestionnaire', () => {
    it('should initite the questionnaire', () =>{
        const action = new questionnaireActions.FetchInitialQuestionnaire();
        expect(action.type).toBe(
            questionnaireActions.ActionTypes.FETCH_INIT_QUESTIONNAIRE
        )
    });
});

describe('FetchInitialQuestionnaireSuccess', () => {
    it('should call success when effect is complete', () =>{
        const payload: IQuestionResponse = {
            questionnaire: {
                doughnutCategory: '',
                loading: false,
                error: null,
                page: {
                    controls: {
                        qId: '',
                        parent: false,
                        label: '',
                        options: []
                    }
                },
            }
        }
        const action = new questionnaireActions.FetchInitialQuestionnaireSuccess(payload);
        expect(action.type).toBe(
            questionnaireActions.ActionTypes.FETCH_INIT_QUESTIONNAIRE_SUCCESS,
            payload
        )

        expect(action.payload).toEqual(payload);
    });
});

describe('FetchInitialQuestionnaireError', () => {
    it('should call error when effect has error', () =>{
        const payload: IError = {
            errorMsg: '',
            errorCode: ''
        }
        const action = new questionnaireActions.FetchInitialQuestionnaireError(payload);
        expect(action.type).toBe(
            questionnaireActions.ActionTypes.FETCH_INIT_QUESTIONNAIRE_ERROR,
            payload
        )

        expect(action.payload).toEqual(payload);
    });
});