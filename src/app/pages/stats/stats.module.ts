import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsRoutingModule } from './stats-routing.module';
import { BarChartComponent } from './pages/bar-chart/bar-chart.component';
import { LineChartComponent } from './pages/line-chart/line-chart.component';
import { PieChartComponent } from './pages/pie-chart/pie-chart.component';
import { RadarChartComponent } from './pages/radar-chart/radar-chart.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [BarChartComponent, LineChartComponent, PieChartComponent, RadarChartComponent],
  imports: [
    CommonModule,
    StatsRoutingModule,
    ChartsModule
  ]
})
export class StatsModule { }
