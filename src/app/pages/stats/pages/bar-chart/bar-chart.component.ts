import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ProvinceVaccination, ProvincevaccinationService } from 'src/app/core/services/provincevaccination.service';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [];
  public barChartColors: Color[] = []

  ProvinceVaccination: ProvinceVaccination[] = []
  constructor(private ProvincevaccinationService: ProvincevaccinationService) { }

  ngOnInit(): void {
      //this.getVaccineStats(1)
      this.getAllVaccinesStates()
  }
  getVaccineStats(vari): void {
    this.ProvincevaccinationService.showStats(vari).subscribe(data => {
      this.barChartData[0].label = data['province_stats'].name
      for(var i=0; i< data['province_stats'].results.length; i++) {
        this.barChartData[0].data.push(data['province_stats'].results[i].sum_quantity)
        this.barChartLabels.push(data['province_stats'].results[i].date)
      }
    })
  }

  getAllVaccinesStates(): void {

    let colors = ['grey', 'teal', 'pink', 'yellow', 'purple', 'teal'];

    this.ProvincevaccinationService.showAllStats().subscribe(data => {
      let results =  data['province_stats'].results
      for(var j=0; j<Object.keys(results).length; j++) {
        this.barChartData[j] = ({data: [], label: Object.keys(results)[j].toString()})
        this.barChartColors[j] = { backgroundColor: colors[j] }
        for(var i=0; i<results[Object.keys(results)[j]].length; i++) {
          this.barChartData[j].data.push(results[Object.keys(results)[j]][i].sum_quantity)
          this.barChartLabels.push(results[Object.keys(results)[j]][i].date)
        }
      }
    })
  }
}