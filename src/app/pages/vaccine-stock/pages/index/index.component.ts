import { Component, OnInit } from '@angular/core';
import { VaccineStock, VaccinestockService } from 'src/app/core/services/vaccinestock.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  vaccineStock: VaccineStock[] = []
  constructor(private vaccinestockService: VaccinestockService) { }

  ngOnInit(): void {
    this.vaccinestockService.index().subscribe(data => this.vaccineStock = data)
  }

}
