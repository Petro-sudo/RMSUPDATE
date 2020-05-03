import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopaddPage } from './popadd.page';

const routes: Routes = [
  {
    path: '',
    component: PopaddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopaddPageRoutingModule {}
