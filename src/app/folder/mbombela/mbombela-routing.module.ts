import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MbombelaPage } from './mbombela.page';

const routes: Routes = [
  {
    path: '',
    component: MbombelaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MbombelaPageRoutingModule {}
