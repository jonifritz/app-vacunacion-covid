import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VaccineLotsService } from 'src/app/core/services/vaccine-lots.service';
import { TypeVaccine, TypevaccineService } from 'src/app/core/services/typevaccine.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  dateFormat = 'dd/MM/yyyy';
  createForm: FormGroup;
  isLoading = false;
  typeVaccine: TypeVaccine[] = []

  constructor(private formBuilder: FormBuilder, private vaccineLotsService: VaccineLotsService,
    private typevaccineService: TypevaccineService, private notificationService: NotificationService,
    private router: Router) {
    this.createForm = this.formBuilder.group({
      vaccine_id: [null],
      description: [null],
      admission_date: [null],
      quantity: [null],
    })
  }

  ngOnInit(): void {
    this.typevaccineService.index().subscribe(data => this.typeVaccine = data)
  }

  onSubmit() {
    this.vaccineLotsService.create(this.createForm.value)
      .subscribe(
        response => {
          console.log(response);
          this.notificationService.success(
            `Se han agregado correctamente ${this.createForm.value.quantity} vacunas al stock`
          )
          this.router.navigate(['/dashboard/vaccine-lots'])
        },
        error => {
          this.notificationService.error(`Error: ${error}`)
          console.log(error)
        })

  }


}
