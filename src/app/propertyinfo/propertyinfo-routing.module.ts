import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyinfoPage } from './propertyinfo.page';

const routes: Routes = [
  {
    path: '',
    component: PropertyinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyinfoPageRoutingModule {}
