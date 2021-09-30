import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TypeVaccine, TypevaccineService } from 'src/app/core/services/typevaccine.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { VacunatoryCenterVaccination, VacunatorycenterService, Vacunatories } from 'src/app/core/services/vacunatorycenter.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  isLoading = false;


  vacunatoryCenterVaccination: VacunatoryCenterVaccination[] = []

  vacunatories: Vacunatories[] = [
  ]

  typeVaccine: TypeVaccine[] = []

  constructor(private formBuilder: FormBuilder, private vacunatorycenterService: VacunatorycenterService,
    private typevaccineService: TypevaccineService, private notificationService: NotificationService,
    private router: Router,
    private authService: AuthService) {

    this.createForm = this.formBuilder.group({
      vacunatory_center_id: [null],
      vaccine_id: [null],
      received_lots: [null],
    })

  }

  ngOnInit(): void {
    this.vacunatorycenterService.vacunatoryCenter().subscribe(data => {
      this.vacunatories = data;
    })
    
    this.typevaccineService.index().subscribe(data => this.typeVaccine = data)
  }

  onSubmit() {
    //const existsAlready = (element) => element.id == this.createForm.value.id;
    // const findThis = this.vacunatoryCenterVaccination.findIndex(existsAlready)
    //let nombre = this.vacunatoryCenterVaccination[findThis].nombre
    // this.createForm.value.name = nombre

    this.createForm.value.locality_id = this.authService.currentUserValue.locality_id

    this.isLoading = true;
    this.vacunatorycenterService.create(this.createForm.value)
      .pipe(
        finalize(() => this.isLoading = false)).subscribe(
          response => {
            console.log(response);
            this.notificationService.success("Se han asignado " + this.createForm.value.received_lots + " vacunas a " + this.createForm.value.name);
            this.router.navigate(['/dashboard/vacunatory-center-vaccination']);
          },
          error => {
            this.notificationService.error("Ha ocurrido un error. Por favor intente nuevamente");
            console.log(error);
          }
        );


  }

}
