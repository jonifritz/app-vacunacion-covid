import { Component, OnInit } from '@angular/core';
import { ProvinceVaccination, ProvincevaccinationService } from 'src/app/core/services/provincevaccination.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  provinceVaccination:ProvinceVaccination[]=[]

  constructor(private provincevaccinationService:ProvincevaccinationService) {
   
  }

  ngOnInit(): void {
    /*this.provincevaccinationService.index().subscribe(data=>this.provinceVaccination=data)*/
    /*console.log(JSON.stringify(this.provinceVaccination)) */
    
    this.provincevaccinationService.index().subscribe(data=>this.provinceVaccination=data)
  }
  
}
