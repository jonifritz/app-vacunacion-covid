import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './pages/bar-chart/bar-chart.component';
import { LineChartComponent } from './pages/line-chart/line-chart.component';
import { PieChartComponent } from './pages/pie-chart/pie-chart.component';
import { RadarChartComponent } from './pages/radar-chart/radar-chart.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'barchart', component: BarChartComponent },
  { path: 'linechart', component: LineChartComponent },
  { path: 'piechart', component: PieChartComponent },
  { path: 'radarchart', component: RadarChartComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatsRoutingModule { }
