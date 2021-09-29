import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { VacunatorycenterService } from 'src/app/core/services/vacunatorycenter.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  createForm: FormGroup;
  isLoading = false;

  constructor(private vacunatorycenterService: VacunatorycenterService, private router: Router, 
    private route: ActivatedRoute, private formBuilder: FormBuilder, 
    private notificationService: NotificationService) {  this.createForm = this.formBuilder.group({
      name: [null],
    })
   }
  ngOnInit(): void {
  }

  onSubmit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
  
    this.vacunatorycenterService.vacunatoryCenterEdit(id,this.createForm.value).subscribe(
      response => {
        console.log(response);
        this.notificationService.success(
          `Se editó el centro de vacunación ${this.createForm.value.name} correctamente`
        )
        this.router.navigate(['/dashboard/vacunatory-center/'])
      },
      error => {
        this.notificationService.error(`Error: ${error}`)
        console.log(error)
      })
    }

}
