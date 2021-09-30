import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { NotificationService } from 'src/app/core/services/notification.service';
import { VacunatorycenterService } from 'src/app/core/services/vacunatorycenter.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;
  isLoading = false;

  actualUser = JSON.parse(localStorage.getItem('user'));
  localityUser = this.actualUser.locality_id;

  constructor(private formBuilder: FormBuilder, private vacunatorycenterService: VacunatorycenterService,
    private notificationService: NotificationService, 
    private router: Router) { 

      this.createForm = this.formBuilder.group({
        name:[null],
        locality_id:[null],
        })
    }

  ngOnInit(): void {
  }

  onSubmit(){

    this.isLoading = true;

    this.createForm.value.locality_id = this.localityUser;
    this.vacunatorycenterService.vacunatoryCenterCreate(this.createForm.value)
    .pipe(
      finalize(() => this.isLoading = false)).subscribe(
      response=> {
      console.log(response);
      this.notificationService.success("El centro de vacunación "+this.createForm.value.name+" ha sido creado con éxito");
      this.router.navigate(['/dashboard/vacunatory-center']);
    },
    error => {
      this.notificationService.error("Ha ocurrido un error. Por favor intente nuevamente");
      console.log(error);
    }
    );

  }

  vacunatoryCenterCreate

}
