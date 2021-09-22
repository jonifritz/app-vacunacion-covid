import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VaccineLotsRoutingModule } from './vaccine-lots-routing.module';
import { CreateComponent } from './pages/create/create.component';
import { IndexComponent } from './pages/index/index.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { ShowComponent } from './pages/show/show.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';

@NgModule({
  declarations: [IndexComponent, CreateComponent, ShowComponent],
  imports: [
    CommonModule,
    VaccineLotsRoutingModule,
    NzTableModule,
    NzButtonModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzDatePickerModule,
    NzPageHeaderModule,
    NzDescriptionsModule
  ]
})
export class VaccineLotsModule { }
