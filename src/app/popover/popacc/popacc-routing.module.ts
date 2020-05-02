import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopaccPage } from './popacc.page';

const routes: Routes = [
  {
    path: '',
    component: PopaccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopaccPageRoutingModule {}
