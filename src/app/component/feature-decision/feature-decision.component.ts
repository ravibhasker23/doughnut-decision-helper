import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  IAnswers,
  IControl,
  IOptions,
  IPage,
  IQuestionnaireState,
} from '../../../store/questionnaire-state.model';
import { Store } from '@ngrx/store';
import { FetchInitialQuestionnaire, SetAnswers } from '../../../store';

@Component({
  selector: 'feature-decision',
  templateUrl: './feature-decision.component.html',
  styleUrl: './feature-decision.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureDecisionComponent implements OnInit {
  @Input()
  pages!: IPage | null;

  answers: IAnswers = {
    controls: {
      qId: '',
      parent: false,
      label: '',
      options: [],
    },
    answerId: '',
    answers: '',
  };

  answerGroup: IAnswers[] = [];

  tempAns: IAnswers[] = [];

  resetFlag = false;

  showTree = false;

  highlight = false;

  control: { [key: string]: boolean } = {};

  constructor(private store: Store<IQuestionnaireState>) {}

  ngOnInit(): void {
    this.answerGroup = [];
  }

  updateAnswer(option: IControl, event: string, id: string) {
    this.tempAns.forEach((element, index) => {
      if (element.answerId === id) {
        this.tempAns.splice(index, 1);
      }
    });

    this.answers.controls = option;
    this.answers.answerId = id;
    this.answers.answers = event;

    this.tempAns.push(this.answers);

    this.answerGroup = [];
    this.answerGroup = [...this.tempAns];
    console.log(this.answerGroup);
    this.reset();
  }

  reset() {
    this.answers = {
      controls: {
        qId: '',
        parent: false,
        label: '',
        options: [],
      },
      answerId: '',
      answers: '',
    };
  }

  resetState() {
    this.answerGroup = [];
    this.tempAns = [];
    this.showTree = false;
    this.highlight = false;
    this.control = {};

    this.store.dispatch(new FetchInitialQuestionnaire());
  }

  generateTree() {
    this.control = {};
    this.showTree = true;
    this.highlight = true;

    this.store.dispatch(new SetAnswers(this.tempAns));

    this.answerGroup.forEach((element, index) => {
      this.control[element.answers + element.answerId] = true;
      this.control[element.answers + element.controls.qId] = true;
      if (index === this.answerGroup.length - 1) {
        this.control[element.answers + element.answerId] = true;
        this.control[element.answers + element.controls.qId] = true;
      }
    });
  }
}
