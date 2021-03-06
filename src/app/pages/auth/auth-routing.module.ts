import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from '../welcome/register/register.component';
import { IndexComponent } from '../welcome/index/index.component';
import { EditComponent } from '../welcome/edit/edit.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  //{ path: 'index', component: IndexComponent },
  //{ path: 'edit', component: EditComponent },
  //{ path: 'logout', component: LogoutComponent },
  //{ path: 'resetpassword', component: ResetPasswordComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
