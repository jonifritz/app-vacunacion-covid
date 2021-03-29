import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TypevaccineService } from 'src/app/core/services/typevaccine.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  isLoading = false;
  constructor(private formBuilder: FormBuilder, private typevaccineService: TypevaccineService) { 
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
  this.typevaccineService.create(this.createForm.value).subscribe(data=>console.log(data))
}

}

