import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalMascotasPageRoutingModule } from './modal-mascotas-routing.module';

import { ModalMascotasPage } from './modal-mascotas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalMascotasPageRoutingModule
  ],
  declarations: [ModalMascotasPage]
})
export class ModalMascotasPageModule {}
