import { Component, OnInit } from '@angular/core';
import { TypeVaccine, TypevaccineService } from 'src/app/core/services/typevaccine.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  typeVaccine:TypeVaccine[]=[]
  actualUser = JSON.parse(localStorage.getItem('user'));
  
  constructor(private typevaccineService:TypevaccineService) { 
  }

  ngOnInit(): void {
    this.typevaccineService.index().subscribe(data=>this.typeVaccine=data)
  }

}
