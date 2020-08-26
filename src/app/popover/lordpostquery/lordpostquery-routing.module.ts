import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LordpostqueryPage } from './lordpostquery.page';

const routes: Routes = [
  {
    path: '',
    component: LordpostqueryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LordpostqueryPageRoutingModule {}
