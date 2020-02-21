import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudProfilePage } from './stud-profile.page';

const routes: Routes = [
  {
    path: '',
    component: StudProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudProfilePageRoutingModule {}
