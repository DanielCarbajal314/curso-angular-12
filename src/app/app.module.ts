import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './route/first/first.component';
import { SecondComponent } from './route/second/second.component';
import { ReplaceSpacesPipe } from './replace-spaces.pipe';
import { DirectivesComponent } from './route/directives/directives.component';
import { FormsModule } from '@angular/forms';
import { DirectiveExerciseComponent } from './route/directive-exercise/directive-exercise.component';
import { OrchestrationComponent } from './route/orchestration/orchestration.component';
import { SsquareComponent } from './route/orchestration/ssquare/ssquare.component';
import { SquareTitleComponent } from './route/orchestration/square-title/square-title.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ReplaceSpacesPipe,
    DirectivesComponent,
    DirectiveExerciseComponent,
    OrchestrationComponent,
    SsquareComponent,
    SquareTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
