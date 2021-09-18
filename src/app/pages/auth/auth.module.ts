import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from '../welcome/register/register.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzLayoutModule } from 'ng-zorro-antd/layout';


@NgModule({
  declarations: [LoginComponent, LogoutComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NzTableModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzLayoutModule
  ]
})
export class AuthModule { }
