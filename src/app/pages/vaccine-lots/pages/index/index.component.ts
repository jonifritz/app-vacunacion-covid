import { Component, OnInit } from '@angular/core';
import { VaccineLots, VaccineLotsService } from 'src/app/core/services/vaccine-lots.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  vaccineLots: VaccineLots[] = []
  actualUser = JSON.parse(localStorage.getItem('user'));
  
  constructor(private vaccineLotsService: VaccineLotsService) { }

  ngOnInit(): void {
    this.vaccineLotsService.index().subscribe(data => {
      this.vaccineLots = data
      console.log(data)
    })
  }

}
