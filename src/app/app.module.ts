import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './route/first/first.component';
import { SecondComponent } from './route/second/second.component';
import { ReplaceSpacesPipe } from './replace-spaces.pipe';
import { DirectivesComponent } from './route/directives/directives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveExerciseComponent } from './route/directive-exercise/directive-exercise.component';
import { OrchestrationComponent } from './route/orchestration/orchestration.component';
import { SsquareComponent } from './route/orchestration/ssquare/ssquare.component';
import { SquareTitleComponent } from './route/orchestration/square-title/square-title.component';
import { OrchestationPersonExerciceComponent } from './route/orchestation-person-exercice/orchestation-person-exercice.component';
import { PersonFormComponent } from './route/orchestation-person-exercice/person-form/person-form.component';
import { PersonTableComponent } from './route/orchestation-person-exercice/person-table/person-table.component';
import { PhotoAlbumHttpComponent } from './route/photo-album-http/photo-album-http.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskManagementComponent } from './route/task-management/task-management.component';
import { TaskFormComponent } from './route/task-management/task-form/task-form.component';
import { TaskTableComponent } from './route/task-management/task-table/task-table.component';
import { ReactiveFormExampleComponent } from './route/reactive-form-example/reactive-form-example.component';

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
    SquareTitleComponent,
    OrchestationPersonExerciceComponent,
    PersonFormComponent,
    PersonTableComponent,
    PhotoAlbumHttpComponent,
    TaskManagementComponent,
    TaskFormComponent,
    TaskTableComponent,
    ReactiveFormExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
