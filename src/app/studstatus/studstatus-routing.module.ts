import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudstatusPage } from './studstatus.page';

const routes: Routes = [
  {
    path: '',
    component: StudstatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudstatusPageRoutingModule {}
