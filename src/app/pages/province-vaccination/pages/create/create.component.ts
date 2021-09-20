import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProvinceVaccination, ProvincevaccinationService } from 'src/app/core/services/provincevaccination.service';
import { Observable } from 'rxjs';
import { TypeVaccine, TypevaccineService } from 'src/app/core/services/typevaccine.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { VaccinestockService } from 'src/app/core/services/vaccinestock.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  isLoading = false;

  provinceVaccine: ProvinceVaccination[] = []
  provincias: String[] = []
  typeVaccine: TypeVaccine[] = []

  constructor(private formBuilder: FormBuilder, private provincevaccinationService: ProvincevaccinationService, 
    private typevaccineService: TypevaccineService, private notificationService: NotificationService, 
    private router: Router) {

      this.createForm = this.formBuilder.group({
        id: [null],
        vaccine_id: [null],
        received_lots: [null],
      })

    //this.provincevaccinationService.getProvincies().subscribe(data => this.provinceVaccine = data);

  }
  ngOnInit(): void {    
    this.provincevaccinationService.getProvinciesFromApi().subscribe(data => this.provinceVaccine = data);
    this.typevaccineService.index().subscribe(data => this.typeVaccine = data);
  }

  onSubmit() {
    const existsAlready = (element) => element.id == this.createForm.value.id; 
    const findThis = this.provinceVaccine.findIndex(existsAlready)
    let nombre =  this.provinceVaccine[findThis].nombre
    this.createForm.value.complete_name = nombre

    this.isLoading = true;
    this.provincevaccinationService.create(this.createForm.value)
    .pipe(
      finalize(() => this.isLoading = false))
    .subscribe(
      response=> {
      console.log(response);
      this.notificationService.success("Se han asignado "+this.createForm.value.received_lots+" vacunas a "+this.provinceVaccine[findThis].nombre);
      this.router.navigate(['/province-vaccination']);
    },
    error => {
      this.notificationService.error("Ha ocurrido un error. Por favor intente nuevamente");
      console.log(error);
    }
    );
  }
}
