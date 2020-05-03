import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopconPage } from './popcon.page';

const routes: Routes = [
  {
    path: '',
    component: PopconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopconPageRoutingModule {}
