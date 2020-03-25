import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagepropPage } from './manageprop.page';

const routes: Routes = [
  {
    path: '',
    component: ManagepropPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagepropPageRoutingModule {}
