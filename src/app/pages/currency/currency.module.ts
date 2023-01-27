import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrencyPageRoutingModule } from './currency-routing.module';

import { CurrencyPage } from './currency.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrencyPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CurrencyPage]
})
export class CurrencyPageModule {}
