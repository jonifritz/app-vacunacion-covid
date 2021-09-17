import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService, private notificationService: NotificationService,
    private router: Router) {
    this.user = JSON.parse(localStorage.getItem('user'));

   }

  ngOnInit(): void {
  }


  /*onSubmit(){
    this.authService.logout(this.user)
    .subscribe(
      (response:any) => {
        this.notificationService.success("Se hace cerrado sesión correctamente");
        this.deleteToken(response.token);
        this.deleteUser(response.user);        
      },
      error => {
        this.notificationService.error("Error al cerrar sesión. Intente nuevamente")
      }
      );
  }*/

  onSubmit(){
    if (!this.userLoggedIn()){
        this.deleteToken();
        this.deleteUser();        
        this.notificationService.success("Se hace cerrado sesión correctamente");
        this.router.navigate(['/']);
    }
    else
      this.notificationService.error("Ocurrió un error. Intente nuevamente");
  }


  private deleteToken(){
    localStorage.removeItem('token');
  }

  private deleteUser(){
    localStorage.removeItem('user');
  }

  private userLoggedIn():boolean{
   return (!localStorage.getItem('token'));

  }
}
