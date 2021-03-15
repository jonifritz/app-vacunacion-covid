import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import { CreateComponent } from './pages/create/create.component';
import { ShowComponent } from './pages/show/show.component';
import { UpdateComponent } from './pages/update/update.component';
import { TypeVaccineRoutingModule } from './type-vaccine-routing.module';



@NgModule({
  declarations: [IndexComponent, CreateComponent, ShowComponent, UpdateComponent],
  imports: [
    CommonModule, TypeVaccineRoutingModule
  ]
})
export class TypeVaccineModule { }
