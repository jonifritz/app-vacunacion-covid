import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MunicipalityVaccinationRoutingModule } from './municipality-vaccination-routing.module';
import { IndexComponent } from './pages/index/index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    MunicipalityVaccinationRoutingModule
  ]
})
export class MunicipalityVaccinationModule { }
