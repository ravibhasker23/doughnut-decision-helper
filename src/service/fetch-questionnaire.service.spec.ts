import { TestBed } from '@angular/core/testing';
import { QuestionnaireService } from './fetch-questionnaire.service';
import { HttpClientModule } from '@angular/common/http';
import { IQuestionResponse } from '../store/questionnaire-state.model';

describe('QuestionnaireService', () => {
  let service: QuestionnaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [QuestionnaireService],
    });
    service = TestBed.get(QuestionnaireService);
  });

  it('should be created', () => {
    const service: QuestionnaireService = TestBed.get(QuestionnaireService);
    expect(service).toBeTruthy();
  });

  it('be able to retrieve posts from the API bia GET', () => {
    service.fetchQuestionnaire().subscribe((res) => {
      expect(res).toBeDefined();
    });
  });
});
