import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudapplyPage } from './studapply.page';

const routes: Routes = [
  {
    path: '',
    component: StudapplyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudapplyPageRoutingModule {}
