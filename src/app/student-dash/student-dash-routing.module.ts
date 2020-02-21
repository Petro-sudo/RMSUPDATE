import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentDashPage } from './student-dash.page';

const routes: Routes = [
  {
    path: '',
    component: StudentDashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentDashPageRoutingModule {}
