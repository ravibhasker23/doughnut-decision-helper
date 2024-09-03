import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { QuestionnaireService } from '../service/fetch-questionnaire.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  ActionTypes,
  FetchInitialQuestionnaireError,
  FetchInitialQuestionnaireSuccess,
} from './questionnaire.actions';
import { Action } from '@ngrx/store';
import { IPage, IQuestionResponse } from './questionnaire-state.model';

@Injectable()
export class QuestionnaireEffect {
  constructor(
    private actions$: Actions<Action>,
    private _fetchQuestionnaire: QuestionnaireService,
  ) {}

  public fetchInitQuestionnaire$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ActionTypes.FETCH_INIT_QUESTIONNAIRE),
      mergeMap(() => {
        return this._fetchQuestionnaire.fetchQuestionnaire().pipe(
          map((response: IQuestionResponse) => {
            return new FetchInitialQuestionnaireSuccess(response);
          }),
          catchError((error) => of(new FetchInitialQuestionnaireError(error))),
        );
      }),
    );
  });
}
