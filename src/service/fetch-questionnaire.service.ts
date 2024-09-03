import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IQuestionResponse } from '../store/questionnaire-state.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  path = 'http://localhost:3000/api/questionnaire';

  constructor(private httpClient: HttpClient) { }

  // Service to fetch the posts
  public fetchQuestionnaire(): Observable<IQuestionResponse>{
    return this.httpClient.get(this.path, {})
    .pipe(map((res: any) => {
      return res;
    }))
  }
  
}
