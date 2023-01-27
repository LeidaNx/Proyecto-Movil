import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VillagerPageRoutingModule } from './villager-routing.module';

import { VillagerPage } from './villager.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VillagerPageRoutingModule,
    ComponentsModule
  ],
  declarations: [VillagerPage]
})
export class VillagerPageModule {}
