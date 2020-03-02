import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmalahleniPage } from './emalahleni.page';

const routes: Routes = [
  {
    path: '',
    component: EmalahleniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmalahleniPageRoutingModule {}
