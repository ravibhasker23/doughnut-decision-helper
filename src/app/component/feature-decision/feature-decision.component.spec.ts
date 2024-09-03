import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { FeatureDecisionComponent } from './feature-decision.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IPage } from '../../../store/questionnaire-state.model';
import { FetchInitialQuestionnaire } from '../../../store';

describe('FeatureDecisionComponent', () => {
  let component: FeatureDecisionComponent;
  let fixture: ComponentFixture<FeatureDecisionComponent>;
  let mockStore: MockStore;

  const questionnaire: IPage = {
    controls: {
      qId: '1',
      parent: true,
      label: 'Do I want a doughnut?',
      options: [
        {
          label: 'Yes',
          value: 'Yes',
          controls: {
            qId: '1.1',
            parent: true,
            label: 'Do I deserve it?',
            options: [
              {
                label: 'Yes',
                value: 'Yes',
                controls: {
                  qId: '1.1.1',
                  parent: true,
                  label: 'Are you sure?',
                  options: [],
                },
              },
            ],
          },
        },
        {
          label: 'No',
          value: 'No',
          controls: {
            qId: '1.2',
            parent: false,
            label: 'Maybe you want an apple?',
            options: [],
          },
        },
      ],
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureDecisionComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureDecisionComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    component.ngOnInit();

    expect(component.answerGroup).toEqual([]);
  });

  it('should call updateAnswer when user selects the radio option', () => {
    component.pages = questionnaire;
    const options = {
      label: 'Maybe you want an apple?',
      options: [],
      parent: false,
      qId: '1.2',
    };
    const id = '1';
    const event = 'Yes';

    component.updateAnswer(options, event, id);

    expect(component.answers.controls.label).toEqual('');
    expect(component.answers.answerId).toEqual('');
    expect(component.answers.answers).toEqual('');
    expect(component.tempAns.length).toEqual(1);
    expect(component.answerGroup.length).toEqual(1);
  });

  it('should call reset for resetting the answer state', () => {
    component.reset();

    expect(component.answers.controls.label).toEqual('');
    expect(component.answers.answerId).toEqual('');
    expect(component.answers.answers).toEqual('');
  });

  it('should call resetState resetting to original state', () => {
    const dispatchSpy = spyOn(mockStore, 'dispatch').and.callThrough();

    component.resetState();

    expect(component.answerGroup).toEqual([]);
    expect(component.tempAns).toEqual([]);
    expect(component.showTree).toEqual(false);
    expect(component.highlight).toEqual(false);
    expect(component.control).toEqual({});
    expect(dispatchSpy).toHaveBeenCalledWith(new FetchInitialQuestionnaire());
  });

  it('should call generateTree for generating decision tree', () => {
    component.answerGroup = [
      {
        answerId: '1',
        answers: 'No',
        controls: {
          label: 'Maybe you want an apple?',
          options: [],
          parent: false,
          qId: '1.2',
        },
      },
    ];
    component.generateTree();

    expect(component.showTree).toEqual(true);
    expect(component.highlight).toEqual(true);
    expect(component.control).toBeDefined();
  });
});
