import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { RegisterComponent } from './register/register.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';


@NgModule({
  imports:
    [
      CommonModule,
      WelcomeRoutingModule,
      IconsProviderModule,
      NzLayoutModule,
      NzMenuModule,
      NzFormModule,
      NzInputModule,
      NzButtonModule,
      NzSelectModule,
      NzFormModule,
      NzMessageModule, FormsModule, ReactiveFormsModule],
  declarations: [WelcomeComponent, RegisterComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
