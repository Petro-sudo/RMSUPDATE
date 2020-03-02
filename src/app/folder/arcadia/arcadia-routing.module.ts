import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArcadiaPage } from './arcadia.page';

const routes: Routes = [
  {
    path: '',
    component: ArcadiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArcadiaPageRoutingModule {}
