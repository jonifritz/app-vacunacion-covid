import { Component, OnInit } from '@angular/core';
import { AuthService, User } from 'src/app/core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  user: User[]=[]
  createForm: FormGroup;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute,
    private formBuilder: FormBuilder, private notificationService: NotificationService) {
      this.createForm = this.formBuilder.group({
        name: [null],
        email: [null],
        password: [null],
      })
     }

  ngOnInit(): void {
}

onSubmit() {
  let id = parseInt(this.route.snapshot.paramMap.get('id'));

  this.authService.edit(id,this.createForm.value).subscribe(
    response => {
      console.log(response);
      this.notificationService.success(
        `Se editó el usuario ${this.createForm.value.name} correctamente`
      )
      this.router.navigate(['/users'])
    },
    error => {
      this.notificationService.error(`Error: ${error}`)
      console.log(error)
    })
  }


}