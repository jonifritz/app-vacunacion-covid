import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProvinceVaccination, ProvincevaccinationService } from 'src/app/core/services/provincevaccination.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup

  provinceVaccine: ProvinceVaccination[] = []
  provincias: String[] = []

  constructor(private formBuilder: FormBuilder, private provincevaccinationService: ProvincevaccinationService) {

      this.createForm = this.formBuilder.group({
      id:[null],
      received_vaccines:[null],
      assigned_vaccines:[null],
      discarded_vaccines:[null],
    })

    //this.provincevaccinationService.getProvincies().subscribe(data => this.provinceVaccine = data);

  }



  ngOnInit(): void {
    /* this.provincevaccionationService.index().subscribe(data=>this.provinceVaccine=data)*/
    
    this.provincevaccinationService.getProvinciesFromApi().subscribe(data => this.provinceVaccine = data);
    //this.saveProvincies(this.provinceVaccine);

    //this.provincevaccinationService.create().subscribe(data =>console.log(data));


    //this.formBuilder.complete_name=this.provinceVaccine.nombre;
    
    //this.provincevaccinationService.create(this.provinceVaccine).subscribe(data =>console.log(data));
    
    //this.saveProvincies(this.provinceVaccine);
    //console.log(this.provinceVaccine);

    //this.provincevaccinationService.create(this.createForm.value).subscribe(data =>console.log(data));
    
  }

  onSubmit() {
    const isLargeNumber = (element) => element.id == this.createForm.value.id; 
    const findThis = this.provinceVaccine.findIndex(isLargeNumber)
    this.createForm.value.complete_name = this.provinceVaccine[findThis].nombre
    this.provincevaccinationService.create(this.createForm.value).subscribe(data=>console.log(data))
  }


}
