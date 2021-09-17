import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VaccinestockService } from 'src/app/core/services/vaccinestock.service';
import {TypeVaccine, TypevaccineService } from 'src/app/core/services/TypeVaccine.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  dateFormat='dd/MM/yyyy';
  createForm: FormGroup;
  isLoading = false;

  typeVaccine:TypeVaccine[]= []

  constructor(private formBuilder: FormBuilder, private vaccinestockService: VaccinestockService,
    private typevaccineService: TypevaccineService, private notificationService: NotificationService,
    private router: Router) {
    this.createForm = this.formBuilder.group({
      quantity: [null],
      admission_date: [null],
      type_vaccine_id: [null],
    })
  }

  ngOnInit(): void { 
    this.typevaccineService.index().subscribe(data=>this.typeVaccine=data)
    /*console.log(JSON.stringify(this.typeVaccine)) */
  }

  onSubmit(){
    this.vaccinestockService.create(this.createForm.value)
    .subscribe(
      response=> {
        console.log(response);
        this.notificationService.success("Se han agregado correctamente "+this.createForm.value.quantity+" vacunas al stock");
        this.router.navigate(['/vaccine-stock']);
        },
        error => {
          this.notificationService.error("Ocurrió un error al añadir el stock de vacunas. Por favor intente nuevamente");
        })
    
  }

  /*typesOfVaccines(){
    this.typevaccineService.getTypesOfVaccines().subscribe(data=>this.typeVaccine=data)
  }*/


}

