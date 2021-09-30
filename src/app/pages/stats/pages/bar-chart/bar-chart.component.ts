import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { MunicipalityvaccinationService } from 'src/app/core/services/municipalityvaccination.service';
import { ProvinceVaccination, ProvincevaccinationService } from 'src/app/core/services/provincevaccination.service';
import { TypeVaccine, TypevaccineService } from 'src/app/core/services/typevaccine.service';


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



  selected_chart_info: string;
  selected_vaccine_type: number;
  selected_province: number;

  lista: string[] = ["Vacunas por tipo en provincias por fecha",
    "Vacunas por tipo en municipios por fecha",
    "Tipo de vacuna por provincias",
    "Tipos de vacunas por provincias"
  ];

  typeVaccine: TypeVaccine[] = []
  provinceVaccine: ProvinceVaccination[] = []

  constructor(private provincevaccinationService: ProvincevaccinationService,
    private municipalityvaccinationService: MunicipalityvaccinationService,
    private typevaccineService: TypevaccineService) { }

  ngOnInit(): void {
    this.typevaccineService.index().subscribe(data => {
      this.typeVaccine = data;
      console.log(data)
    });

    this.provincevaccinationService.getProvinciesFromApi().subscribe(
      data => this.provinceVaccine = data);


    this.provincevaccinationService.statsPerProvince(1).subscribe(data2 => {
      console.log(data2);
    });

    this.provincevaccinationService.typesVaccinesByProvinceStats(74).subscribe(data2 => {
      console.log(data2);
    });

  }

  TypeVaccineOnProvinceByDateStats(vaccine_id): void {

    let colors = ['rgba(69, 108, 160, 0.8)', 'grey', 'pink', 'yellow', 'purple', 'teal'];
    //this.clear();    
    this.provincevaccinationService.showStats(vaccine_id).subscribe(data => {
      this.clear();
      this.barChartData[0].label = data['province_stats'].name
      for (var i = 0; i < data['province_stats'].results.length; i++) {
        this.barChartData[0].data.push(data['province_stats'].results[i].sum_quantity)
        this.barChartLabels.push(data['province_stats'].results[i].date)
        this.barChartColors[i] = {
          backgroundColor: colors[i]

        }
      }
    })
  }

  AllTypeVaccineOnProvinceByDateStats(): void {

    let colors = ['lightblue', 'teal', 'orange', 'pink', 'purple', 'teal'];
    this.provincevaccinationService.showAllStats().subscribe(data => {
      console.log(data);
      this.clear();
      let results = data['province_stats'].results
      for (var j = 0; j < Object.keys(results).length; j++) {
        this.barChartData[j] = ({ data: [], label: Object.keys(results)[j].toString() })
        this.barChartColors[j] = { backgroundColor: colors[j] }
        for (var i = 0; i < results[Object.keys(results)[j]].length; i++) {
          this.barChartData[j].data.push(results[Object.keys(results)[j]][i].sum_quantity)
          this.barChartLabels.push(results[Object.keys(results)[j]][i].date)
        }
      }
    })
  }

  TypeVaccineOnMunicipalityByDateStats(vaccine_id): void {

    let colors = ['#90d2d8', 'grey', 'pink', 'yellow', 'purple', 'teal'];

    this.municipalityvaccinationService.showStats(vaccine_id).subscribe(data => {
      console.log(data);
      this.clear();
      this.barChartData[0].label = data['municipality_stats'].name
      for (var i = 0; i < data['municipality_stats'].results.length; i++) {
        this.barChartData[0].data.push(data['municipality_stats'].results[i].sum_quantity)
        this.barChartLabels.push(data['municipality_stats'].results[i].date)
        this.barChartColors[i] = {
          backgroundColor: colors[i]
        }
      }
    })
  }

  TypeVaccineOnProvinceByProvinceStats(vaccine_id): void {

    let colors = ['#f6b26b', 'grey', 'pink', 'yellow', 'purple', 'teal'];

    this.provincevaccinationService.statsPerProvince(vaccine_id).subscribe(data => {
      console.log(data);
      this.clear();
      this.barChartData[0].label = data['province_stats_by_province'].name
      for (var i = 0; i < data['province_stats_by_province'].results.length; i++) {
        this.barChartData[0].data.push(data['province_stats_by_province'].results[i].sum_quantity)
        this.barChartLabels.push(data['province_stats_by_province'].results[i].complete_name)
        this.barChartColors[i] = {
          backgroundColor: colors[i]
        }
      }
    })
  }

  TypeVaccineByProvinceStats(iso_id): void {

    let colors = ['#ea9999', 'grey', 'pink', 'yellow', 'purple', 'teal'];

    this.provincevaccinationService.typesVaccinesByProvinceStats(iso_id).subscribe(data => {
      console.log(data);
      this.clear();
      this.barChartData[0].label = data['province_stats_by_type_vaccine'].name
      for (var i = 0; i < data['province_stats_by_type_vaccine'].results.length; i++) {
        this.barChartData[0].data.push(data['province_stats_by_type_vaccine'].results[i].sum_quantity)
        this.barChartLabels.push(data['province_stats_by_type_vaccine'].results[i].type_vaccine.name)
        this.barChartColors[i] = {
          backgroundColor: colors[i]
        }

      }
    })
  }

  clear(): void {
    this.barChartData = [
      {
        data: [],
        label: ''
      }
    ];
    this.barChartLabels = [];
  }

}