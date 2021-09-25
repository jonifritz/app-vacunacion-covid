import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MunicipalityVaccination, MunicipalityvaccinationService } from 'src/app/core/services/municipalityvaccination.service';
import { Observable } from 'rxjs';
import { TypeVaccine, TypevaccineService } from 'src/app/core/services/typevaccine.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { VaccinestockService } from 'src/app/core/services/vaccinestock.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  isLoading = false;

  municipalityVaccine: MunicipalityVaccination[] = []
  
  typeVaccine: TypeVaccine[] = []
  municipios: String[] = []
  
  prov_id: number

  constructor(private formBuilder: FormBuilder, private municipalityvaccinationService: MunicipalityvaccinationService,
    private typevaccineService: TypevaccineService, 
    private notificationService: NotificationService, 
    private router: Router,
    private authService: AuthService) { 

      this.createForm = this.formBuilder.group({
      id:[null],
      province_id:[null],
      complete_name: [null],
      vaccine_id:[null],
      received_lots:[null],
      })
    }

  ngOnInit(): void {

    this.municipalityvaccinationService.getMunicipalitiesFromApi(this.authService.currentUserValue.region_id).subscribe(data => this.municipalityVaccine = data);
    this.typevaccineService.index().subscribe(data => this.typeVaccine = data)
  }

  onSubmit() {
    const existsAlready = (element) => element.id == this.createForm.value.id; 
    const findThis = this.municipalityVaccine.findIndex(existsAlready)
    let nombre =  this.municipalityVaccine[findThis].nombre
    console.log('nombre es: '+nombre)
    this.createForm.value.complete_name = nombre

    this.createForm.value.province_id = this.authService.currentUserValue.region_id

    this.isLoading = true;
    this.municipalityvaccinationService.create(this.createForm.value)
    .pipe(
      finalize(() => this.isLoading = false)).subscribe(
      response=> {
      console.log(response);
      this.notificationService.success("Se han asignado "+this.createForm.value.received_lots+" vacunas a "+this.createForm.value.complete_name);
      this.router.navigate(['/dashboard/municipality-vaccination']);
    },
    error => {
      this.notificationService.error("Ha ocurrido un error. Por favor intente nuevamente");
      console.log(error);
    }
    );


  }

}
