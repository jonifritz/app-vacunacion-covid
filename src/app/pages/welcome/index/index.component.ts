import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AuthService, User } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  user: User[]=[]
  constructor(private authService: AuthService, private router: Router,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.authService.index().subscribe(data=>this.user=data)
  }

  deleteUser(id) {
  console.log('id es = '+id)
    this.authService.delete(id).subscribe(
      response => {
        console.log(response);
        console.log('borré')
        console.log('id es = '+id)
        this.notificationService.success(`Se eliminó el usuario correctamente`)
        this.router.navigate(['/dashboard/users/'])
        
        this.refresh();
      },
      error => {
        this.notificationService.error(`Error: ${error}`)
        console.log(error)
      })
    }

    refresh(): void {
      window.location.reload();
  }



}
