import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageproviderPage } from './manageprovider.page';

const routes: Routes = [
  {
    path: '',
    component: ManageproviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageproviderPageRoutingModule {}
