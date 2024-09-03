import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, map, throwError } from 'rxjs';
import { IQuestionResponse } from '../store/questionnaire-state.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  path = 'http://localhost:3000/api/questionnaire';

  constructor(private httpClient: HttpClient) { }

  // Service to fetch the questionnaire
  public fetchQuestionnaire(): Observable<IQuestionResponse>{
    return this.httpClient.get(this.path, {})
    .pipe(map((res: any) => {
      return res;
    }),
    catchError((error: HttpErrorResponse) => {
      if (error.error instanceof Error) {
        // A client-side or network error occurred.
        console.error('An error occurred:', error.error.message);
      } else {
        // A server-sider error occured
        console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
      }
      return throwError(error);
    })
  );
  }
  
}
