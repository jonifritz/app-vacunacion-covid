import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { CreateComponent } from './pages/create/create.component';
import { ShowComponent } from './pages/show/show.component';
import { MyVaccinesComponent } from './pages/my-vaccines/my-vaccines.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'create', component: CreateComponent },
  { path: 'show/:id', component: ShowComponent },
  { path: 'myVaccines', component: MyVaccinesComponent },
  { path: 'myVaccines/show/:id', component: ShowComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvinceVaccinationRoutingModule { }
