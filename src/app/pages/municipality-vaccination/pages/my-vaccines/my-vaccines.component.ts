import { Component, OnInit } from '@angular/core';
import { MunicipalityvaccinationService, MunicipalityVaccination } from 'src/app/core/services/municipalityvaccination.service';

@Component({
  selector: 'app-my-vaccines',
  templateUrl: './my-vaccines.component.html',
  styleUrls: ['./my-vaccines.component.scss']
})
export class MyVaccinesComponent implements OnInit {

  municipalityVaccination:MunicipalityVaccination[]=[]
  actualUser = JSON.parse(localStorage.getItem('user'));

  ciudad = this.actualUser.locality.nombre;

  constructor(private municipalityvaccinationService: MunicipalityvaccinationService) { }

  ngOnInit(): void {
    this.municipalityvaccinationService.showMunicipalitiesVaccines().subscribe((response) => {
      console.log(response);
      this.municipalityVaccination = response;
    },
    error => {
      console.log(error);
    }
    );
  }

}
