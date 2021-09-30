import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { MunicipalityvaccinationService } from 'src/app/core/services/municipalityvaccination.service';
import { ProvinceVaccination, ProvincevaccinationService } from 'src/app/core/services/provincevaccination.service';
import { TypeVaccine, TypevaccineService } from 'src/app/core/services/typevaccine.service';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent implements OnInit {

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };

  public radarChartColors: any = [
    {
      backgroundColor: [
        'rgba(69, 108, 160, 0.8)', 'rgba(244, 69, 32, 0.8)', 'rgba(32, 244, 51, 0.8)', 'rgba(49, 72, 145, 0.8)',
        'rgba(42, 2, 249, 0.88)', 'rgba(4, 255, 40, 0.29)', 'rgba(51, 44, 49, 0.36)', 'rgba(50, 246, 255, 0.25)',
        'rgba(21, 239, 214, 0.96)', 'rgba(255, 2, 25, 0.88)', 'rgba(216, 226, 26, 0.8)', 'rgba(0, 0, 0, 0.25)',
        'rgba(254, 171, 207, 0.99)', 'rgba(254, 171, 0, 0.29)', 'rgba(255, 255, 25, 0.88)', 'rgba(200, 81, 52, 0.8)',
        'rgba(10, 78, 16, 0.8)', 'rgba(42, 2, 30, 0.88)', 'rgba(254, 171, 0, 0.99)', 'rgba(4, 255, 40, 0.88)',
        'rgba(103, 63, 102, 0.8)', 'rgba(226, 26, 166, 0.8)', 'rgba(50, 100, 96, 0.8)',
      ]
    }
  ];

  selected_chart_info: string;
  selected_vaccine_type: number;
  selected_province: number;

  lista: string [] = ["Vacunas por tipo en provincias por fecha",
    "Total vacunas por tipo en provincias por fecha (todas)",
    "Vacunas por tipo en municipios por fecha",
    "Total vacunas por tipo en municipios por fecha (todas)",
    "Tipo de vacuna por provincias",
    "Tipos de vacunas por provincias"
  ];

  typeVaccine: TypeVaccine[] = []
  provinceVaccine: ProvinceVaccination[] = []

  public radarChartLabels: Label[] = [];

  //public radarChartColors: Color[] = []

  public radarChartData: ChartDataSets[] = [];
  public radarChartType: ChartType = 'radar';

  constructor(private provincevaccinationService: ProvincevaccinationService,
    private municipalityvaccinationService: MunicipalityvaccinationService,
    private typevaccineService: TypevaccineService) { }

  ngOnInit(): void {
    this.typevaccineService.index().subscribe(
      data => {
        this.typeVaccine = data;
        console.log(data)
      });

    this.provincevaccinationService.getProvinciesFromApi().subscribe(
      data =>
        this.provinceVaccine = data);

    //this.TypeVaccineByProvinceStats(74);

  }

  TypeVaccineOnProvinceByDateStats(vaccine_id): void {

    let colors = ['teal', 'grey', 'pink', 'yellow', 'purple', 'teal'];

    this.provincevaccinationService.showStats(vaccine_id).subscribe(data => {
      console.log(data);
      this.clear();
      this.radarChartData[0].label = data['province_stats'].name
      for (var i = 0; i < data['province_stats'].results.length; i++) {
        this.radarChartData[0].data.push(data['province_stats'].results[i].sum_quantity)
        this.radarChartLabels.push(data['province_stats'].results[i].date)
        this.radarChartColors[i] = {
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
        this.radarChartData[j] = ({ data: [], label: Object.keys(results)[j].toString() })
        this.radarChartColors[j] = { backgroundColor: colors[j] }
        for (var i = 0; i < results[Object.keys(results)[j]].length; i++) {
          this.radarChartData[j].data.push(results[Object.keys(results)[j]][i].sum_quantity)
          this.radarChartLabels.push(results[Object.keys(results)[j]][i].date)
        }
      }
    })
  }

  TypeVaccineOnMunicipalityByDateStats(vaccine_id): void {

    //let colors = ['teal', 'grey', 'pink', 'yellow', 'purple', 'teal'];

    this.municipalityvaccinationService.showStats(vaccine_id).subscribe(data => {
      console.log(data);
      this.clear();
      this.radarChartData[0].label = data['municipality_stats'].name
      for (var i = 0; i < data['municipality_stats'].results.length; i++) {
        this.radarChartData[0].data.push(data['municipality_stats'].results[i].sum_quantity)
        this.radarChartLabels.push(data['municipality_stats'].results[i].date)
        this.radarChartColors[i] = {
          //backgroundColor: colors[i]
        }
      }
    })
  }

  TypeVaccineOnProvinceByProvinceStats(vaccine_id): void {

    let colors = ['teal', 'grey', 'pink', 'yellow', 'purple', 'teal'];

    this.provincevaccinationService.statsPerProvince(vaccine_id).subscribe(data => {
      console.log(data);
      this.clear();
      this.radarChartData[0].label = data['province_stats_by_province'].name
      for (var i = 0; i < data['province_stats_by_province'].results.length; i++) {
        this.radarChartData[0].data.push(data['province_stats_by_province'].results[i].sum_quantity)
        this.radarChartLabels.push(data['province_stats_by_province'].results[i].complete_name)
        this.radarChartColors[i] = {
          backgroundColor: colors[i]
        }
      }
    })
  }

  TypeVaccineByProvinceStats(iso_id): void {

    let colors = ['teal', 'grey', 'pink', 'yellow', 'purple', 'teal'];

    this.provincevaccinationService.typesVaccinesByProvinceStats(iso_id).subscribe(data => {
      console.log(data);
      this.clear();
      this.radarChartData[0].label = data['province_stats_by_type_vaccine'].name
      for (var i = 0; i < data['province_stats_by_type_vaccine'].results.length; i++) {
        this.radarChartData[0].data.push(data['province_stats_by_type_vaccine'].results[i].sum_quantity)
        this.radarChartLabels.push(data['province_stats_by_type_vaccine'].results[i].type_vaccine.name)
        this.radarChartColors[i] = {
          backgroundColor: colors[i]
        }
      }
    })
  }

  clear(): void {
    this.radarChartData = [
      {
        data: [],
        label: ''
      }
    ];
    this.radarChartLabels = [];
  }




}
