import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemporadasPageRoutingModule } from './temporadas-routing.module';

import { TemporadasPage } from './temporadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemporadasPageRoutingModule
  ],
  declarations: [TemporadasPage]
})
export class TemporadasPageModule {}
