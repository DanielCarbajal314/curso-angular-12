import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './route/first/first.component';
import { SecondComponent } from './route/second/second.component';

const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
