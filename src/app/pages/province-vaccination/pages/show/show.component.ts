import { Component, OnInit } from '@angular/core';
import { ProvinceVaccination, ProvincevaccinationService } from 'src/app/core/services/provincevaccination.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  provinceVaccination: ProvinceVaccination;
  constructor(private provincevaccinationService:ProvincevaccinationService, private route: ActivatedRoute) { }

  selectedId: number;


  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.provincevaccinationService.show(id).subscribe(
      (response) => {
        console.log(response);
        this.provinceVaccination = response;
      },
      error => {
        console.log(error);
      }
    );
  }

}
