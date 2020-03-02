import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PretoriaPage } from './pretoria.page';

const routes: Routes = [
  {
    path: '',
    component: PretoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PretoriaPageRoutingModule {}
