import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';
import { IndexComponent } from './pages/index/index.component';
import { ShowComponent } from './pages/show/show.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'create', component: CreateComponent },
  { path: 'show/:id', component: ShowComponent },
  { path: 'edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacunatoryCenterRoutingModule { }
