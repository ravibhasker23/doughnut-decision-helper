import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { IQuestionResponse, IQuestionnaireState } from '../store/questionnaire-state.model';
import { FetchInitialQuestionnaire, pageSelector } from '../store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'doughnut-app';

  page$ = this.store.select(pageSelector);
  
  constructor(private store: Store<IQuestionResponse>) {
  }

  ngOnInit(): void {
    //Dispatch the action for fetching the posts
    this.store.dispatch(new FetchInitialQuestionnaire());

    this.page$.subscribe(res =>{
      console.log(res);
    })
  }
}
