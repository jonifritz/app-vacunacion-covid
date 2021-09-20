import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, User } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ProvinceVaccination, ProvincevaccinationService } from 'src/app/core/services/provincevaccination.service';
import { MunicipalityVaccination, MunicipalityvaccinationService } from 'src/app/core/services/municipalityvaccination.service';
import { HttpHeaders } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  createForm: FormGroup;
  isLoading = false;
  user: User[] = [];
  provinceVaccine: ProvinceVaccination[] = []
  municipalityVaccine: MunicipalityVaccination[] = []

  actualUser = JSON.parse(localStorage.getItem('user'));
  provinceUser = this.actualUser.region_id;
  newUserRol = this.actualUser.role_id + 1;
  name_rol = this.newUserRol.name;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private notificationService: NotificationService, private router: Router,
    private provincevaccinationService: ProvincevaccinationService, private municipalityvaccinationService: MunicipalityvaccinationService) {
    this.createForm = this.formBuilder.group({
      name: [null],
      email: [null],
      password: [null],
      region_id: [null],
      locality_id: [null],
      vacunatory_center_id: [null],
    })
  }

  ngOnInit(): void {
    console.log(this.actualUser.role.name);
    this.provincevaccinationService.getProvinciesFromApi().subscribe(data => this.provinceVaccine = data);
    this.municipalityvaccinationService.getMunicipalitiesFromApi(this.provinceUser)
      .subscribe(data => this.municipalityVaccine = data);

  }

  onSubmit() {
    this.isLoading = true;
    this.authService.register(this.createForm.value)
    .pipe(finalize(() => this.isLoading = false))
      .subscribe(
      response => {
        this.notificationService.success("Registro Exitoso");
        console.log(response);
        this.router.navigate(['/']);
      },
      error => {
        this.notificationService.error("Ha ocurrido un error. Por favor intente nuevamente");
        console.log(error);
      }
    );

  }

  setRol() {
    this.createForm.get('rol_id').setValue(this.newUserRol);
  }
}
