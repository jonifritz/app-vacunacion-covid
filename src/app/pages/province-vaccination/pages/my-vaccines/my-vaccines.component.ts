import { Component, OnInit } from '@angular/core';
import { ProvinceVaccination, ProvincevaccinationService } from 'src/app/core/services/provincevaccination.service';

@Component({
  selector: 'app-my-vaccines',
  templateUrl: './my-vaccines.component.html',
  styleUrls: ['./my-vaccines.component.scss']
})
export class MyVaccinesComponent implements OnInit {

  provinceVaccination:ProvinceVaccination[]=[]
  actualUser = JSON.parse(localStorage.getItem('user'));

  provincia = this.actualUser.region.nombre;

  constructor(private provincevaccinationService:ProvincevaccinationService) { }

  ngOnInit(): void {
    this.provincevaccinationService.showProvinceVaccines().subscribe((response) => {
      console.log(response);
      this.provinceVaccination = response;
    },
    error => {
      console.log(error);
    }
    );
  }

}
