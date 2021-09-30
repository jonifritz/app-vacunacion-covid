import { Component, OnInit } from '@angular/core';
import { Vacunatories, VacunatorycenterService } from 'src/app/core/services/vacunatorycenter.service';
import { VacunatoryCenterVaccinationRoutingModule } from 'src/app/pages/vacunatory-center-vaccination/vacunatory-center-vaccination-routing.module';

@Component({
  selector: 'app-my-vacunatories-centers',
  templateUrl: './my-vacunatories-centers.component.html',
  styleUrls: ['./my-vacunatories-centers.component.scss']
})
export class MyVacunatoriesCentersComponent implements OnInit {

  vacunatories: Vacunatories [] = []
  actualUser = JSON.parse(localStorage.getItem('user'));

  

  constructor(private vacunatorycenterService: VacunatorycenterService) { }

  ngOnInit(): void {

    this.vacunatorycenterService.allVacunatoriesCenters().subscribe((response) => {
      console.log(response);
      this.vacunatories = response;
    },
      error => {
        console.log(error);
      }
    );
  }

}
