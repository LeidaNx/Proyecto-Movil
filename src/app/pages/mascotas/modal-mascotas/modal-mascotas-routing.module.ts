import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalMascotasPage } from './modal-mascotas.page';

const routes: Routes = [
  {
    path: '',
    component: ModalMascotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalMascotasPageRoutingModule {}
