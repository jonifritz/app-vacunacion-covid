import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { ProvinceVaccination, ProvincevaccinationService } from 'src/app/core/services/provincevaccination.service';
import { MunicipalityvaccinationService } from 'src/app/core/services/municipalityvaccination.service';
import {
  SingleDataSet,
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip,
  Color,
} from 'ng2-charts';
import { VaccineLotsService } from 'src/app/core/services/vaccine-lots.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  selected_chart_info: string;
  selected_vaccine_type: number;
  selected_province: number;

  lista: string[] = [
    "Vacunas según tipo, recibidas a nivel nacional",
    "Vacunas asignadas a provincias",
    "Vacunas asignadas a municipios",
  ];

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  //public pieChartColors: Color[] = [];

  public pieChartColors: any = [
    {
      backgroundColor: [
        'rgba(69, 108, 160, 0.8)',
        'rgba(245, 178, 39, 0.8)',
        'rgba(245, 63, 3, 0.5)',
        'rgba(49, 72, 145, 0.8)',
        'rgba(0, 63, 3, 0.5)',
        'rgba(4, 255, 40, 0.29)',
        'rgba(51, 44, 49, 0.36)',
        'rgba(50, 246, 255, 0.25)',
        'rgba(21, 239, 214, 0.96)',
        'rgba(255, 83, 110, 1)',
        'rgba(216, 226, 26, 0.8)',
        'rgba(0, 0, 0, 0.25)',
        'rgba(254, 171, 207, 0.99)',
        'rgba(254, 171, 0, 0.29)',
        'rgba(255, 255, 25, 0.88)',
        'rgba(200, 81, 52, 0.8)',
        'rgba(10, 78, 16, 0.8)',
        'rgba(42, 2, 30, 0.88)',
        'rgba(254, 171, 0, 0.99)',
        'rgba(4, 255, 40, 0.88)',
        'rgba(103, 63, 102, 0.8)',
        'rgba(226, 26, 166, 0.8)',
        'rgba(50, 100, 96, 0.8)',
      ]
    }
  ];

  constructor(private provincevaccinationService: ProvincevaccinationService,
    private municipalityvaccinationService: MunicipalityvaccinationService,
    private vaccinelotService: VaccineLotsService) { }

  ngOnInit(): void {

    /* this.municipalityvaccinationService.allTypesVaccinesMunicipalities().subscribe(data2 => {
       console.log(data2);
     });*/

    //this.totalVaccinesperProvince();
    //this.totalVaccinesperMunicipality();

    /* this.provincevaccinationService.allTypesVaccinesProvinces().subscribe(data2 => {
       console.log(data2);
     });*/

    this.vaccinelotService.allTypesVaccinesCountry().subscribe(data2 => {
      console.log(data2);
    })

    //this.totalVaccinesperCountry();


  }

  totalVaccinesperCountry(): void {

    let colors = ['teal', 'grey', 'pink', 'yellow', 'purple', 'lightblue', 'red', 'blue'];
    this.vaccinelotService.allTypesVaccinesCountry().subscribe(data => {
      //console.log(data);
      this.clear();
      let results = data['vaccines_by_country'].results

      for (var i = 0; i < Object.keys(results).length; i++) {
        this.pieChartData.push(results[i].sum_quantity)
        this.pieChartLabels.push(results[i].vaccine_name.name)
        //this.pieChartColors[i] = { backgroundColor: colors[i] }
      }
    })
  }

  totalVaccinesperProvince(): void {

    let colors = ['teal', 'grey', 'pink', 'yellow', 'purple', 'lightblue', 'red', 'blue'];
    this.provincevaccinationService.allTypesVaccinesProvinces().subscribe(data => {
      //console.log(data);
      this.clear();
      let results = data['vaccines_by_province'].results

      for (var i = 0; i < Object.keys(results).length; i++) {
        this.pieChartData.push(results[i].sum_quantity)
        this.pieChartLabels.push(results[i].complete_name)
        //this.pieChartColors[i] = { backgroundColor: colors[i] }
      }
    })
  }

  totalVaccinesperMunicipality(): void {

    let colors = ['teal', 'grey', 'pink', 'yellow', 'purple', 'lightblue', 'red', 'blue'];
    this.municipalityvaccinationService.allTypesVaccinesMunicipalities().subscribe(data => {
      //console.log(data);
      this.clear();
      let results = data['vaccines_by_municipality'].results

      for (var i = 0; i < Object.keys(results).length; i++) {
        this.pieChartData.push(results[i].sum_quantity)
        this.pieChartLabels.push(results[i].complete_name)
        //this.pieChartColors[i] = { backgroundColor: colors[i] }
      }
    })
  }

  clear(): void {
    this.pieChartData = [],
      this.pieChartLabels = [];
  }



}
