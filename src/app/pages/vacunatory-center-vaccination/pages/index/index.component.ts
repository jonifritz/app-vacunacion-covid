import { Component, OnInit } from '@angular/core';
import { VacunatoryCenterVaccination, VacunatorycenterService } from 'src/app/core/services/vacunatorycenter.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  vacunatoryCenterVaccination:VacunatoryCenterVaccination[]=[]
  actualUser = JSON.parse(localStorage.getItem('user'));
  constructor(private VacunatorycenterService: VacunatorycenterService) { }

  ngOnInit(): void {
    this.VacunatorycenterService.index().subscribe((response) => {
      console.log(response);
      this.vacunatoryCenterVaccination = response;
    },
    error => {
      console.log(error);
    }
    );
  }
}