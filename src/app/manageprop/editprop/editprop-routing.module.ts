import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditpropPage } from './editprop.page';

const routes: Routes = [
  {
    path: '',
    component: EditpropPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditpropPageRoutingModule {}
