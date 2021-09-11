import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  createForm: FormGroup;
  isLoading = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.createForm = this.formBuilder.group({
      name:[null],
      email:[null],
      password:[null],
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.register(this.createForm.value)
    .subscribe(
      response => console.log(response),
      error => {
        alert(error.error.message)
      }
      );

  }
}
