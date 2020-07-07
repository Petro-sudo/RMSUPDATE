import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HadminPage } from './hadmin.page';

const routes: Routes = [
  {
    path: '',
    component: HadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HadminPageRoutingModule {}
