import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MascotasPage } from './mascotas.page';

const routes: Routes = [
  {
    path: '',
    component: MascotasPage
  },
  {
    path: 'modal-mascotas',
    loadChildren: () => import('./modal-mascotas/modal-mascotas.module').then( m => m.ModalMascotasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MascotasPageRoutingModule {}
