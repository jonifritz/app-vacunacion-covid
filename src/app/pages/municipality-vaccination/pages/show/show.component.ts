import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MunicipalityvaccinationService } from 'src/app/core/services/municipalityvaccination.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  localityLot: any;
  constructor(private municipalityVacinationService:MunicipalityvaccinationService, private route: ActivatedRoute) { }

  selectedId: number;


  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.municipalityVacinationService.show(id).subscribe(
      (response) => {
        console.log(response);
        this.localityLot = response;
      },
      error => {
        console.log(error);
      }
    );
    }
}
