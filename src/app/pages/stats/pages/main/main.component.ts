import { Component, OnInit } from '@angular/core';
import { BarChartComponent } from '../bar-chart/bar-chart.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  lista : string[] = ["Vacunas por tipo en provincias por fecha","Total vacunas por tipo en provincias por fecha (todas)"];
  seleccionado:string;

  constructor() { }

  ngOnInit(): void {
  }

}
