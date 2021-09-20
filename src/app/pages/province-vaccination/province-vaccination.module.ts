import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvinceVaccinationRoutingModule } from './province-vaccination-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './pages/create/create.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ShowComponent } from './pages/show/show.component';


@NgModule({
  declarations: [IndexComponent, CreateComponent, ShowComponent],
  imports: [
    CommonModule,
    ProvinceVaccinationRoutingModule,
    NzTableModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzSelectModule,
  ]
})
export class ProvinceVaccinationModule { }
