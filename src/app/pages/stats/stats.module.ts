import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsRoutingModule } from './stats-routing.module';
import { BarChartComponent } from './pages/bar-chart/bar-chart.component';
import { LineChartComponent } from './pages/line-chart/line-chart.component';
import { PieChartComponent } from './pages/pie-chart/pie-chart.component';
import { RadarChartComponent } from './pages/radar-chart/radar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { MainComponent } from './pages/main/main.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzMenuModule } from 'ng-zorro-antd/menu';


@NgModule({
  declarations: [BarChartComponent, LineChartComponent, PieChartComponent, RadarChartComponent, MainComponent],
  imports: [
    CommonModule,
    StatsRoutingModule,
    ChartsModule,
    NzTableModule,
    NzButtonModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzDatePickerModule,
    NzPageHeaderModule,
    NzDescriptionsModule,
    NzMenuModule
  ]
})
export class StatsModule { }
