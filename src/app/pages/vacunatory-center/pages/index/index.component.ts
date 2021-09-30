import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Vacunatories, VacunatorycenterService } from 'src/app/core/services/vacunatorycenter.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  vacunatories: Vacunatories[]=[]

  actualUser = JSON.parse(localStorage.getItem('user'));
  localidad = this.actualUser.locality.nombre;

  constructor(private vacunatorycenterService: VacunatorycenterService, private router: Router,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.vacunatorycenterService.vacunatoryCenter().subscribe(data=> {
      this.vacunatories=data;
      console.log(data)});
  }

  /*deleteVacunatory(id) {
    console.log('id es = '+id)
      this.vacunatorycenterService.delete(id).subscribe(
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
    }*/

}
