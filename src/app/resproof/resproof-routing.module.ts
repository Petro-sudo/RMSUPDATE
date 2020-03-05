import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResproofPage } from './resproof.page';

const routes: Routes = [
  {
    path: '',
    component: ResproofPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResproofPageRoutingModule {}
