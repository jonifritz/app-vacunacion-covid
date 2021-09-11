import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'type-vaccine', loadChildren: () => import('./pages/type-vaccine/type-vaccine.module').then(m => m.TypeVaccineModule) },
  { path: 'vaccine-stock', loadChildren: () => import('./pages/vaccine-stock/vaccine-stock.module').then(m => m.VaccineStockModule) },
  { path: 'province-vaccination', loadChildren: () => import('./pages/province-vaccination/province-vaccination.module').then(m => m.ProvinceVaccinationModule) },
  { path: 'municipality-vaccination', loadChildren: () => import('./pages/municipality-vaccination/municipality-vaccination.module').then(m => m.MunicipalityVaccinationModule) },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
