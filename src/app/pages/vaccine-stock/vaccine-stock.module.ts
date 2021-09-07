import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VaccineStockRoutingModule } from './vaccine-stock-routing.module';
import { CreateComponent } from './pages/create/create.component';
import { IndexComponent } from './pages/index/index.component';
import { ShowComponent } from './pages/show/show.component';
import { UpdateComponent } from './pages/update/update.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';


@NgModule({
  declarations: [CreateComponent, IndexComponent, ShowComponent, UpdateComponent],
  imports: [
    CommonModule,
    VaccineStockRoutingModule,
    NzTableModule,
    NzButtonModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzDatePickerModule
  ]
})
export class VaccineStockModule { }
