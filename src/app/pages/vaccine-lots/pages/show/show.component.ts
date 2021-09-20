import { Component, OnInit } from '@angular/core';
import { VaccineLots, VaccineLotsService } from 'src/app/core/services/vaccine-lots.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  vaccineLots: VaccineLots[] = []
  constructor(private vaccineLotsService: VaccineLotsService, private route: ActivatedRoute) { }

  selectedId: number;

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.vaccineLotsService.show(id).subscribe(
      (response) => {
        console.log(response);
        this.vaccineLots = response;
      },
      error => {
        console.log(error);
      }
    );
  }
}