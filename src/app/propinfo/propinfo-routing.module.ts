import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropinfoPage } from './propinfo.page';

const routes: Routes = [
  {
    path: '',
    component: PropinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropinfoPageRoutingModule {}
