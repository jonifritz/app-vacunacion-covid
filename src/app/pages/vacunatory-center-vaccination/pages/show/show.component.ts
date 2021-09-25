import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VacunatoryCenterVaccination, VacunatorycenterService } from 'src/app/core/services/vacunatorycenter.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  vacunatoryCenterLot:any;
  constructor(private VacunatorycenterService: VacunatorycenterService,
    private route: ActivatedRoute) { }

    selectedId: number;

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.VacunatorycenterService.show(id).subscribe(
      (response) => {
        console.log(response);
        this.vacunatoryCenterLot = response;
      },
      error => {
        console.log(error);
      }
    );
    }
  }
