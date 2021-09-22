import { Component, OnInit } from '@angular/core';
import { MunicipalityVaccination, MunicipalityvaccinationService } from 'src/app/core/services/municipalityvaccination.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  municipalityVaccination: MunicipalityVaccination[] = [];

  constructor(private municipalityvaccionationService: MunicipalityvaccinationService) { }

  ngOnInit(): void {

    this.municipalityvaccionationService.index().subscribe(data => this.municipalityVaccination = data)
  }

}
