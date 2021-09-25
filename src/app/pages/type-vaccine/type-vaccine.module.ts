import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import { CreateComponent } from './pages/create/create.component';
import { ShowComponent } from './pages/show/show.component';
import { UpdateComponent } from './pages/update/update.component';
import { TypeVaccineRoutingModule } from './type-vaccine-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';


@NgModule({
  declarations: [IndexComponent, CreateComponent, ShowComponent, UpdateComponent],
  imports: [
    CommonModule, TypeVaccineRoutingModule, NzTableModule, NzButtonModule, NzFormModule, NzInputModule, FormsModule, 
    ReactiveFormsModule,
    NzSelectModule,
    NzPageHeaderModule,
    NzDescriptionsModule,
  ]
})
export class TypeVaccineModule { }
