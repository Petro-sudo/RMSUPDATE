import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopstdPage } from './popstd.page';

const routes: Routes = [
  {
    path: '',
    component: PopstdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopstdPageRoutingModule {}
