import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { VacunatoryCenterVaccinationRoutingModule } from './vacunatory-center-vaccination-routing.module';
import { CreateComponent } from './pages/create/create.component';
import { IndexComponent } from './pages/index/index.component';
import { ShowComponent } from './pages/show/show.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';


@NgModule({
  declarations: [CreateComponent, IndexComponent, ShowComponent],
  imports: [
    CommonModule,
    VacunatoryCenterVaccinationRoutingModule,
    NzTableModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzPageHeaderModule,
    NzDescriptionsModule
  ]
})
export class VacunatoryCenterVaccinationModule { }
