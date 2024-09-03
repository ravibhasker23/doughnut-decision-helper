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

  //Updating the answersGroup with the user selection and keeping a temp storage for next level reference.
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
    this.reset();
  }

  //Resetting the answers for keeping the next set of selection.
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

  // Called when users refresh the current selection and resetting to initial fetch for questionnaire
  resetState() {
    this.answerGroup = [];
    this.tempAns = [];
    this.showTree = false;
    this.highlight = false;
    this.control = {};

    this.store.dispatch(new FetchInitialQuestionnaire());
    this.store.dispatch(new SetAnswers([]));
  }

  // Creating the tree structure, adding custom class on runtime based on user selection and keeping the answers in store.
  generateTree() {
    this.control = {};
    this.showTree = true;
    this.highlight = true;

    this.store.dispatch(new SetAnswers(this.answerGroup));

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
