import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { QuestionnaireService } from '../service/fetch-questionnaire.service';
import { QuestionnaireEpic, questionnaireReducer } from '../store';
import { FeatureDecisionComponent } from './component/feature-decision/feature-decision.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatureDecisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ questionnaire: questionnaireReducer }),
    EffectsModule.forRoot([QuestionnaireEpic]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: true
    }),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [QuestionnaireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
