import { TestBed } from '@angular/core/testing';

import { QuestionnaireService } from './fetch-questionnaire.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('QuestionnaireService', () => {
  let service: QuestionnaireService;


  let httpClient: HttpClient;

  const path = 'http://localhost:3000/api/questionnaire';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [QuestionnaireService]
    });
    service = TestBed.inject(QuestionnaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should call fetchQuestionnaire ', () => {
    expect(service.fetchQuestionnaire().subscribe(() =>{
      expect(httpClient.get).toEqual(path)
      })
    );
  });
});
