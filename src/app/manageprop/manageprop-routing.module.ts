import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagepropPage } from './manageprop.page';

const routes: Routes = [
  {
    path: '',
    component: ManagepropPage
  },  {
    path: 'editprop',
    loadChildren: () => import('./editprop/editprop.module').then( m => m.EditpropPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagepropPageRoutingModule {}
