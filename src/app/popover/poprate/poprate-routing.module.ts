import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopratePage } from './poprate.page';

const routes: Routes = [
  {
    path: '',
    component: PopratePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopratePageRoutingModule {}
