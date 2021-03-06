import { Component, OnInit } from '@angular/core';
import { ProvinceVaccination, ProvincevaccinationService } from 'src/app/core/services/provincevaccination.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  provinceVaccination:ProvinceVaccination[]=[]
  actualUser = JSON.parse(localStorage.getItem('user'));

  constructor(private provincevaccinationService:ProvincevaccinationService) {
   
  }

  ngOnInit(): void {    
    this.provincevaccinationService.index().subscribe((response) => {
      console.log(response);
      this.provinceVaccination = response;
    },
    error => {
      console.log(error);
    }
    );
  }
  
}

