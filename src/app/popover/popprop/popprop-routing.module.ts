import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoppropPage } from './popprop.page';

const routes: Routes = [
  {
    path: '',
    component: PoppropPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoppropPageRoutingModule {}
