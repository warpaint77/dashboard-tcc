import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tool1Component } from './dashboards/tool1/tool1.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'tool1'
  },
  {
    path: 'tool1', component: Tool1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
