import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IQuestionResponse } from '../store/questionnaire-state.model';
import { FetchInitialQuestionnaire, pageSelector } from '../store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  page$ = this.store.select(pageSelector);

  constructor(private store: Store<IQuestionResponse>) {}

  ngOnInit(): void {
    //Dispatch the action for fetching the questionnaire
    this.store.dispatch(new FetchInitialQuestionnaire());
  }
}
