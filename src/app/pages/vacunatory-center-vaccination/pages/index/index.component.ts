import { Component, OnInit } from '@angular/core';
import { VacunatoryCenterVaccination, VacunatorycenterService } from 'src/app/core/services/vacunatorycenter.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  vacunatoryCenterVaccination:VacunatoryCenterVaccination[]=[]
  constructor(private VacunatorycenterService: VacunatorycenterService) { }

  ngOnInit(): void {
    this.VacunatorycenterService.index().subscribe(data=>this.vacunatoryCenterVaccination=data)
  }

}
