import { Component, OnInit } from '@angular/core';
import { TypeVaccine, TypevaccineService } from 'src/app/core/services/typevaccine.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  typeVaccine: TypeVaccine[] = []
  constructor(private typevaccineService: TypevaccineService, private route: ActivatedRoute) { }

  selectedId: number;

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.typevaccineService.show(id).subscribe(
      (response) => {
        console.log(response);
        this.typeVaccine = response;
      },
      error => {
        console.log(error);

      }
    );

  }
}