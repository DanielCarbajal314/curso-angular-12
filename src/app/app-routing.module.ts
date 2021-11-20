import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveExerciseComponent } from './route/directive-exercise/directive-exercise.component';
import { DirectivesComponent } from './route/directives/directives.component';
import { FirstComponent } from './route/first/first.component';
import { OrchestrationComponent } from './route/orchestration/orchestration.component';
import { SecondComponent } from './route/second/second.component';

const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: 'directive', component: DirectivesComponent },
  { path: 'directive-exercise', component: DirectiveExerciseComponent },
  { path: 'orchestation', component: OrchestrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
