import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MunicipalityVaccination, MunicipalityvaccinationService } from 'src/app/core/services/municipalityvaccination.service';
import { Observable } from 'rxjs';
import { TypeVaccine, TypevaccineService } from 'src/app/core/services/typevaccine.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup

  municipalityVaccine: MunicipalityVaccination[] = []
  
  typeVaccine: TypeVaccine[] = []
  municipios: String[] = []

  constructor(private formBuilder: FormBuilder, private municipalityvaccinationService: MunicipalityvaccinationService,
    private typevaccineService: TypevaccineService) { 

      this.createForm = this.formBuilder.group({
      id:[null],
      province:[null],
      received_vaccines:[null],
      assigned_vaccines:[null],
      discarded_vaccines:[null],
      })
    }

  ngOnInit(): void {

    this.municipalityvaccinationService.getMunicipalitiesFromApi('06').subscribe(data => this.municipalityVaccine = data);
    this.typevaccineService.index().subscribe(data => this.typeVaccine = data)
  }

  onSubmit() {
    const existsAlready = (element) => element.id == this.createForm.value.id; 
    const findThis = this.municipalityVaccine.findIndex(existsAlready)
    this.createForm.value.complete_name = this.municipalityVaccine[findThis].nombre
    this.municipalityvaccinationService.create(this.createForm.value).subscribe(data=>console.log(data))
  }

}
