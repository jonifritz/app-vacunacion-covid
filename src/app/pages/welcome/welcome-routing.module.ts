import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  {
    path: '', component: WelcomeComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'type-vaccine' },
      { path: 'type-vaccine', loadChildren: () => import('../type-vaccine/type-vaccine.module').then(m => m.TypeVaccineModule) },
      { path: 'vaccine-lots', loadChildren: () => import('../vaccine-lots/vaccine-lots.module').then(m => m.VaccineLotsModule) },
      { path: 'province-vaccination', loadChildren: () => import('../province-vaccination/province-vaccination.module').then(m => m.ProvinceVaccinationModule) },
      { path: 'municipality-vaccination', loadChildren: () => import('../municipality-vaccination/municipality-vaccination.module').then(m => m.MunicipalityVaccinationModule) },
      { path: 'register', component: RegisterComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
