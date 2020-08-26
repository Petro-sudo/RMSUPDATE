import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LordpostissuesPage } from './lordpostissues.page';

const routes: Routes = [
  {
    path: '',
    component: LordpostissuesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LordpostissuesPageRoutingModule {}
