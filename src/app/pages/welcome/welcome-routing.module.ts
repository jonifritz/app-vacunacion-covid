import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome.component';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '', component: WelcomeComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'type-vaccine' },
      { path: 'type-vaccine', loadChildren: () => import('../type-vaccine/type-vaccine.module').then(m => m.TypeVaccineModule) },
      { path: 'vaccine-lots', loadChildren: () => import('../vaccine-lots/vaccine-lots.module').then(m => m.VaccineLotsModule) },
      { path: 'province-vaccination', loadChildren: () => import('../province-vaccination/province-vaccination.module').then(m => m.ProvinceVaccinationModule) },
      { path: 'municipality-vaccination', loadChildren: () => import('../municipality-vaccination/municipality-vaccination.module').then(m => m.MunicipalityVaccinationModule) },
      { path: 'vacunatory-center-vaccination', loadChildren: () => import('../vacunatory-center-vaccination/vacunatory-center-vaccination.module').then(m => m.VacunatoryCenterVaccinationModule) },
      { path: 'register', component: RegisterComponent },
      { path: 'users', component: IndexComponent },
      { path: 'users/edit/:id', component: EditComponent },
      { path: 'stats', loadChildren: () => import('../stats/stats.module').then(m => m.StatsModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
