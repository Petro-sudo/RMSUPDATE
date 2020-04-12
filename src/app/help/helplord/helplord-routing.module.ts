import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelplordPage } from './helplord.page';

const routes: Routes = [
  {
    path: '',
    component: HelplordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelplordPageRoutingModule {}
