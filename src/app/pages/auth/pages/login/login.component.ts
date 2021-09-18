import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  createForm: FormGroup;
  isLoading = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService,
    private notificationService: NotificationService, private router: Router) {
    this.createForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    })

  }

  onSubmit() {
    this.isLoading = true;
    this.authService.login(this.createForm.value)
      .pipe(
        finalize(() => this.isLoading = false)
      )
      .subscribe(
        (response: any) => {
          this.notificationService.success("Se ha ingresado correctamente");
          this.router.navigate(['/dashboard']);
        },
        error => {
          this.notificationService.error("Credenciales incorrectas")
        }
      );
  }

}
