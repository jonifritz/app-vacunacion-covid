import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TypevaccineService } from 'src/app/core/services/typevaccine.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  isLoading = false;

  constructor(private formBuilder: FormBuilder, private typevaccineService: TypevaccineService, 
    private notificationService: NotificationService, private router: Router) { 
    this.createForm = this.formBuilder.group({
      name:[null],
      doses_number:[null],
      country:[null],
      laboratory:[null],
    })
  }

  ngOnInit(): void {
  }

  
onSubmit(){
  this.typevaccineService.create(this.createForm.value)
  .subscribe(
    (response) => {
      console.log(response);
      this.notificationService.success("La vacuna "+this.createForm.value.name+" se agregó correctamente");
      this.router.navigate(['/dashboard/type-vaccine']);
    },
    error => {
      this.notificationService.error("Ocurrió un error al ingresar la vacuna. Por favor intente nuevamente");

    }
    );
}

}

