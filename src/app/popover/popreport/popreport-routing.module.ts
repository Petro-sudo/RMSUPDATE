import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopreportPage } from './popreport.page';

const routes: Routes = [
  {
    path: '',
    component: PopreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopreportPageRoutingModule {}
