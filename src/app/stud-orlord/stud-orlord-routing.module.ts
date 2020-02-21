import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudORlordPage } from './stud-orlord.page';

const routes: Routes = [
  {
    path: '',
    component: StudORlordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudORlordPageRoutingModule {}
