import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService, User } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  createForm: FormGroup;
  isLoading = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, 
    private notificationService: NotificationService) {
      this.createForm = this.formBuilder.group({
      name:[null],
      email:[null],
      password:[null],
    })

   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.login(this.createForm.value)
    .subscribe(
      (response:any) => {
        this.notificationService.success("Se ha ingresado correctamente");
        this.saveToken(response.token);
        this.saveUser(response.user);
        
      },
      error => {
        this.notificationService.error("Credenciales incorrectas")
      }
      );
  }

  private saveToken(token: string){
    localStorage.setItem('token', token);
  }

  private saveUser(user: User){
    localStorage.setItem('user', JSON.stringify(user));
  }

}
