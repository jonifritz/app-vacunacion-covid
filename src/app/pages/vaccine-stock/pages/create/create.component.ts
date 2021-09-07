import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VaccinestockService } from 'src/app/core/services/vaccinestock.service';
import {TypeVaccine, TypevaccineService } from 'src/app/core/services/TypeVaccine.service';

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
    private typevaccineService: TypevaccineService) {
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
    this.vaccinestockService.create(this.createForm.value).subscribe(data=>console.log(data))
  }

  /*typesOfVaccines(){
    this.typevaccineService.getTypesOfVaccines().subscribe(data=>this.typeVaccine=data)
  }*/


}

