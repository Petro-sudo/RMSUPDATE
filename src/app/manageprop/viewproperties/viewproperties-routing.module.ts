import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewpropertiesPage } from './viewproperties.page';

const routes: Routes = [
  {
    path: '',
    component: ViewpropertiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewpropertiesPageRoutingModule {}
