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
import { AngularMaterialFormComponent } from './route/angular-material-form/angular-material-form.component';
import { FormExampleComponent } from './route/angular-material-form/form-example/form-example.component';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatInputModule} from '@angular/material/input'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';


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
    ReactiveFormExampleComponent,
    AngularMaterialFormComponent,
    FormExampleComponent
  ],
  imports: [
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    A11yModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
